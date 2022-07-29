import React, { useState } from "react";
import Departments from "../../../../Components/Sidebar/Departments";
import Commercebanner from "../Commerce/Commercebanner.jsx";
import Commerce from "../../../../Components/DepartSIde/Commerce.jsx";
import GauravCV from "../../../../Dummy_data/ImgPages/Commerce/CV_Gourav_Verma.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
function Com_labstaff() {
  const [visible, setVisible] = useState(false);
  return (
    <div className=" flex flex-col">
      <div className="">
        <Commercebanner />
      </div>
      <div className="flex flex-row">
        <div className="md:hidden absolute bg-white ">
          {visible ? (
            <>
              <div className=" flex  flex-col mt-8 ml-2">
                <FontAwesomeIcon
                  icon={faClose}
                  size="lg"
                  onClick={() => setVisible(!visible)}
                  className=" border-2  border-[#000080] mr-2 hover:text-black text-white  rounded-lg p-2 cursor-pointer hover:bg-white bg-[#000080]"
                />
                <Commerce />
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
          <Commerce />
        </div>
        <div className="w-full mb-5 ">
          <h2 className=" md:text-3xl text-lg uppercase font-bold mb-5 mt-[7%] flex flex-row justify-center ml-4 items-center    ">
            Laboratory Staff
          </h2>

          <div className="main flex-col mt-5">
            <table className=" w-96 h-48 ml-5  md:table-fixed sm:ml-auto sm:mr-auto md:w-[450px] md:h-[100px] lg:w-[700px] lg:h-[180px] xl:w-[900px] xl:h-[180px] mt-1 ">
              <thead>
                <tr className="h-20 text-lg">
                  <th>
                    <strong>Name</strong>{" "}
                  </th>

                  <th>
                    <strong>Designation</strong>
                  </th>

                  <th>
                    <strong>CV</strong>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mr. Gaurav Verma</td>

                  <td>Commerce Lab Assistant</td>
                  <td>
                    {" "}
                    <a href={GauravCV} target="_blank" rel="noreferrer">
                      {" "}
                      <button className="md:btn text-sm font-semibold bg-[#fff] hover:bg-[#000080] text-black hover:text-white p-1  border-2 border-[#000080] rounded-md">Click Here</button>
                      {/* <button className="btn">Click Here</button> */}
                    </a>{" "}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Com_labstaff;
