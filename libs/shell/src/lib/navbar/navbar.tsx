import { Container } from '@spotify-clone/ui';
import { FaHome, FaSearch, FaPlus } from 'react-icons/fa';
import { navbar, navbarItem } from './navbar.css';
import { UserLibrary } from '@spotify-clone/user-library';
import { Link } from '@tanstack/react-location';

interface NavbarItemProps {
  label: string;
  icon?: any;
  to: string
}

function NavbarItem({ label, icon, to }: NavbarItemProps) {
  return (
    <Link to={to} className={`${navbarItem}`}>
      {icon}
      <div>{label}</div>
    </Link>
  );
}

export function Navbar() {
  return (
    <div className={`${navbar}`}>
      <Container flexDirection="column" margin="0px" flexShrink={0}>
        <NavbarItem label="Home" to='/home'icon={<FaHome size={24} />} />

        <NavbarItem label="Search" to='/search' icon={<FaSearch size={24} />} />
      </Container>
      <UserLibrary/>
    </div>
  );
}
