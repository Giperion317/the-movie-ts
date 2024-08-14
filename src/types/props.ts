import { ReactNode } from "react";
import { FlexProps, BoxProps } from "@chakra-ui/react";
import { MoviesType } from "./movies";

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

export interface PopularMoviesProps {
  movies: MoviesType[];
}

export interface PopularMoviesItemProps {
  poster: string;
  id: number;
  title: string;
}

export interface PopularMoviesItemBoxProps {
  children?: React.ReactNode;
  poster: string;
  id: number;
  title: string;
}