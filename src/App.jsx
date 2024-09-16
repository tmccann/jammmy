import { useState } from 'react';
import './App.css';
import  { sampleData } from './data/sampleData'

import SearchBar from './components/searchBar/SearchBar';
import SearchResult from './components/searchResult/SearchResult';
import PlayList from './components/playList/PlayList';

function App() {
  const [searchData, setSearchData] = useState([]);

  const [userSearch,setUserSearch]= useState('')
  const [playlistName, setPlaylistName] = useState("Example Playlist Name");
  const [playlistTracks, setPlaylistTracks] = useState([
    {
      name: "Example Playlist Name 1",
      artist: "Example Playlist Artist 1",
      album: "Example Playlist Album 1",
      id: 1,
    },
    {
      name: "Example Playlist Name 2",
      artist: "Example Playlist Artist 2",
      album: "Example Playlist Album 2",
      id: 2,
    },
    {
      name: "Example Playlist Name 3",
      artist: "Example Playlist Artist 3",
      album: "Example Playlist Album 3",
      id: 3,
    },
  ]);
  

  const handleSearch = (searchTerm) => {
    setUserSearch(searchTerm);
    console.log("Search Term:", searchTerm);
    getData()
  };
const getData = (searchTerm)=>{
  sampleData.includes(searchTerm)
}

  return (
    <>
      <h1>Ja<span className='highlight'>mmm</span>ing</h1>
      <section className='App'>
        <SearchBar handleSearch={handleSearch}/>
        <section className='playListContainer'>
        <SearchResult search={searchData}/>
        <PlayList
          tracks={playlistTracks}
        />
        </section>
       
      </section>
    </>
  );
}

export default App;



