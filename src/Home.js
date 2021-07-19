import Movie from "./Movie";
import Search from "./Search";
import { useState } from "react";

const Home = ()=>{
const [movies, setMovies] = useState([]);

return (
    <>
        <Search onSearch={setMovies} />
        <Movie movies={movies} onMovies={setMovies}/>
    </>);
}

export default Home;