export type MoviesType = {
  id: number;
  title: string;
  backdrop_path: string;
  poster_path: string;
};

export interface FetchMoviesResponse {
  results: MoviesType[];
  total_pages: number;
}
