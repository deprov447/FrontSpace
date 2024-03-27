<img src="https://raw.githubusercontent.com/deprov447/first-page/1d72955f03ddece33ecbe751723200fcd223ec1b/assets/logos/logo-text%201/vector/default-monochrome.svg" width="500" />

> IMPORTANT: This app heavily requires an actual root domain (not the ones provided by netlify or vercel or GCP). This is due to requirement of subdomain (for ex: deprov447.getfront.space). Now I don't have both time, and money to maintain a actual domain, so just for local usage, we are going to use `localhost` as root domain.

Front space is a platform to quickly create single paged websites and host it for the world to see.

## Local servers

> Import demo data in your mongo to start using the app. Run `mongorestore ./db_demo`

## Docker Compose

- source .env file in root dir (On linux: `source .env`)
- `docker compose up` 
- Open localhost:81 in browser

## Non docker way

### Client

- Populate `./client/.env` with following keys:
  - `REACT_APP_SERVER_URL`
  - `REACT_APP_CLIENT_URL`
  - `REACT_APP_IMGBB_API_KEY`
- `npm i`
- `npm start`

### Server

- Populate `./server/.env` with following keys:
  - `DB_ADDR`
  - `CLIENT_URL`
  - `JWT_SECRET`
  - `REFRESH_TOKEN_SECRET`
  - `COOKIE_SECRET`
  - `SESSION_EXPIRY`
  - `REFRESH_TOKEN_EXPIRY`
- `npm i`
- `npm start`


## Build with

Of course love. But also a number of amazing technologies.

### Front end

- React.js
- Chakra UI
- Netlify

### Back end

- Express app
- Node.js
- Passport.js
- jsonwebtoken

### Deployment

- AWS
- Docker
- Docker Compose
- Nginx

### Other

- Gitpod
- Github actions
- Cloudflare
- Hostinger
