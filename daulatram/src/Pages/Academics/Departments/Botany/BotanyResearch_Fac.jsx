import React, {useState} from "react";
import Botanybanner from "./Botanybanner.jsx";
import Departments from "../../../../Components/Sidebar/Departments";
import Botany from "../../../../Components/DepartSIde/Botany.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
function Research_Fac() {
  const [visible, setVisible] = useState(false);
  return (
    <div className=" flex flex-col">
      <div className="">
        <Botanybanner />
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
                  <Botany />
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
          <Botany />
        </div>
        
          <div className="w-full mr-16">
            <h2 className="md:text-4xl text-xl sm:text-xl uppercase font-bold mb-5 mt-[7%] flex flex-row ml-3 md:justify-center items-center  ">
              Research and Facilities
            </h2>
            <div className="flex pr-4 pl-4 pb-2">
              <span className=" card-description md:text-base lg:text-lg text-sm text-justify font-medium ">
                The Department has well equipped, projector fitted, air
                conditioned four Laboratories, Museum, Culture room with tissue
                culture facility, and a Botanical garden.
              </span>
              <br />
            </div>

            <div>
              <p className=" card-description md:text-xl text-lg ml-2 flex pr-4 pl-4 text-justify font-bold">
                Laboratories-
              </p>
            </div>
            <div>
              <p className=" card-description pl-4 pr-4 md:text-base lg:text-lg text-sm text-justify font-medium ">
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
                
                }}
                className="bg-center bg-no-repeat mt-[1%]  bg-cover lg:w-[800px] mr-auto w-[250px] h-[190px] lg:h-[470px] ml-auto mb-4 rounded-2xl border-2 border-black"
              ></div>
            </div>

            <div>
              <p className=" card-description md:text-xl  text-lg ml-2 flex pr-4 pl-4 text-justify font-bold ">
                Museum-
              </p>
            </div>
            <div>
              <p className=" card-description pl-4 pr-4 md:text-base lg:text-lg text-sm text-justify font-medium ">
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
                
              }}
              className="bg-center bg-no-repeat mt-[1%]  bg-cover lg:w-[800px] mr-auto w-[250px] h-[190px] lg:h-[470px] ml-auto mb-4 rounded-2xl border-2 border-black"
            ></div>

            <div>
              <p className=" card-description md:text-base lg:text-lg text-sm ml-2 flex pr-4 pl-4 text-justify font-bold ">
                Tissue Culture Facility-
              </p>
            </div>
            <div>
              <p className=" card-description pl-4 pr-4 md:text-base lg:text-lg text-sm text-justify font-medium ">
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

              }}
              className="bg-center bg-no-repeat mt-[1%]  bg-cover lg:w-[800px] mr-auto w-[250px] h-[190px] lg:h-[470px] ml-auto mb-4 rounded-2xl border-2 border-black"
            ></div>

            <div>
              <p className=" card-description md:text-xl text-lg ml-2 flex pr-4 pl-4 text-justify font-bold ">
                Botanical Garden-
              </p>
            </div>
            <div>
              <p className=" card-description md:text-base lg:text-lg pr-4 pl-4 text-sm text-justify font-medium  ">
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
               
              }}
              className="bg-center bg-no-repeat mt-[1%]  bg-cover lg:w-[800px] mr-auto w-[250px] h-[190px] lg:h-[470px] ml-auto mb-4 rounded-2xl border-2 border-black"
            ></div>
          </div>
        </div>
      </div>
    
  );
}

export default Research_Fac;
