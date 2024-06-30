import jwt
from rest_framework import exceptions
from django.conf import settings

def decode_access_token(token):
    # print('token: =======', token)
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
    
        return payload['user_id']
    except:
        raise exceptions.AuthenticationFailed('unauthenticated')