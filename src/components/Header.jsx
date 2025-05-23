import { Search, ShoppingCart, User2 } from "lucide-react";
import logo from "../assets/quadros_logo1.jpg";
import useCartStore from "../store/useCartStore";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const cart = useCartStore((state) => state.cart);

  const navigate = useNavigate();

  return (
    <header className="border-b-4 border-black ">
      <div className="container flex items-center justify-between px-2 py-2 mx-auto ">
        {/* lefet section */}
        <img
          onClick={() => navigate("/")}
          className="rounded-full w-15"
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
            <div
              onClick={() => navigate("cart")}
              className="relative hover:cursor-pointer "
            >
              <ShoppingCart size={32} />
              <span className="absolute px-2 font-bold bg-red-400 rounded-full -top-3 -right-3">
                {cart.length}
              </span>
            </div>
            <User2 size={32} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
