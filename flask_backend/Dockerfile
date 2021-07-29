FROM ubuntu:20.04

FROM python:3.7

WORKDIR /flask_backend

COPY . .

RUN pwd

RUN ls

RUN pip install --upgrade pip

RUN pip install -r requirements.txt

EXPOSE 5000

CMD [ "python3", "main.py" ]
