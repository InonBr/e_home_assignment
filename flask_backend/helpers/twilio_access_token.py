import os

from twilio.jwt.access_token import AccessToken
from twilio.jwt.access_token.grants import ChatGrant
from twilio.rest import Client
from dotenv import load_dotenv

load_dotenv()

service_sid = os.getenv("REACT_APP_TWILIO_SERVICE_SID")
api_key = os.getenv("REACT_APP_AUTH_TOKEN")
api_secret = os.getenv("REACT_APP_TWILIO_API_SECRET")
account_sid = os.getenv("REACT_APP_SID")


def get_token():
    token = create_token()
    chat_grant = ChatGrant(service_sid=service_sid)
    token.add_grant(chat_grant)

    return token.to_jwt()


def get_user_name():
    client = Client(service_sid, api_key)
    username = client.username

    return username


def create_token():
    identity = get_user_name()
    token = AccessToken(account_sid, api_key, api_secret, identity=identity)

    return token
