import json
from pathlib import Path

__all__ = (
    'alive_employees',
    'dead_employees',
    'trains',
)


def _load(filename: str):
    return json.loads(Path('data/' + filename).read_text(encoding='utf-8'))


alive_employees = _load('alive_employees.json')
dead_employees = _load('dead_employees.json')
trains = _load('trains.json')
