import Movie from "./Movie";
import Search from "./Search";
import Description from "./Description";
import './Home.css'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = ()=>{
const [movies, setMovies] = useState([]);


return (
    <>

        <Description />
        <Link to="/watchlist" className="watchListLink">
        <button className="watchListButton"><h2>Watchlist</h2></button>
        </Link>
        <Search onSearch={setMovies} />

        <Movie movies={movies} onMovies={setMovies}/>


  
    </>
    
    );
}

export default Home;