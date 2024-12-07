
#stage 1
FROM node:16-alpine as node


WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build 

#stage 2
FROM nginx:alpine
COPY --from=node /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]