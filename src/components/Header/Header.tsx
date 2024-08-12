import { HeaderStyledBox } from "./HeaderStyled"

import { Navigation } from "../Navigation/Navigation"

export const Header: React.FC = () => {
    return (
        <HeaderStyledBox><Navigation/></HeaderStyledBox>
    )
}