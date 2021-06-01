FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx tsc

EXPOSE 8080
CMD [ "node", "./build/index.js" ]
