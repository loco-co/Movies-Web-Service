import propTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css"

function Movie({ id, title, thumb_img, year, summary, genres }) {
  return (
    <div className={styles.movie}>
      <Link to={`/movie/${id}`}><img className={styles.movie__image} src={thumb_img} alt={title} /></Link>
      <h1 className={styles.movie__title}><Link to={`/movie/${id}`}>{title}</Link></h1>
      <h3 className={styles.movie__year}>{year}</h3>
      <ul className={styles.movie__genres}>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  thumb_img: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
};

export default Movie;
