import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./Components/Main";
import Home from "./Components/Home/Home";
import AllPhones from "./Components/Phones/AllPhones";
import Iphone from "./Components/Phones/Iphone";
import Samsung from "./Components/Phones/Samsung";
import Oppo from "./Components/Phones/Oppo";
import PhoneDetail from "./Components/Phones/PhoneDetail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/phones",
          element: <AllPhones></AllPhones>,
          children: [
            {
              path: "/phones",
              element: <Iphone></Iphone>,
              loader: () =>
                fetch(
                  "https://openapi.programming-hero.com/api/phones?search=iphone"
                ),
            },
            {
              path: "/phones/iphone",
              element: <Iphone></Iphone>,
              loader: () =>
                fetch(
                  "https://openapi.programming-hero.com/api/phones?search=iphone"
                ),
            },
            {
              path: "/phones/samsung",
              element: <Samsung></Samsung>,
              loader: () =>
                fetch(
                  "https://openapi.programming-hero.com/api/phones?search=samsung"
                ),
            },
            {
              path: "/phones/oppo",
              element: <Oppo></Oppo>,
              loader: () =>
                fetch(
                  "https://openapi.programming-hero.com/api/phones?search=oppo"
                ),
            },
          ],
        },
        {
          path: "/:id",
          element: <PhoneDetail></PhoneDetail>,
          loader: ({ params }) =>
            fetch(
              `https://openapi.programming-hero.com/api/phone/${params.id}`
            ),
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
