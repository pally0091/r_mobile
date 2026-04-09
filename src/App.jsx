import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Phones from "./pages/Phones";
import PhoneDetail from "./pages/PhoneDetail";
import ErrorPage from "./pages/ErrorPage";

const ErrorFallback = () => (
  <div className="flex min-h-[50vh] items-center justify-center py-16">
    <div className="glass-surface-strong max-w-md rounded-3xl px-8 py-10 text-center">
      <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
        Error loading phone
      </h1>
      <p className="mt-2 text-slate-600">
        Please try again or go back home.
      </p>
      <a
        href="/"
        className="mt-6 inline-flex rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-500/25 transition-colors hover:bg-indigo-700"
      >
        Return to home
      </a>
    </div>
  </div>
);

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/phones",
          element: <Phones />,
        },
        {
          path: "/phones/:slug",
          element: <PhoneDetail />,
          loader: async ({ params }) => {
            try {
              const res = await fetch(
                `https://openapi.programming-hero.com/api/phone/${params.slug}`,
              );
              if (!res.ok) throw new Error("Failed to fetch phone details");
              return await res.json();
            } catch (error) {
              console.error("Loader error:", error);
              return { data: null };
            }
          },
          errorElement: <ErrorFallback />,
        },
        {
          path: "*",
          element: <ErrorPage />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
