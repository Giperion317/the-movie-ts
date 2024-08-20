import { ColorRing } from "react-loader-spinner";

import { LoaderBox } from "./LoaderBoxStyled";

export const Loader: React.FC = () => {
  return (
    <LoaderBox>
      <ColorRing />
    </LoaderBox>
  );
};
