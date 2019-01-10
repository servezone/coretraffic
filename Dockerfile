FROM hosttoday/ht-docker-node:stable as node1
WORKDIR /app
RUN apt-get update && apt-get install nginx -y
RUN npm install -g @shipzone/npmci
COPY ./* /app/
RUN npm install --production