import { Flex, Text, Box } from "@chakra-ui/react";

import {
  mainFont,
  accentFontColor,
  mainFontColor,
  secondaryAccentColor,
} from "../../styles/variables";

import { MoviesListBoxProps, ListTypeTitleProps } from "../../types/props"; 

export const MoviesListBox:React.FC<MoviesListBoxProps> = ({ children, backdrop }) => {
  return (
    <Flex
      as={"div"}
      backgroundImage={{
        base: `linear-gradient(360deg, #191919 20%, rgba(21, 17, 17, 0.5) 50%), url(${backdrop}), #141414;`,
        tab: `linear-gradient(90deg, #191919 20%, rgba(21, 17, 17, 0.5) 50%), url(${backdrop}), #141414;`,
      }}
      backgroundSize={"cover"}
      backgroundPosition={"center"}
      backgroundRepeat={"no-repeat"}
      position={"fixed"}
      zIndex={"80"}
      w={"100%"}
      h={"100vh"}
    >
      {children}
    </Flex>
  );
};

export const ListTypeTitle:React.FC<ListTypeTitleProps> = ({ title, accent }) => {
  return (
    <>
      <Text
        as={"p"}
        fontFamily={mainFont}
        fontWeight={"600"}
        fontSize={"16px"}
        lineHeight={"1.18"}
        letterSpacing={"1.5%"}
        color={accent ? accentFontColor : mainFontColor}
        mb={"5px"}
      >
        {title}
      </Text>
      {accent && (
        <Box
          w={"100%"}
          h={"1px"}
          backgroundColor={secondaryAccentColor}
          mb={"15px"}
        />
      )}
    </>
  );
};