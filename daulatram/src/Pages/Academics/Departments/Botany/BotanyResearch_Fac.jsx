import React from "react";
import Botanybanner from "./Botanybanner.jsx";
import Departments from "../../../../Components/Sidebar/Departments";
import Botany from "../../../../Components/DepartSIde/Botany.jsx";

function Research_Fac() {
  return (
    <div className=" flex flex-col">
      <div className="">
        <Botanybanner />
      </div>
      <div className="flex flex-row">
      <div className=" flex flex-col  mt-12 ml-2">
          <Botany />
        </div>
        
          <div className="w-full mr-16">
            <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
              Research and Facilities
            </h2>
            <div className="flex pr-4 pl-4 pb-2">
              <span className=" card-description text-lg ml-2 text-justify font-medium ">
                The Department has well equipped, projector fitted, air
                conditioned four Laboratories, Museum, Culture room with tissue
                culture facility, and a Botanical garden.
              </span>
              <br />
            </div>

            <div>
              <p className=" card-description text-xl ml-2 flex pr-4 pl-4 text-justify font-bold ">
                Laboratories-
              </p>
            </div>
            <div>
              <p className=" card-description text-lg ml-2 flex pr-4 pl-4 pb-2 font-medium text-justify ">
                Department of Botany having four laboratories, which are well
                maintained and equipped with all essentials required like PCR
                machine, Spectrophotometer, Gel Electrophoresis units
                (Horizontal), UV Transilluminator, BOD incubator, Plant growth
                chambers, Table Top Centrifuges, Binocular microscopes,
                Autoclave, pH meters, Vortexer, Micro and macro weighing
                balances, Micropipettes sets, Glassware, permanent slides etc.
                required for conducting the practicals. Out of four laboratories
                LAB A, LAB B, Hons LAB is fully devoted to practicals like
                Metabolism, Plant Physiology, Plant Diversity, Biotechnology,
                Genetics, Reproductive Biology, Anatomy, Ecology and many more.
                Recently Bioinformatics Laboratory was added in the department
                and well equipped with computers and software required for
                performing the bioinformatics practical.
              </p>
            </div>
            <div>
              <div
                style={{
                  backgroundImage:
                    "url(/images/ImgPages/Botany/PIC_1_Laboratories.JPG)",
                  width: "96%",
                  height: "470px",
                }}
                className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mb-5  ml-6 rounded-2xl border-2 border-black"
              ></div>
            </div>

            <div>
              <p className=" card-description text-xl ml-2 flex pr-4 pl-4 text-justify font-bold ">
                Museum-
              </p>
            </div>
            <div>
              <p className=" card-description text-lg ml-2 flex pr-4 pl-4 pb-2 font-medium text-justify ">
                The Departmental museum has a rich collection of preserved
                specimens required for study of plant diversity in theory as
                well as practical classes. The museum consists of preserved
                specimens in liquid form and dried herbarium. There are
                collections of many specimens which are specifically devoted for
                Economic botany practical.
              </p>
            </div>
            <div
              style={{
                backgroundImage:
                  "url(/images/ImgPages/Botany/PIC_2_Museum.JPG)",
                width: "96%",
                height: "470px",
              }}
              className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mb-7  ml-6 rounded-2xl border-2 border-black"
            ></div>

            <div>
              <p className=" card-description text-xl ml-2 flex pr-4 pl-4 text-justify font-bold ">
                Tissue Culture Facility-
              </p>
            </div>
            <div>
              <p className=" card-description text-lg ml-2 flex pr-4 pl-4 pb-2 font-medium text-justify ">
                The Department has a well-equipped completely sterilized tissue
                culture laboratory. The laboratory has a laminar flow,
                autoclave, culture trolley, maintained light and temperature
                conditions and other essentials required for tissue culture.
              </p>
            </div>
            <div
              style={{
                backgroundImage:
                  "url(/images/ImgPages/Botany/PIC_3_Tissue_Culture_room.JPG)",
                width: "96%",
                height: "470px",
              }}
              className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mb-7  ml-6 rounded-2xl border-2 border-black"
            ></div>

            <div>
              <p className=" card-description text-xl ml-2 flex pr-4 pl-4 text-justify font-bold ">
                Botanical Garden-
              </p>
            </div>
            <div>
              <p className=" card-description text-lg ml-2 flex pr-4 pl-4 pb-2 font-medium text-justify ">
                For routine practical classes fresh plant material is required
                and for that Department is having a well-maintained Botanical
                Garden. In the Botanical Garden various plants are available for
                practicals like Systematics, Economic Botany, Genetics etc. The
                Botanical Garden also has a small pond which is used for study
                of aquatic plants as well as for conducting Ecology practical. A
                green house is also installed in the Botanical Garden where many
                plants are grown at controlled environmental conditions
              </p>
            </div>
            <div
              style={{
                backgroundImage:
                  "url(/images/ImgPages/Botany/PIC_4_Botanical_garden.png)",
                width: "96%",
                height: "470px",
              }}
              className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mb-7  ml-6 rounded-2xl border-2 border-black"
            ></div>
          </div>
        </div>
      </div>
    
  );
}

export default Research_Fac;
