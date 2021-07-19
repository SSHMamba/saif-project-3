import { Link } from 'react-router-dom';
import {  useEffect } from "react";

const images = "https://image.tmdb.org/t/p/w500/";

// main API used to display trending page
const apiUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=d62e1adb9803081c0be5a74ca826bdbd&page=`;


const Movie = ( { movies, onMovies }) => {

useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data)=> {
        onMovies(data.results)
        console.log(data.results)
      })
  }, []);


    return (
    <section className="movieslist">
      {movies.length > 0 ? movies.map((movie) => {
        return (
        <Link to={`/movie/${movie.id}`}>
        <div className="moviePoster">
            <img src={movie.poster_path ? `${images}${movie.poster_path}` : "https://www.movienewz.com/img/films/poster-holder.jpg"} alt={movie.title} />
            <div className="movieInfo">
                <h2 className="title">{movie.title}</h2>
                <p className="summary">{movie.overview}</p>
                <p className="key">{movie.id}</p>
            </div>

        </div>
        </Link>
          
        );
      }): <p class="noResults">No results found. Please try again?</p>}
        </section>


    )
}


export default Movie;