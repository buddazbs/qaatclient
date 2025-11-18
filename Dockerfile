# builder
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
# Устанавливаем все зависимости (dev + prod) для сборки
RUN npm ci
# Копируем код
COPY . .
# Принудительно production env для оптимизированной сборки
ENV NODE_ENV=production
RUN npm run build

# production (nginx)
FROM nginx:stable-alpine AS production
# SPA: отдавать index.html для любых SPA-роутов
COPY nginx.conf /etc/nginx/nginx.conf
# Копируем артефакты сборки
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
