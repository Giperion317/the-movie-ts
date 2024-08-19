import slugify from "react-slugify";
import { Flex, Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import {
  mainFont,
  mainFontColor,
  accentFontColor,
  accentFont,
} from "../../styles/variables";

import { MoviesItemBoxProps, StyledFlexProps, StyledBoxProps, TopMoviesItemProps } from "../../types/props";

export const SearchEngineItemBox:React.FC<MoviesItemBoxProps> = ({ children, title, id }) => {
  return (
    <Flex
      as={Link}
      to={`/search/movie/${slugify(title)}/${id}`}
      w={"100%"}
      flexDirection={{ base: "column", mobMax: "row" }}
      mb={{ base: "20px", tabMax: "0px" }}
    >
      {children}
    </Flex>
  );
};

export const SearchEngineItemPicture:React.FC<MoviesItemBoxProps> = ({ children, poster }) => {
  return (
    <Box
      as={"div"}
      w={{ base: "100%", mobMax: "50%" }}
      aspectRatio={"2 / 3"}
      minW={{
        base: "auto",
        mobMax: "calc(50% - 10px)",
        tab: "176px",
        tabMax: "240px",
        desk: "340px",
      }}
      minH={{
        base: "auto",
        mobMax: "50%",
        tab: "264px",
        tabMax: "360px",
        desk: "510px",
      }}
      borderRadius={"5px"}
      backgroundImage={poster}
      backgroundSize={"cover"}
      backgroundRepeat={"no-repeat"}
      mb={{ base: "30px" }}
    >
      {children}
    </Box>
  );
};

export const SearchEngineItemInfoBox:React.FC<StyledBoxProps> = ({ children }) => {
  return <Box px={{ base: "0px", mobMax: "26px" }}>{children}</Box>;
};

export const SearchEngineItemTitleYearBox:React.FC<StyledFlexProps> = ({ children }) => {
  return (
    <Flex
      alignItems={"baseline"}
      justifyContent={"space-between"}
      gap={"30px"}
      w={"100%"}
      mb={"30px"}
    >
      {children}
    </Flex>
  );
};

export const SearchEngineItemTitle:React.FC<TopMoviesItemProps> = ({ title }) => {
  return (
    <Text
      color={accentFontColor}
      fontFamily={accentFont}
      fontWeight={"600"}
      fontSize={{ base: "20px", desk: "22px" }}
      lineHeight={"1.18"}
      letterSpacing={"-0.5%"}
    >
      {title}
    </Text>
  );
};

export const SearchEngineItemYear:React.FC<TopMoviesItemProps> = ({ year }) => {
  return (
    <Text
      color={accentFontColor}
      fontFamily={mainFont}
      fontSize={"16px"}
      lineHeight={"1.18"}
      letterSpacing={"-0.5%"}
    >
      {year}
    </Text>
  );
};

export const SearchEngineItemOverview:React.FC<TopMoviesItemProps> = ({ overview }) => {
  return (
    <Text
      color={mainFontColor}
      fontFamily={mainFont}
      fontSize={{ base: "14px", tab: "18px", tabMax: "16px", desk: "20px" }}
      lineHeight={"1.32"}
      letterSpacing={"-1%"}
    >
      {overview}
    </Text>
  );
};