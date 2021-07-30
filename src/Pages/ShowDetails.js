import { useState, useEffect } from "react";
import axios from "axios";
import './MovieDetails.css'
import AddToListTV from "../Components/AddToListTV";
import Navigation from "../Components/Navigation";
import PreviousPage from "../Components/PreviousPage";
import { Link } from "react-router-dom";

const images = "https://image.tmdb.org/t/p/w500";
const backdropImages = "https://image.tmdb.org/t/p/original"




const ShowDetails = (props) => {
  const [show, setShows] = useState({});
  const [video, setVideo] = useState({});
  const [similar, setSimilar] = useState([]);
    
  
  
  // modify url to grab any movie ID from api  
  let { showID } = props.match.params;


    useEffect(() => {
      axios({
        url: `https://api.themoviedb.org/3/tv/${showID}/recommendations?api_key=d62e1adb9803081c0be5a74ca826bdbd`,
        params: {
          api_key: "d62e1adb9803081c0be5a74ca826bdbd",
        }
      }).then((similarTV) => {
        setSimilar(similarTV.data.results);
        console.log(similarTV.data.results);
      })
    }, [showID])

    useEffect(() => {
    axios({
      url: `https://api.themoviedb.org/3/tv/${showID}/videos?api_key=d62e1adb9803081c0be5a74ca826bdbd&language=en-US`,
      params: {
        api_key: "d62e1adb9803081c0be5a74ca826bdbd",
      },
    }).then((videoLink) => {
      setVideo(videoLink.data.results[0]);
    });
  });


  useEffect(() => {
    axios({
      url: `https://api.themoviedb.org/3/tv/${showID}`,
      params: {
        api_key: "d62e1adb9803081c0be5a74ca826bdbd",
      },
    }).then((result) => {
      setShows(result.data);
      window.scroll({
        top: 0,
        bottom: 0,
        behavior: 'smooth'
      })
      // console.log(result.data)
    });
  }, [showID]);

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
          backgroundImage: `url(${backdropImages}${show.backdrop_path})`
          }}>
        <PreviousPage />
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
        <p className="seasons">{show.number_of_seasons < 2 ? "1 season" : show.number_of_seasons + " seasons" }</p>
        <p className="runtime">{show.episode_run_time} minutes</p>

        </div>
        <p className="summary">{show.overview}</p>

        <p className="voteStyle">Rating: {show.vote_average < 1 ? "n/a" : show.vote_average}</p>
        
        <div className="mediaContainer">
        <ul className="mediaLinks">
          { video ? <li><a href={`https://www.youtube.com/watch?v=${video.key}`} className="trailer"><i className="fab fa-youtube"></i></a></li> : null}
          
        <li><a href={`https://www.imdb.com/title/${show.imdb_id}`}><i className="fab fa-imdb"></i></a></li>
        
        </ul>
        </div>
                <button onClick={reloadPage}><AddToListTV addItem={show} className="addButton"/></button>
      </div>
      <div>

      </div>
    </div>
        <div className="bannerFadeBottom"/>
        <div className="similarTitle">
           {similar.length > 0 ? <h2>If you enjoyed {show.title || show.name}, you may like...</h2> : null }
        </div>
        <div className="similarWrapper">
          {similar.length > 0 ? similar.slice(0,6).map((show) => {
        return (
        
        <Link to={`${show.id}`}>

        <div className="moviePoster slideUp">
            <img src={show.backdrop_path ? `${images}${show.backdrop_path}` : "https://www.movienewz.com/img/films/poster-holder.jpg"} alt={show.title} />
             <div className="movieInfo" >
                <h2 className="title">{show.title || show.name}</h2>
                <p className="summary">{show.overview}</p>
            </div> 

        </div>

        </Link>
          
        );
      }): null}
        </div>

    </section>

  );
};

export default ShowDetails;
