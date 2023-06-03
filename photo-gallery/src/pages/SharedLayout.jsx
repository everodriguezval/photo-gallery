import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const SharedLayout = () => {
    return (
        <>
            <Navbar />
            <section className="main-container">
                <Outlet />
            </section>
            <Footer />       
        </>
    )
}

export default SharedLayout;