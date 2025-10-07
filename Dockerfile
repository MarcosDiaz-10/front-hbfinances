FROM node:latest

WORKDIR /app



RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./
COPY .env.remoto ./.env
RUN pnpm install

COPY ./ ./

RUN pnpm run build

CMD ["pnpm", "run", "start"]