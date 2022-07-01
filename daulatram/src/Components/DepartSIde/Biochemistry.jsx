import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import { biochems } from "./Depart_side_data";

const Biochemistry = () => {
  const [current,setCurrent] = useState(false);
  const [data,setData] = useState(biochems);

  return (
    <div>
      {data.map((curElem)=>(
        <NavLink to={curElem.link}  onClick={()=>setCurrent(!current)} className={({isActive})=>(isActive?" mr-2 bg-[#000080] rounded-lg p-2 w-[220px] flex flex-row justify-center mb-2 mt-2 text-white border-2 border-[#000080] ":" mr-2 bg-[#fff] rounded-lg p-2 w-[220px] flex flex-row justify-center mb-2 mt-2 text-black border-2 border-[#000080]  hover:bg-[#000080] hover:text-white")}>
        <span >
          {curElem.title}
        </span>
      </NavLink>
        ))}
    </div>
  );
};

export default Biochemistry;
