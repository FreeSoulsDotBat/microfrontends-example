FROM node:lts

WORKDIR /apps/mf2

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn install

COPY . .
