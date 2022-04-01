import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

function Home() {
  const [loading, setLoading] = useState("true");
  const [recentMovies, setRecentMovies] = useState([]);
  const [highMovies, setHighMovies] = useState([]);
  const [ratedMovies, setRatedMovies] = useState([]);
  const getMovies = async () => {
    const [response1, response2, response3] = await Promise.all([
      fetch(
        `https://yts.mx/api/v2/list_movies.json?with_rt_ratings=true&minimum_rating=4&limit=6`
      ),
      fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8&with_rt_ratings=true&limit=6`
      ),
      fetch(
        `https://yts.mx/api/v2/list_movies.json?quality=2160p&with_rt_ratings=true&limit=6`
      ),
    ]);
    const json1 = await response1.json();
    const json2 = await response2.json();
    const json3 = await response3.json();
    setLoading(false);
    setRecentMovies(json1.data.movies);
    setRatedMovies(json2.data.movies);
    setHighMovies(json3.data.movies);
  };
  useEffect(() => getMovies(), []);
  return (
    <div>
      {loading ? (
        <h1 className={styles.loader}>Loading...</h1>
      ) : (
        <div className={styles.container}>
          <h1 className={styles.title}><Link to={"/recent_movies"}>Most Recent Movies</Link></h1>
          <div className={styles.movies}>
            {recentMovies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                thumb_img={movie.large_cover_image}
                title={movie.title}
                year={movie.year}
                summary={movie.summary}
                genres={movie.genres}
                rating={movie.rating}
              />
            ))}
          </div>
          <h1 className={styles.title}><Link to={"/2160p_movies"}>2160p Quality Movies</Link></h1>
          <div className={styles.movies}>
            {highMovies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                thumb_img={movie.medium_cover_image}
                title={movie.title}
                year={movie.year}
                summary={movie.summary}
                genres={movie.genres}
                rating={movie.rating}
              />
            ))}
          </div>
          <h1 className={styles.title}><Link to={"/top_movies"}>Top Rated Movies</Link></h1>
          <div className={styles.movies}>
            {ratedMovies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                thumb_img={movie.medium_cover_image}
                title={movie.title}
                year={movie.year}
                summary={movie.summary}
                genres={movie.genres}
                rating={movie.rating}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
