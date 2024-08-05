import { Outlet } from "react-router-dom"

import { Navigation } from "../Navigation/Navigation"

export const Layout: React.FC = () => {
    return (
        <>
            <header><Navigation/></header>
            <main><Outlet></Outlet></main>
            <footer>Futer</footer>
        </>
    )
}