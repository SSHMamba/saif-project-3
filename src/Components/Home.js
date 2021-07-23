import Movie from "./Movie";
import Description from "./Description";
import './Home.css'
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
const [movies, setMovies] = useState([]);


return (
    <>

        <Description />
        <Link to="/watchlist" className="watchListLink">
        <button className="watchListButton"><h2>Watchlist</h2></button>
        </Link>
        <Link to="/search">
        <button className="searchButton"><h2>Search</h2></button>
        </Link>
        <Movie movies={movies} onMovies={setMovies}/>
        


  
    </>
    
    );
}

export default Home;