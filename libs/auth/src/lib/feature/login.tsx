import { useSpotify } from '@spotify-clone/shared';
import { SpotifySearch } from './album';

export function Login() {
  const { authenticate } = useSpotify()
  
  return (
    <>
      <h1>Spotify React</h1>
      <button onClick={authenticate}>Log In</button>
      <SpotifySearch/>
    </>
  );
}
