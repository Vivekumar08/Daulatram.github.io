// import React from "react";

// const Chemistry = () => {
//   return (
//     <div>
//       <a href="/academics/departments/Chemistry/">
//         <span className=" mr-2 bg-[#000080] rounded-lg p-2 w-[220px] flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-700">
//           About The Deparment
//         </span>
//       </a>
//       <a href="/academics/departments/Chemistry/Faculty">
//         <span className=" mr-2 bg-[#000080] rounded-lg p-2 w-[220px] flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-700">
//           Faculty
//         </span>
//       </a>
//       <a href="/academics/departments/Chemistry/Programoffered">
//         <span className="  bg-[#000080] rounded-lg p-2 flex w-[220px] flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-700">
//           Programmes Offered
//         </span>
//       </a>
//       <a href="/academics/departments/Chemistry/association">
//         <span className=" mr-2 bg-[#000080] rounded-lg p-2 w-[220px] flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-700">
//           Association
//         </span>
//       </a>

//       <a href="/academics/departments/Chemistry/Students'_achievements">
//         <span className=" mr-2 bg-[#000080] rounded-lg p-2 w-[220px] flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-700">
//           Student's Achievements
//         </span>{" "}
//       </a>
//       <a href="/academics/departments/Chemistry/Events">
//       <span className=" mr-2 bg-[#000080] rounded-lg p-2 w-[220px] flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-700">
//         Events
//       </span>
//       </a>

//       <a href="/academics/departments/Chemistry/laboratorystaff">
//         <span className=" mr-2 bg-[#000080] rounded-lg p-2 w-[220px] flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-700">
//           Laboratory Staff
//         </span>
//       </a>

//       <a href="/academics/departments/Chemistry/Publications">
//         <span className=" mr-2 bg-[#000080] rounded-lg p-2 w-[220px] flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-700">
//           Publications
//         </span>
//       </a>

//       <a href="/academics/departments/Chemistry/awards">
//         <span className=" mr-2 bg-[#000080] rounded-lg p-2 w-[220px] flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-700">
//           Awards
//         </span>
//       </a>

//       <a href="/academics/departments/Chemistry/Facilities">
//         <span className=" mr-2 bg-[#000080] rounded-lg p-2 w-[220px] flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-700">
//           Research
//         </span>
//       </a>
//       <a href="/academics/departments/Chemistry/timetable">
//         <span className=" mr-2 bg-[#000080] rounded-lg p-2 w-[220px] flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-700">
//           Time Table
//         </span>
//       </a>
//       <a href="/academics/departments/Chemistry/photogallery">
//         <span className=" mr-2 bg-[#000080] rounded-lg p-2 w-[220px] flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-700">
//           Photo Gallery
//         </span>
//       </a>
//     </div>
//   );
// };

// export default Chemistry;



import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import {chemistry_side } from "./Depart_side_data";

const Chemistry = () => {
  const [data,setData] = useState(chemistry_side);

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

export default Chemistry;

