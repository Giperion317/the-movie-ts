import { useState, useEffect } from "react";
import { fetchMovies } from "../services/moviesApi";

import { Movies } from "../components/Movies/Movies";

import { MoviesType } from "../types/movies";

export const HomePage: React.FC = () => {
  const [movies, setMovies] = useState<MoviesType[]>([]);

  useEffect(() => {
    fetchMovies().then(setMovies);
  }, []);

  return (
  <>
      {movies.length && <Movies movies={ movies}/>}
      </>
  );
};
