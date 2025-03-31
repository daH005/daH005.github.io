import sys
from pathlib import Path

__all__ = (
    'BASE_DIR',
    'DATA_DIR',
    'TEMPLATES_DIR',
    'STATIC_DIR',
)

if getattr(sys, 'frozen', False):
    BASE_DIR = Path(sys.executable).parent
    print(BASE_DIR)
else:
    BASE_DIR = Path(__file__).parent

DATA_DIR = BASE_DIR.joinpath('./data')
TEMPLATES_DIR = BASE_DIR.joinpath('./templates')
STATIC_DIR = BASE_DIR.joinpath('./static')
