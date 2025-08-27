FROM node:20-alpine
ENV NODE_ENV=production
ENV PORT=8000

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY . .

RUN addgroup -S nodejs && adduser -S nodeuser -G nodejs
USER nodeuser

EXPOSE 8000
CMD ["node", "app.js"]
