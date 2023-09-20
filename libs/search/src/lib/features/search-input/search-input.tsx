import { useSpotify } from '@spotify-clone/shared';
import { Search, topbarSearch, topbarSearchInput } from '@spotify-clone/ui';
import { useSearch } from '../../data-access/search.store';

export function SearchInput() {
  const { setSearch } = useSearch();
  const { sdk } = useSpotify()

  return (
    <div className={`${topbarSearch}`}>
      <Search color="white" />
      <input
        className={`${topbarSearchInput}`}
        onChange={(e) => setSearch(sdk,e.target.value)}
      />
    </div>
  );
}
