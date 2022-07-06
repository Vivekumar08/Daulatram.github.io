import React from 'react'
import Sidebar from "../../Components/Sidebar/DeptSidebar";
import Banner from "../../Components/Banners/ugcourses";

const Undergraduate = () => {
    return (
        <>
          <div className=" flex flex-col">
            <div className="">
              <Banner />
            </div>
            <div className="flex flex-row">
              <div className="w-[350px]">
                <Sidebar />
              </div>
              <div className="w-[1100px]">
                <h2 className="bg-yellow-500 md:bg-red-500 lg:bg-green-500 text-3xl md:text-4xl font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
                  UNDERGRADUATE COURSES
                </h2>
                
                <figure className="ml-5 md:ml-80 mt-10 ">
                  <span className=" list-inside card-description text-justify text-lg font-medium ">
                    <li>
                    B.A. (Programme)
                    </li>
                    <li>
                    B.Com.
                    </li>
                    <li>
                    B.Com. (H)
                    </li>
                    <li>
                    B.A. (H) Economics
                    </li>
                    <li>
                    B.A. (H) English
                    </li>
                    <li>
                    B.A. (H) Hindi
                    </li>
                    <li>
                    B.A.(H) History
                    </li>
                    <li>
                    B.A.(H) Philosophy
                    </li>
                    <li> B.A.(H) Political Science</li>
                    <li> B.A. (H) Psychology</li>
                    <li> B.A. (H) Sanskrit</li>
                    <li> B.Sc. (Prog) Life Sciences</li>
                    <li> B.Sc. (H) Biochemistry</li>
                    <li> B.Sc. (H) Botany</li>
                    <li> B.Sc. (H) Chemistry</li>
                    <li> B.Sc. (H) Mathematics</li>
                    <li> B.Sc. (H) Physics</li>
                    <li>B.Sc. (H) Zoology</li>
    
                   
                  </span>
                  
                </figure>
              </div>
            </div>
          </div>
        </>
      );
}

export default Undergraduate