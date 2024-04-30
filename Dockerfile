FROM node:latest

WORKDIR /crypto_e_hash

COPY package.json ./
COPY package-lock.json ./

RUN npm i

COPY . .

COPY prisma ./prisma/

RUN npx prisma generate --schema ./prisma/schema.prisma

CMD ["npm", "start"]