import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <main className="relative min-h-screen page-ambient">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="animate-drift-22 absolute -left-32 top-24 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl" />
        <div className="animate-drift-26 absolute -right-20 top-1/3 h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="animate-drift-24 absolute bottom-10 left-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-400/18 blur-3xl" />
      </div>
      <Navbar />
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-24 md:pt-28">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
