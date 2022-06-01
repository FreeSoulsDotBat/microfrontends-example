FROM node:lts

WORKDIR /apps/shell

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn install

COPY . .
