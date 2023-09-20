import {
  searchListCard,
  searchListCardImage,
  searchListCardText,
} from '../search.css';

export interface SearchCardProps {
  name: string;
  imgSrc: string;
}
export function SearchCard({ name, imgSrc }: SearchCardProps) {
    const backgroundColors = [
        "#FF5733",
        "#33FF57",
        "#5733FF",
        "#FFFF33",
        "#33FFFF",
        "#FF33FF",
        "#FF3366",
        "#FF9933",
        "#33FF99",
        "#3366FF",
        "#99FF33",
        "#9933FF",
        "#FF33CC",
        "#FFCC33",
        "#33FFCC",
        "#33CCFF",
        "#CCFF33",
        "#CC33FF",
        "#FF33AA",
        "#FFAA33",
        "#33FFAA",
        "#33AAFF",
        "#AAFF33",
        "#AA33FF",
        "#FF3399",
        "#FF9933",
        "#33FF99",
        "#3399FF",
        "#99FF33",
        "#9933FF",
        "#FF3366",
        "#FF6633",
        "#33FF66",
        "#3366FF",
        "#66FF33",
        "#6633FF",
        "#FF3300",
        "#FF0033",
        "#33FF00",
        "#3300FF",
        "#00FF33",
        "#0033FF",
        "#FF0099",
        "#FF9900",
        "#33FF99",
        "#3399FF",
        "#99FF33",
        "#9933FF",
        "#FF00CC",
        "#FFCC00",
        "#33FFCC",
        "#33CCFF",
        "#CCFF33",
        "#CC33FF"
      ];
      
      
  const backgroundColor =
    backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
  return (
    <div className={`${searchListCard}`} style={{ backgroundColor }}>
      <div className={`${searchListCardText}`}>{name}</div>
      <img src={imgSrc} alt="Alt" className={`${searchListCardImage}`} />
    </div>
  );
}
