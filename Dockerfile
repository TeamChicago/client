FROM node:lastest

WORKDIR /client
COPY . /client

RUN npm install
RUN npm install -g expo-cli

COPY . ./