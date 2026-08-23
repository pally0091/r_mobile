import { motion as M } from "framer-motion";
import { Link } from "react-router-dom";

const easeClean = [0.22, 1, 0.36, 1];

const highlights = [
  {
    title: "Curated picks",
    text: "We hand-select popular devices across premium, flagship, and everyday categories.",
  },
  {
    title: "Smart buying guidance",
    text: "Our listings are organized to help you choose the right phone based on budget and needs.",
  },
  {
    title: "Transparent details",
    text: "From screen size to performance, every product gets clear, useful information.",
  },
];

const stats = [
  { value: "2500+", label: "Phones reviewed" },
  { value: "4.9/5", label: "Average satisfaction" },
  { value: "24/7", label: "Customer support" },
];

const About = () => {
  return (
    <div className="py-6 sm:py-10">
      <div className="mx-auto max-w-6xl">
        <M.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: easeClean }}
          className="glass-surface-strong overflow-hidden rounded-3xl p-8 sm:p-12"
        >
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <span className="inline-flex items-center rounded-full border border-violet-200/80 bg-violet-50/80 px-3 py-1 text-xs font-semibold text-violet-800 backdrop-blur-sm">
                About R Mobile
              </span>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Better phone shopping, built for real life.
              </h1>
              <p className="mt-4 max-w-xl text-base text-slate-600 sm:text-lg">
                R Mobile helps people discover phones that match their
                lifestyle, budget, and performance expectations. We bring
                together modern devices, useful comparisons, and
                easy-to-understand product details.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/phones"
                  className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:bg-indigo-700"
                >
                  Browse collection
                </Link>
                <Link
                  to="/"
                  className="glass-chip inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-indigo-800 transition-colors hover:bg-white/60"
                >
                  Back to home
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-surface rounded-2xl p-5 text-center"
                >
                  <p className="text-3xl font-bold text-slate-900">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </M.section>

        <section className="mt-10 grid gap-6 lg:grid-cols-3">
          {highlights.map((item, index) => (
            <M.article
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
                ease: easeClean,
              }}
              className="glass-surface rounded-2xl p-6"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-lg text-indigo-700">
                {index + 1}
              </div>
              <h2 className="text-xl font-semibold text-slate-900">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.text}
              </p>
            </M.article>
          ))}
        </section>

        <M.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: easeClean }}
          className="glass-surface mt-10 rounded-3xl p-6 sm:p-8"
        >
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">
                Our story
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                Built around confidence before checkout.
              </h2>
            </div>
            <p className="text-base leading-7 text-slate-600">
              Whether someone wants a premium flagship, a travel-friendly
              device, or an everyday performer, we aim to make the decision
              easier. R Mobile combines design-forward presentation with
              practical information so shoppers can compare options without
              feeling lost or overwhelmed.
            </p>
          </div>
        </M.section>
      </div>
    </div>
  );
};

export default About;
