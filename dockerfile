FROM node:11.8.0-alpine

WORKDIR /code

COPY package.json /code
RUN npm i docsify-cli -g
RUN npm install
CMD ["npm", "run", "live"]
