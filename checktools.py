#-*- encoding: utf8 -*-
import pep8
import StringIO
import sys
import os
import tempfile

TEMP_PATH = './temp/'

def check_text(text):
    """
    check text for pep8 requirements
    """
    code_file, code_filename = tempfile.mkstemp(dir=TEMP_PATH)
    with open(code_filename, 'w') as code_file:
        code_file.write(text.decode('utf8'))
    temp_outfile = StringIO.StringIO()
    sys.stdout = temp_outfile
    pep8style = pep8.StyleGuide(parse_argv=False, config_file=False)
    options = pep8style.options
    checker = pep8.Checker(code_filename, options=options)
    checker.check_all()
    sys.stdout = sys.__stdout__
    result = temp_outfile.buflist[:]
    temp_outfile.close()
    code_file.close()
    os.remove(code_filename)
    return '<br>'.join(result)

if __name__ == '__main__':
    pass
