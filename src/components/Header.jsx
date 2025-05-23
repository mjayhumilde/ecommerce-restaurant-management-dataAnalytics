import { useNavigate } from "react-router-dom";
import useCartStore from "../store/useCartStore";
import useAuthStore from "../store/useAuthStore";

import logo from "../assets/quadros_logo1.jpg";

import { Search, ShoppingCart, User2 } from "lucide-react";

const Header = () => {
  const cart = useCartStore((state) => state.cart);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const userRole = useAuthStore((state) => state.userRole);

  const navigate = useNavigate();

  return (
    <header className="border-b-4 border-black ">
      <div className="container flex items-center justify-between px-2 py-2 mx-auto ">
        {/* lefet section */}
        <img
          onClick={() => navigate("/")}
          className="rounded-full w-15 hover:cursor-pointer"
          src={logo}
          alt=""
        />

        {/* middle section */}
        <div className="flex items-center justify-center p-2 font-bold text-red-900 bg-white border border-red-900">
          <input
            className="border-none"
            type="text"
            placeholder="Search Type shiiii"
          />
          <Search className="hover:cursor-pointer" />
        </div>
        {/* 
        right section */}
        <div className="flex items-center justify-center text-red-900 ">
          <div className="flex p-2 space-x-3 bg-white rounded-full">
            {isAuthenticated && userRole === "admin" ? (
              <div className="flex items-center justify-center">
                <ul className="flex space-x-5">
                  <li
                    onClick={() => navigate("manage-accounts")}
                    className="p-2 text-white bg-green-950 rounded-2xl hover:cursor-pointer"
                  >
                    Accounts
                  </li>
                  <li
                    onClick={() => navigate("dashboard")}
                    className="p-2 text-white bg-green-950 rounded-2xl hover:cursor-pointer"
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
                <span className="absolute px-2 font-bold bg-red-400 rounded-full -top-3 -right-3">
                  {cart.length}
                </span>
              </div>
            )}
            {isAuthenticated && userRole !== null ? (
              <User2
                className="hover:cursor-pointer"
                onClick={() => navigate("profile")}
                size={32}
              />
            ) : (
              <button>Login</button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
