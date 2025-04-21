module.exports = {
  // Базовое форматирование
  printWidth: 100, // Максимальная длина строки
  tabWidth: 2, // Количество пробелов для tab
  useTabs: false, // Использовать пробелы вместо табуляции
  semi: true, // Добавлять точку с запятой в конце операторов
  singleQuote: true, // Использовать одинарные кавычки вместо двойных

  // Объекты и массивы
  trailingComma: 'es5', // Запятые в конце элементов (ES5-совместимые)
  bracketSpacing: true, // Пробелы между скобками в объектах { foo: bar }
  bracketSameLine: false, // Закрывающая скобка JSX элементов на новой строке

  // Специфика для JavaScript/TypeScript
  arrowParens: 'avoid', // Избегать скобок у одиночных параметров стрелочных функций
  jsxSingleQuote: false, // Использовать двойные кавычки в JSX
  quoteProps: 'as-needed', // Кавычки вокруг свойств объектов только при необходимости

  // Специфика для Markdown
  proseWrap: 'preserve', // Не менять перенос строк в Markdown

  // Правила для концов строк
  endOfLine: 'lf', // Использовать LF для концов строк

  // Другие настройки
  embeddedLanguageFormatting: 'auto', // Форматирование вложенных языков
};
