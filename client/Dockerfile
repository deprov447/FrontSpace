FROM node AS build_client
WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .
COPY ./src ./src
COPY ./public ./public
COPY ./.env ./.env

RUN npm i
RUN npm run build

FROM node AS server
WORKDIR /react_build_file
COPY --from=build_client /app/build .
EXPOSE 4000

CMD npx serve