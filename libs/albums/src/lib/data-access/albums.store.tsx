import { create } from 'zustand';
import { SavedAlbum, SpotifyApi } from '@spotify/web-api-ts-sdk';
import { Store } from '@spotify-clone/shared'

/* eslint-disable-next-line */
export interface AlbumStoreProps {}

export const useAlbum = create<Store<SavedAlbum>>((set) => ({
  data: [], // Initial state
  fetchData: async (sdk: SpotifyApi | null) => {
    try {
      // Simulate an API call (replace this with your actual data fetching code)
      const response = await sdk?.currentUser.albums.savedAlbums();
      if (!response) {
        throw new Error('Failed to fetch data');
      }

      // Update the state with the fetched data
      set({ data: response.items });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
}));



