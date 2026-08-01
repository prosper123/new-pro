import React from "react";
import { Link } from "react-router";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineGlobal } from "react-icons/ai";

function HomePage() {
  return (
    <div>
      <div className="bg-[#3724c7] p-5">
        {/* nav bar */}
        <div className="bg-[#3d2cb8] p-5 flex justify-between gap-3 shadow-md rounded-lg w-[70vw] mx-auto">
          <div className="flex gap-2 pr-20 items-center">
            <img src="images/logo-white.png" alt="Logo" className="w-8" />
            <h2 className="text-white font-bold text-sm">IMISANZU</h2>
          </div>

          <div className="flex-1 flex justify-start items-center gap-10">
            <div>
              <button className="bg-[#6052c6] p-2 rounded-md text-white cursor-pointer hover:text-yellow-600">
                Home
              </button>
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
        {/* end nav bar */}

        <div className="p-16">
          <h1 className="text-5xl pb-4 text-center text-white font-bold">
            Contribution transparency, <br />
            secure future
          </h1>

          <div className="w-[50%] mx-auto">
            <p className="text-1xl text-center  text-white">
              From detailed salary breakdowns to real-time pension services, we
              bring you clarity, transparency, and trust. Plan your tomorrow
              with confidence.
            </p>
            <div className="p-5 flex gap-3">
              <input
                className="border-2 flex-1 rounded-lg p-5 bg-[#5446d0] text-white "
                placeholder="dsfdsfdsfdsfds"
              ></input>
              <button className="bg-white text-blue-500 rounded-md p-3 w-[200px] ">
                {" "}
                Get Started{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
