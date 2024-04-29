FROM node:latest

WORKDIR /crypto_e_hash

COPY . .

RUN rm -rf node_modules
RUN npm i

CMD ["npm", "start"]