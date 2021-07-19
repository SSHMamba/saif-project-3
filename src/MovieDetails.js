import { useState, useEffect } from "react";
import axios from "axios";
import './MovieDetails.css'
import Search from "./Search";

const images = "https://image.tmdb.org/t/p/w500";
const backdropImages = "https://image.tmdb.org/t/p/original"




const MovieDetails = (props) => {
  const [movie, setMovie] = useState({});
  const [video, setVideo] = useState({});
    
  
  
  // modify url to grab any movie ID from api  
  let { movieID } = props.match.params;


    useEffect(() => {
    axios({
      url: `https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=d62e1adb9803081c0be5a74ca826bdbd&language=en-US`,
      params: {
        api_key: "d62e1adb9803081c0be5a74ca826bdbd",
      },
    }).then((videolink) => {
      setVideo(videolink.data.results[0]);
    });
  });



  useEffect(() => {
    axios({
      url: `https://api.themoviedb.org/3/movie/${movieID}`,
      params: {
        api_key: "d62e1adb9803081c0be5a74ca826bdbd",
      },
    }).then((result) => {
      setMovie(result.data);
      console.log(result.data)
    });
  }, [movieID]);

  return (
    <div className="movieDetails" 
         style={{ 
          backgroundImage: `url(${backdropImages}${movie.backdrop_path})`
          }}>
        <a href="/"><button><p> Go Back </p></button></a>
        <div className="poster-image" >
        <img
          src={movie.poster_path ? `${images}${movie.poster_path}` : "https://www.movienewz.com/img/films/poster-holder.jpg"}
          alt={`Poster for ${movie.original_title}`}
        />
      </div>
      <div className="detailsDescription" >
        <h2 className="detailTitle">{movie.title}</h2>
        <h3 className="tagline">{movie.tagline}</h3>
        <p className="summary">{movie.overview}</p>
        <p className="voteStyle">Rating: {movie.vote_average}</p>
        <p className="release">Release Date: {movie.release_date}</p>
        <a href={`https://www.youtube.com/watch?v=${video.key}`} className="trailer"><img src="https://i.imgur.com/eOqDkck.png" alt="" className="trailer"/></a>
      </div>
      
    </div>
  );
};

export default MovieDetails;
