import React from 'react'
import { useGlobalContext } from './context';
//api_key = up6RLtK_nAKz5iVympCzXVna1sAoK8TzDLLvkoWoAAk
//const url = 'https://api.unsplash.com/search/photos?client_id=up6RLtK_nAKz5iVympCzXVna1sAoK8TzDLLvkoWoAAk&query=office'
function SearchForm() {
  const { setSearchTerm } = useGlobalContext();
  function handleSubmit(evt) {
    evt.preventDefault();
    const searchValue = evt.target.elements.search.value;
    if (!searchValue) return;
    setSearchTerm(searchValue);
    //console.log(searchValue);
  }

  return (
    <section>
      <h2 className="title">skyy's unsplash images 📸</h2>
      <form className="search-form" onSubmit={handleSubmit}>
        <input type="text" className="form-input search-input" name='search' placeholder='cat' />
        <button className="btn" type='submit'>search</button>
      </form>
    </section>
  )
}

export default SearchForm;
