import { Button, navbarLibraryCategories } from '@spotify-clone/ui';
import { categories } from '@spotify-clone/shared';
export function SearchResults() {
  
  return (
    <ul className={`${navbarLibraryCategories}`}>
      {categories.map((item) => {
        return <Button primary={true} label={item.name} key={item.id} />;
      })}
    </ul>
  );
}
