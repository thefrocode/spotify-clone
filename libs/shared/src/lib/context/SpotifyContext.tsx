// SpotifyContext.tsx
import React, { createContext, useContext } from 'react';
import { Scopes, SpotifyApi, UserProfile } from '@spotify/web-api-ts-sdk'; // Update this with the correct path to your SDK
import { useSpotifySource } from '../hooks/useSpotify';

interface SpotifyContextType {
  sdk: SpotifyApi | null;
  authenticate: () => void;
  user: UserProfile | null;
  logout: () => void;
}

const SpotifyContext = createContext<SpotifyContextType>({
  sdk: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  authenticate: () => {},
  user: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  logout: () => {},
});

export const useSpotify = () => useContext(SpotifyContext);

export const SpotifyProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { sdk, authenticate, user, logout} = useSpotifySource(
    import.meta.env.VITE_REACT_APP_SPOTIFY_CLIENT_ID,
    import.meta.env.VITE_REACT_APP_REDIRECT_URI,
    Scopes.all
  );

  return (
    <SpotifyContext.Provider value={{ sdk, authenticate, user, logout}}>
      {children}
    </SpotifyContext.Provider>
  );
};
