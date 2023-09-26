import {
  navbarLibrary,
  navbarLibraryButton,
  navbarLibraryCategories,
  navbarLibrarySearch,
  navbarLibrarySearchSelect,
  navbarLibraryList,
} from '@spotify-clone/ui';
import { Container, Button, Plus, Search, Library } from '@spotify-clone/ui';
import { useUserLibrary } from '../data-access/user-library.store';
import { LibraryItemCard } from '../ui/LibraryItemCard';

export function UserLibrary() {
  const { library } = useUserLibrary();

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
      <div className={`${navbarLibrary}`}>
        <button className={`${navbarLibraryButton}`}>
          <Library />
          Your Library
        </button>
        <Plus />
      </div>
      <ul className={`${navbarLibraryCategories}`}>
        {items.map((item) => {
          return <Button primary={true} label={item.title} key={item.id} />;
        })}
      </ul>
      <div className={`${navbarLibrarySearch}`}>
        <Search />
        <select className={`${navbarLibrarySearchSelect}`}>
          <option value="1">Playlist</option>
          <option value="2">Album</option>
        </select>
      </div>
      <div className={`${navbarLibraryList}`}>
        {library.map((item) => {
          return <LibraryItemCard {...item} />;
        })}
      </div>
    </Container>
  );
}
