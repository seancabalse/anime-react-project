import React from 'react'
import AnimeCard from './AnimeCard'

function Library(props) {
    return (
        <main>
            <div>
               <form
                    onSubmit={props.searchAnime}>
                   <input
                        type="search"
                        placeholder="Search for an anime"
                        required 
                        value={props.search}
                        onChange={event => props.setSearch(event.target.value)}/>
               </form> 
            </div>
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
