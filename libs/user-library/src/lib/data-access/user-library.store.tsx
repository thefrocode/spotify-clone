import { Store, useSpotify } from '@spotify-clone/shared';
import { useAlbum } from '@spotify-clone/albums';
import { useArtist } from '@spotify-clone/artists';
import { useShow } from '@spotify-clone/shows';
import { usePlaylist } from '@spotify-clone/playlists';
import { useEffect, useMemo } from 'react';
import {
  Artist,
  SavedAlbum,
  SavedShow,
  SimplifiedPlaylist,
  SimplifiedShow,
  SpotifyApi,
} from '@spotify/web-api-ts-sdk';
import { create } from 'zustand';
import { useSearchLibrary } from './search-library.store';

interface UserLibraryListItem extends SimplifiedPlaylist, Artist {
  added_at?: string;
  show?: SavedShow;
  album?: SavedAlbum;
}
export function useUserLibrary() {
  const { sdk } = useSpotify();
  const search = useSearchLibrary((state) => state.search);
  const albums = useAlbum((state) => state.data);
  const artists = useArtist((state) => state.data);
  const shows = useShow((state) => state.data);
  const playlists = usePlaylist((state) => state.data);

  const fetchAlbums = useAlbum((state) => state.fetchData);
  const fetchArtists = useArtist((state) => state.fetchData);
  const fetchShows = useShow((state) => state.fetchData);
  const fetchPlaylists = usePlaylist((state) => state.fetchData);

 

  useEffect(() => {
    if (sdk) {
      fetchAlbums(sdk);
      fetchArtists(sdk);
      fetchShows(sdk);
      fetchPlaylists(sdk);
      console.log('fetching user library');
    }
  }, [sdk, search]);

  const userAlbums = useMemo(() => {
    return albums.filter((album) =>
      album.album.name.toLocaleLowerCase().includes(search)
    );
  }, [albums, search]);

  const userShows = useMemo(() => {
    return shows.filter((show) =>
      show.show.name.toLocaleLowerCase().includes(search)
    );
  }, [shows, search]);

  const userArtists = useMemo(() => {
    return artists.filter((artist) =>
      artist.name.toLocaleLowerCase().includes(search)
    );
  }, [artists, search]);

  const userPlaylists = useMemo(() => {
    return playlists.filter((playlist) =>
      playlist.name.toLocaleLowerCase().includes(search)
    );
  }, [playlists, search]);

  const userLibraryItems: (
    | SavedAlbum
    | SavedShow
    | Artist
    | SimplifiedPlaylist
  )[] = useMemo(() => {
    return [
      ...[...userAlbums, ...userShows].sort((a, b) =>
        b.added_at.localeCompare(a.added_at)
      ),
      ...userArtists,
      ...userPlaylists,
    ];
  }, [albums, artists, shows, playlists]);

  console.log('user library', userLibraryItems);

  return {
    library: userLibraryItems,
  };
}
