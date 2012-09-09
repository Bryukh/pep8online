#-*- encoding: utf8 -*-
from flask import Flask

app = Flask(__name__)

#For development
if __name__ == '__main__':
    app.run(debug=True)
