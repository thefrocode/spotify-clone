import { WebShell } from './shell/shell';
import { Home } from '@spotify-clone/home';
import { SearchList } from '@spotify-clone/search';
export const routes = [
  {
    path: '/',
    element: <WebShell />,
    children:[
      { path: '/home', element: <Home/> },
      { path: '/search', element: <SearchList/> },
    ]
  }, 
];
