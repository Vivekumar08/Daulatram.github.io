import React from "react";
import DeptSidebar from "../../../../Components/Sidebar/DeptSidebar";
import Programbanner from "../../../../Components/Banners/Programbanner";
import association1 from "../../../../Dummy_data//ImgPages/Biochemistry/association1.jpg";
import association2 from "../../../../Dummy_data//ImgPages/Biochemistry/association2.jpg";
import association3 from "../../../../Dummy_data//ImgPages/Biochemistry/association3.jpg";
import association4 from "../../../../Dummy_data//ImgPages/Biochemistry/association4.jpg";

function Association() {
  return (
    <div className=" flex flex-col">
      <div className="">
        <Programbanner />
      </div>

      <div className="flex flex-row">
        <div className="w-[350px]">
          <DeptSidebar />
        </div>
        <div className="w-[1100px]">
          <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
            Association
          </h2>
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
            <img
              src={association1}
              alt="images"
              className="rounded-3xl border-black border-2 h-[350px]  mr-10"
              width={350}
            />
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

          <div className=" mt-4 ml-4 flex flex-row mb-4  ">
          <img
              src={association2}
              alt="images"
              className="rounded-3xl border-black border-2 h-[330px]  mr-3 "
              width={350}
            />
            <img
              src={association3}
              alt="images"
              className="rounded-3xl border-black border-2 h-[330px]  mr-3"
              width={350}
            />
            <img
              src={association4}
              alt="images"
              className="rounded-3xl border-black border-2 h-[330px]  mr-10"
              width={350}
            />
          </div>
          <div className="p-3 grid grid-cols-4 mr-2 ml-2">
                <span className=" mr-2 bg-blue-600 rounded-lg p-2 flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-500"><a href="https://drive.google.com/file/d/1GagyR2UNzjijUt-JLiLxulvspvfLdEZF/view?usp=sharing">
                  Faculty
                </a>
                </span>
                <span className=" mr-2 bg-blue-600 rounded-lg p-2 flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-500">
                <a href="./biochem/programmesoffer">
                  Programmes Offered
                </a>
                </span>
                <span className=" mr-2 bg-blue-600 rounded-lg p-2 flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-500">
                  <a href="./biochem/association">
                  Association
                </a></span>
                <span className=" mr-2 bg-blue-600 rounded-lg p-2 flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-500">
                <a href="https://drive.google.com/file/d/1GagyR2UNzjijUt-JLiLxulvspvfLdEZF/view?usp=sharing">
                  Student's Achievements
                </a>
                </span>
                <span className=" mr-2 bg-blue-600 rounded-lg p-2 flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-500">
                <a href="https://drive.google.com/file/d/1GagyR2UNzjijUt-JLiLxulvspvfLdEZF/view?usp=sharing">
                  Events
                </a>
                </span>

            <span className=" mr-2 bg-blue-600 rounded-lg p-2 flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-500">
                <a href="https://drive.google.com/file/d/1GagyR2UNzjijUt-JLiLxulvspvfLdEZF/view?usp=sharing">
                  Laboratory Staff
                </a>
                </span>

                <span className=" mr-2 bg-blue-600 rounded-lg p-2 flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-500">
                <a href="https://drive.google.com/file/d/1GagyR2UNzjijUt-JLiLxulvspvfLdEZF/view?usp=sharing">
                  Publications / Awards
                </a>
                </span>

                <span className=" mr-2 bg-blue-600 rounded-lg p-2 flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-500">
                <a href="https://drive.google.com/file/d/1GagyR2UNzjijUt-JLiLxulvspvfLdEZF/view?usp=sharing">
                  Research
                </a>
                </span>
                
              </div>
        </div>
      </div>
    </div>
  );
}

export default Association;
