import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { fetchMovieCast } from "../services/moviesApi";

import { CastType } from "../types/cast"; 

export const CastPage: React.FC = () => {
  const [cast, setCast] = useState<
    CastType[]
  >([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCast(movieId).then(setCast);
  }, [movieId, setCast]);

  return (
    <ul>
      {cast &&
        cast.map(({ name, profile_path, id }) => (
          <li key={id}>
            <img
              src={"https://image.tmdb.org/t/p/original" + profile_path}
              alt={name}
              width="100"
            />
            <p>{name}</p>
          </li>
        ))}
    </ul>
  );
};
