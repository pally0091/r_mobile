import { useEffect, useState } from "react";
import { motion as M } from "framer-motion";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);
  const gradients = [
    "linear-gradient(135deg, #2563eb 0%, #14b8a6 50%, #0ea5e9 100%)",
    "linear-gradient(135deg, #8b5cf6 0%, #ec4899 50%, #f94385 100%)",
    "linear-gradient(135deg, #4f46e5 0%, #06b6d4 50%, #84cc16 100%)",
    "linear-gradient(135deg, #f43f5e 0%, #f97316 50%, #facc15 100%)",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % gradients.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [gradients.length]);

  const currentGradient = gradients[colorIndex];

  return (
    <M.nav
      initial={{ opacity: 1 }}
      animate={{
        opacity: 1,
        background: currentGradient,
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 5,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: currentGradient,
        boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <h1 className="text-2xl font-extrabold tracking-tight text-white md:text-4xl">
          R-Mobiles
        </h1>

        <button
          className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-3 py-2 text-white transition hover:bg-white/20 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="text-lg">☰</span>
          <span className="text-sm">Menu</span>
        </button>

        <div className="hidden items-center gap-4 md:flex">
          {[
            ["/", "Home"],
            ["/phones", "Phones"],
            ["/about", "About"],
          ].map(([path, label]) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `text-white text-lg border-b-2 border-transparent px-2 py-1 transition-all duration-300 ${
                  isActive ? "border-white" : "hover:border-white"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-blue-300/30 bg-sky-950/95 px-4 py-3 backdrop-blur-lg">
          {[
            ["/", "Home"],
            ["/phones", "Phones"],
            ["/about", "About"],
          ].map(([path, label]) => (
            <NavLink
              key={`mobile-${path}`}
              to={path}
              className={({ isActive }) =>
                `block py-2 text-white text-base transition ${
                  isActive ? "font-bold" : "hover:text-sky-200"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </M.nav>
  );
};

export default Navbar;
