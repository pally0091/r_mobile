import { useLoaderData, Link } from "react-router-dom";
import { motion as M } from "framer-motion";
import {
  Smartphone,
  Cpu,
  Zap,
  HardDrive,
  ChevronLeft,
  Activity,
  Wifi,
  CheckCircle,
} from "lucide-react";

const PhoneDetail = () => {
  const data = useLoaderData();

  if (!data || !data.data) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center py-16">
        <M.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="glass-surface-strong rounded-3xl p-10 text-center"
        >
          <M.div
            className="mx-auto mb-5 h-11 w-11 rounded-full border-2 border-indigo-200/80 border-t-indigo-600"
            animate={{ rotate: 360 }}
            transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
          />
          <p className="text-lg font-medium text-slate-600">
            Retrieving phone excellence...
          </p>
        </M.div>
      </div>
    );
  }

  const phone = data.data;
  const { mainFeatures, others, brand, name, releaseDate, image } = phone;

  // Animation variants
  const easeClean = [0.22, 1, 0.36, 1];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.07, delayChildren: 0.04 },
    },
  };

  const itemVariants = {
    hidden: { y: 16, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.45, ease: easeClean },
    },
  };

  return (
    <div className="py-8 sm:py-12">
      <div className="mx-auto max-w-6xl sm:px-0">
        {/* Breadcrumb / Back Button */}
        <M.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, ease: easeClean }}
          className="mb-8"
        >
          <Link
            to="/phones"
            className="group glass-chip inline-flex items-center rounded-xl px-3 py-2 text-sm font-semibold text-slate-600 transition-colors hover:text-indigo-700"
          >
            <ChevronLeft
              size={20}
              className="mr-2 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-x-1"
            />
            Back to Collection
          </Link>
        </M.div>

        <M.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          {/* Left Column: Image Card */}
          <M.div variants={itemVariants} className="lg:col-span-5">
            <div className="group relative sticky top-28 flex items-center justify-center overflow-hidden rounded-3xl p-8 glass-surface-strong">
              <M.img
                src={image}
                alt={name}
                className="max-h-[500px] w-auto object-contain drop-shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
              />
              <div className="absolute -z-10 top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-400/15 blur-3xl" />
            </div>
          </M.div>

          {/* Right Column: Info & Specs */}
          <div className="lg:col-span-7 space-y-8">
            {/* Header Info */}
            <M.section
              variants={itemVariants}
              className="glass-surface-strong rounded-3xl p-8"
            >
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-indigo-200/70 bg-indigo-50/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-800 backdrop-blur-sm">
                  {brand}
                </span>
                <span className="text-sm text-slate-500 font-medium">
                  {releaseDate || "Upcoming release"}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                {name}
              </h1>
              <p className="text-slate-600 text-lg leading-relaxed max-w-2xl">
                Experience the pinnacle of mobile innovation with the {name}.
                {mainFeatures?.chipSet
                  ? ` Powered by the ${mainFeatures.chipSet}.`
                  : ""}
              </p>
            </M.section>

            {/* Quick Specs Grid */}
            <M.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {[
                {
                  label: "Display",
                  value: mainFeatures?.displaySize,
                  icon: <Smartphone size={24} />,
                },
                {
                  label: "Chipset",
                  value: mainFeatures?.chipSet?.split("(")[0],
                  icon: <Cpu size={24} />,
                },
                {
                  label: "Memory",
                  value: mainFeatures?.memory?.split(",")[0],
                  icon: <Zap size={24} />,
                },
                {
                  label: "Storage",
                  value: mainFeatures?.storage?.split("/")[0],
                  icon: <HardDrive size={24} />,
                },
              ].map((spec, i) => (
                <div
                  key={i}
                  className="glass-surface rounded-3xl p-4 transition-shadow duration-300 hover:shadow-md hover:shadow-indigo-500/10"
                >
                  <div className="text-indigo-600 mb-3">{spec.icon}</div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">
                    {spec.label}
                  </p>
                  <p className="text-xs font-semibold text-slate-800 line-clamp-2">
                    {spec.value || "N/A"}
                  </p>
                </div>
              ))}
            </M.div>

            {/* Detailed Info Tabs-like sections */}
            <M.div variants={itemVariants} className="space-y-6">
              {/* Sensors */}
              {mainFeatures?.sensors && (
                <div className="glass-surface relative overflow-hidden rounded-3xl p-6">
                  <div className="absolute top-0 right-0 p-4 opacity-[0.03]">
                    <Activity size={96} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center mr-3">
                      <Activity size={16} />
                    </span>
                    Smart Sensors
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {mainFeatures.sensors.map((sensor, idx) => (
                      <span
                        key={idx}
                        className="glass-chip cursor-default rounded-2xl px-4 py-2 text-xs font-semibold capitalize text-slate-700 transition-colors hover:border-indigo-200/80 hover:bg-white/55"
                      >
                        {sensor}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Connectivity Grid */}
              {others && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="glass-surface rounded-3xl p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                      <span className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mr-3">
                        <Wifi size={16} />
                      </span>
                      Connectivity
                    </h3>
                    <dl className="space-y-3">
                      {Object.entries(others).map(([key, value]) => (
                        <div
                          key={key}
                          className="flex justify-between items-center text-sm"
                        >
                          <dt className="text-slate-400 font-medium w-[30%] md:w-[40%]">
                            {key}
                          </dt>
                          <dd className="text-slate-700 font-bold w-[70%] md:w-[60%]">
                            {value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/20 bg-linear-to-br from-indigo-600/92 to-violet-700/92 p-6 text-white shadow-xl shadow-indigo-900/20 backdrop-blur-md group">
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold mb-2 italic">
                        Ultimate Experience
                      </h3>
                      <p className="text-indigo-100 text-sm leading-relaxed mb-6">
                        {name} blends cutting-edge technology with elegant
                        design for those who demand excellence.
                      </p>
                    </div>
                    <M.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 420, damping: 28 }}
                      className="relative z-10 flex items-center justify-center gap-2 rounded-2xl bg-white/95 px-6 py-3 text-sm font-bold text-indigo-700 shadow-lg shadow-indigo-900/15 ring-1 ring-white/60 backdrop-blur-sm transition-shadow hover:shadow-xl"
                    >
                      <CheckCircle size={18} />
                      Check Availability
                    </M.button>
                    {/* Abstract design elements */}
                    <div className="absolute top-0 right-0 -mr-8 -mt-8 h-32 w-32 rounded-full bg-white/15 blur-2xl transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-125" />
                  </div>
                </div>
              )}
            </M.div>
          </div>
        </M.div>
      </div>
    </div>
  );
};

export default PhoneDetail;
