import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Layout({ products }) {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 relative">
                <Outlet context={{ products }} />
            </main>
            <Footer />
        </div>
    );
}
