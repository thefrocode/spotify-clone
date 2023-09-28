import {
  Card,
  CardDescription,
  CardImage,
  CardTitle,
  FifteenBack,
  FifteenForward,
  NextTrack,
  PreviousTrack,
  Play,
  Pause,
  Search,
  ChangeSpeed,
  vars,
  NowPlaying,
  Queue,
  ConnectDevice,
} from '@spotify-clone/ui';
import { useEffect, useState } from 'react';
import ProgressBar from '../ui/progress-bar/progress-bar';
import {
  cardTitleGroup,
  playback,
  playbackControls,
  playButton,
  playControlsTime,
} from './playback.css';

/* eslint-disable-next-line */
export interface PlaybackProps {}
interface PlaybackItemProps {
  imgSrc: string;
  category: 'artist' | 'album' | 'playlist' | 'track' | 'show';
  title: string;
  owner?: string;
}

function PlaybackItem({ imgSrc, category, title, owner }: PlaybackItemProps) {
  return (
    <Card display="grid">
      <CardImage imgSrc={imgSrc} type={category} direction="column" />
      <div className={cardTitleGroup}>
        <CardTitle title={title} />
        <CardDescription fontSize="xs">{owner}</CardDescription>
      </div>
    </Card>
  );
}
function PlaybackControls() {
  const [progress, setProgress] = useState(0);
  console.log(progress);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((progress) => (progress < 100 ? progress + 10 : progress));
      console.log(progress);
    }, 5000);

    return () => clearInterval(timer);
  }, []);
  return (
    <Card
      display="flex"
      flexDirection="column"
      padding="0px"
      justifyContent="center"
    >
      <div className={playbackControls}>
        <button>
          <ChangeSpeed color={vars.colors.fill} />
        </button>
        <button>
          <FifteenBack color={vars.colors.fill} />
        </button>
        <button>
          <PreviousTrack color={vars.colors.fill} />
        </button>
        <button className={playButton}>
          <Play color="#000" />
        </button>
        <button>
          <NextTrack color={vars.colors.fill} />
        </button>
        <button>
          <FifteenForward color={vars.colors.fill} />
        </button>
      </div>
      <Card
        display="flex"
        flexDirection="row"
        padding="0px"
        alignItems="center"
      >
        <span className={playControlsTime}>_:__</span>

        <ProgressBar value={progress} maxValue={100} barColor="white" />

        <span className={playControlsTime}>_:__</span>
      </Card>
    </Card>
  );
}
function AppControls() {
  return (
    <Card>
      <div className={playbackControls}>
        <button>
          <NowPlaying color={vars.colors.fill}/>
        </button>
        <button>
          <Queue color={vars.colors.fill}/>
        </button>
        <button>
          <ConnectDevice color={vars.colors.fill}/>
        </button>
      </div>
    </Card>
  );
}

export function Playback(props: PlaybackProps) {
  return (
    <div className={playback}>
      <Card
        display="flex"
        flexDirection="row"
        justifyContent="between"
        padding="0px"
        width="100%"
      >
        <PlaybackItem
          imgSrc="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
          title="The Rewatchables"
          category="show"
          owner="The Ringer & Bill Simmons"
        />
        <PlaybackControls />
        <AppControls />
      </Card>
    </div>
  );
}

//export default Playback;
