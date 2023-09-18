import { useSpotify } from '@spotify-clone/shared';
import { useRef, useState } from 'react';
import { BackButton, ForwardButton, Search, Profile} from '@spotify-clone/ui';

import {
  topbar,
  topbarContainers,
  topbarIcons,
  topbarProfile,
  topbarProfileDropdown,
  topbarProfileDropdownContent,
  topbarSearch,
  topbarSearchInput,
} from './topbar.css';

export function Topbar() {
  const profileDropDown = useRef<HTMLDivElement | null>(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const { user, authenticate, logout } = useSpotify();

  function handleProfileClick() {
    if (isDropdownVisible && profileDropDown.current) {
      profileDropDown.current.style.display = 'none';
    } else if (!isDropdownVisible && profileDropDown.current) {
      profileDropDown.current.style.display = 'block';
    }
    setIsDropdownVisible(!isDropdownVisible);
  }

  return (
    <div className={`${topbar}`}>
      <div className={`${topbarContainers}`}>
        <span className={`${topbarIcons}`}>
          <BackButton />
        </span>
        <span className={`${topbarIcons}`}>
          <ForwardButton />
        </span>

        <div className={`${topbarSearch}`}>
          <Search color="white" />
          <input className={`${topbarSearchInput}`} />
        </div>
      </div>

      <div className={`${topbarContainers} ${topbarProfile}`}>
        <div className={`${topbarIcons}`} onClick={handleProfileClick}>
          <div>
            <Profile />
            <div ref={profileDropDown} className={`${topbarProfileDropdown}`}>
              <ul className={`${topbarProfileDropdownContent}`}>
                {user && (
                  <>
                    <li>{user.display_name}</li>
                    <hr />
                    <li onClick={logout}>Log Out</li>
                  </>
                )}
                {!user && <li onClick={authenticate}>Log In</li>}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
