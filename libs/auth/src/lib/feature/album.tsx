import { useSpotify } from "@spotify-clone/shared";
import { SpotifyApi, SearchResults, ItemTypes, Artist } from "@spotify/web-api-ts-sdk";
import { useState, useEffect } from "react";



export function SpotifySearch() {
    const {sdk} = useSpotify()
    const [results, setResults] = useState<any>({} as any);
  
    useEffect(() => {
      (async () => {
        
        const results = await sdk?.search("The Beatles", ["artist"]);
        const albums = sdk?.albums
        console.log(results)  
        setResults(() => results);      
      })();
    }, [sdk]);
  
    // generate a table for the results
    // const tableRows = results.artists?.items.map((artist:any) => {
    //   return (
    //     <tr key={artist.id}>
    //       <td>{artist.name}</td>
    //       <td>{artist.popularity}</td>
    //       <td>{artist.followers.total}</td>
    //     </tr>
    //   );
    // });
  
    return (
      <>
        <h1>Spotify Search for The Beatles</h1>
        {/* <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Popularity</th>
              <th>Followers</th>
            </tr>
          </thead>
          <tbody>
            {tableRows}
          </tbody>
        </table> */}
      </>
    )
  }