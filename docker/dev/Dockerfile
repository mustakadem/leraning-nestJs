FROM node:10-alpine
RUN npm install --no-progress --quiet
RUN npm i -g @nestjs/cli
COPY nodemon.json /
ENTRYPOINT [ "npx", "nodemon", "--config", "/nodemon.json" ]
