# Build the frontend
FROM node:8.16.0 AS builder
WORKDIR /app
ADD package.json yarn.lock /app/
RUN yarn
ADD . /app/
RUN yarn build

# Transfer to a special-purpose nginx container
FROM nginx:1.16.0-alpine AS server
COPY --from=builder /app/build /usr/share/nginx/html
COPY deploy/nginx.conf /etc/nginx/nginx.conf