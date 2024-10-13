import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import { HomePage } from '@/pages/Home';
import { CharactersPage } from '@/pages/Characters';

import { ROUTER_PATHS } from '@/shared/constants/routes';
import { MainLayout } from '@/shared/ui/layouts/main';

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: ROUTER_PATHS.HOME,
        element: <HomePage />
      },
      {
        path: ROUTER_PATHS.CHARACTERS,
        element: <CharactersPage />
      },
      {
        path: '*',
        element: <Navigate to={ROUTER_PATHS.HOME} />
      }
    ]
  }
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
