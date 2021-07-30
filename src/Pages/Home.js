import HomeContent from "../Components/HomeContent";
import Description from "../Components/Description";
import Navigation from "../Components/Navigation";
import './Home.css'
import { useState } from "react";

const Home = () => {
const [movies, setMovies] = useState([]);


return (
    <>


        <Navigation />
        <Description />
        <HomeContent movies={movies} onMovies={setMovies}/>
        


  
    </>
    
    );
}

export default Home;