# Home Assignment

You can see the working product online on: http://ec2-18-116-165-93.us-east-2.compute.amazonaws.com:3000/

Please clone this directory and read the manual in order to understend how to run the application.

## .env file

1. For simplicity sake, we will create one `.env` file for the front and the back end.
2. You are required to fill the blanks by sign in to Twilio and get the required data, see fields below:

   ```
    REACT_APP_TWILIO_SERVICE_SID=ACa8...............
    REACT_APP_AUTH_TOKEN=81ce3...............
    REACT_APP_SID=SK6dd8e7a9...............
    REACT_APP_TWILIO_API_SECRET=revDAmyEWr...............
    REACT_APP_BACK_END_URL=http://localhost:5000/api/make_call
    REACT_APP_BACK_FRONT_END=http://localhost:3000/

    CALL_FROM=+972527...............
    FLASK_APP=main.py
    FLASK_ENV=development
   ```

## Back End Setup

1. In the terminal enter the repository `./flask_backend`.
2. Create virtual environments by running: `python3 -m venv venv`
3. Activate the corresponding environment by running: `. venv/bin/activate`
4. Place the `.env` file in the base folder of the `flask_backend` repo.

## Front End Setup

1. In the terminal enter the repository `./twilio_react_app`.
2. Place the `.env` file in the base folder of the `twilio_react_app` repo.

## Front End Setup

1. Run `sudo docker-compose build` in order to set up docker.
2. Run `sudo docker-compose up -d` in order to run the app using docker.
3. Both servers are now running.
