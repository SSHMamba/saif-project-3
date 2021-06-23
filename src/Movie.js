const images = "https://image.tmdb.org/t/p/w500";
const Movie = ( {
    id, poster, title, voteAverage, overview, handleClick
}) => {
    return (
    <div className="moviePoster">
        <img src={ poster ? `${images}/${poster}` : "https://www.movienewz.com/img/films/poster-holder.jpg" } alt={title} />
        <div className="movieInfo">
            <h2>{title}</h2>
            <p class="voteStyle">{voteAverage}</p>
            <p class="summary">{overview}</p>
            <p class="key">{id}</p>

        </div>

    </div>
    )
}


export default Movie;