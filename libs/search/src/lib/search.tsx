import { useCallback, useRef, useState } from 'react';
import { useSearch } from './data-access/search.store';
import { BrowseList } from './features/browse-list/browse-list';
import { SearchResults } from './features/search-results/search-results';
import { search } from './search.css';

/* eslint-disable-next-line */
export interface SearchProps {}

export function useSearchRender() {
  const [search, setSearch] = useState('');

  const changeSearch = useCallback((search: string) => {
    setSearch(search);
  }, []);

  return {
    changeSearch,
    search,
  };
}

export function Search() {
  const { search } = useSearch();
  console.log(search);
  const searchPage = search ? <SearchResults /> : <BrowseList />;

  return <div>{searchPage}</div>;
}

export default Search;
