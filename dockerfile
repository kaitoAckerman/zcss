FROM node:11.8.0-alpine

WORKDIR /code

COPY package.json /code
RUN npm install
CMD ["npm", "run", "live"]
