# Production build

FROM node:14-alpine as client

WORKDIR /usr/app

COPY client/package*.json ./

RUN npm install

COPY client/ ./

RUN npm run build

FROM node:14-alpine

WORKDIR /usr/app

COPY --from=client /usr/app/build ./client/build

WORKDIR /usr/app/server

COPY server/package*.json ./

RUN npm install

COPY server/ ./

EXPOSE 4000

CMD ["npm","start"]
