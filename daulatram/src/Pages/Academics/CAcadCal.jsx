import React from "react";
import ac from "../Academics/DRC-Calendar23-MS-PDF.pdf";
import Sidebar from "../../Components/Sidebar/DeptSidebar";
import Banner from "../../Components/Banners/acal";
import "./Att.css";

const CAcadCal = () => {
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
            COLLEGE ACADEMIC CALENDAR
          </h2>
          <div className="main flex-col">
            <table className="table-fixed mt-1">
              <tr className="h-20">
                <th className="row text-lg">S.no</th>
                <th className="text-lg">About</th>
                <th className="text-lg">PDF</th>
              </tr>
              <tr className="">
                <td className="text-lg">1</td>
                <td className="text-lg ">
                  <strong>College Academic Calendar </strong>
                </td>
                <td>
                  {" "}
                  <a href={ac} target="_blank" rel="noreferrer">
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

export default CAcadCal;