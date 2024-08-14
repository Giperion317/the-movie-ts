import InfiniteScroll from 'react-infinite-scroller';
import { useEffect, useState } from "react";

import { fetchMovies } from '../../services/moviesApi'; 

import { PageContainer } from "../PageContainer/PageContainer";

import { PopularMovies } from "./PopularMovies";

import { ScrollProgress } from "../ScrollProgress";

import { MoviesListBox, ListTypeTitle } from "./MoviesListStyled";

import { MoviesType, FetchMoviesResponse } from "../../types/movies";

const BASE_BACKDROP_URL = "https://image.tmdb.org/t/p/w1280";

export const MoviesList: React.FC = () => {
  const [movies, setMovies] = useState<MoviesType[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
const [totalPages, setTotalPages] = useState<number | null>(null);
    
  useEffect(() => {
    fetchMovies(page).then(({ results, total_pages }: FetchMoviesResponse) => {
      if (page === 1) {
        setMovies(results);
      } else {
        setMovies((prevMovies) => [...prevMovies, ...results]);
      }
      setTotalPages(total_pages > 20 ? 20 : total_pages);
      setHasMore(true);
    });
  }, [page]);


//   useEffect(() => {
//     fetchMovies(page).then(({ results, total_pages }) => {
//         page === 1 && setMovies(results);
//       page > 1 && setMovies((movies) => [...movies, ...results]);
//       total_pages > 20 ? setTotalPages(20) : setTotalPages(total_pages);
//       setHasMore(true);
//     });
//   }, [page]);

  const nextPage = () => {
    if (page === totalPages) return;
    setPage(page + 1);
    setHasMore(false);
  };

  return (
    <>
      {movies.length > 0 && totalPages && (
        <MoviesListBox backdrop={BASE_BACKDROP_URL + movies[0].backdrop_path}>
          <ScrollProgress value={page} max={totalPages} />
          <PageContainer>
            <InfiniteScroll
              loadMore={nextPage}
              hasMore={hasMore}
              useWindow={false}
            >
              <ListTypeTitle title={"trend movie to watch"} />
              {/* <TrendMovie movie={movies[0]} /> */}
              <ListTypeTitle title={"top movies this week"} accent />
              {/* <TopMovies movies={movies.slice(1, 4)} /> */}
              <ListTypeTitle title={"popular movies today"} accent />
              <PopularMovies movies={movies.slice(4)} />
            </InfiniteScroll>
          </PageContainer>
        </MoviesListBox>
      )}
    </>
  );
};