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
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <M.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center p-8 bg-white rounded-2xl shadow-xl border border-slate-100"
        >
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 via-white to-indigo-50/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb / Back Button */}
        <M.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            to="/phones"
            className="group inline-flex items-center text-sm font-semibold text-slate-500 hover:text-indigo-600 transition-colors"
          >
            <ChevronLeft
              size={20}
              className="mr-2 transform group-hover:-translate-x-1 transition-transform"
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
            <div className="sticky top-8 bg-white/70 backdrop-blur-xl rounded-3xl border border-white p-8 shadow-2xl shadow-indigo-100/50 flex items-center justify-center overflow-hidden group">
              <M.img
                layoutId={`image-${phone.slug}`}
                src={image}
                alt={name}
                className="max-h-[500px] w-auto object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
              {/* Decorative gradient overlay */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 blur-3xl rounded-full"></div>
            </div>
          </M.div>

          {/* Right Column: Info & Specs */}
          <div className="lg:col-span-7 space-y-8">
            {/* Header Info */}
            <M.section
              variants={itemVariants}
              className="bg-white/40 backdrop-blur-md p-8 rounded-3xl border border-white/50 shadow-sm"
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider rounded-full">
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
                  className="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
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
                <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm overflow-hidden relative">
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
                        className="px-4 py-2 bg-slate-50 text-slate-600 text-xs font-semibold rounded-2xl border border-slate-100 hover:border-indigo-200 hover:bg-white transition-colors cursor-default capitalize"
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
                  <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm">
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

                  <div className="bg-linear-to-br from-indigo-600 to-violet-700 rounded-3xl p-6 shadow-lg text-white flex flex-col justify-between overflow-hidden relative group">
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
                      className="bg-white text-indigo-700 px-6 py-3 rounded-2xl font-bold text-sm shadow-xl hover:shadow-2xl transition-all relative z-10 flex items-center justify-center gap-2"
                    >
                      <CheckCircle size={18} />
                      Check Availability
                    </M.button>
                    {/* Abstract design elements */}
                    <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
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
