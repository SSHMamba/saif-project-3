import './App.css';
import { useState, useEffect } from 'react';
import Header from './Header';
import Description from './Description';
import Search from './Search';
import Movie from './Movie';
import React from 'react';
import Footer from './Footer';

// main API used to display trending page
const apiUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=d62e1adb9803081c0be5a74ca826bdbd&page=`;

// search API used to search through database
const searchUrl = "https://api.themoviedb.org/3/search/movie?api_key=d62e1adb9803081c0be5a74ca826bdbd&query="


function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

// Fetch trending movies from the API and store it in listMovies
  const listMovies= (apiUrl, key) => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data)=> {
        setMovies(data.results)
        console.log(data.results);
      })
  };

// Display trending movies on front page using movie API
  useEffect(() => {
    listMovies(apiUrl);
  }, [])

  // Search form that fetches search API and returns results
  const submitForm = (e) => {
    e.preventDefault();
  
  // API used to search for any movie in the database
    fetch(searchUrl + search)
      .then(res => res.json())
      .then(data => {
        setMovies(data.results);
      })
    setSearch("");}
  
  // user search input
  const searchQuery = (e) => {
    setSearch(e.target.value)
  }

  return (
    <>

    <Header />

    <body>
    <Description />
    <main>
   
    <Search
    submitForm={submitForm}
    value={search}
    searchQuery={searchQuery}/>
    
    <section className="movieslist">
      {/* Display all movie results */}
      {/* Also checks to see if there is at least one movie displayed, and if not it triggers the noResults class */}
      {movies.length > 0 ? movies.map((movie) => {
        return (
              <Movie
              key={movie.key}
              poster={movie.poster_path}
              title={movie.title} 
              voteAverage={movie.vote_average}
              release={movie.release_date}
              overview={movie}
              {...movie}
              />
        )}
        )
        : <p class="noResults">No results found. Please try again?</p>
      }
    </section>

    </main>
    </body>
    <Footer/>
    
    </>

  )

}

export default App;
