import React from "react";
import Departments from "../../../../Components/Sidebar/Departments";

import Programbanner from "../../../../Components/Banners/Programbanner";
import "./laboratorystaff.css"

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

          <div className="table_section">
            <table>
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
              <tbody >
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
          <div className="p-3 grid grid-cols-4 mr-2 ml-2 mt-11">
                <span className=" mr-2 bg-blue-600 rounded-lg p-2 flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-500"><a href="https://drive.google.com/file/d/1GagyR2UNzjijUt-JLiLxulvspvfLdEZF/view?usp=sharing">
                  Faculty
                </a>
                </span>
                <span className=" mr-2 bg-blue-600 rounded-lg p-2 flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-500">
                <a href="./biochem/programmesoffer">
                  Programmes Offered
                </a>
                </span>
                <span className=" mr-2 bg-blue-600 rounded-lg p-2 flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-500">
                  <a href="./biochem/association">
                  Association
                </a></span>
                <span className=" mr-2 bg-blue-600 rounded-lg p-2 flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-500">
                <a href="https://drive.google.com/file/d/1GagyR2UNzjijUt-JLiLxulvspvfLdEZF/view?usp=sharing">
                  Student's Achievements
                </a>
                </span>
                <span className=" mr-2 bg-blue-600 rounded-lg p-2 flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-500">
                <a href="https://drive.google.com/file/d/1GagyR2UNzjijUt-JLiLxulvspvfLdEZF/view?usp=sharing">
                  Events
                </a>
                </span>

            <span className=" mr-2 bg-blue-600 rounded-lg p-2 flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-500">
                <a href="./biochem/laboratorystaff">
                  Laboratory Staff
                </a>
                </span>

                <span className=" mr-2 bg-blue-600 rounded-lg p-2 flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-500">
                <a href="https://drive.google.com/file/d/1GagyR2UNzjijUt-JLiLxulvspvfLdEZF/view?usp=sharing">
                  Publications / Awards
                </a>
                </span>

                <span className=" mr-2 bg-blue-600 rounded-lg p-2 flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-500">
                <a href="https://drive.google.com/file/d/1GagyR2UNzjijUt-JLiLxulvspvfLdEZF/view?usp=sharing">
                  Research
                </a>
                </span>
                
              </div>
        </div>
      </div>
    </div>
  );
};

export default Laboratorystaff;
