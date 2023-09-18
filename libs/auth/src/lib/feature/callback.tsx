import { useEffect } from 'react';
import { useSpotify } from '@spotify-clone/shared';
import {  } from '@spotify/web-api-ts-sdk';

export function Callback() {
    const { sdk} = useSpotify();

    useEffect(() => {
      // You can now access sdk and setSdk globally in your component tree
      // For example, you can set the sdk when it's ready in a useEffect
      // or use it to perform Spotify-related actions.
        sdk?.currentUser.followedArtists().then((res: any) => {
            console.log(res);
        });
        const albums = sdk?.currentUser.albums
        console.log(albums)

    }, [sdk]);
  
    return (
      <div>
        {/* Your component content here */}
      </div>
    );
}
