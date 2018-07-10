BASE_CONNECT_CONFIG = {
    "host": "127.0.0.1",
    "port": 5672,
    "virtual_host": "/yangshimin",
    "username": "yangshimin",
    "password": "843113495gh",
    "channel_max": 65535,
    "frame_max": 131072,
    "heartbeat_interval": 0,
    "ssl": False,
    "ssl_options": {},
    "connection_attempts": 1,
    "retry_delay": 2.0,
    "socket_timeout": 0.25,
    "locale": "en_US",
    "backpressure_detection": True

}


EXCHANGE_CONFIG = {
    'exchange_name': 'exchange_example',
    'exchange_type': {
        'fanout': 'fanout',
        'direct': 'direct'
    },
    'routing_key': "key_example"
}
