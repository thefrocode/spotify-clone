import { Button, navbarLibraryCategories } from '@spotify-clone/ui';
import { categories } from '@spotify-clone/shared';
import { useSearch } from '../../data-access/search.store';
export function SearchResults() {
  
  const { data } = useSearch();
  return (
    <ul className={`${navbarLibraryCategories}`}>
      {categories.map((item) => {
        return <Button primary={true} label={item.name} key={item.id} />;
      })}
    </ul>
  );
}
