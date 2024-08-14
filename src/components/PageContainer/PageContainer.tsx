import { PageContainerBox } from "./PageContainerStyled";

import { PageContainerProps } from "../../types/props";

export const PageContainer:React.FC<PageContainerProps> = ({ children }) => {
  return <PageContainerBox>{children}</PageContainerBox>;
};