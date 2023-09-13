import { Card } from '../card/card';
import { cardList } from '../card/card.css';
import { home, homeGreeting, homeHeading, popularCard, popularCardImage, popularCardText, popularCardTitleSection, popularListGrid } from './home.css';

function Popular(imgSrc: string, label: string) {
  return (
    <div className={`${popularCard}`}>
      <img src={imgSrc} alt="Alt" className={`${popularCardImage}`}/>
      <div className={`${popularCardTitleSection}`}>
      {label}
      </div>
      
    </div>
  );
}

export function Home() {
  const popularSongs = [
    {
      imgSrc:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png',
      label: 'Song 1',
    },
    {
      imgSrc:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
      label: 'Song 6',
    },
    {
      imgSrc:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
      label: 'Song 7',
    },
    {
        imgSrc:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png',
        label: 'Song 8',
      },
      {
        imgSrc:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png',
        label: 'Song 9',
      },
      {
        imgSrc:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png',
        label: 'Song 10',
      },
  ];

  const yourShows = [
    {
        imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
        title: 'Show 1',
        description: 'Description 1'
    },
    {
        imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
        title: 'Show 2',
        description: 'Description 2'
    },
    {
        imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png',
        title: 'Show 3',
        description: 'Description 3'
    },{
        imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
        title: 'Show 4',
        description: 'Description 4'
    }

  ]
  return (
    <div className={`${home}`}>
      <h1 className={`${homeGreeting}`}>Good Evening</h1>
      <div className={`${popularListGrid}`}>
        {popularSongs.map((song) => {
          return Popular(song.imgSrc, song.label);
        })}
      </div>
      <h1 className={`${homeHeading}`}>Your Shows</h1>
      <div className={`${cardList}`}>
        {
            yourShows.map((show)=>{
                return Card(show)
            })
        }
      </div>
      <h1 className={`${homeHeading}`}>Recently Played</h1>
      <div className={`${cardList}`}>
        {
            yourShows.map((show)=>{
                return Card(show)
            })
        }
      </div>

    </div>
  );
}
