import { WebShell } from './shell/shell';
import { Home } from '@spotify-clone/home';
import {  Search, } from '@spotify-clone/search';
import {  } from '@spotify-clone/ui';

export const routes = [
  {
    path: '/',
    element: <WebShell />,
    children:[
      { path: '/home', element: <Home/> },
      { path: '/search', element:<Search/> },
    ]
  }, 
];
