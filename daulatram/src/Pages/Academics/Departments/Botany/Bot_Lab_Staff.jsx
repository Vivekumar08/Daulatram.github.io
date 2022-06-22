import React from 'react'
import Botanybanner from "../Botany/Botanybanner.jsx";
import Departments from "../../../../Components/Sidebar/Departments";

function Bot_Lab_Staff() {
  return (
<div className=" flex flex-col">
      <div className="">
        <Botanybanner />
      </div>
      <div className="flex flex-row">
        <div className="w-[350px]">
          <Departments />
        </div>
        <div>
          <div className="w-[1100px]">
            <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
              Lab Staff
            </h2>
            </div>
            <div>
                
            </div>
            
            
            
            </div></div></div>
  )
}

export default Bot_Lab_Staff