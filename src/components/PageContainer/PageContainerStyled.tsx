import { Box } from "@chakra-ui/react";

import { StyledBoxProps } from "../../types/props";

export const PageContainerBox:React.FC<StyledBoxProps> = ({ children }) => {
  return (
    <Box
      as={"div"}
      w={{
        base: "100%",
        tab: "768px",
        tabMax: "960px",
        desk: "1280px",
      }}
      mx={"auto"}
      px={{ base: "30px", tab: "100px" }}
      py={{ base: "30px", tab: "75px" }}
      overflow={"auto"}
    >
      {children}
    </Box>
  );
};