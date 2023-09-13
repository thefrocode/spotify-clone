import { Container } from "../container/container";
import { card, cardDescription, cardImage, cardTitle } from "./card.css";

interface CardProps{
    imgSrc: string;
    title: string;
    description: string;
}
export function Card({
    imgSrc, title, description
}: CardProps){
    return (
        <Container>
            <div className={`${card}`}>
                <img className={`${cardImage}`} src={imgSrc} alt="Alt" />
                <span className={`${cardTitle}`}>{title}</span>
                <span className={`${cardDescription}`}>{description}</span>
            </div>
        </Container>
    )
}