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
        <div className="glass-dark group overflow-hidden rounded-[2.5rem] p-12 text-center shadow-2xl">
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
            <Bug size={80} className="text-indigo-400 relative z-10" />
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
            className="mb-10 text-sm leading-relaxed text-slate-400"
          >
            The page you're looking for was either moved or never existed in the
            first place. Let's get you back on track.
          </M.p>

          <div className="flex flex-col gap-3">
            <M.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
            >
              <Link
                to="/"
                className="flex items-center justify-center gap-2 rounded-2xl bg-indigo-500/90 px-8 py-4 font-bold text-white shadow-lg shadow-indigo-950/40 ring-1 ring-white/20 backdrop-blur-sm transition-colors hover:bg-indigo-500"
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
                className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/8 px-8 py-4 font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/14"
              >
                <ArrowLeft size={18} />
                Go Back
              </button>
            </M.div>
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

