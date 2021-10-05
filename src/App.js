import { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Library from './components/Library';

function App() {
  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState("");

  const getTopAnime = async () => {
    const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
      .then(res => res.json());

     setTopAnime(temp.top.slice(0,5));
  }

  const searchAnime = event => {
    event.preventDefault();

    fetchAnime(search);
  }

  const fetchAnime = async (query) => {
    const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title
      &sort=asc&limit=10`)
      .then(res => res.json());

    setAnimeList(temp.results);
  }

  useEffect(() => {
    getTopAnime();
    console.log(topAnime);
  },[]);

  console.log(topAnime);

  return (
    <div className="App">
      <Header />
      <div>
        <Sidebar 
          topAnime={topAnime} />
        <Library 
          searchAnime={searchAnime}
          search={search}
          setSearch={setSearch}
          animeList={animeList} />
      </div>
    </div>
  );
}

export default App;
