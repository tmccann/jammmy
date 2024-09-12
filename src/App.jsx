import { useState } from 'react';
import './App.css';
import SearchBar from './components/searchBar/SearchBar';
import SearchResult from './components/searchResult/SearchResult';
import PlayList from './components/playList/PlayList';

function App() {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.search.value; // Get the value from the form input
    setSearch(searchValue); // Update the search state
    console.log('Search query:', searchValue); // You can also log the value or handle other logic here
  };

  return (
    <>
      <SearchBar handleSearch={handleSearch} />
      <div className="results-container">
        <SearchResult search={search} />
        <PlayList />
      </div>
    </>
  );
}

export default App;



