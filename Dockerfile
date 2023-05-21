FROM node:18-alpine

WORKDIR /app
COPY . .
RUN npm i -g @nestjs/cli
#RUN   run serve -- --port 8090
EXPOSE 8090

ADD ./docker-files/scripts/entrypoint-local.sh /
RUN chmod +x /entrypoint-local.sh
ENTRYPOINT ["/entrypoint-local.sh"]
#ENTRYPOINT ["tail", "-f", "/dev/null"]