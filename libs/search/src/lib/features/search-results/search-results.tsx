import { Button, Container, navbarLibraryCategories } from '@spotify-clone/ui';
import { categories } from '@spotify-clone/shared';
import { useSearch } from '../../data-access/search.store';
import '../../results.css';
import {
  resultList,
  searchListCardHeading,
  topResultFooter,
  topResultFooterText,
  topResultHeading,
  topResultImage,
} from '../../search.css';
export function SearchResults() {
  const { data, top_result } = useSearch();
  console.log(data?.tracks?.items);
  return (
    <div>
      <ul className={`${navbarLibraryCategories}`}>
        {categories.map((item) => {
          return <Button primary={true} label={item.name} key={item.id} />;
        })}
      </ul>
      <div className={`${resultList}`}>
        <div className="result--list-item">
          <h1 className={`${searchListCardHeading}`}>Top Result</h1>
          <Container flexDirection="column" backgroundColor="#242424" gap="8px">
            <img
              src={top_result?.album.images[1].url}
              alt="Alt"
              className={`${topResultImage}`}
            />
            <label className={`${topResultHeading}`}>{top_result?.name}</label>
            <div className={`${topResultFooter}`}>
              <span className={`${topResultFooterText}`}>By Artist</span>
              <Button label="Playlist" primary={true} />
            </div>
          </Container>
        </div>
        <div className="result--list-item">
          <h1 className={`${searchListCardHeading}`}>Songs</h1>
          <div className="result--song-list">
            {data?.tracks?.items.map((item, index) => {
              return (
                <div key={index} className="result--song-list-item">
                  <img
                    src={item.album.images[1].url}
                    alt="Alt"
                    className="result--song-list-image"
                  />
                  <div className="result--song-list-desc">
                    <p>{item.name}</p>
                    <span>{item.artists[0].name}</span>
                  </div>
                  <span className="result--song-list-time">
                    {millisecondsToMinutesAndSeconds(item.duration_ms)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
function millisecondsToMinutesAndSeconds(milliseconds: number) {
  // Calculate total seconds
  const totalSeconds = Math.floor(milliseconds / 1000);

  // Calculate minutes and remaining seconds
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  // Format seconds to include a trailing zero if needed
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${minutes}:${formattedSeconds}` ;
}
