import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import '../styles/layout.css'


interface LayoutProps {
    children: ReactNode
}


export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="layout-container">
            <Header />
            <main className="content">{children}</main>
            <Footer />
        </div>
    )
}
