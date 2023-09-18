import { BackButton } from '../../icons/back-button';
import { ForwardButton } from '../../icons/forward-button';
import { Profile } from '../../icons/profile';
import { Search } from '../../icons/search';
import { Container } from '../container/container';
import {
  topbar,
  topbarContainers,
  topbarIcons,
  topbarProfile,
  topbarProfileDropdown,
  topbarSearch,
  topbarSearchInput,
} from './topbar.css';

export function Topbar() {
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
        <div className={`${topbarIcons}`}>
          <div>
            <Profile />
            <div className={`${topbarProfileDropdown}`}>
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
