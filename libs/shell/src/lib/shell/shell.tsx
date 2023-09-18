import { Container } from '@spotify-clone/ui';
import { Playback } from '@spotify-clone/ui';
import { MainView } from '../mainview/mainview';
import { Navbar } from '../navbar/navbar';

import { Topbar } from '../topbar/topbar';
import { shell } from './shell.css';

export function WebShell() {
  return (
    <div className={`${shell}`}>
      <Navbar />
      <Container flexDirection="column" gap="12px" margin="0px">
        <Topbar />
        <MainView />
      </Container>
      <Playback />
    </div>
  );
}
