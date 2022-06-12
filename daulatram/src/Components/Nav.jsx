import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-[#000080]">
      <div className="flex items-center font-medium ml-32 text-white ">
        <div className="z-60 p-5 md:w-auto w-full flex justify-between">
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
            <Link to="/" className="py-4 px-2 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
        </ul>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
        </ul>
      </div>
    </nav>
  );
};

export default Nav;