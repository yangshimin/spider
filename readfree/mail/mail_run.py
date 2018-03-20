import smtplib
from datetime import datetime, timedelta
from email.mime.text import MIMEText
from email.header import Header
from email.utils import parseaddr, formataddr
from mail.email_config import config
from readfreelog import logger

smtp_host = config['smtp_host']
smtp_user = config['smtp_user']
smtp_password = config['smtp_password']


class EMAIL(object):
    def __init__(self):
        self.email_sender = config['smtp_user']
        self.receiver = config['email_receiver']
        self.content = None

    def make_up_message(self, contents, subject):
        """组装邮件消息"""
        self.message = MIMEText(contents, 'plain', 'utf-8')
        self.message['From'] = EMAIL._format_address('自动签到脚本通知 <%s>' % self.email_sender)
        self.message['To'] = EMAIL._format_address('管理员 <%s>' % self.receiver[0])
        self.message['Subject'] = Header(subject, 'utf-8')

    def send(self, contents, subject):
        """发送邮件"""
        s = smtplib.SMTP_SSL(smtp_host, 587)

        try:
            s.login(smtp_user, smtp_password)
        except Exception as e:
            logger.error('登录邮件smtp服务器失败', exc_info=True)
        else:
            logger.info('登录邮件smtp服务器')

        self.make_up_message(contents, subject)
        s.sendmail(self.email_sender, self.receiver, self.message.as_string())
        s.quit()

    @staticmethod
    def _format_address(s):
        name, address = parseaddr(s)
        return formataddr((Header(name, 'utf-8').encode(), address))


def mail_run():
    email = EMAIL()
    time = datetime.now() + timedelta(days=-1)
    contents = '{0} 云打码余额为: {1}.'.format(time.strftime('%Y-%m-%d'), 1)
    email.send(contents, config['email_subject1'])


if __name__ == '__main__':
    # conn.conn.zrange('crawled_website', 0, -1, withscores=True)
    mail_run()
