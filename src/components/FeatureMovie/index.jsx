import React from 'react'

import '../FeatureMovie/styles.css'

export function FeatureMovie({item}) {
    return (
       <section className="featured" style={{
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
       }} >
           <div className="featured--vertical">
                <div className="featured--vertical">
                    <div className="featured--name">{item.original_name}</div>

                    <div className="feature--info">
                        <div className="featured--points">{item.vote_average} pontos</div>
                        <div className="feature--year">2099</div>
                        <div className="feature--seasons">
                            {item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''} 
                        </div>
                    </div>

                    <div className="feature--description">{item.overview}</div>

                    <div className="feature--buttons">

                    </div>

                    <div className="feature--genres"><strong>Gêneros:</strong> ... </div>
                </div>
           </div>
       </section>
    )
}

