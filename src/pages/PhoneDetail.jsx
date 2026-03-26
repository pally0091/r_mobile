import { useLoaderData } from "react-router-dom";
import { motion as M } from "framer-motion";

const PhoneDetail = () => {
  const data = useLoaderData();

  if (!data || !data.data) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <p className="text-lg text-slate-600">Loading phone details...</p>
      </div>
    );
  }

  const phone = data.data;

  return (
    <main className="min-h-screen bg-linear-to-b from-slate-50 to-white py-10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <M.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
        >
          <div className="grid gap-10 sm:grid-cols-2">
            <div className="flex items-center justify-center rounded-lg bg-slate-100 p-8">
              <img
                src={phone.image}
                alt={phone.name}
                className="max-w-xs h-auto"
              />
            </div>

            <div>
              <h1 className="text-3xl font-bold text-slate-900">
                {phone.name}
              </h1>
              <p className="mt-2 text-lg font-semibold text-indigo-600">
                Brand: {phone.brand}
              </p>
              <p className="mt-4 text-base text-slate-600">
                {phone.releaseDate}
              </p>

              <section className="mt-8">
                <h2 className="text-xl font-semibold text-slate-900">
                  Specifications
                </h2>
                <dl className="mt-4 space-y-3">
                  {phone.specs && phone.specs.length > 0 ? (
                    phone.specs.map((spec, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between border-b border-slate-200 pb-3"
                      >
                        <dt className="font-medium text-slate-700">{spec}</dt>
                      </div>
                    ))
                  ) : (
                    <p className="text-slate-600">
                      No specifications available.
                    </p>
                  )}
                </dl>
              </section>

              <M.a
                whileHover={{ scale: 1.05 }}
                href="/"
                className="mt-8 inline-block rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-700"
              >
                Back to home
              </M.a>
            </div>
          </div>
        </M.article>
      </div>
    </main>
  );
};

export default PhoneDetail;
