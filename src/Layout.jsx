import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <main className="pt-20 md:pt-24">
      <Navbar />
      <div className="max-w-5xl mx-auto">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
