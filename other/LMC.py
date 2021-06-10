import speech_recognition as sr
import time, pyautogui
microf = sr.Microphone(device_index=1)
r = sr.Recognizer()


################################################## <Position Block> ##################################################
def whatPosition():
    with microf as source:
        print('Какая позиция из пяти?')
        audio = r.listen(source)
    try:
        audioPosition = r.recognize_google(audio, language='ru-RU') # число на первый и один
        moveMouseToPosition(audioPosition)
    except:
        print('Что-то пошло не так ' * 5)
        time.sleep(1.5)
        main()


def moveMouseToPosition(position):
    if int(position) == 1:
        pyautogui.moveTo(15, 15)
    elif int(position) == 2:
        pyautogui.moveTo(1890, 15)
    elif int(position) == 3:
        pyautogui.moveTo(1890, 1063)
    elif int(position) == 4:
        pyautogui.moveTo(15, 1063)
    elif int(position) == 5:
        pyautogui.moveTo(930, 530)
    main()
################################################## </Position Block> ##################################################



################################################## <Click Block> ##################################################
def whatClick():
    with microf as source:
        print('Какой клик?(Левый, Колесико, Правый)')
        audio = r.listen(source)
    try:
        click = r.recognize_google(audio, language='ru-RU')
        print(click)
        differentClicks(click)
    except:
        print('Что-то пошло не так ' * 5)
        time.sleep(1.5)
        main()

def differentClicks(click):
    if click == 'правый':
        pyautogui.click(button='right')
    elif click == 'колесо':
        pyautogui.click(button='middle')
    elif click == 'левый':
        pyautogui.click(button='left')
    main()
################################################## </Click Block> ##################################################



################################################## <Move Block> ##################################################
def whereToMove():
    with microf as source:
        print('Направление движения?')
        audio = r.listen(source)
    try:
        where = r.recognize_google(audio, language='ru-RU')
        print(where)
        HowFarToMove(where)
    except:
        print('Что-то пошло не так ' * 5)
        time.sleep(1.5)
        main()

def HowFarToMove(where):
    with microf as source:
        print('Сколько пикселей?(x10)')
        audio = r.listen(source)
    try:
        howFar = r.recognize_google(audio, language='ru-RU')
        howFar = int(howFar)
        howFar *= 10
        print(howFar)
        move(where, howFar)
    except:
        print('Что-то пошло не так ' * 5)
        time.sleep(1.5)
        main()

def move(where, howFar):
    [x, y] = pyautogui.position()
    if where == 'наверх':
        pyautogui.moveTo(x, y - howFar)
    elif where == 'вниз':
        pyautogui.moveTo(x, y + howFar)
    elif where == 'налево':
        pyautogui.moveTo(x - howFar, y)
    elif where == 'направо':
        pyautogui.moveTo(x + howFar, y)
    main()
################################################## </Move Block> ##################################################



################################################## <Main Block> ##################################################
def main():
    global main

    with microf as source:
        print('Speak')
        print('#Позиции#, #Движение#, #Нажатие#')
        audio = r.listen(source)
    try:
        a = r.recognize_google(audio, language='ru-RU')
        print(a)
        if a.count('поз') + a.count('ции'):
            whatPosition()
        elif a.count('нажатие') + a.count('наж') + a.count('жатие'):
            whatClick()
        elif a.count('движение') + a.count('движ') + + a.count('жение'):
            whereToMove()
        elif a.count('стоп'):
            print('стоп')
            pass
        else:
            print('Пока эта возможность в разработке или что-то неправильно сказано')
    except sr.UnknownValueError:
        print('ошибка неизвестного происхождения')
        time.sleep(1.5)
        main()
    except sr.RequestError:
        print('гугл считает что ты не заплатил за инет .... или за гугл')

main()
################################################## </Main Block> ##################################################
