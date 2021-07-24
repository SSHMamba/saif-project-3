import Movie from "./Movie";
import Description from "./Description";
import Navigation from "./Navigation";
import './Home.css'
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
const [movies, setMovies] = useState([]);


return (
    <>


        <Navigation />
        <Description />
        <Movie movies={movies} onMovies={setMovies}/>
        


  
    </>
    
    );
}

export default Home;