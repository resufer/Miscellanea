import smtplib as root
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def sendMail():
    login = input('Введите логин: ')
    password = input('Введите пароль: ')
    url = input('Введите url: ')
    toaddr = input('Кому: ')
    topic = input('Тема: ')
    message = input('Введите сообщение: ')
    count = int(input('Количество сообщений: '))

    for i in range(count):
        msg = MIMEMultipart()
        msg['Subject'] = topic
        msg['From'] = login
        body = message
        msg.attach(MIMEText(body, 'plain'))

        server = root.SMTP_SSL(url, 465)
        server.login(login, password)
        server.sendmail(login, toaddr, msg.as_string())

        i += 1
        print('Отправлено сообщений - ' + str(i))


def main():
    sendMail()


if __name__ == '__main__':
    main()
