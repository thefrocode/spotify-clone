import { useSearchLibrary } from '../../data-access/search-library.store';
import * as styles from './library-input.css';
export function LibraryInput() {
  const setSearch = useSearchLibrary((state) => state.setSearch);
  return (
    <input
      className={styles.librarySearchInput}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
