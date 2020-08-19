# Dockerfile for NODE JS ENV

FROM node:14-alpine 

WORKDIR /usr/app

RUN npm install nodemon -g

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm","run","dev"]
