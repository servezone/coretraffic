# gitzone dockerfile_service
## STAGE 1 // BUILD
FROM registry.gitlab.com/hosttoday/ht-docker-node:npmci as node1
COPY ./ /app
WORKDIR /app
ARG NPMCI_TOKEN_NPM2
ENV NPMCI_TOKEN_NPM2 $NPMCI_TOKEN_NPM2
RUN npmci npm prepare
RUN rm -rf node_modules && npm install
RUN npm run build

# gitzone dockerfile_service
## STAGE 2 // install production
FROM registry.gitlab.com/hosttoday/ht-docker-node:npmci as node2
WORKDIR /app
COPY --from=node1 /app /app
ARG NPMCI_TOKEN_NPM2
ENV NPMCI_TOKEN_NPM2 $NPMCI_TOKEN_NPM2
RUN npmci npm prepare
RUN rm -r node_modules/ && npm install --production

## STAGE 3 // rebuild dependencies for alpine
FROM registry.gitlab.com/hosttoday/ht-docker-node:alpine as node3
WORKDIR /app
COPY --from=node2 /app /app
RUN npm rebuild --production

## STAGE 4 // the final production image with all dependencies in place
FROM registry.gitlab.com/hosttoday/ht-docker-node:alpine as node4
WORKDIR /app
COPY --from=node3 /app /app

### Healthchecks
RUN npm install -g @servezone/healthy
HEALTHCHECK --interval=30s --timeout=30s --start-period=30s --retries=3 CMD [ "healthy" ]

EXPOSE 80
CMD ["npm", "start"]
