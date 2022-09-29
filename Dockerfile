FROM node:16-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx tsc

EXPOSE 8080
CMD [ "node", "./build/server.js" ]
