import {
  TopMoviesItemBox,
  TopMoviesItemPicture,
  TopMoviesItemTitleYearBox,
  TopMoviesItemTitle,
  TopMoviesItemYear,
  TopMoviesItemOverview,
  TopMoviesItemInfoBox,
} from "./TopMoviesItemStyled";

import { TopMoviesItemProps } from "../../../types/props";

export const TopMoviesItem:React.FC<TopMoviesItemProps> = ({ poster, title, year, overview, id }) => {
  return (
    <TopMoviesItemBox title={title} id={id}>
      <TopMoviesItemPicture poster={poster} />
      <TopMoviesItemInfoBox>
        <TopMoviesItemTitleYearBox>
          <TopMoviesItemTitle title={title} />
          <TopMoviesItemYear year={year} />
        </TopMoviesItemTitleYearBox>
        <TopMoviesItemOverview overview={overview} />
      </TopMoviesItemInfoBox>
    </TopMoviesItemBox>
  );
};