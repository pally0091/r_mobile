import { motion as M } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, ArrowLeft, Bug } from "lucide-react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Animated background highlights */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-600/20 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/10 blur-[150px] rounded-full animate-pulse delay-700"></div>

      <M.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="glass-dark group overflow-hidden rounded-[2.5rem] p-10 text-center shadow-2xl">
          {/* Subtle light streak */}
          <div className="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-white/5 to-transparent skew-x-[-45deg] group-hover:left-full transition-all duration-1000 ease-in-out"></div>

          <M.div
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.12,
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mb-8 inline-block"
          >
            <div className="absolute inset-0 bg-indigo-500/20 blur-2xl rounded-full scale-150"></div>
            <Bug
              size={80}
              className="text-indigo-400 relative z-10"
            />
          </M.div>

          <M.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.18, duration: 0.4 }}
            className="mb-2 text-7xl font-black tracking-tighter text-white"
          >
            404
          </M.h1>

          <M.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.24, duration: 0.4 }}
            className="mb-4 text-xl font-bold text-slate-200"
          >
            You've reached a dead end
          </M.h2>

          <M.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="mb-6 text-sm leading-relaxed text-slate-400"
          >
            The page you tried to reach isn’t available. Use the links below to
            continue exploring the site.
          </M.p>

          <div className="mt-6 flex flex-col gap-3">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <M.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
              >
                <Link
                  to="/"
                  className="btn-primary flex items-center justify-center gap-2"
                >
                  <Home size={18} />
                  Return Home
                </Link>
              </M.div>

              <M.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
              >
                <button
                  type="button"
                  onClick={() => window.history.back()}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/8 px-6 py-3 font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/14"
                >
                  <ArrowLeft size={18} />
                  Go Back
                </button>
              </M.div>
            </div>

            <div className="mt-3 text-sm text-slate-400">
              Or try these quick links:
              <div className="mt-2 flex flex-wrap gap-2 justify-center">
                <Link
                  to="/phones"
                  className="glass-chip px-3 py-1.5 rounded-full text-sm font-semibold text-slate-700"
                >
                  Phones
                </Link>
                <Link
                  to="/about"
                  className="glass-chip px-3 py-1.5 rounded-full text-sm font-semibold text-slate-700"
                >
                  About
                </Link>
                <Link
                  to="/phones?search=apple"
                  className="glass-chip px-3 py-1.5 rounded-full text-sm font-semibold text-slate-700"
                >
                  Apple
                </Link>
                <a
                  href="mailto:hello@rmobiles.example"
                  className="glass-chip px-3 py-1.5 rounded-full text-sm font-semibold text-slate-700"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Floating elements for context */}
        <M.div
          animate={{ y: [0, -8, 0], rotate: [0, 6, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-10 -top-10 flex h-20 w-20 -rotate-12 items-center justify-center rounded-2xl border border-white/10 bg-indigo-500/10 backdrop-blur-xl"
        >
          <div className="w-8 h-8 rounded-full bg-indigo-500/20"></div>
        </M.div>

        <M.div
          animate={{ y: [0, 8, 0], rotate: [0, -5, 0] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            delay: 1.5,
            ease: "easeInOut",
          }}
          className="absolute -bottom-10 -left-10 flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl"
        >
          <div className="w-6 h-1 bg-white/20 rounded-full"></div>
        </M.div>
      </M.div>
    </div>
  );
};

export default ErrorPage;
