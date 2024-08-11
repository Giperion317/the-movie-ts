export interface IPropForm {
  onSubmit: (searchQuery: string) => void;
}

export interface IPropMovies {
  movies: {
    original_title: string;
    id: number;
    poster_path: string;
  }[];
}
