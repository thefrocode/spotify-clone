import { create } from 'zustand';
import { SavedAlbum, SpotifyApi } from '@spotify/web-api-ts-sdk';
import { Store } from '@spotify-clone/shared';

/* eslint-disable-next-line */
export interface AlbumStoreProps {}

export const useAlbum = create<Store<SavedAlbum>>((set) => ({
  data: [], // Initial state
  fetchData: async (sdk: SpotifyApi | null) => {
    try {
      const response = await sdk?.currentUser.albums.savedAlbums(50, 0);
      if (!response) {
        throw new Error('Failed to fetch data');
      }
      set({ data: response.items });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
}));
