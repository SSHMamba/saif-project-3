import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';
import './HomeContent.css'


const images = "https://image.tmdb.org/t/p/w500/";

const Movie = ( { movies, onMovies }) => {
const [pageNumber, setPageNumber] = useState(1);
const [url, setUrl] = useState(`https://api.themoviedb.org/3/movie/popular?api_key=d62e1adb9803081c0be5a74ca826bdbd&page=${pageNumber}`)

let [mediaType, setMediaType] = useState('movie')


useEffect(() => {
  axios({
    url: url,
    params: {
      page: pageNumber,
    }
  }).then((setMovie) => {
    onMovies(setMovie.data.results);
  })
})

    return (
    <section className="homePage">
{/* Select categories on homepage for trending, popular shows or movies */}
    <div className="categories">
      <ul>
        <li>
              <form onClick={event => {setMediaType('movie')
              event.preventDefault();
              }}>
              <button onClick={event => {setUrl(`https://api.themoviedb.org/3/trending/movie/day?api_key=d62e1adb9803081c0be5a74ca826bdbd&`)
                      event.preventDefault();
              }}><p>Trending Movies</p></button>
              </form>
        </li>
        <li>
            
              <form onClick={event => {setMediaType('movie')
                event.preventDefault();
                }}>

              <button onClick={event => {setUrl(`https://api.themoviedb.org/3/movie/popular?api_key=d62e1adb9803081c0be5a74ca826bdbd`)
                  event.preventDefault();
              }}
                
                ><p>Popular Movies</p></button>

              </form>
      </li>
      <li>
            
              <form onClick={event => {setMediaType('tv')
                event.preventDefault();
                }}>

              <button onClick={event => {setUrl(`https://api.themoviedb.org/3/trending/tv/day?api_key=d62e1adb9803081c0be5a74ca826bdbd`)
                  event.preventDefault();
              }}
                
                ><p>Trending Shows</p></button>

              </form>
      </li>
    
          <li>
            
              <form onClick={event => {setMediaType('tv')
                event.preventDefault();
                }}>

              <button onClick={event => {setUrl(`https://api.themoviedb.org/3/tv/popular?api_key=d62e1adb9803081c0be5a74ca826bdbd`)
                  event.preventDefault();
              }}
                
                ><p>Popular Shows</p></button>

              </form>
      </li>
      </ul>
      </div>


{/* Display list of shows or movies */}
    <section className="movieslist" >

      {movies.length > 0 ? movies.map((movie) => {
        return (
        
        <Link to={`${mediaType}/${movie.id}`}>

        <div className="moviePoster slideUp">
            <img src={movie.poster_path ? `${images}${movie.poster_path}` : "https://www.movienewz.com/img/films/poster-holder.jpg"} alt={movie.title} />
             <div className="movieInfo" >
                <h2 className="title">{movie.title || movie.name}</h2>
                <p className="summary">{movie.overview}</p>
                <p className="key">{movie.id}</p>
            </div> 

        </div>

        </Link>
          
        );
      }): null}

        </section>

{/* page buttons */}
          <div className="pageButtons">

          {pageNumber > 1 ?   <button onClick={event => {setPageNumber(pageNumber - 1)
          event.preventDefault()}}
          >
          <p>Prev Page</p>
          </button> : null }

          <button onClick={event => {setPageNumber(pageNumber + 1)
          event.preventDefault()}}
          >
          <p>Next Page</p>
          </button>


        </div>
      </section>

    )
}


export default Movie;