#!/bin/bash
set -e

echo "Сборка React-приложения..."

# Устанавливаем все зависимости
npm ci

# Проверяем наличие public/index.html
if [ ! -f public/index.html ]; then
  echo "Ошибка: public/index.html не найден"
  exit 1
fi

# Сборка
npm run build

# Очищаем public и копируем build
rm -rf public/*
cp -r build/* public/
