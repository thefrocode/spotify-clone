import { SpotifyApi, SearchResults, ItemTypes } from "@spotify/web-api-ts-sdk";
import { useState, useEffect } from "react";



export function SpotifyAlbum({ sdk }: { sdk: SpotifyApi}) {
    const [results, setResults] = useState<any>({} as any);
  
    useEffect(() => {
      (async () => {
        const results = await sdk.getAccessToken();
        setResults(() => results);      
      })();
    }, [sdk]);
  
    // generate a table for the results
   
  
    return (
      <>
        {results}
      </>
    )
  }