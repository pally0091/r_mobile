import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main>
      <h1>Navbar</h1>
      <Outlet />
      <h1>Footer</h1>
    </main>
  );
};

export default Layout;
