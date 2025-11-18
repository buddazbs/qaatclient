#!/bin/bash
set -euo pipefail

echo "Начинаем сборку React-приложения..."

# Устанавливаем все зависимости
npm ci

# Чистый билд
npm run build

# Проверяем, что сборка прошла успешно
if [ ! -d "build" ]; then
  echo "Ошибка: папка build не была создана"
  exit 1
fi
echo "Сборка завершена успешно"

# Обновляем папку public
mkdir -p public
rm -rf public/*
cp -r build/* public/
echo "Папка public обновлена"

# Автоматический git commit и push
if [ -n "$(git status --porcelain public)" ]; then
  git config --global user.email "ci@sourcecraft.dev"
  git config --global user.name "SourceCraft CI"
  git add public
  git commit -m "Update static site build [skip ci]" --no-verify
  git push origin main
else
  echo "Изменений в public нет, push не требуется"
fi
