import { Container } from '../container/container';
import { MainView } from '../mainview/mainview';
import { Navbar } from '../navbar/navbar';
import { Playback } from '../playback/playback';
import { Topbar } from '../topbar/topbar';
import { shell } from './shell.css';

export function Shell() {
  return (
    <div className={`${shell}`}>
      <Navbar />
      <Container flexDirection='column'
      gap='12px'>
        <Topbar />
        <MainView />
      </Container>
      <Playback/>
    </div>
  );
}
