import React from 'react';
import * as styles from './card.css';

interface CardProps {
  children: React.ReactNode;
  display?: 'grid' | 'flex';
  flexDirection?: 'row' | 'column';
  justifyContent?: 'between' | 'center' | 'start' | 'end';
  alignContent?: 'between' | 'center' | 'start' | 'end';
}

interface CardImageProps {
  imgSrc: string;
  type: 'artist' | 'album' | 'playlist' | 'track' | 'show';
  direction: 'row' | 'column';
}

interface CardDescriptionProps {
  children: React.ReactNode;
  fontSize?: 'xs'|'sm';
}
export function Card({ children, display, flexDirection, justifyContent, alignContent }: CardProps) {
  return (
    <div
      className={styles.card({
        display,
        flexDirection,
        justifyContent,
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

export function CardDescription({children, fontSize }: CardDescriptionProps) {
  return <div className={styles.cardDescription({
    fontSize
  })}>{children}</div>;
}
