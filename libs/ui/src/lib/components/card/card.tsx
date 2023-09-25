import { Container } from '../container/container';
import * as styles from './card.css';

interface CardProps {
  imgSrc: string;
  title: string;
  description: string;
  flexDirection: 'row' | 'column';
  type: 'artist' | 'album' | 'playlist' | 'track'
}
export function Card({ imgSrc, title, description, flexDirection,type }: CardProps) {
  const card = flexDirection === 'column' ? styles.cardItemColumn : styles.cardItemRow;
  const imgStyle = flexDirection==='column'?type === 'artist' ? styles.cardImageArtistColumn : styles.cardImageArtistColumn: styles.cardImageRow;
  return (
    <div className={`${card}`}>
      <img src={imgSrc} alt="Alt" className={imgStyle}/>
      <p>{title}</p>
      <span>{description}</span>
    </div>
  );
}
