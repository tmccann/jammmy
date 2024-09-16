import styles from './SearchResults.module.css'
import TrackList from '../trackList/TrackList';

function SearchResult({ search }) {
  console.log(search)
  return (
    <section className={styles.SearchResults}>
      <TrackList tracks={search} listType="search"/>
    </section>
  )
}

export default SearchResult;
