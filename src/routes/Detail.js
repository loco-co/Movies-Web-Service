import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";
import imdb from "../images/IMDB.png";

function Detail() {
  const [loading, setLoading] = useState("true");
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`
      )
    ).json();
    setMovie(json.data.movie);
    console.log(json.data);
    setLoading(false);
  };
  useEffect(() => getMovie(), []);
  return (
    <div>
      {loading ? (
        <h1 className={styles.loader}>Loading...</h1>
      ) : (
        <div className={styles.container}>
          <div className={styles.blurBlock}>
            <img
              className={styles.movie__blurPoster}
              src={movie.background_image_original}
              alt={movie.title}
            />
          </div>
          <div className={styles.contentBlock}>
            <div className={styles.contentPoster}>
              <img
                className={styles.movie__mainPoster}
                src={movie.large_cover_image}
                alt={movie.title}
              />
            </div>
            <div className={styles.content}>
              <h1 className={styles.movie__title}>{movie.title}</h1>
              <h3 className={styles.movie__detail}>
                {movie.year}
                {movie.genres && movie.genres.map((g) => `・${g}`)}
              </h3>
              <div className={styles.logo}>
              <img className={styles.movie__logo} src={imdb} alt="imdb"/><h5 className={styles.movie__rating}>{movie.rating}</h5>
              </div>
              
              <h4 className={styles.movie__info}>
                {movie.runtime} minutes ・{" "}
                {movie.language && movie.language.toUpperCase()}
              </h4>
              <p className={styles.movie__plot}>{movie.description_full}</p>
            </div>
          </div>
          <img
            className={styles.movie__screenshots}
            src={movie.large_screenshot_image1}
            alt={movie.title}
          />
          <img
            className={styles.movie__screenshots}
            src={movie.large_screenshot_image2}
            alt={movie.title}
          />
          <img
            className={styles.movie__screenshots}
            src={movie.large_screenshot_image3}
            alt={movie.title}
          />
        </div>
      )}
    </div>
  );
}

export default Detail;
