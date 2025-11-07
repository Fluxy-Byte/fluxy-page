# Imagem base
FROM node:20-alpine

WORKDIR /usr/app

COPY package.json ./

RUN apk add --no-cache python3 py3-pip make g++

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

EXPOSE 5011

CMD ["npm", "start"]