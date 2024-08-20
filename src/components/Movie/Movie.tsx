import { useEffect, useState, Suspense } from "react";
import { useParams, Outlet} from "react-router-dom";

import { getTimeFromMins } from "../../services/getTimeFromMins";

import { PageContainer } from "../PageContainer";

import { Loader } from "../Loader";

import { fetchMovieFullInfo, fetchMovieCast, fetchVideo} from "../../services/moviesApi";

import { VideoItem } from "../../types/video";
import { MovieInfoType } from "../../types/movie";
import { CastType } from "../../types/cast";

import {
  MovieBox,
  MovieContainer,
  MovieTitle,
  MovieInfoBox,
  MovieYear,
  MovieOverview,
  MovieRuntime,
  MovieMainInfoBox,
  MovieMoreInfoBox,
  MovieMoreInfoTypeBox,
  MovieGenre,
  MovieRating,
  MovieTrailer,
  MovieCastNames,
} from "./MovieStyled";

const BASE_BACKDROP_URL = "https://image.tmdb.org/t/p/w1280";

export const Movie:React.FC = () => {
  const [movie, setMovie] = useState<MovieInfoType | null>(null);
  const [cast, setCast] = useState<CastType[]>([]);
  const [trailer, setTrailer] = useState<VideoItem | null>(null);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const movieData = await fetchMovieFullInfo(movieId);
        setMovie(movieData);

        const trailerData = await fetchVideo(movieId);
        setTrailer(trailerData);

        const castData = await fetchMovieCast(movieId);
        setCast(castData);
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setIsLoading(false);
      }
    };

  fetchData();
  }, [movieId]);
  
  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {movie && trailer && (
        <MovieBox backdrop={BASE_BACKDROP_URL + movie.backdrop_path}>
          <PageContainer>
            <MovieContainer>
              <MovieInfoBox>
                <MovieTitle title={movie.title} />
                <MovieTrailer trailer={trailer} />
                <MovieMoreInfoBox>
                  <MovieMoreInfoTypeBox>
                    <MovieGenre genres = {movie.genres}  />
                  </MovieMoreInfoTypeBox>
                  <MovieRating rating={movie.vote_average.toFixed(1)} />
                </MovieMoreInfoBox>
                <MovieMainInfoBox>
                  <MovieYear year={movie.release_date.slice(0, 4)} />
                  <MovieRuntime runtime={getTimeFromMins(movie.runtime)} />
                </MovieMainInfoBox>
                <MovieOverview overview={movie.overview} />
              </MovieInfoBox>
              {cast && <MovieCastNames cast={cast} />}
              <Suspense fallback={<Loader />}>
              <Outlet />
              </Suspense>
            </MovieContainer>
          </PageContainer>
        </MovieBox>
      )}
    </>
  );
};