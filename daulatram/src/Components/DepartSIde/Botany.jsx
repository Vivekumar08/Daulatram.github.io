// import React from 'react'

// function Botany() {
//   return (
//     <div>
//       <a href="/academics/departments/Botany/">
//         <span className=" mr-2 bg-[#000080] rounded-lg p-2 w-[220px] flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-700">
//           About The Deparment
//         </span>
//       </a>
//       <a href="/academics/departments/Botany/Botanyfaculty">
//         <span className=" mr-2 bg-[#000080] rounded-lg p-2 w-[220px] flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-700">
//           Faculty
//         </span>
//       </a>
//       <a href="/academics/departments/Botany/programoffered">
//         <span className="  bg-[#000080] rounded-lg p-2 flex w-[220px] flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-700">
//           Programmes Offer
//         </span>
//       </a>
//       <a href="/academics/departments/Botany/Botany_Association">
//         <span className=" mr-2 bg-[#000080] rounded-lg p-2 w-[220px] flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-700">
//           Association
//         </span>
//       </a>

//       <a href="/academics/departments/Botany/Botanystudachieve">
//         <span className=" mr-2 bg-[#000080] rounded-lg p-2 w-[220px] flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-700">
//           Student's Achievements
//         </span>{" "}
//       </a>
//       <a href="/academics/departments/Botany/events">
//       <span className=" mr-2 bg-[#000080] rounded-lg p-2 w-[220px] flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-700">
//         Events
//       </span>
//       </a>
//       <a href="/academics/departments/Botany/Botany_lab_Staff">
//         <span className=" mr-2 bg-[#000080] rounded-lg p-2 w-[220px] flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-700">
//           Laboratory Staff
//         </span>
//       </a>

//       <a href="/academics/departments/Botany/Bot_Publications">
//         <span className=" mr-2 bg-[#000080] rounded-lg p-2 w-[220px] flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-700">
//           Publications
//         </span>
//       </a>

//       <a href="/academics/departments/Botany/awards">
//         <span className=" mr-2 bg-[#000080] rounded-lg p-2 w-[220px] flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-700">
//           Awards
//         </span>
//       </a>

//       <a href="/academics/departments/Botany/Research_Fac">
//         <span className=" mr-2 bg-[#000080] rounded-lg p-2 w-[220px] flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-700">
//           Research
//         </span>
//       </a>
//       <a href="https://drive.google.com/file/d/1GagyR2UNzjijUt-JLiLxulvspvfLdEZF/view?usp=sharing">
//         <span className=" mr-2 bg-[#000080] rounded-lg p-2 w-[220px] flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-700">
//           Time Table
//         </span>
//       </a>
//       <a href="https://drive.google.com/file/d/1GagyR2UNzjijUt-JLiLxulvspvfLdEZF/view?usp=sharing">
//         <span className=" mr-2 bg-[#000080] rounded-lg p-2 w-[220px] flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-700">
//           Photo Gallery
//         </span>
//       </a>
//     </div>

  
//   )
// }

// export default Botany


import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import {botony_side } from "./Depart_side_data";

const Botany = () => {
  const [data,setData] = useState(botony_side);

  return (
    <div>
      {data.map((curElem)=>(
        <NavLink to={curElem.link}   className={({isActive})=>(isActive?" mr-2 bg-[#000080] rounded-lg p-2 w-[220px] flex flex-row justify-center mb-2 mt-2 text-white border-2 border-[#000080] ":" mr-2 bg-[#fff] rounded-lg p-2 w-[220px] flex flex-row justify-center mb-2 mt-2 text-black border-2 border-[#000080]  hover:bg-[#000080] hover:text-white")}>
        <span >
          {curElem.title}
        </span>
      </NavLink>
        ))}
    </div>
  );
};

export default Botany;
