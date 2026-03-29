import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Phones from "./pages/Phones";
import PhoneDetail from "./pages/PhoneDetail";
import ErrorPage from "./pages/ErrorPage";

const ErrorFallback = () => (
  <div className="min-h-screen bg-slate-50 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-3xl font-bold text-slate-900">Error loading phone</h1>
      <p className="mt-2 text-slate-600">Please try again or go back home.</p>
      <a href="/" className="mt-4 inline-block text-indigo-600 hover:underline">
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
