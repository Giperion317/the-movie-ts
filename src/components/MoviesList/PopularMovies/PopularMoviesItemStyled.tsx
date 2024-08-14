import slugify from "react-slugify";

import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { PopularMoviesItemBoxProps } from "../../../types/props";

export const PopularMoviesItemBox:React.FC<PopularMoviesItemBoxProps> = ({ children, title, id, poster}) => {
  return (
    <Box
      as={Link}
      to={`/search/movie/${slugify(title)}/${id}`}
      w={{ base: "100%", mobMax: "calc(50% - 10px)", tab: "auto" }}
      aspectRatio={"2 / 3"}
      minW={{
        base: "260px",
        mobMax: "190px",
        tab: "176px",
        tabMax: "240px",
        desk: "252px",
      }}
      minH={{
        base: "390px",
        mobMax: "285px",
        tab: "264px",
        tabMax: "360px",
        desk: "378px",
      }}
      borderRadius={"5px"}
      backgroundImage={poster}
      backgroundSize={"cover"}
      backgroundRepeat={"no-repeat"}
    >
      {children}
    </Box>
  );
};