FROM node:20

WORKDIR /calendar

COPY . .

RUN npm ci 
RUN npm run build

CMD ["node", "dist/main.js"]
