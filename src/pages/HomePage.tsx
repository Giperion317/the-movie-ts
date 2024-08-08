import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchMovies } from "../services/moviesApi";

export const HomePage: React.FC = () => {
  const [movies, setMovies] = useState<
    { original_title: string; id: number; poster_path: string }[]
  >([]);

  useEffect(() => {
    fetchMovies().then(setMovies);
  }, []);

  return (
    <ul>
      {movies &&
        movies.map(({ original_title, id, poster_path }) => (
          <li key={id}>
            {/* <li to={`/movies/${id}`} state={{ from: location }}> */}
            <Link to={`/search/${id}`}>
              <img
                src={"https://image.tmdb.org/t/p/original" + poster_path}
                alt={original_title}
                width="270"
              />
              <>
                <h2>{original_title}</h2>
              </>
            </Link>
          </li>
        ))}
    </ul>
  );
};
