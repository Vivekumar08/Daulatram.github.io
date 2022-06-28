import React from "react";
import Departments from "../../../../Components/Sidebar/Departments";

import Programbanner from "../../../../Components/Banners/Programbanner";
import "./laboratorystaff.css";
import Biochemistry from "../../../../Components/DepartSIde/Biochemistry";

const Laboratorystaff = () => {
  return (
    <div className=" flex flex-col">
      <div className="">
        <Programbanner />
      </div>

      <div className="flex flex-row">
        <div className="w-[350px]">
          <Departments />
        </div>
        <div className="w-[1100px]">
          <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
            LABORATORY STAFF
          </h2>
          <div className="flex flex-row">
            <div>
              <div className="table_section">
                <table className="mt-1 ml-5 mr-5">
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

            <div className=" flex  flex-col ml-2 ">
              <Biochemistry />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laboratorystaff;
