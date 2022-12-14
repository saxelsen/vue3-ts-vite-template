FROM node:18-slim AS DEVELOPMENT

WORKDIR /app

COPY package.json ./
RUN yarn install

COPY . .

CMD ["yarn", "dev"]
