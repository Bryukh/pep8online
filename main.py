#-*- encoding: utf8 -*-
from flask import Flask, render_template, request, abort
from checktools import check_text

app = Flask(__name__)

@app.route("/")
def paste_page():
    """
    Main page with form for paste code
    """
    return render_template("paste_page.html")


@app.route("/checkresult", methods=['POST', ])
def check_result():
    """
    Show results for checked code
    """
    result = ''
    if request.method == "POST":
        try:
            code_text = request.form["code"]
        except KeyError:
            abort(404)
        if not code_text:
            result = "Empty request"
        result = check_text(code_text)
    context = {
        'result': result,
        'code_text': code_text,
    }
    return render_template("check_result.html", **context)


#For development
if __name__ == '__main__':
    app.run(debug=True)