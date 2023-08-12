import { useState } from "react";
import { JLUGLogo } from "../assets/logos";

import { close, menu } from "../assets";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (

    <nav className="w-full flex pt-6 justify-between items-center navbar">
      <img src={JLUGLogo} alt="jlug" className="w-[124px] h-[80px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        <li  className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === "The JecX Times" ? "text-white" : "text-dimWhite"
            } mr-0 ml-6`}
            onClick={() => setActive("The JecX Times")}><Link to="/jlug-website-FrontEnd/pagenotfound/*">The JecX Times</Link></li>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <Link to={`#${nav.id}`}>{nav.title}</Link>
              </li>
            ))}
            <li  className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === "The JecX Times" ? "text-white" : "text-dimWhite"
            } mr-0 mt-4`}
            onClick={() => setActive("The JecX Times")}><Link to="/jlug-website-FrontEnd/pagenotfound/*">The JecX Times</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
