import styles from './SearchResults.module.css'
import TrackList from '../trackList/TrackList';

function SearchResult({ search, onAdd }) {
  return (
    <section className={styles.SearchResults}>
      <TrackList 
        tracks={search} 
        listType="search"
        onAdd={onAdd}/>
    </section>
  )
}

export default SearchResult;
