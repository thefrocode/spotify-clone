import { Container } from '../container/container';
import {
  cardDescription,
  cardImage,
  cardItemColumn,
  cardItemRow,
  cardTitle,
} from './card.css';

interface CardProps {
  imgSrc: string;
  title: string;
  description: string;
  flexDirection: 'row' | 'column';
}
export function Card({ imgSrc, title, description, flexDirection }: CardProps) {
  const card = flexDirection === 'column' ? cardItemColumn : cardItemRow;
  return (
    <div className={`${card}`}>
      <img src={imgSrc} alt="Alt" />
      <p>{title}</p>
      <span>{description}</span>
    </div>
  );
}
