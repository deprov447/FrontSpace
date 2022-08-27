<img src="https://raw.githubusercontent.com/deprov447/first-page/1d72955f03ddece33ecbe751723200fcd223ec1b/assets/logos/logo-text%201/vector/default-monochrome.svg" width="500" />

Front space is a platform to quickly create single paged websites and host it for the world to see.

## Build with

Of course love. But also a number of amazing technologies.

### Front end

- React.js
- Chakra UI
- Netlify
- Framer Motion

### Back end

- Express app
- Node.js
- Passport.js
- jsonwebtoken

### Deployment

- Linode
- Docker
- Docker Compose
- Nginx

### Other

- Gitpod
- Github actions
- Cloudflare
- Hostinger

## Some Pages Made

![img3](https://api.microlink.io?url=https%3A%2F%2Fhimniz.getfront.space&overlay.browser=dark&overlay.background=%2300000000&screenshot=true&meta=false&embed=screenshot.url)

![img2](https://api.microlink.io?url=https%3A%2F%2Fdeprov447.getfront.space&overlay.browser=dark&overlay.background=%2300000000&screenshot=true&meta=false&embed=screenshot.url)

![img1](https://api.microlink.io?url=https%3A%2F%2Fprinsu-pyaara.getfront.space&overlay.browser=dark&overlay.background=%2300000000&screenshot=true&meta=false&embed=screenshot.url)

## Links

**Blog:** [https://blogs.deprov447.me/front-space](https://blogs.deprov447.me/front-space)

**Website:** [https://getfront.space](https://getfront.space)

**Source code:** [https://github.com/deprov447/frontspace/](https://github.com/deprov447/frontspace/issues/new/choose)

## Local servers

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
