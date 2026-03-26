import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import PhoneDetail from "./pages/PhoneDetail";

const ErrorFallback = () => (
  <div className="min-h-screen bg-slate-50 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-3xl font-bold text-slate-900">Error loading phone</h1>
      <p className="mt-2 text-slate-600">Please try again or go back home.</p>
      <a
        href="/"
        className="mt-4 inline-block text-indigo-600 hover:underline"
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
          path: "/phones/:slug",
          element: <PhoneDetail />,
          loader: ({ params }) =>
            fetch(
              `https://openapi.programming-hero.com/api/phone/${params.slug}`,
            ).catch(() => ({ data: null })),
          errorElement: <ErrorFallback />,
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
