import styled from 'styled-components';
import { Login } from '@spotify-clone/auth';
import { routes } from '@spotify-clone/shared';
import { Outlet, ReactLocation, Router } from "@tanstack/react-location";
const location = new ReactLocation();

export function App() {
  return (
    <Router location={location} routes={routes}>
      <div>
        <Outlet />
      </div>
    </Router>
  );
}

export default App;
