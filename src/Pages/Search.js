import { useState } from 'react';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from "../Components/Navigation";
import './Search.css'
import Banner from '../Components/Banner';
import BannerTV from '../Components/BannerTV';


const images = "https://image.tmdb.org/t/p/original/";


const Search = (media, setMedia) => {
const [search, setSearch] = useState("");
const [content, setContent] = useState([]);
const [type, setType] = useState("movie");
const [isTV, setIsSelectedTV] = useState(null);
const [isMovie, setIsSelectedMovie] = useState(null);
const searchUrl = `https://api.themoviedb.org/3/search/${type}?api_key=d62e1adb9803081c0be5a74ca826bdbd&query=${search}`

 // Search form that fetches search API and returns results
const submitForm = async (e) => {
  e.preventDefault();
  try {
    const {data} = await axios.get(searchUrl);
      setContent(data.results);
      setSearch("");
  } catch (error) {
    console.log(error);

  }

}
  
  // user search input
  const searchQuery = (e) => {
    setSearch(e.target.value)
  }


    return (
    <div>
      <Navigation />
     {isTV ? <BannerTV /> : <Banner />} 
      <form onSubmit={submitForm}>
          
          <i className="fas fa-search"></i>
          <label className="sr-only" htmlFor="searchMovie">Search for a movie</label>

          <input
            className="search"
            type="search"
            placeholder={ isTV ? "Search for a TV Show..." : "Search for a Movie..."}
            value={search}
            onChange={searchQuery}
            />


     </form>

    <div>

        
        {/* <p className="selectCategory">Select a category</p> */}

        <ul className="searchCategories">
          <li>
                <button onClick={event => {setType("tv")
                  event.preventDefault();
                  setIsSelectedTV(true);
                  setIsSelectedMovie(false)
                  }}>

                  { isTV ? <p className="searchSelectButton">TV Shows</p> : <p>TV Shows</p>}
                 </button>
          </li>


          <li>
                <button onClick={event => {setType("movie")
                event.preventDefault();
                setIsSelectedMovie(true);
                setIsSelectedTV(false)
                }}>

                {  isMovie  ? <p className="searchSelectButton2">Movies</p> : <p>Movies</p>}
                </button>
          </li>
        
        </ul>
    </div>
    <div>

    </div>


                  
    <section className="movieslist">
      
      {content.length > 0 ?content.map((media) => {
        
        return (
        
        <Link to={`${type}/${media.id}`}>
        <div className="moviePoster slideUp">
            <img src={media.poster_path ? `${images}${media.poster_path}` : "https://www.movienewz.com/img/films/poster-holder.jpg"} alt={media.title} />
            <div className="movieInfo">
                <h2 className="title">{media.title || media.name}</h2>
                <p className="seasons"></p>
                <p className="summary">{media.overview}</p>
                <p className="key">{media.id}</p>
            </div>

        </div>

        </Link>
          
        );
      }): null}

  
      

        </section>
    
        </div>
    )

    

}

export default Search;