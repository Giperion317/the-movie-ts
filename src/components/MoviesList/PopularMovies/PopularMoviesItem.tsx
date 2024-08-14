import { PopularMoviesItemBox } from "./PopularMoviesItemStyled";

import { PopularMoviesItemProps } from "../../../types/props";

export const PopularMoviesItem:React.FC<PopularMoviesItemProps> = ({ poster, id, title }) => {
  return <PopularMoviesItemBox
    poster={poster}
    id={id}
    title={title}/>;
};