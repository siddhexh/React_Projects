import Footer from "./src/components/footer/Footer";
import Header from "./src/components/header/Header";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
        
    )
};

export default Layout;