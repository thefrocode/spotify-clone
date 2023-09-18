import { create } from 'zustand';
import { SimplifiedPlaylist, SpotifyApi } from '@spotify/web-api-ts-sdk';
import { Store } from '@spotify-clone/shared';

/* eslint-disable-next-line */
export interface PlaylistStoreProps {}

export const usePlaylist = create<Store<SimplifiedPlaylist>>((set) => ({
  data: [], // Initial state
  fetchData: async (sdk: SpotifyApi | null) => {
    try {
      const response = await sdk?.currentUser.playlists.playlists();
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
