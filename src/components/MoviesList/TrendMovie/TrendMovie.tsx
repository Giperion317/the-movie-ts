import {
  TrendMovieBox,
  TrendMovieTitle,
  TrendMovieRatingYearBox,
  TrendMovieRating,
  TrendMovieYear,
  TrendMovieOverview,
  TrendMovieTrailerButton,
  TrendMovieInfoButton,
  TrendMovieButtonsBox,
} from "./TrendMovieStyled";

import { TrendMovieProps } from "../../../types/props"; 

export const TrendMovie:React.FC<TrendMovieProps> = ({
  movie: { title, vote_average, release_date, overview, id },
}) => {
  return (
    <TrendMovieBox>
      <TrendMovieTitle title={title} />
      <TrendMovieRatingYearBox>
        <TrendMovieRating rating={vote_average.toFixed(1)} />
        <TrendMovieYear year={release_date.slice(0, 4)} />
      </TrendMovieRatingYearBox>
      <TrendMovieOverview overview={overview} />
      <TrendMovieButtonsBox>
        <TrendMovieTrailerButton />
          <TrendMovieInfoButton id={id} title={title} />
      </TrendMovieButtonsBox>
    </TrendMovieBox>
  );
};