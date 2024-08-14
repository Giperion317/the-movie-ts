import { Flex } from "@chakra-ui/react";

import { StyledFlexProps } from "../../../types/props";

export const TopMoviesBox:React.FC<StyledFlexProps> = ({ children }) => {
  return (
    <Flex
      gap={{ base: "20px", desk: "30px" }}
      flexDirection={{ base: "column", tabMax: "row" }}
      justifyContent={"center"}
      alignItems={"start"}
      mb={"75px"}
      w={"100%"}
    >
      {children}
    </Flex>
  );
};