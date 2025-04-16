import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

// Базовая конфигурация
const API_URL = import.meta.env.VITE_API_URL || 'https://api.example.com';
const API_TIMEOUT = 15000;

// Создаем экземпляр axios
const apiInstance = axios.create({
  baseURL: API_URL,
  timeout: API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Перехватчик запросов
apiInstance.interceptors.request.use(
  (config) => {
    // Здесь можно добавить токен авторизации или другие заголовки
    const token = localStorage.getItem('auth_token');
    
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Перехватчик ответов
apiInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    // Обработка ошибок ответа
    if (error.response?.status === 401) {
      // Обработка неавторизованного доступа
      localStorage.removeItem('auth_token');
      // Редирект на страницу логина может быть добавлен здесь
    }
    
    return Promise.reject(error);
  }
);

// Типизированные методы для запросов
export const api = {
  get: <T>(url: string, config?: AxiosRequestConfig) =>
    apiInstance.get<T, AxiosResponse<T>>(url, config).then((res) => res.data),
  
  post: <T>(url: string, data?: unknown, config?: AxiosRequestConfig) =>
    apiInstance.post<T, AxiosResponse<T>>(url, data, config).then((res) => res.data),
  
  put: <T>(url: string, data?: unknown, config?: AxiosRequestConfig) =>
    apiInstance.put<T, AxiosResponse<T>>(url, data, config).then((res) => res.data),
  
  patch: <T>(url: string, data?: unknown, config?: AxiosRequestConfig) =>
    apiInstance.patch<T, AxiosResponse<T>>(url, data, config).then((res) => res.data),
  
  delete: <T>(url: string, config?: AxiosRequestConfig) =>
    apiInstance.delete<T, AxiosResponse<T>>(url, config).then((res) => res.data),
}; 