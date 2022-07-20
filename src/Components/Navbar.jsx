import React, { useState } from "react";
import Ball from "./../Img/ballpoke.png";
import Pinguin from "./../Img/pinguin.png";

const Navbar = () => {
  const [pilih, setpilih] = useState(false);
  const klik = () => setpilih(!pilih);
  return (
    <>
      <div className="flex justify-between ">
        <div className="flex">
          <img src={Ball} alt="Ball" className="h-8" />
          <h1 className="font-bold text-3xl pl-5 -mt-1 text-red-600">
            Pokemon
          </h1>
        </div>
        <div className="" onClick={klik}>
          <img src={Pinguin} alt="ping" className="h-8" />
        </div>
      </div>
      <div className={!pilih ? "hidden" : "laptop:pr-10 laptop:-mt-[20px]"}>
        <div className="flex justify-end laptop:pt-1 laptop:m-0 pt-4 -mr-4">
          <div
            className="laptop:w-[200px] p-4 w-screen text-center rounded-lg
            bg-white border-2 border-white border-opacity-60
           font-bold text-red-500 shadow-lg
           text-xl absolute bg-opacity-60"
          >
            <ol>
              <li className="pb-2">About</li>
              <li className="pb-2">Contact</li>
              <li>Poke</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
