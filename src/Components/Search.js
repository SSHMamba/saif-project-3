import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

// search API used to search through database
const images = "https://image.tmdb.org/t/p/w500/";


const Search = ({  }) => {
const [search, setSearch] = useState("");
const [content, setContent] = useState([])
const [type, setType] = useState("movie");
const searchUrl = `https://api.themoviedb.org/3/search/${type}?api_key=d62e1adb9803081c0be5a74ca826bdbd&query=`



 // Search form that fetches search API and returns results
  const submitForm = (e) => {
    e.preventDefault();
  
  // API used to search for any movie in the database
  
    fetch(searchUrl + search)
      .then(res => res.json())
      .then(data => {
        setContent(data.results);
      })
    setSearch("");}
  
  // user search input
  const searchQuery = (e) => {
    setSearch(e.target.value)
  }
  console.log(searchUrl)
  console.log(type)
    return (
      <div>
    <form onSubmit={submitForm}>
          
    <i className="fas fa-search"></i>
    <label className="sr-only" htmlFor="searchMovie">Search for a movie</label>

    <input
      className="search"
      type="search"
      placeholder="Search for a movie or show.."
      value={search}
      onChange={searchQuery}
      />


    </form>

          <button onClick={event => {setType("tv")
      event.preventDefault();
      }}>

        <p>TV Shows</p>
    </button>

      <button onClick={event => {setType("movie")
      event.preventDefault();
      }}>

        <p>Movies</p>
    </button>



    <section className="movieslist">

      {content.length > 0 ? content.map((media) => {
        return (
        
        <Link to={`${type}/${media.id}`}>

        <div className="moviePoster">
            <img src={media.poster_path ? `${images}${media.poster_path}` : "https://www.movienewz.com/img/films/poster-holder.jpg"} alt={media.title} />
            <div className="movieInfo">
                <h2 className="title">{media.title || media.name}</h2>
                <p className="summary">{media.overview}</p>
                <p className="key">{media.id}</p>
            </div>

        </div>

        </Link>
          
        );
      }): <p class="noResults">Search for a TV Show or a Movie</p>}
      

        </section>
    
        </div>
    )

    

}

export default Search;