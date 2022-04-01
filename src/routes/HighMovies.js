import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import styles from "./List.module.css";

function HighMovies() {
  const [loading, setLoading] = useState("true");
  const [movies, setMovies] = useState({});
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?quality=2160p&with_rt_ratings=true`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => getMovies(), []);
  return (
    <div className={styles.container}>
      {loading ? (
        <h1 className={styles.loader}>Loading...</h1>
      ) : (
        <div className={styles.movies}>
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              year={movie.year}
              thumb_img={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
              rating={movie.rating}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default HighMovies;