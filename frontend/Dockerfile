FROM node:18

WORKDIR /app

COPY package.json ./
RUN npm install
RUN npm install -g serve         # สำคัญ!

COPY . .

RUN npm run build

EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "tcp://0.0.0.0:3000"]

