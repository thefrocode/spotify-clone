import { Login, Callback } from '@spotify-clone/auth';
export const routes = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/callback',
    element: <Callback />,
  },
];
