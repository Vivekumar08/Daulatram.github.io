import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./Mylinks";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {links.map((link) => (
        <>
          <div className="z-50">
            <div className=" text-left xl:cursor-pointer group ">
              <h1
                className="py-4 font-bold uppercase flex justify-between  items-center xl:pr-0  group"
                onClick={() => {
                  heading !== link.name ? setHeading(link.name) : setHeading("");
                  setSubHeading("");
                }}
              >
                <span>

                  {link.name}
                </span>
                <span className="text-xl sm:ml-96  xl:hidden  ">
                  <ion-icon
                    className="color-gray-400"
                    name={`${heading === link.name ? "chevron-up" : "chevron-down"
                      }`}
                  ></ion-icon>
                </span>
                <span className="text-xl xl:mt-1 xl:ml-2  xl:block hidden group-hover:rotate-180 group-hover:-mt-2">
                  <ion-icon name="chevron-down"></ion-icon>
                </span>
              </h1>

              <div>
                <div className="absolute top-[270px] hidden group-hover:xl:block hover:xl:block">
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
                          {slink.name != "Annual Report" && (
                            <Link to={slink.link} className="hover:text-white">
                              <li className="text-base m-1 p-1 pl-2 pr-2 text-black  rounded-xl outline-none hover:text-white hover:bg-[#000080] ">
                                {slink.name}
                              </li>
                            </Link>
                          )}
                          {slink.name === "Annual Report" && (
                            <a
                              href={slink.link}
                              target="_blank"
                              className="hover:text-white"
                            >
                              <li className="text-base m-1 p-1 pl-2 pr-2 text-black  rounded-xl outline-none hover:text-white hover:bg-[#000080] ">
                                {slink.name}
                              </li>
                            </a>
                          )}
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
                        <Link to={slink.link} className="hover:text-white">
                          <li className="py-3 pl-14 ">
                            {slink.name}
                          </li>
                        </Link>
                      )}
                      {slink.name === "Annual Report" && (
                        <a
                          href={slink.link}
                          target="_blank"
                          className="hover:text-white"
                        >
                          <li className="py-3 pl-14 ">
                            {slink.name}
                          </li>
                        </a>
                      )}
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default NavLinks;
