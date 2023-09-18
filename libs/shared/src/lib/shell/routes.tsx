import { Login, Callback, SpotifySearch } from '@spotify-clone/auth';
import { Shell } from '@spotify-clone/ui';
export const routes = [
  {
    path: '/',
    element: <Shell />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/callback',
    element: <Callback />,
  },
  {
    path: '/search',
    element: <SpotifySearch />,
  },
];
