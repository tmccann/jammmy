import style from './SearchBar.module.css'

function SearchBar() {
  return (
    <>
    <form className='style.form'>
        <label htmlFor="SearchBox"></label>
        <input type="text" />
        <button>Search</button>
    </form>
    </>
  )
}
export default SearchBar