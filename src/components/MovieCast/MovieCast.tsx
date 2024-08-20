import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { fetchMovieCast } from "../../services/moviesApi";

import { CastType } from "../../types/cast";

import { MovieInfoCastBox } from "./MovieCastStyled";
import { MovieInfoCastItem } from "./MovieCastItem";
import { Loader } from "../Loader";

const BASE_CASTPHOTO_URL = "https://image.tmdb.org/t/p/w1280";

export const MovieCast: React.FC = () => {
  const [cast, setCast] = useState<CastType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setIsLoading(true); 
        const response = await fetchMovieCast(movieId);
        if (response && Array.isArray(response)) {
          setCast(response.slice(0, 10));
        } else {
          console.error("Cast data is missing or malformed.");
          setCast([]);
        }
      } catch (error) {
        console.error("Error fetching cast:", error);
        setCast([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCast();
  }, [movieId]);

    if (isLoading) {
    return <Loader />;
  }

   return (
    <MovieInfoCastBox>
      {cast.length > 0 ? (
        cast.map((actor) => (
          <MovieInfoCastItem
            key={actor.id}
            photo={actor.profile_path ? BASE_CASTPHOTO_URL + actor.profile_path : 'default_image_url'} 
            name={actor.name}
          />
        ))
      ) : (
        <p>No cast information available.</p>
      )}
    </MovieInfoCastBox>
  );
};
