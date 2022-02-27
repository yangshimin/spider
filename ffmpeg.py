# !/usr/bin/python3
# -*- coding: utf-8 -*-
# @Time    : 2019/10/9 10:41
# @Author  : Yang
# @Email   : 843113495a@gmail.com
# @File    : ffmpeg.py
# @Software: PyCharm
import os
import platform
import logging
import subprocess


def is_windows():
    return platform.system().lower() == 'windows'


class FFmpeg(object):

    @staticmethod
    def combine_video(text_file_path, output_file_path):
        if is_windows():
            cmd_combine = r'ffmpeg -loglevel error -f concat -i {} -c copy {}'
        else:
            cmd_combine = 'ffmpeg -loglevel error -f concat -i {} -c copy {}'
        cmd = cmd_combine.format(text_file_path, output_file_path)
        if not is_windows():
            cmd = cmd.split(' ')
        ps = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, bufsize=-1)
        _, err = ps.communicate()
        if os.path.exists(output_file_path):
            return True
        if err and len(err) > 0:
            logging.error('combine video err,msg:{0}.'.format(err))
        return False

    @staticmethod
    def extract_audio(src_path, dst_path):
        if is_windows():
            cmd_combine = r'ffmpeg -loglevel error -i {} -vn -f mp3 {} -y'
        else:
            cmd_combine = 'ffmpeg -loglevel error -i {} -vn -f mp3 {} -y'
        cmd = cmd_combine.format(src_path, dst_path)
        if not is_windows():
            cmd = cmd.split(' ')
        ps = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, bufsize=-1)
        _, err = ps.communicate()
        if os.path.exists(dst_path):
            if bytes('not contain any stream', encoding="utf8") in err:
                os.remove(dst_path)
                return False
            else:
                return True
        logging.error('extract audio failed, src_path: {}, dst_path: {} msg: {}.'.
                      format(src_path, dst_path, err))
        return False


def main():
    aa = FFmpeg()
    aa.extract_audio(r"C:\Users\yangshimin\Downloads\热门聊天重放.mp4", r"F:\download_point_artist_song.mp3")


if __name__ == "__main__":
    main()
