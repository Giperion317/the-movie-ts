export type MoviesType = {
  id: number;
  title: string;
  poster_path: string;
  overview: string
  backdrop_path: string;
  release_date: string;
  vote_average: number;
};

export interface FetchMoviesResponse {
  results: MoviesType[];
  total_pages: number;
}
