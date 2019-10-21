FROM node:10-alpine
RUN npm i -g @nestjs/cli
RUN npm install --no-progress --quiet
COPY ../nodemon.json /
ENTRYPOINT [ "npx", "nodemon", "--config", "/nodemon.json" ]
