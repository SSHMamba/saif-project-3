const images = "https://image.tmdb.org/t/p/w500";
const Movie = ( {
    id, poster, title, voteAverage, overview, release
}) => {
    return (
    <div className="moviePoster">
        <img src={ poster ? `${images}/${poster}` : "https://www.movienewz.com/img/films/poster-holder.jpg" } alt={title} />
        <div className="movieInfo">
            <h2>{title}</h2>
            <p className="voteStyle">Rating: {voteAverage}</p>
            <p className="release">Release Date: {release}</p>
            <p className="summary">{overview}</p>
            <p className="key">{id}</p>


        </div>

    </div>

    )
}


export default Movie;