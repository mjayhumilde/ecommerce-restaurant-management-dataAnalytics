import { Search, ShoppingCart, User2 } from "lucide-react";
import logo from "../assets/quadros_logo1.jpg";
import useCartStore from "../store/useCartStore";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const cart = useCartStore((state) => state.cart);

  const navigate = useNavigate();

  return (
    <header className=" border-b-4 border-black">
      <div className=" container mx-auto px-2 py-2 flex justify-between items-center">
        {/* lefet section */}
        <img
          onClick={() => navigate("/")}
          className="w-15 rounded-full"
          src={logo}
          alt=""
        />

        {/* middle section */}
        <div className="bg-white font-bold flex justify-center items-center border text-red-900 border-red-900 p-2">
          <input
            className="border-none"
            type="text"
            placeholder="Search Type shiiii"
          />
          <Search className="hover:cursor-pointer" />
        </div>
        {/* 
        right section */}
        <div className=" text-red-900 flex justify-center  items-center">
          <div className="bg-white flex space-x-3 rounded-full p-2">
            <div
              onClick={() => navigate("cart")}
              className="relative hover:cursor-pointer "
            >
              <ShoppingCart size={32} />
              <span className="absolute bg-red-400 px-2 font-bold rounded-full -top-3 -right-3">
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
