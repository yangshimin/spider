import io
import re
import requests
from PIL import Image, ImageChops
from numpy import array
from lxml.html import etree
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.action_chains import ActionChains
import easing


class Recoognize(object):

    def parse_bg_div(self, response):
        """计算背景图和带缺口的背景图的URL、position"""
        html = etree.HTML(response)
        bg_divs = html.xpath(".//*/div[@class='gt_cut_bg gt_show']/div[@class='gt_cut_bg_slice']/@style")
        full_bg_divs = html.xpath(".//*/div[@class='gt_cut_fullbg gt_show']/div[@class='gt_cut_fullbg_slice']/@style")
        ele_slice = html.xpath(".//*/div[@class='gt_slice gt_show']/@style")
        if len(bg_divs) != len(full_bg_divs):
            print("bg_img length don't equal to full_bg_divs")
        else:
            try:
                element_slice = re.search('(?<=url\(").*(?="\))', ele_slice[0]).group()
            except Exception as e:
                print("could't match slice element url")

            try:
                bg_url = re.search('(?<=url\(").*(?="\))', bg_divs[0]).group()
                full_bg_url = re.search('(?<=url\(").*(?="\))', full_bg_divs[0]).group()
            except Exception as e:
                print("could't match img_url")
            else:
                try:
                    # full_img's background-position equal to full_imgs's background-position
                    divs_position = list(map(lambda x: re.search('(?<=background-position: ).*(?=;)',
                                                            x).group(), bg_divs))
                except Exception as e:
                    print("could't match img positions")
                else:
                    return bg_url, full_bg_url, divs_position, element_slice

    @staticmethod
    def convert_css_to_offset(px):
        ps = px.replace('px', '').split(' ')
        x = -int(ps[0])
        y = -int(ps[1])
        return x, y, x + 10, y + 58

    @staticmethod
    def convert_index_to_offset(index):
        row = int(index / 26)
        col = index % 26
        x = col * 10
        y = row * 58
        return x, y, x + 10, y + 58

    def wait_element(self, browser, class_name):
        try:
            WebDriverWait(browser, 10).until(
                EC.presence_of_element_located((By.CLASS_NAME, class_name))
            )
        finally:
            html = browser.page_source
            return html

    def get_slider_offset(self, image_url, image_url_bg, css, ele_slice):
        image_file = io.BytesIO(requests.get(image_url, stream=True).content)
        im = Image.open(image_file)
        image_file_bg = io.BytesIO(requests.get(image_url_bg).content)
        im_bg = Image.open(image_file_bg)
        # im.show()
        # im_bg.show()

        captcha = Image.new('RGB', (260, 116))
        captcha_bg = Image.new('RGB', (260, 116))
        for i, px in enumerate(css):
            offset = self.convert_css_to_offset(px)
            region = im.crop(offset)
            region_bg = im_bg.crop(offset)
            offset = self.convert_index_to_offset(i)
            captcha.paste(region, offset)
            captcha_bg.paste(region_bg, offset)
        diff = ImageChops.difference(captcha, captcha_bg)
        # captcha.show()
        # captcha_bg.show()
        # diff.show()
        diff.save('F:/diff.png')
        slice_offset = self.get_slice_offset(ele_slice)
        offset = self.get_slider_offset_from_diff_image(diff)
        return offset - slice_offset

    def get_slice_offset(self, slice_url):
        image_file = io.BytesIO(requests.get(slice_url, stream=True).content)
        im = Image.open(image_file)
        im.save('D:/slice.png')
        return self.get_slider_offset_from_diff_image(im)

    @staticmethod
    def get_slider_offset_from_diff_image(diff):
        im = array(diff)
        width, height = diff.size
        diff = []
        for i in range(height):
            for j in range(width):
                # black is not only (0,0,0)
                if im[i, j, 0] > 15 or im[i, j, 1] > 15 or im[i, j, 1] > 15:
                    diff.append(j)
                    break
        return min(diff)

    def fake_drag(self, browser, offset):
        # seconds = random.uniform(2, 6)
        # print(seconds)
        # samples = int(seconds*10)
        # diffs = sorted(random.sample(range(0, offset), samples-1))
        # diffs.insert(0, 0)
        # diffs.append(offset)
        # ActionChains(browser).click_and_hold(knob).perform()
        # for i in range(samples):
        #     ActionChains(browser).pause(seconds/samples).move_by_offset(diffs[i+1]-diffs[i], 0).perform()
        # ActionChains(browser).release().perform()

        # tracks = get_track(offset)

        knob = browser.find_element_by_class_name("gt_slider_knob")

        offsets, tracks = easing.get_tracks(offset, 12, 'ease_out_expo')
        print(offsets)
        ActionChains(browser).click_and_hold(knob).perform()
        for x in tracks:
            ActionChains(browser).move_by_offset(x, 0).perform()
        ActionChains(browser).release(knob).perform()


def run():
    r = Recoognize()
    url = 'https://passport.bilibili.com/login'
    browser = webdriver.Chrome()
    browser.get(url)
    response_html = r.wait_element(browser, 'gt_cut_bg gt_show')
    info_list = r.parse_bg_div(response_html)
    offset = r.get_slider_offset(*info_list)
    browser.find_element_by_id("login-username").send_keys("*******")
    browser.find_element_by_id("login-passwd").send_keys("*******")
    r.fake_drag(browser, offset)
    print(browser.get_cookies())


if __name__ == '__main__':
    run()
