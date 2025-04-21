module.exports = {
  // Наследуем конфигурации от популярных пресетов
  extends: [
    'stylelint-config-sass-guidelines', // Правила для SASS/SCSS согласно лучшим практикам
    'stylelint-config-standard', // Стандартный набор правил stylelint
  ],

  // Подключаемые плагины
  plugins: [
    'stylelint-scss', // Поддержка SCSS синтаксиса
  ],

  // Настройка правил
  rules: {
    'at-rule-no-unknown': null, // Отключаем базовое правило для поддержки SCSS
    'scss/at-rule-no-unknown': true, // Включаем SCSS-версию проверки at-правил
    'selector-class-pattern': null, // Отключаем проверку шаблона именования классов (разрешаем BEM и другие методологии)
    'max-nesting-depth': 3, // Ограничиваем глубину вложенности до 3 уровней
    'scss/dollar-variable-pattern': null, // Отключаем проверку паттерна для переменных SCSSS
    'scss/selector-no-redundant-nesting-selector': true, // Запрещаем избыточные селекторы вложенности (&)
    'media-query-no-invalid': null, // Отключаем проверку на невалидные медиа-запросы
    'declaration-property-value-disallowed-list': null, // Отключаем список запрещенных значений свойств
    'color-named': null, // Разрешаем использовать именованные цвета (red, blue и т.д.)
    'no-descending-specificity': null, // Отключаем правило о понижении специфичности селекторов
  },
};
