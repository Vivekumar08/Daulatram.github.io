import React from "react";
import Botanybanner from "./Botanybanner.jsx";
import Departments from "../../../../Components/Sidebar/Departments";

function Botany_Association() {
  return (
    <div className=" flex flex-col">
      <div className="">
        <Botanybanner />
      </div>
      <div className="flex flex-row">
        <div className="w-[350px]">
          <Departments />
        </div>
        <div>
          <div className="w-[1100px]">
            <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
              Association
            </h2>

            <div>
              <p className=" card-description text-3xl flex pr-4 pl-4 mt-10 text-blue-900 text-justify justify-center font-bold ">
                Botanical Society – “Vasundhara”
              </p>
            </div>
            <div className="pr-4 pl-4 mt-5">
              <span className="text-justify">
                <p>
                  {" "}
                  The activities of Botanical Society “Vasundhara” are initiated
                  every year at the beginning of the new academic session by
                  conducting the election for the posts of its office bearers.
                  The society formally starts with an inaugural lecture on{" "}
                  <strong>
                    {" "}
                    “Our Nature and Wildlife Heritage: Past, Present & Future ”
                  </strong>{" "}
                  by one of our bright alumnae{" "}
                  <strong>Ms. Radha Sharma,</strong> Co-founder and Director,
                  Earth Calling Expeditions, Mylapore, Chennai.
                </p>
              </span>
            </div>

            <div className="pr-4 pl-4 mt-5">
              <span className="text-justify">
                <p>
                  The speaker shared her inspiring personal experiences about
                  wildlife safari’s. She highlighted major issues related to
                  Tiger conservation and importance of tigers as Umbrella
                  species in forest ecosystems. With an aim of knowledge
                  enhancement and holistic development of students, various
                  co-curricular and extra-curricular activities such as Paper
                  Presentation, Botanical Quiz, Nature through lens, Botanical
                  Rangoli, Phytodiversity, Sketching Competition are organized
                  throughout the year. The annual inter-college botanical
                  festival <strong>“Orchidz” </strong> is celebrated with great
                  fervour that receives active and overwhelming participation
                  from the students across Delhi University.
                </p>
              </span>
            </div>
            <div>
              <div
                style={{
                  backgroundImage: "url(/images/ImgPages/Botany/Fest_1.jpg)",
                  width: "80%",
                  height: "470px",
                }}
                className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mb-5 ml-36 rounded-2xl border-2 border-black"
              ></div>
            </div>
            <div>
              <div
                style={{
                  backgroundImage: "url(/images/ImgPages/Botany/Fest_2.jpg)",
                  width: "80%",
                  height: "470px",
                }}
                className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mb-5 ml-36 rounded-2xl border-2 border-black"
              ></div>
            </div>
            <div>
              <div
                style={{
                  backgroundImage: "url(/images/ImgPages/Botany/Fest_3.jpg)",
                  width: "80%",
                  height: "1100px",
                }}
                className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mb-5 ml-36 rounded-2xl border-2 border-black"
              ></div>
            </div>

            <div className="pr-4 pl-4 mt-5">
              <span className="text-justify">
                <p>
                  The most important event of the fest is {" "}<strong>Paper Reading
                  Competition</strong> for rolling  {" "}<strong>Deepika Vigyan Trophy</strong>. Another
                  highlight of the society is the publication of its annual
                  magazine{" "}<strong>LIANA</strong>, compilation of articles contributed by
                  students and faculty.
                </p>
              </span>
            </div>
            <div>
              <div
                style={{
                  backgroundImage: "url(/images/ImgPages/Botany/Liana.png)",
                  width: "80%",
                  height: "1100px",
                }}
                className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mb-5 ml-36 rounded-2xl border-2 border-black"
              ></div>
            </div>



          </div>
        </div>
      </div>
    </div>
  );
}

export default Botany_Association;
