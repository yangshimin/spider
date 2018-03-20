import logging
from logging.handlers import RotatingFileHandler


logger = logging.getLogger(__name__)
logger.setLevel(logging.DEBUG)

# ch = logging.StreamHandler()
fh = RotatingFileHandler('log\ReadFree.log', encoding='utf-8', maxBytes=1048576, backupCount=5)

formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s: %(message)s',
                              datefmt='%Y:%m:%d %H:%M')

# ch.setFormatter(formatter)
fh.setFormatter(formatter)

# logger.addHandler(ch)
logger.addHandler(fh)
