import React, { useState } from "react";
import { useful } from "./Mylinks";
import { Link } from "react-router-dom";

const Useful = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {useful.map((link) => (
        <div className="z-10">
          <div className=" text-left md:cursor-pointer group ">
            <h1
              className="py-4 font-bold uppercase flex justify-between items-center md:pr-0 pr-4 group"
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
              <div className="absolute top-[270px] hidden group-hover:md:block hover:md:block">
                <div className="py-3">
                  <div
                    className=" h-4 left-3 absolute 
                    mt-1 bg-white rotate-45"
                  ></div>
                </div>
                <div className="  grid grid-cols-1 bg-white rounded-lg">
                  {link.links.map((slink) => (
                    <>
                      <div>
                        <Link
                          to={slink.link}
                          // rel="noreferrer"
                          className="hover:text-white"
                        >
                          <li className="text-base m-1 p-1 pl-2 pr-2 text-black capitalize rounded-md outline-none hover:text-white hover:bg-[#000080] ">
                            {slink.name}
                          </li>
                        </Link>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Mobile menus */}
          <div
            className={`
              ${heading === link.name ? "xl:hidden" : "hidden"}
              `}
          >
            <div>
              {link.links.map((slink) => (
                <>
                  <div>
                    {slink.name != "Annual Report" && (
                      <a to={slink.link} className="hover:text-white">
                        <li className="py-3 pl-14 ">{slink.name}</li>
                      </a>
                    )}
                    {slink.name === "Annual Report" && (
                      <Link to={slink.link} className="hover:text-white">
                        <li className="py-3 pl-14 ">{slink.name}</li>
                      </Link>
                    )}
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Useful;
