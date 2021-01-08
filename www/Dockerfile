FROM node:12.2.0-alpine as client

WORKDIR /app

COPY package.json /app/package.json

RUN npm install --silent

RUN npm install react-script -g --silent

COPY . .  

RUN npm run build

FROM nginx:latest

EXPOSE 80

COPY --from=client /app/build /var/www/html

COPY ./nginx/nginx.conf /etc/nginx/conf.d

CMD ["nginx", "-g", "daemon off;"]