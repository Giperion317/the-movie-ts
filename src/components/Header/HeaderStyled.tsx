import { Flex } from "@chakra-ui/react";

import { StyledFlexProps } from "../../types/props";

export const HeaderStyledBox: React.FC<StyledFlexProps> = ({ children }) => {
  return (
    <Flex
      as="header"
      position={"fixed"}
      left={"0px"}
      bottom={"0px"}
      zIndex={"100"}
      justifyContent={"center"}
      alignItems={"center"}
      backgroundColor={"#191919"}
      w={{ base: "100%", tab: "70px" }}
      h={{ base: "50px", tab: "100vh" }}
    >
      {children}
    </Flex>
  );
};