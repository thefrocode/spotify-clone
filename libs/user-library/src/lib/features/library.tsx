import {
  navbarLibrary,
  navbarLibraryButton,
  navbarLibraryCategories,
  navbarLibrarySearch,
  navbarLibrarySearchSelect,
  navbarLibraryListItem,
  navbarLibraryListItemImage,
  navbarLibraryListItemTitle,
  navbarLibraryListItemDescription,
  navbarLibraryList,
} from '@spotify-clone/ui';
import { Container, Button, Plus, Search, Library} from '@spotify-clone/ui';
import { useSpotify } from '@spotify-clone/shared';
import { useAlbum } from '@spotify-clone/albums';
import { useEffect } from 'react';


interface LibraryItemProps {
  title: string;
  category: string;
  icon?: any;
  owner: string;
}

function LibraryItem({ title, icon, category, owner }: LibraryItemProps) {
  return (
    <div className={`${navbarLibraryListItem}`}>
      <img src={icon} alt="Alt" className={`${navbarLibraryListItemImage}`} />
      <div className={`${navbarLibraryListItemTitle}`}>{title}</div>
      <div className={`${navbarLibraryListItemDescription}`}>
        {category} &#8226; {owner}
      </div>
    </div>
  );
}
export function UserLibrary() {
  const { data: albums, fetchData: fetchAlbums } = useAlbum();
  const { sdk } = useSpotify();
  console.log(albums);

  useEffect(() => {
    if (sdk) {
      fetchAlbums(sdk);
    }
  }, [sdk]);

  const link = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/`;
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
  const libraryItems = [
    {
      id: 1,
      title: 'Playlist 1',
      category: 'Playlist',
      owner: 'Owner 1',
      icon: link + '1.png',
    },
    {
      id: 2,
      title: 'Playlist 2',
      category: 'Playlist',
      owner: 'Owner 1',
      icon: link + '2.png',
    },
    {
      id: 3,
      title: 'Playlist 3',
      category: 'Playlist',
      owner: 'Owner 1',
      icon: link + '3.png',
    },
    {
      id: 4,
      title: 'Playlist 4',
      category: 'Playlist',
      owner: 'Owner 1',
      icon: link + '4.png',
    },
    {
      id: 5,
      title: 'Playlist 5',
      category: 'Playlist',
      owner: 'Owner 1',
      icon: link + '5.png',
    },
    {
      id: 6,
      title: 'Playlist 6',
      category: 'Playlist',
      owner: 'Owner 1',
      icon: link + '6.png',
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
        {libraryItems.map((item) => {
          return (
            <LibraryItem
              key={item.id}
              title={item.title}
              category={item.category}
              owner={item.owner}
              icon={item.icon}
            />
          );
        })}
      </div>
    </Container>
  );
}
