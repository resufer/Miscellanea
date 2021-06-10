import speech_recognition as sr
import time, pyautogui
microf = sr.Microphone(device_index=1)
r = sr.Recognizer()



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
