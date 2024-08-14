import { Flex } from "@chakra-ui/react";

import { StyledFlexProps } from "../../../types/props";

export const PopularMoviesBox:React.FC<StyledFlexProps> = ({ children }) => {
  return (
    <Flex
      flexWrap={"wrap"}
      justifyContent={"center"}
      alignItems={"start"}
      gap={{ base: "20px", desk: "24px" }}
      w={"100%"}
    >
      {children}
    </Flex>
  );
};