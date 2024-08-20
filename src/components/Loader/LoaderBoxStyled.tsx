import { Box } from "@chakra-ui/react";

import { StyledBoxProps } from "../../types/props";

export const LoaderBox:React.FC<StyledBoxProps> = ({children}) => {
    return (<Box m={"0 auto"}>
        {children}
    </Box>)
}