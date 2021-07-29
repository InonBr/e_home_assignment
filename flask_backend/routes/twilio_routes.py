from main import app
from flask_cors import cross_origin
from helpers import make_a_call, get_token


@app.route("/api/make_call", methods=["POST"])
@cross_origin()
def call():
    sid = make_a_call("will get a number...")
    token = get_token()

    return {"msg": "call sent successfully!", "sid": sid, "token": token.decode("utf-8")}, 200
