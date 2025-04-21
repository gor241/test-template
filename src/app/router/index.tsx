import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { MainLayout } from '@/widgets/layouts/MainLayout';
import NotFoundPage from '@/pages/not-found';

// Ленивая загрузка страниц для разделения кода
const HomePage = lazy(() => import('@/pages/home'));
const AboutPage = lazy(() => import('@/pages/about'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Загрузка...</div>}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={<div>Загрузка...</div>}>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
