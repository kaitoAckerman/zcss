FROM node:11.8.0-alpine

WORKDIR /code

CMD ["npm", "run", "live"]
COPY package.json /code

RUN npm install
COPY . /code