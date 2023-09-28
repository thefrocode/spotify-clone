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
} from '@spotify-clone/ui';
import { cardTitleGroup, playback, playbackControls, playButton } from './playback.css';

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
  return (
    <Card flexDirection="column">
      <div className={playbackControls}>
        <button>
          <ChangeSpeed color={vars.colors.fill}/>
        </button>
        <button>
          <FifteenBack color={vars.colors.fill}/>
        </button>
        <button>
          <PreviousTrack color={vars.colors.fill}/>
        </button>
        <button className={playButton}>
          <Play color='#000'/>
        </button>
        <button>
          <NextTrack color={vars.colors.fill}/>
        </button>
        <button>
          <FifteenForward color={vars.colors.fill}/>
        </button>
      </div>
      <div>
        <span>_:__</span>
        <div></div>
        <span>_:__</span>
      </div>
      
    </Card>
  );
}

export function Playback(props: PlaybackProps) {
  return (
    <div className={playback}>
      <Card display="flex" flexDirection="row" justifyContent="between">
        <PlaybackItem
          imgSrc="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
          title="The Rewatchables"
          category="show"
          owner="The Ringer & Bill Simmons"
        />
        <PlaybackControls />
        <div>Playback</div>
      </Card>
    </div>
  );
}

//export default Playback;
