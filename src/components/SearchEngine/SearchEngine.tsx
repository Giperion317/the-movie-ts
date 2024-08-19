import InfiniteScroll from "react-infinite-scroller";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { fetchMoviesSearch, fetchMovies } from "../../services/moviesApi";
import { PageContainer } from "../PageContainer";
import { ScrollProgress } from "../ScrollProgress";
import { SearchEngineForm } from "./SearchEngineForm";
import { SearchEngineItem } from "./SearchEngineItem";

import { SearchEngineBox, SearchEngineResultsBox } from "./SearchEngineStyled";
import { MoviesType, FetchMoviesResponse } from "../../types/movies";

const BASE_POSTER_URL = "https://www.themoviedb.org/t/p/w1280";

export const SearchEngine:React.FC = () => {
  const [movies, setMovies] = useState<MoviesType[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query");

  const onSearchQuery = (searchQuery: string) => {
    setSearchParams({ query: searchQuery });
    setPage(1);
  };

  useEffect(() => {
    if (!query) {
      fetchMovies(page).then(({ results, total_pages }: FetchMoviesResponse) => {
      if (page === 1) {
        setMovies(results);
      } else {
        setMovies((prevMovies) => [...prevMovies, ...results]);
      }
      setTotalPages(total_pages > 20 ? 20 : total_pages);
      setHasMore(true);
      });
    }
    if (query) {
      fetchMoviesSearch(query, page).then(({ results, total_pages }: FetchMoviesResponse) => {
      if (page === 1) {
        setMovies(results);
      } else {
        setMovies((prevMovies) => [...prevMovies, ...results]);
      }
      setTotalPages(total_pages > 20 ? 20 : total_pages);
        setHasMore(true);
      });
    }
  }, [query, page]);

  const nextPage = () => {
    if (page === totalPages) return;
    setPage(page + 1);
    setHasMore(false);
  };

  return (
    <>
      {movies && (
        <SearchEngineBox backdrop={movies[0]?.backdrop_path}>
          {totalPages && <ScrollProgress value={page} max={totalPages} />}
          <PageContainer>
            <SearchEngineForm onSubmit={onSearchQuery} />
            <InfiniteScroll loadMore={nextPage} hasMore={hasMore} useWindow={false}>
              <SearchEngineResultsBox>
                {movies.map(({ id, title, release_date, poster_path, overview }) => (
                  <SearchEngineItem
                    key={id}
                    id={id}
                    title={title}
                    year={release_date?.slice(0, 4)}
                    poster={BASE_POSTER_URL + poster_path}
                    overview={overview}
                  />
                ))}
              </SearchEngineResultsBox>
            </InfiniteScroll>
          </PageContainer>
        </SearchEngineBox>
      )}
    </>
  );
};