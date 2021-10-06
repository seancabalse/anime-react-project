import React from 'react'
import AnimeCard from './AnimeCard'

function Library(props) {
    return (
        <main>
            <div>
                {props.animeList.map(anime => (
                        <AnimeCard
                            anime={anime}
                            key={anime.mal_id} />
                    ))
                }
            </div>
        </main>
    )
}

export default Library
