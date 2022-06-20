FROM node:lts

WORKDIR /apps/auth

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn install

COPY . .

