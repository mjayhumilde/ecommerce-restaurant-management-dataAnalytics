import { User2 } from "lucide-react";
import logo from "../assets/quadros_logo1.jpg";

const Header = () => {
  return (
    <header className="bg-black w-full">
      <div className="px-2 py-2 flex justify-between">
        {/* lefet section */}
        <img className="w-15 rounded-full" src={logo} alt="" />

        {/* middle section */}
        <input
          className="border"
          type="text"
          placeholder="Search Type shiiii"
        />
        {/* 
        right section */}
        <div className="flex justify-center  items-center">
          <div className="bg-red-50 rounded-full p-2">
            <User2 color="red" size={32} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
