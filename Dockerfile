# Стадия сборки
FROM node:20-alpine AS builder
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем все зависимости (dev тоже)
RUN npm ci && npm cache clean --force

# Копируем исходники и public
COPY . .

# Явно экспортируем NODE_ENV=production перед build (если нужно)
ENV NODE_ENV=production

# Сборка React
RUN npm run build
