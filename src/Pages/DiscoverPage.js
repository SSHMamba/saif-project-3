import Genres from "../Components/Genres";
import Navigation from "../Components/Navigation";
import genreRequests from "../Config/genreRequests";
import { useState } from "react";


const DiscoverPage = () => {
// eslint-disable-next-line
const [type, setType] = useState("movie");
const [isTV, setIsSelectedTV] = useState(null);
const [isMovie, setIsSelectedMovie] = useState(null);


    return (
        <>
    <div>
        <Navigation />

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
        { isTV ? <>
        <Genres title="Trending Shows" type="tv" fetchUrl={genreRequests.fetchTrendingShows} rowLarge/>
        <Genres title="Netflix Originals" type="tv" fetchUrl={genreRequests.fetchNetflixOriginals}/>
        <Genres title="Disney+ Originals" type="tv" fetchUrl={genreRequests.fetchDisneyPlusOriginals}/>
        <Genres title="Amazon Prime" type="tv" fetchUrl={genreRequests.fetchAmazonPrime}/> 
        <Genres title="Action and Adventure" type="tv" fetchUrl={genreRequests.fetchActionShows}/> 
        <Genres title="Sci-Fi and Fantasy" type="tv" fetchUrl={genreRequests.fetchSciFiFantasy}/> 
        <Genres title="Action and Adventure" type="tv" fetchUrl={genreRequests.fetchActionShows}/> 
        <Genres title="Hulu Originals" type="tv" fetchUrl={genreRequests.fetchHuluOriginals}/> 
        <Genres title="Peacock" type="tv" fetchUrl={genreRequests.fetchPeacock}/> 

        </>
        : 
        <>
        <Genres title="Trending Movies" type="movie" fetchUrl={genreRequests.fetchTrendingMovies} rowLarge/>
        <Genres title="Action Movies" type="movie" fetchUrl={genreRequests.fetchActionMovies}/>
        <Genres title="Drama Movies" type="movie" fetchUrl={genreRequests.fetchDramaMovies}/>
        <Genres title="Family Movies" type="movie" fetchUrl={genreRequests.fetchFamilyMovies}/>
        <Genres title="Romance Movies" type="movie" fetchUrl={genreRequests.fetchRomanceMovies}/>
        <Genres title="Comedy Movies" type="movie" fetchUrl={genreRequests.fetchComedyMovies}/>
        <Genres title="Horror Movies" type="movie" fetchUrl={genreRequests.fetchHorrorMovies}/>
        <Genres title="Documentaries" type="movie" fetchUrl={genreRequests.fetchDocumentaries}/>
        </>
        }

       
        </div>
        </>
    )
}

export default DiscoverPage;