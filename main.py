#-*- encoding: utf8 -*-
from flask import Flask, render_template, request, abort, url_for
from checktools import check_text

app = Flask(__name__)
try:
    app.config.from_object('production_settings')
except ImportError:
    try:
        app.config.from_object('development_settings')
    except ImportError:
        app.config.from_object('settings')

if app.config['LOG']:
    import logging
    file_handler = logging.FileHandler(app.config['LOG_FILE'])
    app.logger.addHandler(file_handler)
    app.logger.setLevel(logging.DEBUG)

@app.route("/")
def paste_page():
    """
    Main page with form for paste code
    """
    return render_template("paste_page.html")

@app.route("/about")
def about():
    """About page"""
    return render_template("about.html")

@app.route("/upload")
def upload_page():
    """
    Main page with form for upload file
    """
    return render_template("upload_page.html")

@app.route("/checkresult", methods=['POST', ])
def check_result():
    """
    Show results for checked code
    """
    result = ''
    max_line_length = 79
    code_text = ''
    if request.method == "POST":
        try:
            code_text = request.form["code"]
        except KeyError:
            abort(404)
        if not code_text:
            result = ""
        else:
            options = {'max_line_length': max_line_length}
            result = check_text(code_text, app.config['TEMP_PATH'], options,
                logger=app.logger if app.config['LOG'] else None)

    context = {
        'result': result,
        'code_text': code_text,
    }
    return render_template("check_result.html", **context)


#For development
if __name__ == '__main__':
    try:
        app.config.from_object('development_settings')
    except ImportError:
        pass
    app.run(debug=True)