# gitzone service
FROM registry.gitlab.com/hosttoday/ht-docker-node:npmci as node1
COPY ./ /app
WORKDIR /app
ARG NPMCI_TOKEN_NPM2
ENV NPMCI_TOKEN_NPM2 $NPMCI_TOKEN_NPM2
RUN npmci npm prepare
RUN npm install --production

FROM registry.gitlab.com/hosttoday/ht-docker-node:alpine as node2
WORKDIR /app
COPY --from=node1 /app /app
RUN npm rebuild --production

FROM registry.gitlab.com/hosttoday/ht-docker-node:alpine as node3
RUN apk add nginx
WORKDIR /app
COPY --from=node2 /app /app
EXPOSE 80
RUN adduser -u 1001 -D -S -G www-data www-data && \
    mkdir /run/nginx && \
    chown www-data:www-data -R /run/nginx && \
    npm install -g @servezone/healthy
HEALTHCHECK --interval=30s --timeout=30s --start-period=30s --retries=3 CMD [ "healthy" ]
CMD ["npm", "start"]
