import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { fetchMovieCast } from "../../services/moviesApi";

import { CastType } from "../../types/cast";

import { MovieInfoCastBox } from "./MovieCastStyled";
import { MovieInfoCastItem } from "./MovieCastItem";

const BASE_CASTPHOTO_URL = "https://image.tmdb.org/t/p/w1280";

export const MovieCast: React.FC = () => {
  const [cast, setCast] = useState<CastType[]>([]);
  const { movieId } = useParams();

  useEffect(() => {
    setCast([]);
    const fetchCast = async () => {
      try {
        const response = await fetchMovieCast(movieId);

        console.log("API Response:", response);
        if (response && response && Array.isArray(response)) {
          setCast(response.slice(0, 10));
        } else {
          console.error("Cast data is missing or malformed.");
          setCast([]);
        }
      } catch (error) {
        console.error("Error fetching cast:", error);
        setCast([]);
      }
    };

    fetchCast();
  }, [movieId, setCast]);
  return (
    <MovieInfoCastBox>
      {cast.map((actor) => (
        <MovieInfoCastItem
          key={actor.id}
          photo={BASE_CASTPHOTO_URL + actor.profile_path}
          name={actor.name}
        />
      ))}
    </MovieInfoCastBox>
  );
};
