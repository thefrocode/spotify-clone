import { Container } from '../container/container';
import { flex } from '../global/global.css';
import * as styles from './card.css';

interface CardProps {
  imgSrc: string;
  title: string;
  description: string;
  time: string;
  flexDirection: 'row' | 'column';
  type: 'artist' | 'album' | 'playlist' | 'track';
}
export function Card({
  imgSrc,
  title,
  description,
  time,
  flexDirection,
  type,
}: CardProps) {
  // const card =
  //   flexDirection === 'column' ? styles.cardItemColumn : styles.cardItemRow;
  // const imgStyle =
  //   flexDirection === 'column'
  //     ? type === 'artist'
  //       ? styles.cardImageArtistColumn
  //       : styles.cardImageArtistColumn
  //     : styles.cardImageRow;
  return (
    <div className={styles.card[flexDirection]}>
      <img src={imgSrc} alt="Alt" className={styles.cardImage[flexDirection]} />
      <div>
        <p>{title}</p>
        <span>{description}</span>
      </div>
      <span className="result--song-list-time">{time}</span>
    </div>
  );
}
