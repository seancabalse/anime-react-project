import React from 'react'

function Library(props) {
    console.log(props.animeList);
    return (
        <div className="grid lg:grid-cols-3">
            {props.animeList.map(anime => (
                <div className="w-full p-3 mx-0 my-5" key={anime.mal_id}>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg my-2" key={anime.mal_id}>
                        <img className="w-full" src={anime.image_url} alt="Top Anime" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{anime.title}</div>
                            <p className="text-gray-700 text-base">
                            {anime.synopsis}
                            </p>
                            <div className="grid place-items-center">
                                <a 
                                    href={anime.url} 
                                    target="_blank" 
                                    rel="noreferrer">
                                        <button className="bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 px-4 border-b-4 border-pink-700 hover:border-pink-500 rounded">
                                        More
                                        </button>
                                </a>
                            </div>
                            
                        </div>
                    </div>
                </div>
                ))
            }
        </div>
    )
}

export default Library
