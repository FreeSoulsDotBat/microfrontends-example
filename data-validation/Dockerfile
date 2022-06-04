FROM node:lts

WORKDIR /apps/data-validation

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn install

COPY . .

