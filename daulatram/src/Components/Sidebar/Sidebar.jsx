import React from "react";
import "./side.css";
import { about } from "../Mylinks";

function Sidebar() {
  return (
    <div className="relative ">
      {about.map((link) => (
        <div className="bg-[#000080] flex justify-center text-white p-2 rounded-b-lg text-xl">
          {link.name}
        </div>
      ))}
      <ul className="flex ">
        {about.map((link) => (
          <li className="ml-5 mr-6">
            {link.links.map((slink) => (
              <a href={slink.link} className="hover:text-blue-600 mb-4">
                <p className="text-black font-bold  ">{slink.name}</p>
              </a>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
