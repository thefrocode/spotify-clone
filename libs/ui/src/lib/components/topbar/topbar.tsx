import { BackButton } from '../../icons/back-button';
import { ForwardButton } from '../../icons/forward-button';
import { Search } from '../../icons/search';
import { Container } from '../container/container';
import { topbar, topbarContainers, topbarIcons, topbarSearch, topbarSearchInput } from './topbar.css';

export function Topbar() {
  return (
    <Container>
      <div className={`${topbar}`}>
        <div className={`${topbarContainers}`}>
          <span className={`${topbarIcons}`}>
            <BackButton />
          </span>
          <span className={`${topbarIcons}`}>
            <ForwardButton />
          </span>

          <div className={`${topbarSearch}`}>
            <Search color='white'/>
            <input className={`${topbarSearchInput}`}/>
          </div>
          
        </div>
        <div className={`${topbarContainers}`}>
          <button>Install button</button>
          <p>Profilt</p>
        </div>
      </div>
    </Container>
  );
}
