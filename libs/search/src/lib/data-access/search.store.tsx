import { Album, Artist, Episode, Playlist, Show, SpotifyApi, Track } from '@spotify/web-api-ts-sdk';
import { create } from 'zustand';

interface SearchResults{
  albums?: Album[],
  artists?: Artist[], 
  playlists?: Playlist[],
  shows?: Show[],
  tracks?: Track[]
  episodes?: Episode[]
}

export const useSearch = create<{
  data: SearchResults;
  search: string;
  top_result: Track | null;
  setSearch: (sdk: SpotifyApi | null,search: string) => void;
  category: string;
  setCategory: (category: string) => void;
}>((set,get) => ({
  data: {}, // Initial state
  search: '',
  top_result: null,
  setSearch: async (sdk:SpotifyApi| null,search: string) => {
    set({ search: search });
    let searchType,limit;
      if (get().category === 'all') {
        searchType = ['album', 'artist', 'playlist', 'show', 'track'];
        limit = 4
      } else {
        searchType = [get().category];
        limit = 10
      }
      const response = await sdk?.search(search, searchType,'KE',limit);
    set({ data: response})
    set({ top_result: response?.tracks?.items[0]})
  },
  category: 'all',
  setCategory: (category: string) => {
    set({ category: category });
  },
}));
