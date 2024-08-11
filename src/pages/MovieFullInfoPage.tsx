import { useState, useEffect } from "react";
import { Link, Outlet, useParams, useNavigate, useLocation } from "react-router-dom";

import { fetchMovieFullInfo, fetchVideo } from "../services/moviesApi";

import { MovieType } from "../types/movie";

export const MovieFullInfoPage: React.FC = () => {
  const [movie, setMovie] = useState<Partial<MovieType>>({});
  const [video, setVideo] = useState<{key: string }[]>([]);
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();



  useEffect(() => {
   
    fetchMovieFullInfo(movieId).then(setMovie)

    fetchVideo(movieId).then(setVideo);
  }, [movieId]);
  return (
    <>
      {movie && (
        <>
          <button
            type="button"
            onClick={() => {
              navigate(location?.state?.from ?? '/');
            }}
          >
            Go back
          </button>
          <h2>{movie.original_title}</h2>
          <div>
            <img
              src={"https://image.tmdb.org/t/p/original" + movie.poster_path}
              alt={movie.original_title}
              width='360'
            />
            <div>
              {movie.vote_average && <text>User Score: {movie.vote_average * 10}%</text>}
              <hr />
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <hr />
              <h3>Genres</h3>
              <p>{movie.genres?.map((genre) => genre.name).join(" ")}</p>
              <hr />
              <h3>Trailer</h3>
              {video.length && (
                <iframe
                  src={`https://www.youtube.com/embed/${video[0].key}`}
                  title={movie.original_title}
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>
          <Link to={"cast"} state={location.state}>Cast</Link>
          <Outlet />
        </>
      )}
    </>
  );
};
