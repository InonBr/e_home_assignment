FROM ubuntu:20.04

FROM python:3.7

WORKDIR /flask_backend

COPY . .

RUN pip install --upgrade pip

RUN pip install -r requirements.txt

EXPOSE 5000

CMD ["flask", "run", "--host", "0.0.0.0"]
