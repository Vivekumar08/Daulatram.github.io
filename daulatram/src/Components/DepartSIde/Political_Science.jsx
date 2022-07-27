import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Pol_Scie_side } from "./Depart_side_data";

const Political_Science = () => {
  const [data, setData] = useState(Pol_Scie_side);

  return (
    <div>
      {data.map((curElem) => (
        <NavLink
          to={curElem.link}
          className={({ isActive }) =>
            isActive
            ? " mr-2 bg-[#000080] rounded-lg p-2 md:w-[220px] w-[180px] flex flex-row text-sm md:text-base justify-center mb-2 mt-2 text-white border-2 border-[#000080] "
            : " mr-2 bg-[#fff] rounded-lg p-2 md:w-[220px] w-[180px] flex flex-row text-sm md:text-base justify-center mb-2 mt-2 text-black border-2 border-[#000080]  hover:bg-[#000080] hover:text-white"
          }
        >
          <span>{curElem.title}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default Political_Science;
