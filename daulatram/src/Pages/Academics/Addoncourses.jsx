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
      <div className="flex flex-row ">
        <div className="w-[350px] flex flex-row">
          <Sidebar />
        </div>
        <div className="w-full mr-20 mb-5 md:ml-10">
          <div className="lg:w-[1100px] w-[300px] md:w-[550px]" >
          <h2 className="text-xl md:text-4xl  uppercase font-bold mb-5 mt-[5%]  flex justify-center items-center">
        Centre for Foreign Languages (Add-On Courses)
        </h2>
        <Maintanence/>
        </div>
        </div>
        </div>
    
</>
    )
}

export default Addoncourses