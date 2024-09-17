import React, { useState } from 'react';
import './App.css';
import { sampleData } from './data/sampleData';
import SearchBar from './components/searchBar/SearchBar';
import SearchResult from './components/searchResult/SearchResult';
import PlayList from './components/playList/PlayList';
import { getAccessToken, startOAuthFlow } from './util/spotify'; 

function App() {
  const [searchData, setSearchData] = useState([
    { id: 1, name: "Stan", artist: "Eminem", album: "Curtain Call: The Hits" },
    { id: 2, name: "I'm Feeling It", artist: "Sunset Bros & Mark McCabe", album: "100% Clubland X-Treme 2" },
    { id: 3, name: "Vampire", artist: "Olivia Rodrigo", album: "GUTS" },
    { id: 4, name: "Play That Song", artist: "Train", album: "a girl a bottle a boat" },
    { id: 5, name: "TEXAS HOLD 'EM", artist: "Beyoncé", album: "COWBOY CARTER" },
  ]);

  const [userSearch, setUserSearch] = useState('');
  const [playlistName, setPlaylistName] = useState("Example Playlist Name");
  const [playlistTracks, setPlaylistTracks] = useState([
    { name: "Example Playlist Name 1", artist: "Example Playlist Artist 1", album: "Example Playlist Album 1", id: 11 },
    { name: "Example Playlist Name 2", artist: "Example Playlist Artist 2", album: "Example Playlist Album 2", id: 22 },
    { name: "Example Playlist Name 3", artist: "Example Playlist Artist 3", album: "Example Playlist Album 3", id: 33 },
  ]);

  const handleSearch = (searchTerm) => {
    const token = getAccessToken();
    if (token) {
      setUserSearch(searchTerm);
      console.log("Search Term:", searchTerm);
      // Perform search logic here, e.g., filter `searchData`
    } else {
      // Redirect to Spotify for authorization if no token is found
      startOAuthFlow();
    }
  };

  return (
    <>
      <h1>Ja<span className='highlight'>mmm</span>ing</h1>
      <section className='App'>
        <SearchBar handleSearch={handleSearch} />
        <section className='playListContainer'>
          <SearchResult search={searchData} />
          <PlayList tracks={playlistTracks} />
        </section>
      </section>
    </>
  );
}

export default App;




