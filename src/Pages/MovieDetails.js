import { useState, useEffect } from "react";
import axios from "axios";
import './MovieDetails.css'
import '../App.css'
import AddToList from "../Components/AddToList";
import Navigation from "../Components/Navigation";
import PreviousPage from "../Components/PreviousPage";
import { Link } from "react-router-dom";

const images = "https://image.tmdb.org/t/p/original";
const backdropImages = "https://image.tmdb.org/t/p/original"




const MovieDetails = (props) => {
  const [movie, setMovie] = useState({});
  const [video, setVideo] = useState({});
  const [similar, setSimilar] = useState([]);
  
  
  // modify url to grab any movie ID from api  
  let { movieID } = props.match.params;


      useEffect(() => {
      axios({
        url: `https://api.themoviedb.org/3/movie/${movieID}/recommendations?api_key=d62e1adb9803081c0be5a74ca826bdbd&language=en-US&page=1`,
        params: {
          api_key: "d62e1adb9803081c0be5a74ca826bdbd",
        }
      }).then((similarMovie) => {
        setSimilar(similarMovie.data.results);
        console.log(similarMovie.data.results);
                    // return setSimilar();
      })

    }, [movieID])

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
      setMovie(result.data)
      window.scroll({
        top: 0,
        bottom: 0,
        behavior: 'smooth'
      })
      // console.log(result.data)
    });
  }, [movieID]);

    const reloadPage = () => {
  setTimeout(function(){
   window.location.reload(1);
}, 1000);
  }

  return (
    <section>
    <Navigation />
        <div className="bannerFadeUp"/>
    <div className="movieDetails"
    
         style={{ 
          backgroundImage: `url(${backdropImages}${movie.backdrop_path})`
          }}>

        {/* <a href="/"><button className="goBack"><p> Go Back </p></button></a> */}
        <PreviousPage />
        <div className="poster-image" >
        <img
          src={movie.poster_path ? `${images}${movie.poster_path}` : "https://www.movienewz.com/img/films/poster-holder.jpg"}
          alt={`Poster for ${movie.original_title}`}
        />
      </div>
      <div className="detailsDescription" >
        <h2 className="detailTitle">{movie.title}</h2>
        <h3 className="tagline">{movie.tagline}</h3>
        <div className="date-runtime">
        <p className="release">Release Date: {movie.release_date}</p>
        <p className="runtime">{movie.runtime} minutes</p>
        </div>
        <p className="summary">{movie.overview}</p>

        <p className="voteStyle">Rating: {movie.vote_average < 1 ? "n/a" : movie.vote_average}</p>
        
        <div className="mediaContainer">
        <ul className="mediaLinks">
          { video ? <li><a href={`https://www.youtube.com/watch?v=${video.key}`} className="trailer"><i className="fab fa-youtube"></i></a></li> : null}
          
        <li><a href={`https://www.imdb.com/title/${movie.imdb_id}`}><i className="fab fa-imdb"></i></a></li>
        
        </ul>
        </div>
        <button onClick={reloadPage}><AddToList addItem={movie} className="addButton"/></button>
      </div>
      
      <div>

      </div>
    </div>
    <div className="bannerFadeBottom"/>
    <div className="similarTitle">
      {similar.length > 0 ? <h2>If you enjoyed {movie.title || movie.name}, you may like...</h2> : null }
      
    </div>
    <div className="similarWrapper">
          {similar.length > 0 ? similar.slice(0, 6).map((movie) => {
        return (
        
        <Link to={`${movie.id}`}>

        <div className="moviePoster slideUp">
            <img src={movie.backdrop_path ? `${images}${movie.backdrop_path}` : "https://www.movienewz.com/img/films/poster-holder.jpg"} alt={movie.title} />
             <div className="movieInfo" >
                <h2 className="title">{movie.title || movie.name}</h2>
                <p className="summary">{movie.overview}</p>
            </div> 

        </div>

        </Link>
          
        );
      }): null}
        </div>
    </section>
  );
};

export default MovieDetails;
