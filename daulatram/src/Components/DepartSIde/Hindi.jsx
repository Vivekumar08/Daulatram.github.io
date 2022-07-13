import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Hindi_side } from "./Depart_side_data";

const Hindi = () => {
  const [data, setData] = useState(Hindi_side);

  return (
    <div>
      {data.map((curElem) => (
        <NavLink
          to={curElem.link}
          className={({ isActive }) =>
            isActive
              ? " mr-2 bg-[#000080] rounded-lg p-2 w-[220px] flex flex-row justify-center mb-2 mt-2 text-white border-2 border-[#000080] "
              : " mr-2 bg-[#fff] rounded-lg p-2 w-[220px] flex flex-row justify-center mb-2 mt-2 text-black border-2 border-[#000080]  hover:bg-[#000080] hover:text-white"
          }
        >
          <span>{curElem.title}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default Hindi;