# -*- encoding: utf8 -*-
from datetime import datetime

from flask import Flask, render_template, request, abort, send_file
from pymongo import MongoClient
from bson.objectid import ObjectId

from tools.pep8check import check_text, is_py_extension, pep8parser, template_results
from backend.generate import gen_text_file, gen_result_text
from tools.utils import generate_short_name

try:
    import production_settings as settings
except ImportError:
    try:
        import development_settings as settings
    except ImportError:
        import settings

static_folder = getattr(settings, "STATIC_FOLDER", None)
static_url_path = getattr(settings, "STATIC_URL_PATH", None)


app = Flask(__name__, static_folder=static_folder, static_url_path=static_url_path)
app.config.from_object(settings)

if app.config['LOG']:
    import logging

    file_handler = logging.FileHandler(app.config['LOG_FILE'])
    app.logger.addHandler(file_handler)
    app.logger.setLevel(logging.DEBUG)


def get_datetime():
    """return datetime as string"""
    return datetime.now().strftime("%Y%m%d_%H%M%S")


@app.route("/")
def paste_page():
    """
    Main page with form for paste code
    """
    return app.send_static_file('index.html')



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
            context['result'] = check_text(
                context['code_text'],
                app.config['TEMP_PATH'],
                logger=app.logger if app.config['LOG'] else None
            )
    return render_template("check_result.html", **context)


@app.route("/savecode", methods=['POST', ])
def save_code():
    if request.method == "POST":
        code_text = request.form["orig_code"]
        code_file = gen_text_file(code_text)
        attachment_filename = ''.join(('code_', get_datetime(), '.py'))
        return send_file(code_file,
                         mimetype="application/x-python",
                         as_attachment=True,
                         attachment_filename=attachment_filename)
    else:
        return ''


@app.route("/saveresult", methods=['POST', ])
def save_result():
    if request.method == "POST":
        code_text = request.form["orig_code"]
        code_result = request.form["orig_results"]
        res_file = gen_text_file(gen_result_text(code_result, code_text))
        attachment_filename = ''.join(('result_', get_datetime(), '.txt'))
        return send_file(res_file,
                         mimetype="text/plain",
                         as_attachment=True,
                         attachment_filename=attachment_filename)
    else:
        return ''

@app.route('/s', methods=['GET', 'POST'])
@app.route('/s/<key>')
def share_result(key=None):
    connection = MongoClient()
    db = connection[app.config["MONGO_DB"]]
    collection = db.share
    context = {
        'result': '',
        'code_text': '',
        'error': ''
    }
    if key:
        db_result = collection.find_one({'key': key})
        if db_result:
            context['code_text'] = db_result["code"]
            context['result'] = pep8parser(db_result['result'].split(":::"),
                                           template_results)
        else:
            context['error'] = "Sorry, not found"
        return render_template("check_result.html", **context)
    if request.method == "POST":
        code_text = request.form["code"]
        code_result = request.form["results"]
        key = generate_short_name()
        while collection.find_one({'key': key}):
            key = generate_short_name()
        collection.insert({
            'key': key,
            'code': code_text,
            'result': code_result,
            'date': datetime.now()
        })
        return str(key)
    else:
        return ''


# For development
if __name__ == '__main__':
    try:
        app.config.from_object('development_settings')
    except ImportError:
        pass
    app.run(debug=True)