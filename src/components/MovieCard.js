import propTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";

function MovieCard({ id, title, thumb_img, year, summary, genres, rating }) {
  return (
    <div className={styles.movie}>
      <Link to={`/movie/${id}`}><img src={thumb_img} alt={title} className={styles.movie__img} /></Link>
      <div>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <h3 className={styles.movie__year}>{year}</h3>
        <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
        <ul className={styles.movie__genres}>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
        <h5 className={styles.movie__detail}><Link to={`/movie/${id}`}>Detail..</Link></h5>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  thumb_img: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
};

export default MovieCard;
