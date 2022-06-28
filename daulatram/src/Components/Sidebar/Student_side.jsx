import React from "react";
import { Link } from "react-router-dom";
import { Student } from "../Mylinks";

function Student_side() {
  return (
    <div className="mt-[20%] bg-gray-200 w-[350px] rounded-lg">
      {Student.map((link) => (
        <>
          <div className="bg-[#000080]  flex justify-center mb-4 text-white pt-2 pb-2 pl-4 pr-4 rounded-lg font-bold text-3xl">
            {link.name}
          </div>
          <ul className=" ">
            {Student.map((link) => (
              <div className="flex flex-col divide-y divide-solid divide-black">
                {link.links.map((slink) => (
                  <li className="ml-4 mb-2  p-3 rounded-lg hover:pl-4 hover:bg-white   mr-6">
                    <Link to={slink.link} className=" hover:text-blue-600 ">
                      <p className="text-black text-justify font-semibold mt-2 ">
                        - {""}
                        {slink.name}
                      </p>
                    </Link>
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

export default Student_side;
