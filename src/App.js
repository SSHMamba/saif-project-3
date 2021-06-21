import './App.css';
import { useState, useEffect } from 'react';
import Movie from './Movie';


const apiUrl = "http://api.themoviedb.org/3/discover/movie?api_key=d62e1adb9803081c0be5a74ca826bdbd";
const searchUrl = "https://api.themoviedb.org/3/search/movie?api_key=d62e1adb9803081c0be5a74ca826bdbd&query="

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    listMovies(apiUrl);
  },[])

  // Display trending movies on front page using movie API
  const listMovies= (apiUrl) => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data)=> {
        setMovies(data.results)
      })
  };

  // Search form that fetches search API and returns results
  const submitForm = (e) => {
    e.preventDefault();
  
    fetch(searchUrl + search)
      .then(res => res.json())
      .then(data => {
        setMovies(data.results);
      })
    setSearch("");}
  
  // Search input
  const searchQuery = (e) => {
    setSearch(e.target.value)
  }

  return (
    <>
    <header>
            <h1><a href="./public/index.html">watchit</a></h1>
    </header>
    <form onSubmit={submitForm}>
    <i class="fas fa-search"></i>
    <input
      className="search"
      type="search"
      placeholder="Search for a movie.."
      value={search}
      onChange={searchQuery}
      />
      </form>
    
    <div className="movieslist">
      {movies.length > 0 ?
        movies.length > 0 && movies.map((movie) => {
           return (
              <Movie 
              poster={movie.poster_path}
              title={movie.title} 
              voteAverage={movie.vote_average}
              {...movie}/>
          )}
        )
        : <p class="noResults">No results found. Please try again?</p>
      }
    </div>
    </>
  )
}

export default App;
