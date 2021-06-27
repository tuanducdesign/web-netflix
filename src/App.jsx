import React, {useEffect,useState} from 'react';

import { MovieRow } from './components/MovieRow';
import { FeatureMovie } from './components/FeatureMovie';
import { Header } from './components/Header';

import './App.css'

import Tmdb from './Tmdb';

function App() {

  const[movieList, setMovieList] = useState([])
  const [featureData, setFeaturedData] = useState()
  const [blackHeader, setBlackHeader] = useState(false)

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

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }
    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  },[])

  return (
    <div className="page">

      <Header black={blackHeader} />
      
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

        <footer>
        Feito para estudo de react, todos os direitos das imagens são da Netflix.<br/>
        Dados Extraidos de https://www.themoviedb.org/ <br/>
              & Carlos Eduardo Silva 
        </footer>
        
        {movieList.length <= 0 &&
      <div className="loading">
        <img src="https://cdn.lowgif.com/small/0534e2a412eeb281-the-counterintuitive-tech-behind-netflix-s-worldwide.gif" alt="loading"></img>
      </div>
    }

    </div>
  );
}

export default App;
