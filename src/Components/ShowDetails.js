import { useState, useEffect } from "react";
import axios from "axios";
import './MovieDetails.css'
import AddToList from "./AddToList";

const images = "https://image.tmdb.org/t/p/w500";
const backdropImages = "https://image.tmdb.org/t/p/original"




const ShowDetails = (props) => {
  const [show, setShows] = useState({});
//   const [video, setVideo] = useState({});
    
  
  
  // modify url to grab any movie ID from api  
  let { showID } = props.match.params;


//     useEffect(() => {
//     axios({
//       url: `https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=d62e1adb9803081c0be5a74ca826bdbd&language=en-US`,
//       params: {
//         api_key: "d62e1adb9803081c0be5a74ca826bdbd",
//       },
//     }).then((videolink) => {
//       setVideo(videolink.data.results[0]);
//     });
//   });


  useEffect(() => {
    axios({
      url: `https://api.themoviedb.org/3/tv/${showID}`,
      params: {
        api_key: "d62e1adb9803081c0be5a74ca826bdbd",
      },
    }).then((result) => {
      setShows(result.data);
      console.log(result.data)
    });
  }, []);

  return (
    <div className="movieDetails" 
         style={{ 
          backgroundImage: `url(${backdropImages}${show.backdrop_path})`
          }}>
        <a href="/"><button className="goBack"><p> Go Back </p></button></a>
        <div className="poster-image" >
        <img
          src={show.poster_path ? `${images}${show.poster_path}` : "https://www.movienewz.com/img/films/poster-holder.jpg"}
          alt={`Poster for ${show.original_title}`}
        />
      </div>
      <div className="detailsDescription" >
        <h2 className="detailTitle">{show.name}</h2>
        <h3 className="tagline">{show.tagline}</h3>
        <div className="date-runtime">
        <p className="release">First aired: {show.first_air_date}</p>
        <p className="runtime">{show.episode_run_time} minutes</p>
        </div>
        <p className="summary">{show.overview}</p>

        <p className="voteStyle">Rating: {show.vote_average}</p>
        
        <div className="mediaContainer">
        <ul className="mediaLinks">
          {/* { video ? <li><a href={`https://www.youtube.com/watch?v=${video.key}`} className="trailer"><i className="fab fa-youtube"></i></a></li> : null} */}
          
        <li><a href={`https://www.imdb.com/title/${show.imdb_id}`}><i className="fab fa-imdb"></i></a></li>
        
        </ul>
        </div>
      </div>
      <div>
        <AddToList addItem={show} />
      </div>
    </div>
  );
};

export default ShowDetails;
