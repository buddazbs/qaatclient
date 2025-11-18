#!/bin/bash

echo "Начинаем сборку React-приложения..."

npm ci
npm run build

if [ ! -d "build" ]; then
  echo "Ошибка: папка build не была создана"
  exit 1
fi

rm -rf public/*
cp -r build/* public/

git add public
echo "Папка public обновлена"
echo "git commit -m \"Update static site build\""
echo "git push origin main"

echo "Для локального теста: npx serve build"
