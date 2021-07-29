from main import app
from flask_cors import cross_origin
from helpers import make_a_call, get_token
from flask_pydantic import validate
from models import MakeCall


@app.route("/api/make_call", methods=["POST"])
@cross_origin(["http://localhost:3000"])
@validate(body=MakeCall)
def call(body: MakeCall):
    phone_number = body.dict()
    sid = make_a_call(phone_number["phone_number"])
    token = get_token()

    return {"msg": "call sent successfully!", "sid": sid, "token": token.decode("utf-8")}, 200
