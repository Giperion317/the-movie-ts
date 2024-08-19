import { Flex, Box } from "@chakra-ui/react";

import { SearchEngineBoxProps, StyledBoxProps } from "../../types/props";

export const SearchEngineBox:React.FC<SearchEngineBoxProps> = ({ children, backdrop }) => {
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

export const SearchEngineResultsBox:React.FC<StyledBoxProps> = ({ children}) => {
  return <Box>{children}</Box>;
};