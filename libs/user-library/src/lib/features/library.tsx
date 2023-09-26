import { Container, Button, Plus, Search, Library } from '@spotify-clone/ui';
import { useUserLibrary } from '../data-access/user-library.store';
import { LibraryItemCard } from '../ui/LibraryItemCard';
import * as styles from './library.css';

export function UserLibrary() {
  const { library: userLibrary } = useUserLibrary();

  const items = [
    {
      id: 1,
      title: 'Playlists',
    },
    {
      id: 2,
      title: 'Albums',
    },
    {
      id: 3,
      title: 'Artists',
    },
  ];

  return (
    <Container flexDirection="column" margin="0px">
      <div className={`${styles.library}`}>
        <button className={`${styles.libraryButton}`}>
          <Library />
          Your Library
        </button>
        <Plus />
      </div>
      <ul className={`${styles.libraryCategories}`}>
        {items.map((item) => {
          return <Button primary={true} label={item.title} key={item.id} />;
        })}
      </ul>
      <div className={`${styles.librarySearch}`}>
        <Search />
        <select className={`${styles.librarySearchSelect}`}>
          <option value="1">Playlist</option>
          <option value="2">Album</option>
        </select>
      </div>
      <div className={`${styles.libraryList}`}>
        {userLibrary.map((item) => {
          return <LibraryItemCard {...item} />;
        })}
      </div>
    </Container>
  );
}
