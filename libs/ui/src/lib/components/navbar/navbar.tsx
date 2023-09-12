import { Container } from '../container/container';
import {
  navbar,
  navbarItem,
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
} from './navbar.css';
import { FaHome, FaSearch, FaPlus } from 'react-icons/fa';
import Library from '../../icons/library';
import { Plus } from '../../icons/plus';
import { Button } from '../button/Button';
import { Search } from '../../icons/search';
import { time } from 'console';

interface NavbarItemProps {
  label: string;
  icon?: any;
}
interface LibraryItemProps {
  title: string;
  category: string;
  icon?: any;
  owner: string;
}

function NavbarItem({ label, icon }: NavbarItemProps) {
  return (
    <div className={`${navbarItem}`}>
      {icon}
      <div>{label}</div>
    </div>
  );
}

function LibraryItem({ title, icon, category, owner }: LibraryItemProps) {
  return (
    <div className={`${navbarLibraryListItem}`}>
      <img src={icon} alt="Alt"className={`${navbarLibraryListItemImage}`}/>
      <div className={`${navbarLibraryListItemTitle}`}>{title}</div>
      <div className={`${navbarLibraryListItemDescription}`}>
        {category} &#8226; {owner}
      </div>
    </div>
  );
}

export function Navbar() {
  const link = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/`
  const items = ['Playlists', 'Albums', 'Artists'];
  const libraryItems = [
    {
      title: 'Playlist 1',
      category: 'Playlist',
      owner: 'Owner 1',
      icon: link + '1.png',
    },
    {
      title: 'Playlist 2',
      category: 'Playlist',
      owner: 'Owner 1',
      icon: link + '2.png',
    },
    {
      title: 'Playlist 3',
      category: 'Playlist',
      owner: 'Owner 1',
      icon: link + '3.png',
    },
    {
      title: 'Playlist 4',
      category: 'Playlist',
      owner: 'Owner 1',
      icon: link + '4.png',
    },
    {
      title: 'Playlist 5',
      category: 'Playlist',
      owner: 'Owner 1',
      icon: link + '5.png',
    },
    {
      title: 'Playlist 6',
      category: 'Playlist',
      owner: 'Owner 1',
      icon: link + '6.png',
    },
  ];

  return (
    <div className={`${navbar}`}>
      <Container flexDirection="column">
        <NavbarItem label="Home" icon={<FaHome size={24} />} />

        <NavbarItem label="Search" icon={<FaSearch size={24} />} />
      </Container>
      <Container flexDirection="column">
        <div className={`${navbarLibrary}`}>
          <button className={`${navbarLibraryButton}`}>
            <Library />
            Your Library
          </button>
          <Plus />
        </div>
        <ul className={`${navbarLibraryCategories}`}>
          {items.map((item) => {
            return <Button primary={true} label={item} />;
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
                title={item.title}
                category={item.category}
                owner={item.owner}
                icon={item.icon}
              />
            );
          })}
        </div>
      </Container>
    </div>
  );
}
