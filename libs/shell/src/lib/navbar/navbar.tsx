import { Container } from '@spotify-clone/ui';
import { FaHome, FaSearch, FaPlus } from 'react-icons/fa';
import { navbar, navbarItem } from './navbar.css';
import { UserLibrary } from '@spotify-clone/user-library';

interface NavbarItemProps {
  label: string;
  icon?: any;
}

function NavbarItem({ label, icon }: NavbarItemProps) {
  return (
    <div className={`${navbarItem}`}>
      {icon}
      <div>{label}</div>
    </div>
  );
}

export function Navbar() {
  return (
    <div className={`${navbar}`}>
      <Container flexDirection="column" margin="0px">
        <NavbarItem label="Home" icon={<FaHome size={24} />} />

        <NavbarItem label="Search" icon={<FaSearch size={24} />} />
      </Container>
      <UserLibrary/>
    </div>
  );
}
