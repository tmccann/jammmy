import { useState } from 'react'
import './App.css'
import SearchBar from './components/searchBar/SearchBar'
import SearchResult from './components/searchResult/SearchResult'
import PlayList from './components/playList/PlayList'

function App() {
  return (
    <>
      <SearchBar />
      <div className="results-container">
        <SearchResult />
        <PlayList />
      </div>
    </>
  )
}

export default App

