# Multi-stage build для продакшн и тестовых сред

# Стадия сборки
FROM node:20-alpine AS builder

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json (если есть)
COPY package*.json ./

# Устанавливаем зависимости
RUN npm ci --only=production && npm cache clean --force

# Копируем исходный код
COPY . .

# Собираем приложение
RUN npm run build

# Продакшн стадия
FROM nginx:alpine AS production

# Копируем собранные файлы из стадии builder
COPY --from=builder /app/build /usr/share/nginx/html

# Копируем конфигурацию nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Экспонируем порт
EXPOSE 80

# Запускаем nginx
CMD ["nginx", "-g", "daemon off;"]

# Тестовая стадия
FROM node:20-alpine AS development

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json (если есть)
COPY package*.json ./

# Устанавливаем все зависимости, включая devDependencies
RUN npm ci && npm cache clean --force

# Копируем исходный код
COPY . .

# Экспонируем порт
EXPOSE 3000

# Запускаем приложение в режиме разработки
CMD ["npm", "start"]