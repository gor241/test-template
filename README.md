# FSD React Starter

Универсальный стартовый шаблон для React-приложений с архитектурой Feature-Sliced Design, SCSS-модулями и TypeScript.

## Особенности

- 📦 Архитектура Feature-Sliced Design
- 🎨 SCSS-модули и переменные для стилизации
- 📱 Адаптивный дизайн
- 🔒 TypeScript для строгой типизации
- 🚀 Vite для быстрой сборки
- 🧩 Готовые базовые UI-компоненты
- 📋 Поддержка алиасов для импортов

## Структура проекта (FSD)

```
/src
├── app/             # Инициализация приложения, глобальные стили, провайдеры
│   ├── providers/   # Провайдеры контекста
│   ├── router/      # Конфигурация маршрутов
│   ├── styles/      # Глобальные стили
│   └── App.tsx      # Корневой компонент
│
├── pages/           # Страницы приложения
│   ├── home/        # Главная страница
│   ├── about/       # Страница "О проекте"
│   └── not-found/   # Страница 404
│
├── widgets/         # Самодостаточные блоки интерфейса
│   ├── Header/      # Шапка сайта
│   ├── Footer/      # Подвал сайта
│   └── layouts/     # Макеты страниц
│
├── features/        # Пользовательские фичи (бизнес-логика)
│   └── ...          # (добавляйте по мере необходимости)
│
├── entities/        # Бизнес-сущности (модели данных)
│   └── ...          # (добавляйте по мере необходимости)
│
└── shared/          # Переиспользуемые ресурсы
    ├── api/         # API-клиенты
    ├── assets/      # Статические ресурсы
    ├── config/      # Конфигурации
    ├── lib/         # Вспомогательные библиотеки
    ├── styles/      # SCSS переменные и миксины
    ├── types/       # Общие TypeScript типы
    └── ui/          # UI компоненты
```

## Начало работы

1. Клонировать репозиторий:
```bash
git clone <url-репозитория> my-project
cd my-project
```

2. Установить зависимости:
```bash
npm install
```

3. Запустить проект в режиме разработки:
```bash
npm run dev
```

4. Открыть в браузере: [http://localhost:5173](http://localhost:5173)

## Доступные команды

- `npm run dev` - Запуск проекта в режиме разработки
- `npm run build` - Сборка проекта для продакшена
- `npm run preview` - Превью собранного проекта
- `npm run lint` - Проверка кода с ESLint
- `npm run format` - Форматирование кода с Prettier
- `npm run test` - Запуск тестов

## Базовые UI-компоненты

В проекте реализованы базовые UI-компоненты:

- **Button** - Кнопка с различными вариантами и размерами
- **Card** - Карточка с различными вариантами оформления
- **Container** - Контейнер для содержимого страницы
- **Input** - Поле ввода с поддержкой иконок и сообщений об ошибках
- **ErrorBoundary** - Компонент для обработки ошибок React

Эти компоненты можно использовать как основу для создания более сложных интерфейсов.

## Использование SCSS

В проекте используются SCSS-модули для локальной области видимости стилей. 
Глобальные переменные и миксины определены в `src/shared/styles/`.

Пример использования:

```scss
// Component.module.scss
.container {
  padding: $spacing-md; // Использование глобальной переменной
  
  @include respond-to('md') { // Использование миксина для медиа-запроса
    padding: $spacing-lg;
  }
}
```

## Лицензия

MIT
