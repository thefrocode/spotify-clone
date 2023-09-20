import { Store } from '@spotify-clone/shared';
import { SavedAlbum, SpotifyApi } from '@spotify/web-api-ts-sdk';
import { create } from 'zustand';

export const useSearch = create<{
  data: any[];
  fetchData: (sdk: SpotifyApi | null) => void;
  search: string;
  setSearch: (search: string) => void;
  category: string;
  setCategory: (category: string) => void;
}>((set,get) => ({
  data: [], // Initial state
  fetchData: async (sdk: SpotifyApi | null) => {
    try {
      // Simulate an API call (replace this with your actual data fetching code)
      let searchType
      if (get().category === 'all') {
        searchType = ['album', 'artist', 'playlist', 'show', 'track'];
      } else {
        searchType = [get().category];
      }
      const response = await sdk?.search(get().search, searchType, {
        limit: 50,
      });
      if (!response) {
        throw new Error('Failed to fetch data');
      }

      // Update the state with the fetched data
      set({ data: response.items });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
  search: '',
  setSearch: (search: string) => {
    set({ search: search });
  },
  category: 'all',
  setCategory: (category: string) => {
    set({ category: category });
  },
}));
