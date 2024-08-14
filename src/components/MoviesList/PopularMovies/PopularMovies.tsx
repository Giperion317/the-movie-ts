import { PopularMoviesItem } from "./PopularMoviesItem";
import { PopularMoviesBox } from "./PopularMoviesStyled";

import { MoviesProps } from "../../../types/props";

const BASE_POSTER_URL = "https://www.themoviedb.org/t/p/w1280";

export const PopularMovies:React.FC<MoviesProps> = ({ movies }) => {
  return (
    <PopularMoviesBox>
      {movies.map(({ id, title, poster_path }) => (
        <PopularMoviesItem
          key={id} 
          id={id}
          title={title}
          poster={BASE_POSTER_URL + poster_path}
        />
      ))}
    </PopularMoviesBox>
  );
};