from gpiozero import Button
from signal import pause


def is_locking():
    print("Locking...")


lock_sensor = Button(15)
lock_sensor.when_pressed = is_locking

pause()
