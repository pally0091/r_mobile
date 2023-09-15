import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./Components/Main";
import Home from "./Components/Home/Home";
import AllPhones from "./Components/Phones/AllPhones";
import Iphone from "./Components/Phones/Iphone";
import Samsung from "./Components/Phones/Samsung";
import Oppo from "./Components/Phones/Oppo";

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
            },
            {
              path: "/phones/iphone",
              element: <Iphone></Iphone>,
            },
            {
              path: "/phones/samsung",
              element: <Samsung></Samsung>,
            },
            {
              path: "/phones/oppo",
              element: <Oppo></Oppo>,
            },
          ],
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
