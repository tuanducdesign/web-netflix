import React from 'react'

import '../FeatureMovie/styles.css'

import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

export function FeatureMovie({item}) {

    let firtDate = new Date(item.first_air_date);

    let genres = []
    for(let i in item.genres) {
        genres.push(item.genres[i].name)
    }

    return (
       <section className="featured" style={{
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
       }} >
           <div className="featured--vertical">
                <div className="featured--horinzontal">
                    <div className="featured--name">{item.original_name}</div>

                    <div className="feature--info">
                        <div className="featured--points">{item.vote_average} pontos</div>
                        <div className="feature--year">{firtDate.getFullYear()}</div>
                        <div className="feature--seasons">
                            {item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''} 
                        </div>
                    </div>

                    <div className="feature--description">{item.overview}</div>

                    <div className="feature--buttons">
                        <a href={`/watch/${item.id}`} className="feature--watchbutton"> ► Assistir</a>
                        <a href={`/list/${item.id}`} className="feature--myinfobutton">
                            <ErrorOutlineIcon style={{marginRight: '10'}} />
                            <span>Mais informações</span> 
                        </a>
                    </div>

                    <div className="feature--genres"><strong>Gêneros:</strong> {genres.join(', ')}</div>
                </div>
           </div>
       </section>
    )
}

