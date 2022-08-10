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
              <div className="">
                <Sidebar />
              </div>
              <div className="relative mr-20 md:w-[1100px]">
                <h2 className=" md:text-4xl text-xl font-bold mb-5 mt-[5%] md:ml-16 text-justify justify-center  ">
                  UNDERGRADUATE COURSES
                </h2>
                
                <figure className=" relative mb-10 md:ml-12 lg:ml-20 mt-10  ">
                  <ul className="  relative list-disc card-description flex flex-col gap-4 text-justify font-medium ">
                    <li>
                    B.A. (Programme)
                    </li>
                    <li>
                    B.Com
                    </li>
                    <li>
                    B.Com (H)
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
    
                   
                  </ul>
                  
                </figure>
              </div>
            </div>
          </div>
        </>
      );
}

export default Undergraduate