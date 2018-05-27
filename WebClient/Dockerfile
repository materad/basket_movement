FROM node:9.11-alpine

ENV NPM_CONFIG_LOGLEVEL warn

WORKDIR /usr/basket-app

COPY package.json package.json
COPY yarn.lock  yarn.lock
RUN yarn install

COPY . .