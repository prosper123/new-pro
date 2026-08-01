import React from "react";
import { Link } from "react-router";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineGlobal } from "react-icons/ai";
import Header from "../components/Header";

function HomePage() {
  return (
    <div>
      <div className="bg-[#3724c7] p-5">
        {/* nav bar */}
        <Header />
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
