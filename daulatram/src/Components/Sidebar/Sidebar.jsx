import React from "react";
import { Link } from "react-router-dom";
import { about } from "../Mylinks";

function Sidebar() {
  return (
    <div className="mt-[20%] mb-[20%] bg-gray-200 rounded-lg">
      {about.map((link) => (
        <>
          <div className="bg-[#000080]  flex justify-center mb-4 text-white pt-2 pb-2 pl-4 pr-4 rounded-lg font-bold text-3xl">
            {link.name}
          </div>
          <ul className=" ">
            {about.map((link) => (
              <div className="flex flex-col divide-y divide-solid divide-black">
                {link.links.map((slink) => (
                  <Link to={slink.link} className=" ml-4 mb-2  p-2 mr-6 rounded-lg hover:bg-white hover:pl-4 ">
                    <li className=" hover:bg-white">
                      <p className="text-black font-semibold mt-2 ">
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
      ))}
    </div>
  );
}

export default Sidebar;
