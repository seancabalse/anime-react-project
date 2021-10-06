import React from 'react'

function Sidebar({ topAnime }) {
    return (
        <div className="bg-white rounded flex flex-col self-start p-8 w-full md:max-w-xs shadow md:sticky hidden lg:flex">
            <h2 className="text-dark font-bold text-xl mb-2">Top Anime</h2>
            {topAnime.map(anime => (
                    <div className="max-w-sm rounded overflow-hidden shadow-lg my-2" key={anime.mal_id}>
                        <img className="w-full" src={anime.image_url} alt="Top Anime" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{anime.title}</div>
                                <div className="font-semibold text-sm mb-2">Rank: {anime.rank}</div>
                                <div className="font-semibold text-sm mb-2">Rating: {anime.score}/10</div>
                                <div className="font-semibold text-sm mb-2">Episodes: {anime.episodes}</div>
                                <div className="font-semibold text-sm mb-2">Start Date: {anime.start_date}</div>
                                <div className="font-semibold text-sm mb-2">End Date: {anime.end_date}</div>
                            </div>
                            <div className="px-4 pt-1 pb-2">
                                <a 
                                    href={anime.url} 
                                    target="_blank" 
                                    rel="noreferrer">
                                    <span className="inline-block bg-gray-300 hover:bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">More...</span>
                                </a>
                                
                            </div>
                    </div>
                    ))}
        </div>
    )
}

export default Sidebar

