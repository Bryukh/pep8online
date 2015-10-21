from random import choice
import string

ABCDIG = string.ascii_letters + string.digits

def generate_short_name(length=8):
    """int -> str
    Generate short unique name based by random
    """
    return ''.join([choice(ABCDIG) for _ in range(length)])