import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Transition } from '@headlessui/react'
import NavLinks from "./NavLinks";
import Useful from "./Useful";
const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-[#000080]  ">
      <div className="flex text-[15px] ml-5 items-center font-medium  tracking-[1px] text-white ">
        <ul className="xl:flex hidden justify-center mr-12 w-full items-center gap-4 font-Noto_Sans">
          <li>
            <Link to="/" className="py-4 font-bold px-2 uppercase inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link to="/Societies" className="py-4 font-bold px-2 uppercase inline-block">
              Societies
            </Link>
          </li>
          <li>
            <Link to="/Library" className="py-4 font-bold px-2 uppercase inline-block">
              Library
            </Link>
          </li>
          <Useful />

        </ul>
        {/* Mobile nav */}
        <div className="-mr-2 flex xl:w-auto xl:hidden w-full ">
          <button className="text-3xl justify-center p-2 " type="button" aria-controls="mobile-menu" aria-expanded="false" onClick={() => setOpen(!open)}>
            <span className="sr-only">Open main menu</span>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </button>
        </div>
      </div>

      <Transition show={open}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterto="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="xl:hidden flex text-[16px] ml-5 items-center font-medium  tracking-[5px] text-white " id="mobile-menu">
            <ul ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3   items-center gap-4 font-Noto_Sans">
              <li>
                <Link to="/" className="font-bold uppercase py-4 inline-block">
                  Home
                </Link>
              </li>
              <NavLinks />
              <li>
                <Link to="/Societies" className="py-4 font-bold uppercase inline-block">
                  Societies
                </Link>
              </li>
              <li>
                <Link to="/Library" className="py-4 font-bold uppercase inline-block">
                  Library
                </Link>
              </li>
              <Useful />
            </ul>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Nav;