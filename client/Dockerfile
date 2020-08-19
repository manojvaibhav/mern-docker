# Docker file for client in dev

FROM node:14-alpine

WORKDIR /usr/app

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]