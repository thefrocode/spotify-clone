import { searchListCard, searchListCardImage, searchListCardText } from "../search.css";

export interface SearchCardProps {
    label: string;
    imgSrc: string;
    backgroundColor: string;
}
export function SearchCard({ label, imgSrc, backgroundColor }: SearchCardProps) {
  return (
    <div className={`${searchListCard}`}  style={{ backgroundColor }}>
      <div className={`${searchListCardText}`}>{label}</div>
      <img src={imgSrc} alt="Alt" className={`${searchListCardImage}`}/>
    </div>
  );
}
