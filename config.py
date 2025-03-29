import os

from dotenv import load_dotenv

__all__ = (
    'Config',
)

load_dotenv()


class Config:

    DEBUG: bool = os.environ['DEBUG'] == 'True'
    HOST: str = os.environ['HOST']
    PORT: int = int(os.environ['PORT'])
