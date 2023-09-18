import { routes, SpotifyProvider } from '@spotify-clone/shared';
import { Outlet, ReactLocation, Router } from '@tanstack/react-location';

const location = new ReactLocation();
export function App() {
  
  return (
    <SpotifyProvider>
      <Router location={location} routes={routes}>
        <div>
          
          <Outlet />
        </div>
      </Router>
    </SpotifyProvider>
  );
}

export default App;
