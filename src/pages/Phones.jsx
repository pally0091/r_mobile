import { useState, useEffect } from "react";
import { motion as M, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const easeClean = [0.22, 1, 0.36, 1];

const brands = [
  { id: "apple", name: "Apple", icon: "" },
  { id: "samsung", name: "Samsung", icon: "📱" },
  { id: "oppo", name: "Oppo", icon: "✨" },
];

const Phones = () => {
  const [activeTab, setActiveTab] = useState("apple");
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhones = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://openapi.programming-hero.com/api/phones?search=${activeTab}`,
        );
        const data = await response.json();
        setPhones(data.data || []);
      } catch (error) {
        console.error("Error fetching phones:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPhones();
  }, [activeTab]);

  return (
    <div className="py-8 sm:py-12">
      <div className="mx-auto max-w-7xl sm:px-0">
        <header className="mb-10 text-center sm:mb-12">
          <M.h1
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeClean }}
            className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl"
          >
            Explore <span className="text-indigo-600">Smartphones</span>
          </M.h1>
          <M.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.45, ease: easeClean }}
            className="mt-4 text-lg text-slate-600"
          >
            Discover the latest mobile devices from top brands.
          </M.p>
        </header>

        <div className="mb-10 flex justify-center">
          <div className="glass-tab-rail inline-flex rounded-2xl p-1.5">
            {brands.map((brand) => (
              <button
                key={brand.id}
                type="button"
                onClick={() => setActiveTab(brand.id)}
                className={`relative flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors duration-300 md:px-6 ${
                  activeTab === brand.id
                    ? "text-white"
                    : "text-slate-600 hover:bg-white/40 hover:text-slate-900"
                }`}
              >
                {activeTab === brand.id && (
                  <M.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-xl bg-indigo-600 shadow-md shadow-indigo-600/35"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                <span className="relative z-10">{brand.icon}</span>
                <span className="relative z-10">{brand.name}</span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <M.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: easeClean }}
          >
            {loading ? (
              <div className="glass-surface flex h-64 items-center justify-center rounded-3xl">
                <M.div
                  className="h-11 w-11 rounded-full border-2 border-indigo-200/80 border-t-indigo-600"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 0.9,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>
            ) : (
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {phones.map((phone, idx) => (
                  <M.article
                    key={phone.slug ?? idx}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: idx * 0.04,
                      duration: 0.4,
                      ease: easeClean,
                    }}
                    whileHover={{
                      y: -6,
                      transition: { type: "spring", stiffness: 380, damping: 26 },
                    }}
                    className="glass-surface group overflow-hidden rounded-3xl"
                  >
                    <div className="relative flex aspect-4/5 items-center justify-center overflow-hidden bg-linear-to-b from-white/35 to-indigo-50/25 p-8">
                      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-indigo-100/30 to-transparent opacity-80" />
                      <img
                        src={phone.image}
                        alt={phone.phone_name}
                        className="relative z-[1] max-h-full max-w-full object-contain drop-shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                      />
                    </div>
                    <div className="p-6">
                      <h2 className="line-clamp-1 text-xl font-bold text-slate-900">
                        {phone.phone_name}
                      </h2>
                      <p className="mt-1 text-sm font-medium uppercase tracking-wide text-slate-500">
                        {phone.brand}
                      </p>
                      <div className="mt-6">
                        <Link
                          to={`/phones/${phone.slug}`}
                          className="flex w-full items-center justify-center rounded-xl bg-slate-900/90 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-slate-900/15 ring-1 ring-white/30 backdrop-blur-sm transition-all duration-300 hover:bg-indigo-600 hover:shadow-indigo-500/25"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </M.article>
                ))}
              </div>
            )}

            {!loading && phones.length === 0 && (
              <div className="glass-surface rounded-3xl border border-dashed border-slate-300/80 py-20 text-center">
                <p className="text-lg text-slate-500">
                  No phones found for this brand yet.
                </p>
              </div>
            )}
          </M.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Phones;
