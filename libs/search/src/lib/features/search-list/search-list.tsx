import { SearchCard } from '../../ui/search-card';
import { search, searchList, searchListCardHeading } from '../../search.css';

export function SearchList() {
  const items = [
    {
      label: 'Made for You',
      backgroundColor: 'red',
      imgSrc:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png',
    },
    {
      label: 'Podcasts',
      backgroundColor: 'blue',
      imgSrc:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
    },
    {
      label: 'Charts',
      backgroundColor: 'green',
      imgSrc:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
    },
    {
      label: 'New Releases',
      backgroundColor: 'yellow',
      imgSrc:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png',
    },
    {
      label: 'Discover',
      backgroundColor: 'purple',
      imgSrc:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png',
    },
    {
      label: 'Concerts',
      backgroundColor: 'orange',
      imgSrc:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png',
    },
    {
      label: 'Genres & Moods',
      backgroundColor: 'purple',
      imgSrc:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png',
    },
    {
        label: 'Trending',
        backgroundColor: 'pink',
        imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png',   
    },{
        label: 'Moods',
        backgroundColor: 'lightblue',
        imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png',
    },{
        label: 'Caribbean',
        backgroundColor: 'darkgreen',
        imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png',
    },{
        label: 'Focus',
        backgroundColor: 'lightpink',
        imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png',
    },{
        label: 'Chill',
        backgroundColor: 'lightorange',
        imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png',
    },
    {
        label: 'Sleep',
        backgroundColor: 'lightpurple',
        imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png',
    },{
        label: 'Party',
        backgroundColor: 'maroon',
        imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png',
    },{
        label: 'Workout',
        backgroundColor: 'lightgreen',
        imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png',
    }
  ];

  return (
    <div className={`${search}`}>
      <h1 className={`${searchListCardHeading}`}>Browse All</h1>
      <div className={`${searchList}`}>
        {items.map((item, index) => {
          return <SearchCard key={index} {...item} />;
        })}
      </div>
    </div>
  );
}
