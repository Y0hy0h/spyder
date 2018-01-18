from gpiozero import Button
from signal import pause


def is_locking():
    print("Locking...")


def is_releasing():
    print("Releasing...")


lock_sensor = Button(15)
lock_sensor.when_pressed = is_locking

pause()
