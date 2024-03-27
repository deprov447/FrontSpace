FROM nginx:alpine

COPY ./nginx.conf.demo /etc/nginx/conf.d/default.conf
