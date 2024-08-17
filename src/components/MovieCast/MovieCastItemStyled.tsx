import {Box} from "@chakra-ui/react";

import {
  MovieCastItemBoxProps,
} from "../../types/props";

export const MovieInfoCastItemBox: React.FC<MovieCastItemBoxProps> = ({
  photo,
}) => {
  return (
    <Box
      justifyContent={"center"}
      as={"div"}
      w={"180px"}
      h={"280px"}
      borderRadius={"15px"}
      filter={"drop-shadow(0px 0px 42px rgba(22, 22, 22, 0.16))"}
      backgroundImage={photo}
      backgroundSize={"cover"}
          backgroundRepeat={"no-repeat"}
          mb={"40x"}
    >
    </Box>
  );
};

