import React from "react";
import Departments from "../../../../Components/Sidebar/Departments";
import DepartBanner from "../../../../Components/Banners/DepartBanner";
import association1 from "../../../../Dummy_data//ImgPages/Biochemistry/association1.jpg";
import association2 from "../../../../Dummy_data//ImgPages/Biochemistry/association2.jpg";
import association3 from "../../../../Dummy_data//ImgPages/Biochemistry/association3.jpg";
import association4 from "../../../../Dummy_data//ImgPages/Biochemistry/association4.jpg";
import Biochemistry from "../../../../Components/DepartSIde/Biochemistry";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function Association() {
  const [visible, setVisible] = useState(false);
  return (
    <div className=" flex flex-col">
      <div className="">
        <DepartBanner/>
      </div>

      <div className="flex flex-row">
      <div className="md:hidden">
          {visible ? (
            <>
              <div className=" flex  flex-col mt-8 ml-2">
                <FontAwesomeIcon
                  icon={faClose}
                  size="lg"
                  onClick={() => setVisible(!visible)}
                  className=" border-2  border-[#000080] mr-2 hover:text-black text-white  rounded-lg p-2 cursor-pointer hover:bg-white bg-[#000080]"
                />
                <Biochemistry />
              </div>
            </>
          ) : (
            <div className=" flex  flex-col mt-8 ml-2">
              <FontAwesomeIcon
                icon={faBars}
                size="lg"
                onClick={() => setVisible(!visible)}
                className="text-black border-2 border-[#000080] mr-2 hover:text-white bg-[#fff] rounded-lg p-2 cursor-pointer hover:bg-[#000080]"
              />
            </div>
          )}
        </div>
        <div className="  md:flex hidden md:flex-col mt-12 ml-2 ">
          <Biochemistry />
        </div>
        <div className="w-full mr-16">
          <h2 className="md:text-4xl text-xl uppercase font-bold mb-5 mt-[9%] flex flex-row justify-center ml-4  items-center ">
            Association
          </h2>
<div>
          <div
                  style={{
                    backgroundImage:
                      "url(/images/ImgPages/Biochemistry/association1.jpg)",
                  
                  

                  }}
                  className="bg-center ml-auto mr-auto lg:w-[800px] w-[250px] h-[190px] lg:h-[420px] bg-no-repeat mb-3 mt-[3%] bg-cover  rounded-2xl border-2 border-black"
                  
                ></div>


          <div className="flex pr-4 pl-4 pb-1">
            <span className=" card-description md:text-lg text-sm text-justify font-medium ">
              The Biochemistry Association of Daulat Ram College takes immense
              pride in organizing a plethora of activities year-round covering
              Fresher’s, Farewell, Fest- ‘Biomania’, year-round seminars (meet
              the scientist), skill enhancement workshops, and guest lectures by
              prominent personalities.
            </span>
          </div>
          <div className=" ml-4 flex flex-row pr-2 ">
          
            <span className=" card-description md:text-lg text-sm text-justify font-medium ">
              The annual Fresher’s party is hosted by the 2nd and 3rd year
              students at the start of a new session to welcome new students
              into the warm and loving family of biochemistry. The annual
              Farewell, organised by 1st and 2nd year students at the end of a
              session celebrates the three year journey of passing out seniors
              and bids them a bittersweet adieu. <br /> The annual fest-
              Biomania, hosts large crowds of students, enthusiastic to
              experience a culmination of guest lectures, talent shows, high
              spirited crowd, entertaining activities; all put together by
              combined efforts of the biomania family.
              <br /> There are various events organised by the department such
              as meet the scientist where prominent personalities are invited to
              deliver lectures on their recent research activities to motivate
              students.
            </span>
          </div>

          
          <div
                  style={{
                    backgroundImage:
                      "url(/images/ImgPages/Biochemistry/association2.jpg)",
                      
                  

                  }}
                  className="bg-center ml-auto mr-auto lg:w-[800px] w-[250px] h-[190px] lg:h-[450px] bg-no-repeat mb-3 mt-[3%] bg-cover  rounded-2xl border-2 border-black"                  
                ></div>



            <div
                  style={{
                    backgroundImage:
                      "url(/images/ImgPages/Biochemistry/association3.jpg)",
                    
                  

                  }}
                  className="bg-center ml-auto mr-auto lg:w-[800px] w-[250px] h-[190px] lg:h-[450px] bg-no-repeat mb-3 mt-[3%] bg-cover  rounded-2xl border-2 border-black"                  
                ></div>
            <div
                  style={{
                    backgroundImage:
                      "url(/images/ImgPages/Biochemistry/association4.jpg)",
                      

                  }}
                  className="bg-center ml-auto mr-auto lg:w-[800px] w-[250px] h-[190px] lg:h-[450px] bg-no-repeat mb-3 mt-[3%] bg-cover  rounded-2xl border-2 border-black"                  
                ></div>
                </div>
          
          
        </div>
        
        {/* <div className=" flex  flex-col ml-1 mr-16 mt-24">
                <Biochemistry/>
                </div> */}
      </div>
    </div>
  );
}

export default Association;
