#!/bin/bash

echo "Начинаем сборку React-приложения..."

# Устанавливаем зависимости
npm ci

# Собираем приложение
npm run build

# Проверяем, что сборка прошла успешно
if [ ! -d "build" ]; then
  echo "Ошибка: папка build не была создана"
  exit 1
fi

echo "Сборка завершена успешно"

# Создаём папку public если нет
mkdir -p public

# Очищаем папку public
rm -rf public/*

# Копируем собранные файлы в папку public
cp -r build/* public/

# Добавляем изменения в git
git add public

echo "Папка public обновлена"
echo "Теперь можно закоммитить изменения:"
echo "git commit -m \"Update static site build\""
echo "git push origin main"
