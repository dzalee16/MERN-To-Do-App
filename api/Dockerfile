FROM node:12.2.0-alpine

WORKDIR /app

COPY package.json /app/package.json

RUN npm install

COPY . .

EXPOSE 5000

CMD ["node", "app.js"]