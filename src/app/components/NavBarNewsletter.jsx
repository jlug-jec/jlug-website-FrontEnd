"use client";
import { useState } from "react";
import { JLUGLogo } from "../../assets/logos";

import { close, menu } from "../../assets";
import Link  from "next/link";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (

    <nav className="w-full flex pt-6 justify-between items-center navbar">
      <img src={JLUGLogo.src} alt="jlug" className="w-[100px] h-[100px] rounded-full m-6 z-10" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        
        <li  className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === "Home" ? "text-white" : "text-dimWhite"
            }  ml-6 mr-48`}
            onClick={() => setActive("Home")}><Link href="/">Home</Link></li>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center z-20">
        <img
          src={toggle ? close.src : menu.src}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-12 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            
            <li  className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === "Home" ? "text-white" : "text-dimWhite"
            } mr-0 mt-4`}
            onClick={() => setActive("Home")}><Link href="/">Home</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
