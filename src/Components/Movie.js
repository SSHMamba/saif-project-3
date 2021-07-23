import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import SingleContent from './SingleContent';


const images = "https://image.tmdb.org/t/p/w500/";

const Movie = ( { movies, onMovies }) => {
const [url, setUrl] = useState('https://api.themoviedb.org/3/movie/popular?api_key=d62e1adb9803081c0be5a74ca826bdbd&page=')
let [mediaType, setMediaType] = useState('movie')


useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data)=> {
        onMovies(data.results)
        console.log(data.results)
      })
  }, [url]);


console.log(mediaType)
    return (
    <section className="homePage">
      <form onClick={event => {setMediaType('tv')
      event.preventDefault();
      }}>
      <button onClick={event => {setUrl(`https://api.themoviedb.org/3/tv/popular?api_key=d62e1adb9803081c0be5a74ca826bdbd&page=`)
              event.preventDefault();
      }}
     
      ><p>TV Shows</p></button>
    </form>
          
      <form onClick={event => {setMediaType('movie')
      event.preventDefault();
      }}>
      <button onClick={event => {setUrl(`https://api.themoviedb.org/3/movie/popular?api_key=d62e1adb9803081c0be5a74ca826bdbd&page=`)
              event.preventDefault();
      }}><p>Trending Movies</p></button>
      </form>
    <section className="movieslist">

      {movies.length > 0 ? movies.map((movie) => {
        return (
        
        <Link to={`${mediaType}/${movie.id}`}>

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
      </section>

    )
}


export default Movie;