import propTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ title, thumb_img, summary, genres }) {
  return (
    <div>
      <h1><Link to="/movie">{title}</Link></h1>
      <img src={thumb_img} alt={title} />
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <p>{summary}</p>
    </div>
  );
}

Movie.propTypes = {
  title: propTypes.string.isRequired,
  thumb_img: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string.isRequired),
};

export default Movie;
