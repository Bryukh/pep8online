#-*- encoding: utf8 -*-
import pep8
import StringIO
import sys
import os
import tempfile

def pep8_str2dict(strings):
    """
    Convert strings from pep8 results to dictionary
    """
    res_dict = []
    for s in strings[1:]:
        temp = s.split(":")
        if len(temp) < 4:
            continue
        temp_dict = {'type': temp[3][1],
                     'code': temp[3][2:5],
                     'line': temp[1],
                     'place': temp[2],
                     'text': temp[3][6:]}
        res_dict.append(temp_dict)
    return res_dict


def check_text(text, temp_dir):
    """
    check text for pep8 requirements
    """
    code_file, code_filename = tempfile.mkstemp(dir=temp_dir)
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
    result_dict = pep8_str2dict(result)
    return result_dict


if __name__ == '__main__':
    pass
