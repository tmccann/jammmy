import { useState } from 'react';
import './App.css';

import SearchBar from './components/searchBar/SearchBar';
import SearchResult from './components/searchResult/SearchResult';
import TrackList from './components/trackList/TrackList'

function App() {
  const [searchResults, setSearchResults] = useState([
    {
      name: "Example Track Name 1",
      artist: "Example Track Artist 1",
      album: "Example Track Album 1",
      id: 1,
    },
    {
      name: "Example Track Name 2",
      artist: "Example Track Artist 2",
      album: "Example Track Album 2",
      id: 2,
    },
  ]);
  const [playlistName, setPlaylistName] = useState("Example Playlist Name");
  const [playlistTracks, setPlaylistTracks] = useState([
    {
      name: "Example Playlist Name 1",
      artist: "Example Playlist Artist 1",
      album: "Example Playlist Album 1",
      id: 11,
    },
    {
      name: "Example Playlist Name 2",
      artist: "Example Playlist Artist 2",
      album: "Example Playlist Album 2",
      id: 22,
    },
    {
      name: "Example Playlist Name 3",
      artist: "Example Playlist Artist 3",
      album: "Example Playlist Album 3",
      id: 33,
    },
  ]);
 

  return (
    <>
      <h1>Ja<span className='highlight'>mmm</span>ing</h1>
      <section className='App'>
        <SearchBar />
        <section className='playListContainer'>
        <SearchResult className/>
        <TrackList />
        </section>
       
      </section>
    </>
  );
}

export default App;



