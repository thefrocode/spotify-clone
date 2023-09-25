import {
  Button,
  Card,
  Container,
  List,
  navbarLibraryCategories,
} from '@spotify-clone/ui';
import { categories } from '@spotify-clone/shared';
import { useSearch } from '../../data-access/search.store';
import '../../results.css';
import {
  resultList,
  topResultFooter,
  topResultFooterText,
  topResultHeading,
  topResultImage,
} from '../../search.css';
export function SearchResults() {
  const { data, top_result } = useSearch();
  console.log(data?.tracks?.items,top_result);
  return (
    <div className="search--result">
      <ul className={`${navbarLibraryCategories}`}>
        {categories.map((item) => {
          return <Button primary={true} label={item.name} key={item.id} />;
        })}
      </ul>
      <List flex={1}>
      <div>
          <h2>Top Result</h2>
          <Container flexDirection="column" backgroundColor="#242424" gap="8px">
            <img
              src={top_result?.album.images[0].url}
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
        <div>
          <h2>Songs</h2>
          <div className="result--song-list">
            {data &&
              data.tracks &&
              data?.tracks?.items.map((item, index) => {
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
      </List>
      <div className={`${resultList}`}>
        <div className="result--list-item">
          <h2>Top Result</h2>
          <Container flexDirection="column" backgroundColor="#242424" gap="8px">
            <img
              src={top_result?.album.images[0].url}
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
          <h2>Songs</h2>
          <div className="result--song-list">
            {data &&
              data.tracks &&
              data?.tracks?.items.map((item, index) => {
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
      <h2>Artists</h2>
      <div className="result--list">
        {data &&
          data.artists &&
          data.artists.items?.map((item, index) => {
            return (
              <Card
                imgSrc={item.images[1].url}
                title={item.name}
                description="Artist"
                flexDirection="column"
                type="artist"
              />
            );
          })}
      </div>
      <h2>Albums</h2>
      <div className="result--list">
        {data &&
          data.albums &&
          data.albums.items?.map((item) => {
            return (
              <Card
                imgSrc={item.images[1].url}
                title={item.name}
                description={`${item.release_date} &#8226; ${item.artists[0].name}`}
                flexDirection="column"
              />
            );
          })}
      </div>
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

  return `${minutes}:${formattedSeconds}`;
}
