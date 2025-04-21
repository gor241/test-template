import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  // Плагины Vite
  plugins: [
    react()  // Поддержка React с трансформацией JSX и автоматической перезагрузкой при изменениях
  ],
  
  // Настройка разрешения путей
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),  // Создает алиас @ для импорта из директории src
    },
  },
  
  // Настройки для CSS и препроцессоров
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/shared/styles/variables.scss" as *;`  // Автоматически подключает переменные SCSS для всех файлов
      }
    }
  },
  
  // Настройки сборки для production
  build: {
    minify: 'terser',                  // Использует terser для минификации (более мощный, чем esbuild)
    cssMinify: true,                   // Минифицирует CSS
    terserOptions: {
      compress: {
        drop_console: true,            // Удаляет console.log из production-кода
        drop_debugger: true            // Удаляет debugger-операторы из production-кода
      },
      format: {
        comments: false                // Удаляет комментарии из production-кода
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],  // Группирует основные библиотеки в отдельный чанк
          ui: ['@/shared/ui'],                                  // Группирует UI-компоненты в отдельный чанк
        }
      }
    }
  }
})
