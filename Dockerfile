FROM node:12

WORKDIR /nastya-homework

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

EXPOSE 3333

ENTRYPOINT ["node", "./app.js"]
