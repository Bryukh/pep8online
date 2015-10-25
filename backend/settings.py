# -*- encoding: utf8 -*-

import os

TEMP_PATH = '/tmp/'
LOG = False
LOG_FILE = '/var/www/pep8online/logs/app_log'

MONGO_DB = "pep8share"

STATIC_FOLDER = os.path.abspath(os.path.join(__file__, os.pardir, os.pardir, "static"))
STATIC_URL_PATH = "/static"