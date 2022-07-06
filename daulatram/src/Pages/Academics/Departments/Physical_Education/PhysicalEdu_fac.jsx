import React from "react";
import PhysicalEdubanner from "./PhysicalEdubanner.jsx";
import PhysicalEdu from "../../../../Components/DepartSIde/PhysicalEdu";
function PhysicalEdu_fac() {
  return (
    <div className=" flex flex-col">
      <div className="">
        <PhysicalEdubanner />
      </div>
      <div className="flex flex-row">
        <div className=" flex  flex-col mt-12 ml-2">
          <PhysicalEdu />
        </div>
        <div className="w-full mr-16">
          <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
            Faculty
          </h2>
          <div className="flex ">
            <div className="mr-5 ml-12">
              <img
                style={{
                  backgroundImage:
                    "url(/images/ImgPages/Physical_Education/Kavita_physical.jpg)",
                  width: "300px",
                  height: "300px",
                }}
                className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mr-auto  mb-1 rounded-3xl border-2 border-black"
              />
              <div className="pr-3 pl-3 flex mr-auto  w-[320px] ">
                <span className="text-lg text-justify    mt-3 ">
                  <ul>
                    <li className="flex justify-center">
                      <b>Dr. Kavita Sharma <br /> (Teacher-in-Charge)</b>
                    </li>
                    <li>
                      <b>Designation</b>: Associate Professor
                    </li>
                    <li>
                      <b>Qualification</b>: Ph.D, Master of Physical Education.
                    </li>

                    <li>
                      <b>E-mail</b>: kavitasharma@dr.du.ac.in
                    </li>
                  </ul>
                </span>
              </div>
            </div>
            <div className="mr-5 ml-5">
              <img
                style={{
                  backgroundImage:
                    "url(/images/ImgPages/Physical_Education/Kaushambi.jpg)",
                  width: "300px",
                  height: "300px",
                }}
                className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mr-auto ml-12 mb-1 rounded-3xl border-2 border-black"
              />
              <div className="pr-3 pl-3 flex mr-auto w-[320px] ml-9">
                <span className="text-lg text-justify   mt-3 ">
                  <ul>
                    <li className="flex justify-center">
                      <b>Dr. Kaushambi Tyagi </b>
                    </li><br />
                    <li>
                      <b>Designation</b>: Assistant Professor
                    </li>
                    <li>
                      <b>Qualification</b>: Ph.D, Master of Physical Education.
                    </li>

                    <li>
                      <b>E-mail</b>: kaushambi@dr.du.ac.in
                    </li>
                  </ul>
                </span>
              </div>
            </div>
            <div className="mr-5 ml-5">
              <img
                style={{
                  backgroundImage:
                    "url(/images/ImgPages/Physical_Education/Azad_physical.jpg)",
                  width: "300px",
                  height: "300px",
                }}
                className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mr-auto ml-12 mb-1 rounded-3xl border-2 border-black"
              />
              <div className="pr-3 pl-3 flex mr-auto w-[320px] ml-9">
                <span className="text-lg text-justify   mt-3 ">
                  <ul>
                    <li className="flex justify-center">
                      <b>Dr. Azad Singh </b>
                    </li> <br />
                    <li>
                      <b>Designation</b>: Assistant Professor
                    </li>
                    <li>
                      <b>Qualification</b>: Ph.D, Master of Physical Education.
                    </li>

                    <li>
                      <b>E-mail</b>: azad@dr.du.ac.in
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhysicalEdu_fac;
