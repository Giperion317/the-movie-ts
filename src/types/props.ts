import { ReactNode } from "react";
import { FlexProps, BoxProps } from "@chakra-ui/react";
import { MoviesType } from "./movies";
import { VideoItem } from "./video";
import { CastType } from "./cast";

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

export interface StyledFlexProps extends FlexProps {
  children: React.ReactNode;
}

export interface StyledBoxProps extends BoxProps {
  children: React.ReactNode;
}

export interface PageContainerProps {
  children: ReactNode;
}

export interface MoviesListBoxProps extends BoxProps {
  children: React.ReactNode;
  backdrop: string;
}

export interface ListTypeTitleProps extends BoxProps {
  title: string;
  accent?: boolean;
}

export interface ScrollProgressProps {
  value: number;
  max: number;
}

export interface MoviesProps {
  movies: MoviesType[];
}

export interface PopularMoviesItemProps {
  poster: string;
  id: number;
  title: string;
}

export interface MoviesItemBoxProps {
  children?: React.ReactNode;
  poster?: string;
  id?: number;
  title?: string;
}

export interface TopMoviesItemProps {
  poster?: string;
  id?: number;
  title?: string;
  year?: string;
  overview?: string;
}

export interface TrendMovieProps {
  movie: MoviesType;
}

export interface TrendMovieStyledProps {
  id?: number;
  title?: string;
  year?: string;
  overview?: string;
  rating?: string;
}

export interface MovieStyledProps {
  backdrop?: string;
  title?: string;
  year?: string;
  overview?: string;
  runtime?: string;
  rating?: string;
  genres?: { name: string }[];
}

export interface MovieBoxProps {
  children: React.ReactNode;
  backdrop: string;
}

export interface MovieTrailerProps {
  trailer: VideoItem[] | VideoItem;
}

export interface CastProps {
  cast: CastType[];
}

export interface MovieCastItemProps {
  photo: string;
  name: string;
}

export interface MovieCastItemBoxProps extends BoxProps {
  children: React.ReactNode;
  photo: string;
}

export interface MovieInfoCastAktorProps {
  name: string;
}

export interface SearchEngineBoxProps extends FlexProps {
  children: React.ReactNode;
  backdrop: string;
}