#-*- encoding: utf8 -*-
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def paste_page():
    """
    Main page with form for paste code
    """
    return render_template("paste_page.html")

#For development
if __name__ == '__main__':
    app.run(debug=True)
