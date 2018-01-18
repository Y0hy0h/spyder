import datetime
import sys
from signal import pause
from urllib import request

from gpiozero import Button

ip = sys.argv[1]
port = sys.argv[2]
base_url = 'http://' + ip + ':' + port + '/'


def is_locking():
    request.urlopen(base_url + 'lock')
    print("{} - Locking...".format(datetime.datetime.now()))


def is_releasing():
    request.urlopen(base_url + 'unlock')
    print("{} - Releasing...".format(datetime.datetime.now()))


lock_sensor = Button(15)
lock_sensor.when_pressed = is_locking
lock_sensor.when_released = is_releasing

pause()
