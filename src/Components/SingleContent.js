const images = "https://image.tmdb.org/t/p/w500/";

const SingleContent = ({
  id,
  poster_path,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (

    <div>
      <img
        className="poster"
        src={poster_path ? `${images}${poster_path}` : "https://www.movienewz.com/img/films/poster-holder.jpg"}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{date}</span>
      </span>
    </div>
  );
};

export default SingleContent;