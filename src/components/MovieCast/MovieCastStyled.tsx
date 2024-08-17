import { Flex } from "@chakra-ui/react";

import { FlexProps } from "@chakra-ui/react";

export const MovieInfoCastBox:React.FC<FlexProps> = ({ children }) => {
  return (
    <Flex flexWrap={"wrap"} justifyContent={"space-between"} gap={"40px"}>
      {children}
    </Flex>
  );
};