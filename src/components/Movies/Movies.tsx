import { Link, useLocation } from "react-router-dom";

import { IPropMovies } from "../../types/props"

export const Movies: React.FC<IPropMovies> = ({ movies }) => {
  const location = useLocation()
    return (
        <ul>
        {movies.map(({ original_title, id, poster_path }) => (
          <li key={id}>
            <Link to={`/search/${id}`} state={{from: location}}>
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
    )
}