import InfiniteScroll from "react-infinite-scroller";
import { useEffect, useState } from "react";

import { fetchMovies } from "../../services/moviesApi";

import { PageContainer } from "../PageContainer/PageContainer";

import { PopularMovies } from "./PopularMovies";

import { TrendMovie } from "./TrendMovie";

import { TopMovies } from "./TopMovies";

import { ScrollProgress } from "../ScrollProgress";

import { MoviesListBox, ListTypeTitle } from "./MoviesListStyled";

import { MoviesType, FetchMoviesResponse } from "../../types/movies";

const BASE_BACKDROP_URL = "https://image.tmdb.org/t/p/w1280";
const DEFAULT_BACKDROP = "default_backdrop.jpg";

export const MoviesList: React.FC = () => {
  const [movies, setMovies] = useState<MoviesType[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number | null>(null);

    useEffect(() => {
    const loadMovies = async () => {
      try {
        const { results, total_pages }: FetchMoviesResponse = await fetchMovies(page);
        setMovies((prevMovies) => (page === 1 ? results : [...prevMovies, ...results]));
        setTotalPages(total_pages > 20 ? 20 : total_pages);
        setHasMore(page < total_pages);
      } catch (error) {
        console.error("Error loading movies:", error);
        setHasMore(false);
      }
    };

    loadMovies();
  }, [page]);
  
  const nextPage = () => {
    if (page === totalPages) return;
    setPage(page + 1);
    setHasMore(false);
  };

  return (
    <>
      {movies.length > 0 && totalPages && (
        <MoviesListBox backdrop={
              movies[0]?.backdrop_path
                ? BASE_BACKDROP_URL + movies[0].backdrop_path
                : BASE_BACKDROP_URL + DEFAULT_BACKDROP
            }>
          <ScrollProgress value={page} max={totalPages} />
          <PageContainer>
            <InfiniteScroll
              loadMore={nextPage}
              hasMore={hasMore}
              useWindow={false}
            >
              <ListTypeTitle title={"trend movie to watch"} />
              <TrendMovie movie={movies[0]} />
              <ListTypeTitle title={"top movies this week"} accent />
              <TopMovies movies={movies.slice(1, 4)} />
              <ListTypeTitle title={"popular movies today"} accent />
              <PopularMovies movies={movies.slice(4)} />
            </InfiniteScroll>
          </PageContainer>
        </MoviesListBox>
      )}
    </>
  );
};

