import styled from 'styled-components';
import { Login } from '@spotify-clone/auth';
import { routes, SpotifyProvider } from '@spotify-clone/shared';
import { Outlet, ReactLocation, Router } from '@tanstack/react-location';
import { CookiesProvider } from 'react-cookie';
import { Shell } from '@spotify-clone/ui';
const location = new ReactLocation();

export function App() {
  return (
    // <CookiesProvider defaultSetOptions={{ path: '/' }}>
    <SpotifyProvider>
      <Router location={location} routes={routes}>
        <div>
          <Shell/>
        </div>
      </Router>
    </SpotifyProvider>
    // </CookiesProvider>
  );
}

export default App;
