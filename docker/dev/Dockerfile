FROM node:10-alpine
RUN npm install --no-progress --quiet
COPY nodemon.json /
ENTRYPOINT [ "npx", "nodemon", "--config", "/nodemon.json" ]
