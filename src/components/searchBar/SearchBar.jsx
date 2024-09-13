import styles from './SearchBar.module.css'

function SearchBar() {
  return (
    <>
      <form className={styles.SearchBar}>
        <label htmlFor="searchBox"></label>
        <input type="text" id="searchBox" name="search" placeholder='Enter A Song Title' />
        <button className={styles.SearchButton}>Search</button>
      </form>
    </>
  );
}

export default SearchBar;
