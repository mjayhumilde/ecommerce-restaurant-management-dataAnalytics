import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
Footer;

const Layout = () => {
  return (
    <>
      <Header />
      <div className="px-5">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
