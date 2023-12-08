import Loader from "./Loader";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";


const SharedLayout = () => {
    return (
        <>
            <header>
                <Header/>
            </header>
            <main>
                <Suspense fallback={<Loader/>}>
                    <Outlet/>
                </Suspense>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    )
};

export default SharedLayout;