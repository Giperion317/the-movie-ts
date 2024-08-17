import { MovieInfoCastItemBox} from "./MovieCastItemStyled";

import { MovieCastItemProps } from "../../types/props";

export const MovieInfoCastItem:React.FC<MovieCastItemProps> = ({ photo}) => {
    return <MovieInfoCastItemBox photo={photo} children={undefined}></MovieInfoCastItemBox>;
};