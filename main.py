#-*- encoding: utf8 -*-
from flask import Flask, render_template, request, abort
from checktools import check_text

app = Flask(__name__)
app.config.from_object('settings')

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
            result = check_text(code_text, app.config['TEMP_PATH'], options)
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