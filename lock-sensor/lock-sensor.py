import datetime
from gpiozero import Button
from signal import pause


def is_locking():
    print("{} - Locking...".format(datetime.datetime.now()))


def is_releasing():
    print("{} - Releasing...".format(datetime.datetime.now()))


lock_sensor = Button(15)
lock_sensor.when_pressed = is_locking
lock_sensor.when_released = is_releasing

pause()
