import React from "react";
import tic from "./Department TICs.xlsx";
import Sidebar from "../../Components/Sidebar/DeptSidebar";
import Banner from "../../Components/Banners/teach";
import "./Att.css";

const teacher = () => {
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
            TEACHERS-IN-CHARGE
          </h2>
          <div className="flex-col">
            <table className="table-fixed mt-1">
              <tr className="h-20 text-lg">
                <th className="row text-lg">S.no</th>
                <th className="text-lg">About</th>
                <th className="text-lg">PDF</th>
              </tr>
              <tr className=" ">
                <td className="text-lg">1</td>
                <td className="text-lg ">
                  <strong>Teachers-In-Charge </strong>
                </td>
                <td>
                  {" "}
                  <a href={tic} target="_blank" rel="noreferrer">
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

export default teacher;
