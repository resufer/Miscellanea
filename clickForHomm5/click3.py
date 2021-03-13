import pyautogui
import time
import keyboard

def print_pressed_keys(e):
    if e.name == 'o':
        [x, y] = pyautogui.position()

    while True:
        if x == 1129:
            time.sleep(0.05)
            pyautogui.click()
            x = 900
            y = 806
            pyautogui.moveTo(x, y)
        elif x == 900:
            time.sleep(0.05)
            pyautogui.click()
            x = 1129
            y = 816
            pyautogui.moveTo(x, y)        
        else:
            time.sleep(4)
            pyautogui.moveTo(1129, 816)
            x = 1129
            y = 816        
            pyautogui.click()


keyboard.hook(print_pressed_keys)
keyboard.wait()