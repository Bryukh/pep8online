#-*- encoding: utf8 -*-
from flask import Flask, render_template, request, abort, url_for
from checktools import check_text, is_py_extension

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
    back_url = str(request.referrer).replace(request.host_url, '')
    context = {
        'result': '',
        'code_text': '',
        'error': '',
        'back_url': back_url,
        }
    if request.method == "POST":
        if str(request.referrer).replace(request.host_url, '') == 'upload':
            code_file = request.files['code_file']
            if not code_file:
                context['error'] = 'Forget file'
                return render_template("check_result.html", **context)
            if not is_py_extension(code_file.filename):
                context['error'] = 'Please upload python file'
                return render_template("check_result.html", **context)
            context['code_text'] = code_file.read()
        else:
            try:
                context['code_text'] = request.form["code"]
            except KeyError:
                abort(404)
        if not context['code_text']:
            context['error'] = 'Empty request'
            return render_template("check_result.html", **context)
        else:
            context['result'] = check_text(context['code_text'], app.config['TEMP_PATH'],
                logger=app.logger if app.config['LOG'] else None)
    return render_template("check_result.html", **context)

#For development
if __name__ == '__main__':
    try:
        app.config.from_object('development_settings')
    except ImportError:
        pass
    app.run(debug=True)