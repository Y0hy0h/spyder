import datetime
from gpiozero import Button
from signal import pause


def is_locking():
    print("{} - Locking...".format(datetime.datetime.now()))


def is_releasing():
    print("{} - Releasing...".format(datetime.datetime.now()))


lock_sensor = Button(15, hold_time=0.1)
lock_sensor.when_hold = is_locking
lock_sensor.when_released = is_releasing

pause()
