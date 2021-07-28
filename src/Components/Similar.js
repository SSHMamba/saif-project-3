import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './MovieDetails.css'
import axios from "axios";


const images = "https://image.tmdb.org/t/p/w500";



const Similar = (props) => {
const [similar, setSimilar] = useState({});
    
  
  
  // modify url to grab any movie ID from api  
  let { showID } = props.match.params;


    useEffect(() => {
      axios({
        url: `https://api.themoviedb.org/3/tv/${showID}/similar?api_key=d62e1adb9803081c0be5a74ca826bdbd&language=en-US&page=1`,
        params: {
          api_key: "d62e1adb9803081c0be5a74ca826bdbd",
          size: 5,
        }
      }).then((similarTV) => {
        setSimilar(similarTV.data.results);
        console.log(similarTV.data.results[0]);
      })
    })

    return (
        <div className="similarWrapper">
          {similar.length > 0 ? similar.map((show) => {
        return (
        
        <Link to={"tv"/`${show.id}`}>

        <div className="moviePoster slideUp">
            <img src={show.poster_path ? `${images}${show.poster_path}` : "https://www.movienewz.com/img/films/poster-holder.jpg"} alt={show.title} />
             <div className="movieInfo" >
                <h2 className="title">{show.title || show.name}</h2>
                <p className="summary">{show.overview}</p>
            </div> 

        </div>

        </Link>
          
        );
      }): null}
        </div>
    )

}

export default Similar;