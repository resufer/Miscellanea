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
            print('Пока эта возможность в разработке или что-то неправильно сказано)))')
    except sr.UnknownValueError:
        print('ошибка неизвестного происхождения')
        time.sleep(1.5)
        main()
    except sr.RequestError:
        print('гугл считает что ты не заплатил за инет .... или за гугл')

main()
################################################## </Main Block> ##################################################
