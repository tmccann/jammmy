import styles from './SearchBar.module.css'

function SearchBar({ handleSearch }) {

  const onSubmit = (e) => {
    e.preventDefault();
    const searchTerm = e.target.search.value;
    handleSearch(searchTerm)
    e.target.reset();
  };
  return (
    <>
      <form onSubmit={onSubmit} className={styles.SearchBar}>
        <label htmlFor="searchBox"></label>
        <input type="text" id="searchBox" name="search" placeholder='Enter A Song Title' />
        <button type='submit' className={styles.SearchButton}>Search</button>
      </form>
    </>
  );
}

export default SearchBar;
