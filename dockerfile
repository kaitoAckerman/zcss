FROM node:8-alpine

WORKDIR /code
EXPOSE 8000

CMD ["npm", "run", "live"]
COPY package.json /code
RUN npm update && npm install
COPY . /code