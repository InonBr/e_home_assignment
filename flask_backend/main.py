from flask import Flask

app = Flask(__name__)

from routes import twilio_routes

if __name__ == '__main__':
    app.run(host="localhost", port=5000, debug=True)
