const images = "https://image.tmdb.org/t/p/w500";
const Movie = ( {
    id, poster, title, voteAverage
}) => {
    return (
    <div className="moviePoster">
        <img src={`${images}/${poster}`} alt={title} />
        <div className="movieInfo">
            <button><span>+</span></button>
            <h2>{title}</h2>
            <p class="voteStyle">{voteAverage}</p>

        </div>

    </div>
    )
}


export default Movie;