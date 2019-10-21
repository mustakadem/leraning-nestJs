FROM node:10-alpine
WORKDIR /app
EXPOSE 3000
COPY . .
RUN rm -r ./docker
RUN npm install --no-progress --quiet
RUN npm i -g @nestjs/cli
RUN npm run build
RUN rm -r ./src
# HEALTHCHECK --interval=30s --timeout=10s --start-period=3m --retries=5 CMD [ "npm", "run", "healthcheck" ]
CMD [ "npm", "run", "start:prod"]
