FROM node:10

WORKDIR /arena

COPY . .

RUN npm ci 
RUN npm run build

CMD ["node", "dist/main.js"]
