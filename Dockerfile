FROM node:21.6.1-alpine

WORKDIR /src/app
COPY package.json yarn.lock /src/app/

RUN yarn install

COPY index.js /src/app/

ENV NODE_ENV=production
EXPOSE 9000

CMD [ "yarn", "start" ]