import { Card, CardDescription, CardImage, CardTitle } from '@spotify-clone/ui';
import { Album, SimplifiedShow } from '@spotify/web-api-ts-sdk';
import { type } from 'os';

interface LibraryItemCardProps {
  added_at?: string;
  show?: SimplifiedShow;
  album?: Album;
  images?: any;
  name?: string; 
  type: string; 
}
type type = 'artist' | 'album' | 'playlist' | 'track'; 
export function LibraryItemCard(item: LibraryItemCardProps) {
  const category:type = (item.album?.type || item.show?.type || item.type) as type;
  const owner = item.album?.label || item.show?.publisher;
  return (
    <Card display="grid">
      <CardImage
        imgSrc={
          item.album?.images[2].url ||
          item.show?.images[2].url ||
          item.images[2]?.url ||
          item.images[0].url
        }
        type={category}
        direction="column"
      />
      <CardTitle title={item.album?.name || item.show?.name || item.name} />
      <CardDescription>
        {category && category.charAt(0).toUpperCase() + category.slice(1)}{' '}
        {owner ? <>&#8226; {owner}</> : null}
      </CardDescription>
    </Card>
  );
}
