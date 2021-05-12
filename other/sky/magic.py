import pyautogui
import time
import keyboard

def print_pressed_keys(e):
    if e.name == 'o':
        while True:
            pyautogui.mouseDown()
            time.sleep(1)
            pyautogui.mouseUp()
            time.sleep(4)




keyboard.hook(print_pressed_keys)
keyboard.wait()