FROM node:14.17.0-alpine AS wgm-server

WORKDIR /usr/src/app

COPY ./package*.json \
  ./.env.production \
  ./

RUN npm ci --production

COPY ./dist ./dist

EXPOSE 8080

CMD npm run start
