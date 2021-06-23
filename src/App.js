import './App.css';
import { useState, useEffect } from 'react';
import Form from './Form';
import Movie from './Movie';
import React from 'react';
import Header from './Header';
import Footer from './Footer';


const apiUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=d62e1adb9803081c0be5a74ca826bdbd&page=`;
const searchUrl = "https://api.themoviedb.org/3/search/movie?api_key=d62e1adb9803081c0be5a74ca826bdbd&query="


function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [userInput, setUserInput] = useState('');

  // Display trending movies on front page using movie API
  const listMovies= (apiUrl, key) => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data)=> {
        const movieDataObjectAgain = {...data};
        movieDataObjectAgain[key] = setMovies(data.results)
        console.log(data.results)
        return movieDataObjectAgain;
      })
  };

  useEffect(() => {
    listMovies(apiUrl);
  }, [])

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
    <Header />
    <body>
    <main>
   
    <Form
    submitForm={submitForm}
    value={search}
    searchQuery={searchQuery}/>
    
    <section className="movieslist">
      {movies.length > 0 ? movies.map((movie) => {
        return (
              <Movie
              key={movie.key}
              submitForm={submitForm}
              poster={movie.poster_path}
              title={movie.title} 
              voteAverage={movie.vote_average}
              overview={movie}
              {...movie}
              />
        )}
        )
        : <p class="noResults">No results found. Please try again?</p>
      }
    </section>

      </main>
      <Footer/>
      </body>
    </>

  )

}

export default App;
