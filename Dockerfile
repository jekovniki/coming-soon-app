FROM node:17-alpine as builder
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
RUN npm install react-scripts@5.0.1 -g
RUN npm run build
COPY . ./

CMD [ "npm", "start" ]