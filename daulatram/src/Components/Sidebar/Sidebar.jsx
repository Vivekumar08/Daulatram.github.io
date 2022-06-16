import React from "react";
// import "./side.css";
import { about } from "../Mylinks";

function Sidebar() {
  return (
    <div className="mt-4">
      {about.map((link) => (
        <>
          <div className="bg-[#fff] w-full flex justify-center mb-4 text-black pt-2 pb-2 pl-4 pr-4 rounded-b-lg font-bold text-3xl">
            {link.name}
            {/* ndsvlsvnlvervoenlvel */}
          </div>
          <ul className=" ">
            {about.map((link) => (
              <div className="flex flex-col">
                {link.links.map((slink) => (
                  <li className="ml-5 p-2 hover:pl-4  mr-6">
                    <a href={slink.link} className=" ">
                       <p className="text-black font-semibold  ">- {""}{slink.name}</p>
                    </a>
                  </li>
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
