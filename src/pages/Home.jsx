import { motion as M } from "framer-motion";
import { Link } from "react-router-dom";

const easeClean = [0.22, 1, 0.36, 1];

const featuredPhones = [
  {
    model: "Apple - iPhone 13 Pro Max",
    slug: "apple_iphone_13_pro_max-11089",
    tagline:
      "A powerful A15 Bionic chip, ProMotion display, and advanced camera system.",
    price: "$1099",
    rating: 4.8,
    badge: "Premium",
    badgeClasses:
      "border-amber-200/80 bg-amber-50/80 text-amber-900 backdrop-blur-sm",
  },
  {
    model: "Oppo - Find X5 Pro",
    slug: "oppo_find_x5_pro-11236",
    tagline:
      "Sleek design, powerful performance, and a versatile camera setup.",
    price: "$999",
    rating: 4.5,
    badge: "Best Value",
    badgeClasses:
      "border-emerald-200/80 bg-emerald-50/80 text-emerald-900 backdrop-blur-sm",
  },
  {
    model: "Samsung - Galaxy S22 5G",
    slug: "samsung_galaxy_s22_5g-11253",
    tagline:
      "Dynamic AMOLED display, powerful Snapdragon 8 Gen 1, and versatile cameras.",
    price: "$899",
    rating: 4.6,
    badge: "Favorite",
    badgeClasses:
      "border-cyan-200/80 bg-cyan-50/80 text-cyan-900 backdrop-blur-sm",
  },
];

const cardAnimation = {
  hidden: { opacity: 0, y: 14 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.45, ease: easeClean },
  }),
};

const Home = () => {
  return (
    <div className="py-6 sm:py-10">
      <div className="mx-auto max-w-6xl sm:px-0">
        <M.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: easeClean }}
          className="glass-surface-strong rounded-3xl p-8 sm:p-12"
        >
          <span className="inline-flex items-center rounded-full border border-indigo-200/60 bg-indigo-50/70 px-3 py-1 text-xs font-semibold text-indigo-800 backdrop-blur-sm">
            New collection
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Mobile phones at a glance
          </h1>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            Explore the featured devices and details before jumping to the full
            phone list. A smooth, informative home landing experience for
            shoppers and reviewers.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/phones"
              className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:bg-indigo-700 hover:shadow-indigo-500/35"
            >
              View all phones
            </Link>
            <Link
              to="/compare"
              className="glass-chip inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-indigo-800 transition-colors duration-300 hover:bg-white/55"
            >
              Compare models
            </Link>
          </div>
        </M.section>

        <section className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPhones.map((phone, index) => (
            <M.article
              key={phone.model}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={cardAnimation}
              whileHover={{
                y: -4,
                transition: { type: "spring", stiffness: 420, damping: 30 },
              }}
              className="glass-surface group rounded-2xl p-5 transition-shadow duration-300 hover:shadow-lg hover:shadow-indigo-500/10"
            >
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-lg font-semibold text-slate-900">
                  {phone.model}
                </h2>
                <span
                  className={`shrink-0 rounded-full border px-2 py-1 text-xs font-semibold ${phone.badgeClasses}`}
                >
                  {phone.badge}
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-600">{phone.tagline}</p>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <p className="text-2xl font-bold text-slate-900">
                  {phone.price}
                </p>
                <div className="ml-auto flex items-center gap-1 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>
                      {i < Math.round(phone.rating) ? "★" : "☆"}
                    </span>
                  ))}
                </div>
                <span className="text-xs text-slate-500">{phone.rating}</span>
              </div>
              <Link
                className="mt-5 inline-block rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-md shadow-indigo-500/20 transition-colors duration-300 hover:bg-indigo-700"
                to={`/phones/${phone.slug}`}
              >
                Explore details
              </Link>
            </M.article>
          ))}
        </section>

        <M.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: easeClean }}
          className="glass-surface mt-10 rounded-2xl p-6 text-center sm:p-8"
        >
          <h3 className="text-xl font-semibold text-slate-900">
            Why this page?
          </h3>
          <p className="mt-2 text-slate-600">
            The home page highlights top phone choices, quick specs, and a clear
            call to action for users to go deeper into the catalog.
          </p>
        </M.section>
      </div>
    </div>
  );
};

export default Home;
