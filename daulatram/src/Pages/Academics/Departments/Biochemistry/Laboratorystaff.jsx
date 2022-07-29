import React from "react";
import Departments from "../../../../Components/Sidebar/Departments";

import DepartBanner from "../../../../Components/Banners/DepartBanner";
import "./laboratorystaff.css";
import Biochemistry from "../../../../Components/DepartSIde/Biochemistry";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const Laboratorystaff = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className=" flex flex-col">
      <div className="">
        <DepartBanner />
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
                <Biochemistry />
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
        <div className="  md:flex hidden md:flex-col mt-12 ml-2 ">
          <Biochemistry />
        </div>
        <div className="w-full ml-2">
          <h2 className="md:text-4xl text-xl uppercase font-bold mb-5 mt-[9%] flex flex-row justify-center ml-4  items-center ">
            LABORATORY STAFF
          </h2>
          <div className="flex flex-col justify-center">
            <div className="justify-center">
              <div className="table_section">
            {/* <table className=" w-96 h-48 md:table-fixed md:ml-auto md:mr-auto md:w-[450px] md:h-[100px] lg:w-[700px] lg:h-[180px] xl:w-[900px] xl:h-[180px] mt-1 "> */}
                <table className="mt-1 w-full ml-auto mr-auto ">
                  <thead>
                    <tr>
                      <th>Name </th>
                      <th>Permanent/Adhoc </th>
                      <th>Designation</th>
                      <th>Duties</th>
                      <th>Date of joining</th>
                      <th>Years of service</th>
                      <th>Email ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Mr. Rajvir</td>
                      <td>Permanent</td>
                      <td>Laboratory Assistant</td>
                      <td>Lab work</td>
                      <td>1989</td>
                      <td>31</td>
                      <td>rajvirgiri@gmail.com</td>
                    </tr>

                    <tr>
                      <td>Mr. Kuldeep Goswami</td>
                      <td>Permanent</td>
                      <td>Laboratory Assistant</td>
                      <td>Lab work</td>
                      <td>1989</td>
                      <td>31</td>
                      <td>kk191963@gmail.com</td>
                    </tr>
                    <tr>
                      <td>Mr. Chaman Sharma</td>
                      <td>Permanent</td>
                      <td>Laboratory Attendant</td>
                      <td>Lab work</td>
                      <td>2019 (2010 as daily wager)</td>
                      <td>1(9)</td>
                      <td>sharmachaman30@gmail.com</td>
                    </tr>
                    <tr>
                      <td>Mr. Lalit Gaur</td>
                      <td>Daily Wager</td>
                      <td>Laboratory Attendant</td>
                      <td>Lab work</td>
                      <td>2010</td>
                      <td>10</td>
                      <td>lalitsharma.gaur81@gmail.com</td>
                    </tr>
                    <tr>
                      <td>Mr. Ashish</td>
                      <td>Permanent</td>
                      <td>Laboratory Attendant</td>
                      <td>Lab work</td>
                      <td>2019</td>
                      <td>1</td>
                      <td>ashishmishra12898@gmail.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* <div className=" flex  flex-col ml-2 ">
              <Biochemistry />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laboratorystaff;
