FROM node:lts

WORKDIR /apps/mf1

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn install

COPY . .
