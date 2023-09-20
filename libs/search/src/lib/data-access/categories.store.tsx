import { create } from 'zustand';
import { Category, SpotifyApi } from '@spotify/web-api-ts-sdk';
import { Store } from '@spotify-clone/shared';

/* eslint-disable-next-line */
export interface CategoryStoreProps {}

export const useCategory = create<Store<Category>>((set) => ({
  data: [], 
  fetchData: async (sdk: SpotifyApi | null) => {
    try {
      const response = await sdk?.browse.getCategories();
      if (!response) {
        throw new Error('Failed to fetch data');
      }
      set({ data: response.categories.items });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
}));
