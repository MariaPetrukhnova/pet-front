import Loader from "./Loader";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
    return (
        <>
            <header>
                HEADER
            </header>
            <main>
                <Suspense fallback={<Loader/>}>
                    <Outlet/>
                </Suspense>
            </main>
            <footer>
                FOOTER
            </footer>
        </>
    )
};

export default SharedLayout;