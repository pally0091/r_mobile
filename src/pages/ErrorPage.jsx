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
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-md w-full relative z-10"
      >
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-12 text-center shadow-2xl shadow-black/50 overflow-hidden group">
          {/* Subtle light streak */}
          <div className="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-white/5 to-transparent skew-x-[-45deg] group-hover:left-full transition-all duration-1000 ease-in-out"></div>

          <M.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="mb-8 relative inline-block"
          >
            <div className="absolute inset-0 bg-indigo-500/20 blur-2xl rounded-full scale-150"></div>
            <Bug size={80} className="text-indigo-400 relative z-10" />
          </M.div>

          <M.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-7xl font-black text-white mb-2 tracking-tighter"
          >
            404
          </M.h1>

          <M.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl font-bold text-slate-200 mb-4"
          >
            You've reached a dead end
          </M.h2>

          <M.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-slate-400 text-sm leading-relaxed mb-10"
          >
            The page you're looking for was either moved or never existed in the
            first place. Let's get you back on track.
          </M.p>

          <div className="flex flex-col gap-3">
            <M.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/"
                className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-lg shadow-indigo-600/20"
              >
                <Home size={18} />
                Return Home
              </Link>
            </M.div>

            <M.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <button
                onClick={() => window.history.back()}
                className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold py-4 px-8 rounded-2xl transition-all"
              >
                <ArrowLeft size={18} />
                Go Back
              </button>
            </M.div>
          </div>
        </div>

        {/* Floating elements for context */}
        <M.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute -top-10 -right-10 w-20 h-20 bg-indigo-500/10 backdrop-blur-xl border border-white/5 rounded-2xl flex items-center justify-center -rotate-12"
        >
          <div className="w-8 h-8 rounded-full bg-indigo-500/20"></div>
        </M.div>

        <M.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -10, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute -bottom-10 -left-10 w-16 h-16 bg-white/5 backdrop-blur-xl border border-white/5 rounded-full flex items-center justify-center"
        >
          <div className="w-6 h-1 bg-white/20 rounded-full"></div>
        </M.div>
      </M.div>
    </div>
  );
};

export default ErrorPage;

