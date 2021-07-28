import os

from twilio.rest import Client
from dotenv import load_dotenv

load_dotenv()

service_sid = os.getenv("TWILIO_SERVICE_SID")
auth_token = os.getenv("AUTH_TOKEN")

client = Client(service_sid, auth_token)


def make_a_call(phone_number):
    call = client.calls.create(
        method='GET',
        to=phone_number,
        from_="+972527321022",
        url="http://demo.twilio.com/docs/voice.xml",
        status_callback='https://cobalt-viper-5053.twil.io/status-callback',
        status_callback_method='POST',
        status_callback_event=["initiated", "ringing", "answered", "completed"]
    )

    print(call.sid)



