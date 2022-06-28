import React from "react";
import tac from "../Academics/Flier-InternshipinZebrafishmodelsystem June22.pdf";
import Sidebar from "../../Components/Sidebar/DeptSidebar";
import Banner from "../../Components/Banners/training";
import "./Att.css";

const trainingp = () => {
  return (
    <>
      <div className="">
        <Banner />
      </div>

      <div className="flex ">
        <div className="w-[350px] flex flex-row">
          <Sidebar />
        </div>
        <div className="w-[1100px]">
          <h2 className="text-4xl font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
            TRAINING PROGRAMS
          </h2>
          <div className="main flex-col">
            <table className="table-fixed mt-1 ">
              <tr className="h-20 text-lg">
                <th className="row text-lg">S.no</th>
                <th className="text-lg">About</th>
                <th className="text-lg">PDF</th>
              </tr>
              <tr className=" ">
                <td className="text-lg">1</td>
                <td className="text-lg ">
                  <strong>Training Programs </strong>
                </td>
                <td>
                  {" "}
                  <a href={tac} target="_blank" rel="noreferrer">
                    {" "}
                    <button className="btn">Click Here</button>
                  </a>{" "}
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default trainingp;
