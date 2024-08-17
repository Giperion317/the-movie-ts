import { useEffect, useState } from "react";
import { useParams, Outlet} from "react-router-dom";

import { getTimeFromMins } from "../../services/getTimeFromMins";

import { PageContainer } from "../PageContainer";

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

  useEffect(() => {
  fetchMovieFullInfo(movieId).then(setMovie)
    fetchVideo(movieId).then(setTrailer)
    fetchMovieCast(movieId).then(setCast);
  }, [movieId]);

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
              <Outlet/>
            </MovieContainer>
          </PageContainer>
        </MovieBox>
      )}
    </>
  );
};