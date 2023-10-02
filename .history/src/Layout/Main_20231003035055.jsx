import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
