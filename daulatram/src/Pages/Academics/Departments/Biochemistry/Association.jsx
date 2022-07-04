import React from "react";
import Departments from "../../../../Components/Sidebar/Departments";
import Programbanner from "../../../../Components/Banners/Programbanner";
import association1 from "../../../../Dummy_data//ImgPages/Biochemistry/association1.jpg";
import association2 from "../../../../Dummy_data//ImgPages/Biochemistry/association2.jpg";
import association3 from "../../../../Dummy_data//ImgPages/Biochemistry/association3.jpg";
import association4 from "../../../../Dummy_data//ImgPages/Biochemistry/association4.jpg";
import Biochemistry from "../../../../Components/DepartSIde/Biochemistry";

function Association() {
  return (
    <div className=" flex flex-col">
      <div className="">
        <Programbanner />
      </div>

      <div className="flex flex-row">
        {/* <div className="w-[350px]">
          <Departments />
        </div> */}
        <div className=" flex  flex-col mt-12 ml-2 ">
              <Biochemistry/>

              </div>
        <div className="w-full m-16">
          <h2 className="text-4xl uppercase font-bold mb-5  flex flex-row justify-center items-center ">
            Association
          </h2>
<div>
          <div
                  style={{
                    backgroundImage:
                      "url(/images/ImgPages/Biochemistry/association1.jpg)",
                      width: "800px",
                      height: "420px",
                  

                  }}
                  className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mr-auto ml-auto mb-4 rounded-3xl border-2 border-black"
                  
                ></div>


          <div className="flex pr-4 pl-4 pb-2">
            <span className=" card-description text-lg text-justify font-medium ">
              The Biochemistry Association of Daulat Ram College takes immense
              pride in organizing a plethora of activities year-round covering
              Fresher’s, Farewell, Fest- ‘Biomania’, year-round seminars (meet
              the scientist), skill enhancement workshops, and guest lectures by
              prominent personalities.
            </span>
          </div>
          <div className=" mt-4 ml-4 flex flex-row pr-2 ">
          
            <span className=" card-description text-lg text-justify font-medium ">
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
                      width: "800px",
                      height: "450px",
                  

                  }}
                  className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mr-auto ml-auto mb-4 rounded-3xl border-2 border-black"                  
                ></div>



            <div
                  style={{
                    backgroundImage:
                      "url(/images/ImgPages/Biochemistry/association3.jpg)",
                      width: "800px",
                      height: "450px",
                  

                  }}
                  className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mr-auto ml-auto mb-4 rounded-3xl border-2 border-black"                  
                ></div>
            <div
                  style={{
                    backgroundImage:
                      "url(/images/ImgPages/Biochemistry/association4.jpg)",
                      width: "800px",
                      height: "450px",
                  

                  }}
                  className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mr-auto ml-auto mb-4 rounded-3xl border-2 border-black"                  
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
