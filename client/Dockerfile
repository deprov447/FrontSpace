FROM node:alpine

WORKDIR /app
COPY package.json .
COPY package-lock.json .
COPY public public
COPY src src
ARG REACT_APP_SERVER_URL="http://localhost:4000"
ARG REACT_APP_CLIENT_URL="localhost:3000"
ARG REACT_APP_IMGBB_API_KEY

RUN npm i
RUN npm run build
WORKDIR /app/build
CMD npx serve