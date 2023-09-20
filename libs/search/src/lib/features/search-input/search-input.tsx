import { Search, topbarSearch, topbarSearchInput } from '@spotify-clone/ui';
import { useSearch } from '../../data-access/search.store';

export function SearchInput() {
  const { setSearch } = useSearch();

  return (
    <div className={`${topbarSearch}`}>
      <Search color="white" />
      <input
        className={`${topbarSearchInput}`}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
