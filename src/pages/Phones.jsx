import { useState, useEffect } from "react";
import { motion as M, AnimatePresence } from "framer-motion";

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
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-12 text-center">
          <M.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl"
          >
            Explore <span className="text-indigo-600">Smartphones</span>
          </M.h1>
          <M.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-slate-600"
          >
            Discover the latest mobile devices from top brands.
          </M.p>
        </header>

        {/* Tab Switcher */}
        <div className="mb-10 flex justify-center">
          <div className="inline-flex rounded-2xl bg-white p-1.5 shadow-xl shadow-indigo-100/50 backdrop-blur-sm border border-slate-200">
            {brands.map((brand) => (
              <button
                key={brand.id}
                onClick={() => setActiveTab(brand.id)}
                className={`relative flex items-center gap-2 rounded-xl px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  activeTab === brand.id
                    ? "text-white"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {activeTab === brand.id && (
                  <M.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-xl bg-indigo-600 shadow-lg shadow-indigo-600/30"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{brand.icon}</span>
                <span className="relative z-10">{brand.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <AnimatePresence mode="wait">
          <M.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            {loading ? (
              <div className="flex h-64 items-center justify-center">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-indigo-200 border-t-indigo-600" />
              </div>
            ) : (
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {phones.map((phone, idx) => (
                  <M.article
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-100"
                  >
                    <div className="aspect-4/5 overflow-hidden bg-slate-100 p-8 flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-linear-to-br from-indigo-50/20 to-transparent pointer-events-none" />
                      <img
                        src={phone.image}
                        alt={phone.phone_name}
                        className="max-h-full max-w-full drop-shadow-2xl transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <h2 className="text-xl font-bold text-slate-900 line-clamp-1">
                        {phone.phone_name}
                      </h2>
                      <p className="mt-1 text-sm font-medium text-slate-500 uppercase tracking-wide">
                        {phone.brand}
                      </p>
                      <div className="mt-6">
                        <a
                          href={`/phones/${phone.slug}`}
                          className="flex items-center justify-center w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-indigo-600 group-hover:shadow-lg group-hover:shadow-indigo-600/20"
                        >
                          View Details
                        </a>
                      </div>
                    </div>
                  </M.article>
                ))}
              </div>
            )}

            {!loading && phones.length === 0 && (
              <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200">
                <p className="text-slate-400 text-lg">
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
