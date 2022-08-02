import React, {useState} from "react";
import PhysicalEdubanner from "./PhysicalEdubanner.jsx";
import PhysicalEdu from "../../../../Components/DepartSIde/PhysicalEdu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
function PhysicalEdu_about() {
  const [visible, setVisible] = useState(false);
  return (
    <div className=" flex flex-col">
      <div className="">
        <PhysicalEdubanner />
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
                <PhysicalEdu />
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
        <div className=" md:flex hidden md:flex-col mt-12 ml-2">
          <PhysicalEdu />
        </div>
        <div className="w-full mr-16">
          <h2 className="md:text-4xl text-xl sm:text-xl uppercase font-bold mb-5 mt-[7%] flex flex-row ml-3 md:justify-center items-center  ">
            About the department
          </h2>

          <div className="flex flex-row">
            <div className="flex flex-col">
              <div className="flex flex-row">
                <div>
                  <img
                    style={{
                      backgroundImage:
                        "url(/images/ImgPages/Physical_Education/about1.jpg)",

                    }}
                    className="bg-center ml-auto mr-auto lg:w-[900px] w-[300px] mb-4 h-[240px] lg:h-[550px] bg-no-repeat mt-[3%] bg-cover  rounded-2xl border-2 border-black"
                  />

                  <div className="pr-3 pl-3 flex mr-1 ml-2">
                    <span className="md:text-lg text-sm text-justify font-medium">
                      The Sports Complex campus is located in Daulat Ram
                      College, in the North Campus of Delhi University. The
                      complex covers an area of about 4 acres. The buildings of
                      the Sports Complex consist of Academic Block,
                      Laboratories, Research Block & Administrative Block. A
                      state-of-the-art Library Building with all modern
                      facilities is available on the Campus, for the use of
                      Staff, Students. It has Air Conditioned Health Centre,
                      Multi Gym, Cardio Section, Sauna Bath, Steam Bath and
                      Jacuzzi bath, Table Tennis, Chess, Badminton. The Complex
                      has several other well-laid Play Fields for Outdoor Games
                      and Sports: Athletics, Hockey, Rugby, Cricket, Handball,
                      Kho-Kho, Kabaddi. The Complex’s Library is stocked with
                      Professional Books and Literature. It subscribes to
                      several Professional and Research Journals/
                      Magazines/Periodicals and is undoubtedly the best of its
                      kind in India.
                    </span>
                  </div>
                  <div className="pr-3 pl-3 flex mr-1 ml-2">
                    <span className="md:text-lg text-sm text-justify font-medium ">
                      Mission & Vision
                    </span>
                  </div>
                  <div className="pr-3 pl-3 flex mr-1 ml-2">
                    <span className="md:text-lg text-sm text-justify font-medium">
                      Mission:
                    </span>
                  </div>
                  <div className="pr-3 pl-3 flex mr-1 ml-2">
                    <span className="md:text-lg text-sm text-justify font-medium  ">
                      Quality teaching, learning and research in cognitive,
                      psycho-motor and affective domains in Physical education
                      and Sports.
                    </span>
                  </div>
                  <div className="pr-3 pl-3 flex mr-1 ml-2">
                    <span className="md:text-lg text-sm text-justify font-medium ">
                      Vision:
                    </span>
                  </div>
                  <div className="pr-3 pl-3 flex mr-1 ml-2 mb-5">
                    <span className="md:text-lg text-sm text-justify font-medium  ">
                      To engage in relentless pursuit of excellence in Physical
                      Education and Sports for the health, fitness and wellness
                      of the Students.
                    </span>
                  </div>
                  <img
                    style={{
                      backgroundImage:
                        "url(/images/ImgPages/Physical_Education/about2.jpg)",

                    }}
                    className="bg-center ml-auto mr-auto lg:w-[900px] w-[300px] h-[240px] lg:h-[600px] bg-no-repeat mt-[3%] bg-cover  rounded-2xl border-2 border-black"
                  />
                  <img
                    style={{
                      backgroundImage:
                        "url(/images/ImgPages/Physical_Education/about3.jpg)",

                    }}
                    className="bg-center ml-auto mr-auto lg:w-[900px] w-[300px] h-[240px] lg:h-[600px] bg-no-repeat mt-[3%] bg-cover  rounded-2xl border-2 border-black"
                  />
                  <img
                    style={{
                      backgroundImage:
                        "url(/images/ImgPages/Physical_Education/about4.jpg)",
                      
                    }}
                    className="bg-center ml-auto mr-auto lg:w-[900px] w-[300px] h-[240px] lg:h-[600px] bg-no-repeat mt-[3%] bg-cover  rounded-2xl border-2 border-black"
                  />
                  <img
                    style={{
                      backgroundImage:
                        "url(/images/ImgPages/Physical_Education/about5.jpg)",

                    }}
                    className="bg-center ml-auto mr-auto lg:w-[900px] w-[300px] h-[240px] lg:h-[600px] bg-no-repeat mt-[3%] bg-cover  rounded-2xl border-2 border-black"
                  />
                  <img
                    style={{
                      backgroundImage:
                        "url(/images/ImgPages/Physical_Education/about6.jpg)",

                    }}
                    className="bg-center ml-auto mr-auto lg:w-[900px] w-[300px] h-[240px] lg:h-[600px] bg-no-repeat mt-[3%] bg-cover  rounded-2xl border-2 border-black"
                  />
                  <img
                    style={{
                      backgroundImage:
                        "url(/images/ImgPages/Physical_Education/about7.jpg)",

                    }}
                    className="bg-center ml-auto mr-auto lg:w-[900px] w-[300px] h-[240px] lg:h-[600px] bg-no-repeat mt-[3%] bg-cover  rounded-2xl border-2 border-black"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhysicalEdu_about;
