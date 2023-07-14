FROM nginx:1.17.1-alpine
EXPOSE 80
COPY /dist/syraa-retail /usr/share/nginx/html
