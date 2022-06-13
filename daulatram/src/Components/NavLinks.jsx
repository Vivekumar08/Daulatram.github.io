import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./Mylinks";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {links.map((link) => (
        <div className="z-10">
          <div className=" text-left md:cursor-pointer group ">
            <h1
              className="py-4 flex justify-between items-center md:pr-0 pr-4 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="text-xl md:hidden  inline">
                <ion-icon
                className="color-gray-400"
                  name={`${
                    heading === link.name ? "chevron-up" : "chevron-down"
                  }`}
                ></ion-icon>
              </span>
              <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h1>
              <div>
                <div className="absolute top-48 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div
                      className=" h-4 left-3 absolute 
                    mt-1 bg-white rotate-45"
                    ></div>
                  </div>
                  <div className=" p-2 grid grid-cols-1 gap-4 bg-white rounded-md">
                    {link.links.map((slink) => (
                      <div>
                          <li className="text-sm text-gray-500 rounded-sm outline-none hover:outline-red-400 ">
                            <Link
                              to={slink.name}
                              className="hover:text-red-600 m-2"
                            >
                              {slink.name}
                            </Link>
                          </li>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;