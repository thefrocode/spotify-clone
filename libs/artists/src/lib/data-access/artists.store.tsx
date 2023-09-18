import { create } from 'zustand';
import { Artist, SpotifyApi } from '@spotify/web-api-ts-sdk';
import { Store } from '@spotify-clone/shared'

/* eslint-disable-next-line */
export interface ArtistStoreProps {}

export const useArtist = create<Store<Artist>>((set) => ({
  data: [], // Initial state
  fetchData: async (sdk: SpotifyApi | null) => {
    try {
      const response = await sdk?.currentUser.followedArtists();
      if (!response) {
        throw new Error('Failed to fetch data');
      }

      // Update the state with the fetched data
      set({ data: response.artists.items });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
}));



