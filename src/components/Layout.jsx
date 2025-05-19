import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
Footer;

const Layout = () => {
  return (
    <>
      <Header />
      <main className="px-5">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
