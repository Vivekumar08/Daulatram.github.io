import React, {useState} from "react";
import PolScibanner from "./PolScibanner";
import Political_Science from "../../../../Components/DepartSIde/Political_Science";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
function Pol_Sci_about() {
  const [visible, setVisible] = useState(false);
  return (
    <div className=" flex flex-col">
      <div className="">
        <PolScibanner />
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
                <Political_Science />
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
          <Political_Science />
        </div>
        <div className="w-full mr-16">
          <h2 className="md:text-4xl text-lg uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center ml-4 items-center">
            About the department
          </h2>

          <div className="flex flex-row">
            <div className="flex flex-col">
              <div className="flex flex-row">
                <div>
                  <div className="pr-3 pl-3 flex mr-1 ml-2">
                    <span className="md:text-lg text-sm text-justify font-medium">
                      Established in the year___, the department of Political
                      Science at Daulat Ram College has a rich history of
                      providing liberal opportunities and a space for engaging
                      in a diverse area of enquiry covering political ideas,
                      political theory, Indian and global politics and the
                      administrative state. The discipline in itself is one of
                      the most academically and professionally enriching
                      subjects in social sciences. Its interdisciplinary nature
                      opens avenues for career in Research, Civil Services,
                      Journalism, Academics, Law and the Social Sector.
                    </span>
                  </div>
                  <div className="pr-3 pl-3 flex mr-1 ml-2 ">
                    <span className="md:text-lg text-sm text-justify font-medium">
                      The Political Science department has been enthusiastic in
                      organising various seminars, panel-discussions and
                      debates. The students are trained to develop an analytical
                      framework to understand the multiple perspectives of
                      understanding reality. The annual fest ‘Metamorphosis’
                      hosts renowned scholars and conducts various other formal
                      and informal activities each year.
                    </span>
                  </div>
                  <div className="pr-3 pl-3 flex mr-1 ml-2">
                    <span className="md:text-lg text-sm text-justify font-medium">
                      Our esteemed faculty members are committed to build an
                      inclusive, egalitarian and gender sensitive space, wherein
                      the students are trained to inculcate human values and
                      grow as socially responsible and empowered citizens
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pol_Sci_about;
