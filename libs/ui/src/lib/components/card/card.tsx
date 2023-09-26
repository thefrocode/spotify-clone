import React from 'react';
import * as styles from './card.css';

interface CardProps {
  children: React.ReactNode;
  display?: 'grid' | 'flex';
  flexDirection?: 'row' | 'column';
}

interface CardImageProps {
  imgSrc: string;
  type: 'artist' | 'album' | 'playlist' | 'track';
  direction: 'row' | 'column';
}
export function Card({ children, display, flexDirection }: CardProps) {
  return (
    <div
      className={styles.card({
        display,
        flexDirection,
        cols: 'card',
        rows: 'card',
        wrap: 'nowrap',
      })}
    >
      {children}
    </div>
  );
}
export function CardImage({ imgSrc, type, direction }: CardImageProps) {
  return (
    <img
      className={styles.cardImage({
        type,
        direction,
      })}
      src={imgSrc}
      alt="Alt"
    />
  );
}
export function CardTitle({ title }: { title?: string }) {
  return <div className={styles.cardTitle['library']}>{title}</div>;
}

export function CardDescription({children }: { children: React.ReactNode}) {
  return <div className={styles.cardDescription}>{children}</div>;
}
