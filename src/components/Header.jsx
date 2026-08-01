import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineGlobal } from "react-icons/ai";
import { Link } from "react-router";

function Header() {
  return (
    <div className="bg-[#3d2cb8] p-5 flex justify-between gap-3 shadow-md rounded-lg w-[70vw] mx-auto">
      <div className="flex gap-2 pr-20 items-center">
        <img src="images/logo-white.png" alt="Logo" className="w-8" />
        <h2 className="text-white font-bold text-sm">IMISANZU</h2>
      </div>

      <div className="flex-1 flex justify-start items-center gap-10">
        <div>
          <Link to={"/"}>
            <button className="bg-[#6052c6] p-2 rounded-md text-white cursor-pointer hover:text-yellow-600">
              Home
            </button>
          </Link>
        </div>
        <div>
          <button className=" text-white p-2 cursor-pointer rounded-md hover:text-yellow-600 hover:bg-[#6052c6] flex items-center gap-2 px-3">
            Explore Services <IoIosArrowDown />
          </button>
        </div>
      </div>

      <div className="flex gap-10 items-center">
        <button className="p-3 rounded-md text-white cursor-pointer border border-white hover:text-black hover:bg-white">
          Login
        </button>
        <button className="p-4 flex items-center gap-2 rounded-md text-white cursor-pointer border-2 border-white hover:text-black hover:bg-white">
          EN <AiOutlineGlobal /> <IoIosArrowDown />
        </button>
      </div>
    </div>
  );
}

export default Header;
