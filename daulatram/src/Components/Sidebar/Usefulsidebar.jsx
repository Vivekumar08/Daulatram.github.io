import React, { useState } from "react";
import { useful } from "../Mylinks";
import { Link } from "react-router-dom";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Usefulsidebar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="relative mb-10 md:w-[350px] invisible  md:relative md:visible mb-30">
      <div className="absolute md:relative mt-[22%] bg-gray-200 rounded-lg">
        {useful.map((link) => (
          <>
            {/* <div> */}
              {link.name === "Useful Links" &&
              (
                <>
                  <div className="bg-[#000080]  flex justify-center mb-4 text-white pt-2 pb-2 pl-4 pr-4 rounded-lg font-bold text-3xl">
                    {link.name}
                  </div>
                  <ul className=" ">
                    {useful.map((link) => (
                      <div className="flex flex-col divide-y divide-solid divide-black">
                        {link.name === "Useful Links" && link.links.map((slink) => (
                          <Link
                            to={slink.link}
                            className=" ml-4 mb-2  p-2 mr-6 rounded-lg hover:bg-white hover:pl-4 "
                          >
                            <li className="hover:bg-white ">
                              <p className="text-black text-justify font-semibold mt-2 ">
                                - {""}
                                {slink.name}
                              </p>
                            </li>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </ul>
                </>
              )}
            {/* </div> */}
          </>
        ))}
      </div>
      <div className="md:invisible visible">
        {/* <div className="mt-[20%] mb-[20%] bg-gray-200 rounded-lg z-10 w-full"> */}
        {/* <div className="bg-[#000080]  flex justify-center mb-4 text-white pt-2 pb-2 pl-4 pr-4 rounded-lg font-bold text-3xl"> */}
        {visible ? (
          <div className="  mt-[5%] bg-gray-200 rounded-lg z-10 w-[250px] absolute mb-20">
            {useful.map((link) => (
              <>
              {link.name === "Useful Links" &&(<>

                <div className="bg-[#000080]  flex justify-center mb-4 ml-auto mr-auto  text-white pt-2 pb-2 pl-4 pr-4 rounded-lg font-bold text-xl">
                  {link.name}
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="bg-[#000080]  ml-auto  flex justify-center text-white pt-2 cursor-pointer pb-2 pl-4 pr-4 rounded-lg font-bold text-xl"
                    onClick={() => setVisible(!visible)}
                  />
                </div>
                <ul className=" ">
                  {useful.map((link) => (
                    <div className="flex flex-col divide-y divide-solid divide-black ">
                      {link.name == "Useful Links" && link.links.map((slink) => (
                        <>
                          {slink.name != "Annual Report" && (
                            <Link
                              to={slink.link}
                              className=" ml-4 mb-2  p-2 mr-6 rounded-lg hover:bg-white hover:pl-4 "
                            >
                              <li className=" hover:bg-white">
                                <p className="text-black text-sm font-semibold mt-2 ">
                                  - {""}
                                  {slink.name}
                                </p>
                              </li>
                            </Link>
                          )}
                          {slink.name === "Annual Report" && (
                            <a
                              href={slink.link}
                              target="_blank"
                              className=" ml-4 mb-2  p-2 mr-6 rounded-lg hover:bg-white hover:pl-4 "
                            >
                              <li className=" hover:bg-white">
                                <p className="text-black text-sm font-semibold mt-2 ">
                                  - {""}
                                  {slink.name}
                                </p>
                              </li>
                            </a>
                          )}
                        </>
                      ))}
                    </div>
                  ))}
                </ul>
              </>)}

              </>
            ))}
          </div>
        ) : (
          <FontAwesomeIcon
            icon={faBars}
            className="bg-[#000080] mb-[20%] mt-[5%] absolute cursor-pointer flex justify-center text-white pt-4 pb-4 pl-6 pr-6 rounded-lg font-bold text-xl"
            onClick={() => setVisible(!visible)}
          />
        )}
        {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Usefulsidebar;