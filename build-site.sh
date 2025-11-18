#!/bin/bash
set -e

echo "Начинаем сборку React-приложения..."

# Устанавливаем все зависимости, включая dev
npm ci

# Проверяем наличие public/index.html
if [ ! -f "public/index.html" ]; then
  echo "Ошибка: public/index.html отсутствует"
  exit 1
fi

# Собираем приложение
npm run build

# Проверяем, что build создан
if [ ! -d "build" ]; then
  echo "Ошибка: папка build не была создана"
  exit 1
fi

# Чистим public, кроме index.html
find public ! -name 'index.html' -type f -exec rm -f {} +
find public ! -name 'index.html' -type d -exec rm -rf {} +

# Копируем сборку в public
cp -r build/* public/

# Добавляем изменения в git
git add public

if [ -n "$(git status --porcelain public)" ]; then
  git config --global user.email "ci@sourcecraft.dev"
  git config --global user.name "SourceCraft CI"
  git commit -m "Update static site build [skip ci]"
  git push origin main
else
  echo "Изменений в public нет"
fi

echo "Сборка и деплой public завершены"
