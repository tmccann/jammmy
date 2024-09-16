import styles from './SearchResults.module.css'

function SearchResult({ searchData }) {
  console.log(searchData)
  return (
    <section className={styles.SearchResults}>
      <TrackList searchData={searchData} />
    </section>
  )
}

export default SearchResult;
