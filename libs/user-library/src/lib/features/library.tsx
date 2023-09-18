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
  navbarLibraryListItemArtistImage,
} from '@spotify-clone/ui';
import { Container, Button, Plus, Search, Library} from '@spotify-clone/ui';
import { useSpotify } from '@spotify-clone/shared';
import { useAlbum } from '@spotify-clone/albums';
import { useEffect } from 'react';
import { useUserLibrary } from '../data-access/user-library.store';


interface LibraryItemProps {
  title?: string;
  category?: string;
  icon?: any;
  owner?: string;
}


function LibraryItem({ title, icon, category, owner }: LibraryItemProps) {
  const imageStyle = category==='artist'? navbarLibraryListItemArtistImage: navbarLibraryListItemImage
  return (
    <div className={`${navbarLibraryListItem}`}>
      <img src={icon} alt="Alt" className={`${imageStyle}`} />
      <div className={`${navbarLibraryListItemTitle}`}>{title}</div>
      <div className={`${navbarLibraryListItemDescription}`}>
        {category && category.charAt(0).toUpperCase() + category.slice(1)} {owner ? <>&#8226; {owner}</> : null}
      </div>
    </div>
  );
}
export function UserLibrary() {
  
    const { library } = useUserLibrary();
  console.log(library);

  

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
          return (
            <LibraryItem
              title={item.album?.name || item.show?.name || item.name}
              category={item.album?.type || item.show?.type || item.type}
              owner={item.album?.label || item.show?.publisher}
              icon={item.album?.images[2].url || item.show?.images[2].url || item.images[2]?.url || item.images[0].url}
            />
          );
        })}
      </div>
    </Container>
  );
}
