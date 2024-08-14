import { TopMoviesItem } from "./TopMoviesItem";
import { TopMoviesBox } from "./TopMoviesStyled";

import { MoviesProps } from "../../../types/props";

const BASE_POSTER_URL = "https://www.themoviedb.org/t/p/w1280";

export const TopMovies:React.FC<MoviesProps> = ({ movies }) => {
  return (
    <TopMoviesBox>
      {movies.map(({ poster_path, title, release_date, overview, id }) => (
        <TopMoviesItem
          key={id}
          id={id}
          title={title}
          year={release_date.slice(0, 4)}
          poster={BASE_POSTER_URL + poster_path}
          overview={overview}
        />
      ))}
    </TopMoviesBox>
  );
};