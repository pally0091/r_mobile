import { motion as M } from "framer-motion";

const featuredPhones = [
  {
    model: "Apple - iPhone 13 Pro Max",
    slug: "apple_iphone_13_pro_max-11089",
    tagline:
      "A powerful A15 Bionic chip, ProMotion display, and advanced camera system.",
    price: "$1099",
    rating: 4.8,
    badge: "Premium",
    badgeClasses: "bg-amber-100 text-amber-800",
  },
  {
    model: "Oppo - Find X5 Pro",
    slug: "oppo_find_x5_pro-11236",
    tagline:
      "Sleek design, powerful performance, and a versatile camera setup.",
    price: "$999",
    rating: 4.5,
    badge: "Best Value",
    badgeClasses: "bg-emerald-100 text-emerald-800",
  },
  {
    model: "Samsung - Galaxy S22 5G",
    slug: "samsung_galaxy_s22_5g-11253",
    tagline:
      "Dynamic AMOLED display, powerful Snapdragon 8 Gen 1, and versatile cameras.",
    price: "$899",
    rating: 4.6,
    badge: "Favorite",
    badgeClasses: "bg-cyan-100 text-cyan-800",
  },
];

const cardAnimation = {
  hidden: { opacity: 0, y: 18, scale: 0.97 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.35 },
  }),
};

const Home = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 via-white to-slate-100 py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <M.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12"
        >
          <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
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
            <a
              href="/phones"
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-700"
            >
              View all phones
            </a>
            <a
              href="/compare"
              className="inline-flex items-center justify-center rounded-lg border border-indigo-200 bg-white px-5 py-3 text-sm font-semibold text-indigo-700 hover:bg-indigo-50"
            >
              Compare models
            </a>
          </div>
        </M.section>

        <section className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPhones.map((phone, index) => (
            <M.article
              key={phone.model}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardAnimation}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <h2 className="text-lg font-semibold text-slate-900">
                  {phone.model}
                </h2>
                <span
                  className={`rounded-full px-2 py-1 text-xs font-semibold ${phone.badgeClasses}`}
                >
                  {phone.badge}
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-600">{phone.tagline}</p>
              <div className="mt-4 flex items-center gap-2">
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
              <a
                className="mt-5 inline-block rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                href={`/phones/${phone.slug}`}
              >
                Explore details
              </a>
            </M.article>
          ))}
        </section>

        <M.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
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
