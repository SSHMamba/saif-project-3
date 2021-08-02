import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import axios from "../Config/axios";
import './Genres.css'


function Genres ({title, fetchUrl, type, rowLarge = false}) {
    const [movies, setMovies] = useState([]);

    const images = "https://image.tmdb.org/t/p/original";

    useEffect(() => {
        async function fetchData() {
            const genreRequests = await axios.get(fetchUrl);
            setMovies(genreRequests.data.results);
            return genreRequests;
        }
        fetchData();
    }, [fetchUrl]);

    console.log(movies)
    return (
        <div className="row">
            {title}

        <div className="genrePoster">
        {movies.length > 0 ? movies.slice(0, 20).map((movie) => {
        return (
        
        <Link to={`${type}/${movie.id}`}>
            {rowLarge ?
            <img
            className="eachPosterLarge moviePoster slideInRight"
            src={movie.poster_path ? `${images}${movie.poster_path}` || `${images}${movie.poster_path}` : "https://www.movienewz.com/img/films/poster-holder.jpg"} alt={movie.title} /> 
            :  
            <img
            className="eachPoster moviePoster slideInRight"
            src={movie.backdrop_path ? `${images}${movie.backdrop_path}` || `${images}${movie.poster_path}` : "https://www.movienewz.com/img/films/poster-holder.jpg"} alt={movie.title} />}

             {/* <div className="movieInfo" >
                <h2 className="title">{movie.title || movie.name}</h2>
                <p className="summary">{movie.overview}</p>
            </div>  */}



        </Link>
          
        );
      }): null}
              </div>

                </div>
    );
}

export default Genres;