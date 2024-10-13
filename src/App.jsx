import { useState, useCallback, useEffect } from "react";
import Spotify from "./utils/Spotify";
import { exchangeCodeForTokens } from "./utils/authCode";
import "./App.css";

import SearchBar from "./components/searchBar/SearchBar";
import SearchResult from "./components/searchResult/SearchResult";
import PlayList from "./components/playList/PlayList";

function App() {

  const [searchData, setSearchData] = useState([]);
  const [userSearch, setUserSearch] = useState("");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("code")) {

      let code = urlParams.get("code");
      if (code) {
        exchangeCodeForTokens(code);
      }
    }
    // clean up to stop going into infinite loop 
    return () => {
      // Reset the URL back to the default app URL (without the "code" query param)
      window.history.replaceState({}, document.title, "/");

    };
    
  }, []);

  const handleSearch = useCallback(async (term) => {
    try {
      const data = await Spotify.trackSearch(term);
      if(data.length > 0){
        setSearchData(data);
      }else{
        console.error('no traks found')
        console.log(hasSearched)
      }     
    } catch (error) {
      console.error("Search failed:", error);
    }
  }, []);


  const handlePlayListSubmit = (playListName) =>{

    const trackUri =playlistTracks.map((track)=>(track.uri))
    Spotify.addPlayList(playListName, trackUri)
    setPlaylistTracks([])
    setSearchData([])
    
  }


  const onAdd = (id) => {
    const trackCheck = playlistTracks.filter((track) => track.id === id)
    trackCheck.length ? console.log(true) : console.log(false)
    if(!trackCheck.length){
    const newTrack = searchData.filter((track) => track.id === id)
      setPlaylistTracks(searchData => [newTrack[0], ...searchData] )
    } else{
      console.log('already added')
    }
  };

  const onRemove = (id) => {
    setPlaylistTracks(playlistTracks.filter((track)=> track.id !== id))
  };
  
  

  
  return (
    <>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <section className="App">
        <SearchBar handleSearch={handleSearch} />

        <section className="playListContainer">
          <SearchResult search={searchData} onAdd={onAdd}/>
          <PlayList 
            tracks={playlistTracks} 
            onRemove={onRemove}
            handlePlayListSubmit={handlePlayListSubmit}
            
            />
        </section>
      </section>
    </>
  );
}

export default App;
