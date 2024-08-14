import { ScrollProgressStyled } from "./ScrollProgressStyled";

import { ScrollProgressProps } from "../../types/props";

export const ScrollProgress:React.FC<ScrollProgressProps> = ({ value, max }) => {
  return <ScrollProgressStyled value={value} max={max} />;
};