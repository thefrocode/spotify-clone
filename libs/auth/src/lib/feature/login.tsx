import { useEffect, useState } from 'react';

export function Login() {
  const CLIENT_ID = '******';
  const REDIRECT_URI = 'http:localhost:4200/login';
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
  const RESPONSE_TYPE = 'token';

  const [token, setToken] = useState<string | null>(null);
  console.log(CLIENT_ID);

  useEffect(() => {
    let hash = window.location.hash;
    let token = window.localStorage.getItem('token');
    console.log(window);

    if (!token && hash) {
      //token = hash.substring(1).split('&').find((elem) => elem.startsWith('access_token'))?.split('=')[1];

      window.location.hash = '';
      hash = window.location.hash.substring(1);
      const accessString = hash.substring(1).indexOf('&');

      
      token = hash.substring(13, accessString);
      console.log(token,hash);

      if (token) window.localStorage.setItem('token', token);
    }

    setToken(token);
  }, []);
  const logout = () => {
    setToken('');
    window.localStorage.removeItem('token');
  };

  return (
    <>
      <h1>Spotify React</h1>
      {!token ? (
        <a
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
        >
          Login to Spotify
        </a>
      ) : (
        <button onClick={logout}>Logout</button>
      )}
    </>
  );
}
