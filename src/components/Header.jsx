import useCartStore from "../store/useCartStore";
import useAuthStore from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";

import logo from "../assets/quadros_logo1.jpg";

import { Search, ShoppingCart, User2 } from "lucide-react";

const Header = () => {
  const cart = useCartStore((state) => state.cart);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const userRole = useAuthStore((state) => state.userRole);

  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 z-50 w-full h-20 border-b-4 border-green-900 bg-green-950">
      <div className="container flex items-center justify-between h-full px-2 py-2 mx-auto">
        {/* left section */}
        <div
          onClick={() => navigate("/")}
          className="flex justify-center items-center space-x-2 hover:cursor-pointer"
        >
          <img
            className="object-cover rounded-full w-15 h-15 "
            src={logo}
            alt="Logo"
          />
          <p className="text-2xl">QUADROS PIZZA</p>
        </div>
        {/* middle section */}
        <div className="flex items-center p-2 font-bold text-green-950 bg-white border border-green-700 rounded-lg">
          <input
            className="px-2 border-none focus:outline-none"
            type="text"
            placeholder="Search Type shiiii"
          />
          <Search className="text-gray-600 hover:cursor-pointer" />{" "}
        </div>
        {/* right section */}
        <div className="flex items-center text-red-900 ">
          <div className="flex items-center p-2 space-x-3 bg-white rounded-full">
            {isAuthenticated && userRole === "admin" ? (
              <div className="flex items-center">
                <ul className="flex space-x-5">
                  <li
                    onClick={() => navigate("manage-accounts")}
                    className="p-2 text-white transition duration-200 bg-green-950 rounded-2xl hover:cursor-pointer hover:bg-green-800"
                  >
                    Accounts
                  </li>
                  <li
                    onClick={() => navigate("dashboard")}
                    className="p-2 text-white transition duration-200 bg-green-950 rounded-2xl hover:cursor-pointer hover:bg-green-800"
                  >
                    Dashboard
                  </li>
                </ul>
              </div>
            ) : (
              <div
                onClick={() => navigate("cart")}
                className="relative hover:cursor-pointer "
              >
                <ShoppingCart size={32} />
                <span className="absolute px-2 font-bold text-white bg-red-400 rounded-full -top-3 -right-3">
                  {cart.length}
                </span>
              </div>
            )}
            {isAuthenticated && userRole !== null ? (
              <User2
                className="hover:cursor-pointer text-green-950"
                onClick={() => navigate("profile")}
                size={32}
              />
            ) : (
              <button
                onClick={() => navigate("login")}
                className="px-4 py-2 font-bold text-white transition duration-200 bg-blue-500 rounded-full hover:bg-blue-600"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
