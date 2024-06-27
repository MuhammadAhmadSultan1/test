FROM node:21.6.1-alpine as builder
WORKDIR /app
COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build
FROM nginx:1.21.0-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
