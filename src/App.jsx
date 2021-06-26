import React, {useEffect,useState} from 'react';

import { MovieRow } from './components/MovieRow';
import { FeatureMovie } from './components/FeatureMovie';

import './App.css'

import Tmdb from './Tmdb';

function App() {

  const[movieList, setMovieList] = useState([])
  const [featureData, setFeaturedData] = useState()

  useEffect(() => {
    const loadAll = async () => {  //Pegando a lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list)

      //Pegando o featured
      let originals = list.filter(i=> i.slug === 'originals');
      let randonfilm = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let film = originals[0].items.results[randonfilm];
      let filmInfo = await Tmdb.getMovieInfo(film.id, 'tv');
      setFeaturedData(filmInfo);

    }
    loadAll();
  }, [])

  return (
    <div className="page">
      
      {featureData &&
        <FeatureMovie item={featureData} />
      }
      
        <section className="lists">
          {movieList.map((item, key) => (
            <MovieRow 
              key={key} 
              title={item.title} 
              items={item.items} 
            />
          ))}
            
        </section>
    </div>
  );
}

export default App;
