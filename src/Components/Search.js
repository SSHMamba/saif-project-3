import { useState } from 'react';
import React from 'react';

// search API used to search through database
const searchUrl = "https://api.themoviedb.org/3/search/movie?api_key=d62e1adb9803081c0be5a74ca826bdbd&query="


const Search = ({ onSearch  }) => {
// const [movies, setMovies] = useState([]);
const [search, setSearch] = useState("");


 // Search form that fetches search API and returns results
  const submitForm = (e) => {
    e.preventDefault();
  
  // API used to search for any movie in the database
    fetch(searchUrl + search)
      .then(res => res.json())
      .then(data => {
        onSearch(data.results);
      })
    setSearch("");}
  
  // user search input
  const searchQuery = (e) => {
    setSearch(e.target.value)
  }


    return (
    <form onSubmit={submitForm}>
          
    <i class="fas fa-search"></i>
    <label className="sr-only" htmlFor="searchMovie">Search for a movie</label>

    <input
      className="search"
      type="search"
      placeholder="Search for a movie.."
      value={search}
      onChange={searchQuery}
      />
    </form>
    
    )
}

export default Search;