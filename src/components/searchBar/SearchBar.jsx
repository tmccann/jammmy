import style from './SearchBar.module.css'

function SearchBar({handleSearch}) {

  
  return (
    <>
    <form onSubmit={handleSearch} className='style.form'>
        <label htmlFor="SearchBox"></label>
        <input type="text" id="searchBox" name="search" />
        <button>Search</button>
    </form>
    </>
  )
}
export default SearchBar