import {
  SearchEngineItemBox,
  SearchEngineItemPicture,
  SearchEngineItemTitleYearBox,
  SearchEngineItemTitle,
  SearchEngineItemYear,
  SearchEngineItemOverview,
  SearchEngineItemInfoBox,
} from "./SearchEngineItemStyled";

import { TopMoviesItemProps } from "../../types/props";

export const SearchEngineItem:React.FC<TopMoviesItemProps> = ({ poster, title, year, overview, id }) => {
  return (
    <SearchEngineItemBox title={title} id={id}>
      <SearchEngineItemPicture poster={poster} />
      <SearchEngineItemInfoBox>
        <SearchEngineItemTitleYearBox>
          <SearchEngineItemTitle title={title} />
          <SearchEngineItemYear year={year} />
        </SearchEngineItemTitleYearBox>
        <SearchEngineItemOverview overview={overview} />
      </SearchEngineItemInfoBox>
    </SearchEngineItemBox>
  );
};