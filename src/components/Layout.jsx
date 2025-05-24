import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
Footer;

const Layout = () => {
  return (
    <>
      <Header />
      <div className="pt-20 bg-green-950">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
