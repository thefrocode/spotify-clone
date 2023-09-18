import { SpotifyProvider } from '@spotify-clone/shared';
import { routes } from '@spotify-clone/shell';
import { Outlet, ReactLocation, Router } from '@tanstack/react-location';
import './styles.css';
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
