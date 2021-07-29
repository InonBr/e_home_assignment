FROM ubuntu:20.04

FROM node:14

WORKDIR ./twilio_react_app/

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]