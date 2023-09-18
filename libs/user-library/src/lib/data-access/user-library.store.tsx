import { useSpotify } from '@spotify-clone/shared';
import { useAlbum } from '@spotify-clone/albums';
import { useArtist } from '@spotify-clone/artists';
import { useShow } from '@spotify-clone/shows';
import { usePlaylist } from '@spotify-clone/playlists';
import { useEffect, useMemo } from 'react';
import { Album, SavedAlbum, SavedShow, SimplifiedPlaylist, SimplifiedShow } from '@spotify/web-api-ts-sdk';

interface UserLibraryListItem extends SimplifiedPlaylist, Artist{
    added_at?: string;
    show?: SimplifiedShow;
    album?: Album;

}
export function useUserLibrary() {
  const { sdk } = useSpotify();
  const { data: albums, fetchData: fetchAlbums } = useAlbum();
  const { data: artists, fetchData: fetchArtists } = useArtist();
  const { data: shows, fetchData: fetchShows } = useShow();
  const { data: playlists, fetchData: fetchPlaylists } = usePlaylist();

  console.log('user library', artists);

  useEffect(() => {
    if (sdk) {
      fetchAlbums(sdk);
      fetchArtists(sdk);
      fetchShows(sdk);
      fetchPlaylists(sdk);
      console.log('fetching user library');
    }
  }, [sdk]);

  const userLibraryItems:UserLibraryListItem[]= useMemo(() => {
    return [...[...albums, ...shows].sort((a, b) =>
      b.added_at.localeCompare(a.added_at)
    ),...artists, ...playlists];
  }, [albums, artists, shows, playlists]);

  return {
    library: userLibraryItems,
  };
}
