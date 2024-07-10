FROM node:22

WORKDIR /app

RUN apt update && apt upgrade -y

RUN yarn install
