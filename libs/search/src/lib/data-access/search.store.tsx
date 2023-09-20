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
  setSearch: (sdk: SpotifyApi | null,search: string) => void;
  category: string;
  setCategory: (category: string) => void;
}>((set,get) => ({
  data: {}, // Initial state
  search: '',
  setSearch: async (sdk:SpotifyApi| null,search: string) => {
    set({ search: search });
    let searchType
      if (get().category === 'all') {
        searchType = ['album', 'artist', 'playlist', 'show', 'track'];
      } else {
        searchType = [get().category];
      }
      const response = await sdk?.search(search, searchType);
      
    set({ data: response})
  },
  category: 'all',
  setCategory: (category: string) => {
    set({ category: category });
  },
}));
