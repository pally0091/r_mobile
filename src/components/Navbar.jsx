import { useState } from "react";
import { motion as M } from "framer-motion";
import { NavLink } from "react-router-dom";

const easeClean = [0.22, 1, 0.36, 1];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["/", "Home"],
    ["/phones", "Phones"],
    ["/about", "About"],
  ];

  return (
    <M.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: easeClean }}
      className="fixed top-0 left-0 right-0 z-50 px-4 pt-3 md:px-6 md:pt-4"
    >
      <nav className="glass-nav mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-2.5 md:rounded-[1.35rem] md:px-5 md:py-3.5">
        <NavLink
          to="/"
          className="text-xl font-extrabold tracking-tight text-slate-800 md:text-2xl"
          onClick={() => setMenuOpen(false)}
        >
          R-Mobiles
        </NavLink>

        <button
          type="button"
          className="glass-chip inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-white/55 md:hidden"
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="text-lg leading-none text-slate-600">☰</span>
          Menu
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {links.map(([path, label]) => (
            <NavLink key={path} to={path} className="relative px-1">
              {({ isActive }) => (
                <>
                  {isActive && (
                    <M.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-xl bg-white/75 shadow-sm shadow-indigo-500/10 ring-1 ring-white/80"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  )}
                  <span
                    className={`relative z-10 block rounded-xl px-3 py-2 text-[15px] font-semibold transition-colors ${
                      isActive
                        ? "text-indigo-700"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {label}
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </nav>

      <M.div
        initial={false}
        animate={
          menuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3, ease: easeClean }}
        className="glass-nav mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl md:hidden"
      >
        <div className="border-t border-white/50 px-2 py-2">
          {links.map(([path, label]) => (
            <NavLink
              key={`mobile-${path}`}
              to={path}
              className={({ isActive }) =>
                `block rounded-xl px-3 py-2.5 text-[15px] font-semibold transition-colors ${
                  isActive
                    ? "bg-white/70 text-indigo-700 ring-1 ring-white/80"
                    : "text-slate-700 hover:bg-white/45"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </div>
      </M.div>
    </M.header>
  );
};

export default Navbar;
