import React from 'react'
import Sidebar from "../../Components/Sidebar/DeptSidebar";
import Banner from "../../Components/Banners/foreign";
import Maintanence from '../../Components/UnderMaintanence/Maintanence';



const Addoncourses = () => {
  return (
<>
    <div className="">
        <Banner/>
      </div>

      <div className="flex ">
        <div className="w-[350px] flex flex-row">
          <Sidebar />
        </div>
        <div className="w-[1100px]">
          <h2 className="text-4xl font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
        Centre for Foreign Languages (Add-On Courses)
        </h2>
        <Maintanence/>
        </div>
        
    </div>
</>
    )
}

export default Addoncourses