import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css"

function Detail() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`)
    ).json();
    setMovie(json.data.movie);
    console.log(movie);
  };
  useEffect(() => getMovie(), []);
  return <div className={styles.container}>
    <h1>{movie.title}</h1>
    <img src={movie.background_image_original} alt={movie.title} />
    <img src={movie.large_cover_image} alt={movie.title} />
    <h5>{movie.langauge}</h5>
    <h5>{movie.rating}</h5>
    <h5>{movie.runtime}</h5>
    <h6>{movie.year}</h6>
    <p>{movie.description_full}</p>
    </div>;
}

export default Detail;
