import React from "react";
import PhysicalEdubanner from "./PhysicalEdubanner.jsx";
import PhysicalEdu from "../../../../Components/DepartSIde/PhysicalEdu";
function PhysicalEdu_about() {
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
                      width: "1000px",
                      height: "600px",
                    }}
                    className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mr-auto ml-auto mb-4 rounded-3xl border-2 border-black"
                  />

                  <div className="pr-3 pl-3 flex mr-1 ml-2">
                    <span className="text-lg text-justify font-medium mt-3">
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
                    <span className="text-2xl text-justify font-bold mt-3 ">
                      Mission & Vision
                    </span>
                  </div>
                  <div className="pr-3 pl-3 flex mr-1 ml-2">
                    <span className="text-xl text-justify font-bold mt-3 ">
                      Mission:
                    </span>
                  </div>
                  <div className="pr-3 pl-3 flex mr-1 ml-2">
                    <span className="text-lg text-justify font-medium  ">
                      Quality teaching, learning and research in cognitive,
                      psycho-motor and affective domains in Physical education
                      and Sports.
                    </span>
                  </div>
                  <div className="pr-3 pl-3 flex mr-1 ml-2">
                    <span className="text-xl text-justify font-bold mt-3 ">
                      Vision:
                    </span>
                  </div>
                  <div className="pr-3 pl-3 flex mr-1 ml-2 mb-5">
                    <span className="text-lg text-justify font-medium  ">
                      To engage in relentless pursuit of excellence in Physical
                      Education and Sports for the health, fitness and wellness
                      of the Students.
                    </span>
                  </div>
                  <img
                    style={{
                      backgroundImage:
                        "url(/images/ImgPages/Physical_Education/about2.jpg)",
                      width: "1000px",
                      height: "600px",
                    }}
                    className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mr-auto ml-auto mb-4 rounded-3xl border-2 border-black"
                  />
                  <img
                    style={{
                      backgroundImage:
                        "url(/images/ImgPages/Physical_Education/about3.jpg)",
                      width: "1000px",
                      height: "1000px",
                    }}
                    className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mr-auto ml-auto mb-4 rounded-3xl border-2 border-black"
                  />
                  <img
                    style={{
                      backgroundImage:
                        "url(/images/ImgPages/Physical_Education/about4.jpg)",
                      width: "1000px",
                      height: "600px",
                    }}
                    className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mr-auto ml-auto mb-4 rounded-3xl border-2 border-black"
                  />
                  <img
                    style={{
                      backgroundImage:
                        "url(/images/ImgPages/Physical_Education/about5.jpg)",
                      width: "1000px",
                      height: "600px",
                    }}
                    className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mr-auto ml-auto mb-4 rounded-3xl border-2 border-black"
                  />
                  <img
                    style={{
                      backgroundImage:
                        "url(/images/ImgPages/Physical_Education/about6.jpg)",
                      width: "1000px",
                      height: "600px",
                    }}
                    className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mr-auto ml-auto mb-4 rounded-3xl border-2 border-black"
                  />
                  <img
                    style={{
                      backgroundImage:
                        "url(/images/ImgPages/Physical_Education/about7.jpg)",
                      width: "1000px",
                      height: "600px",
                    }}
                    className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mr-auto ml-auto mb-4 rounded-3xl border-2 border-black"
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
