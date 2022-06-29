import React from "react";
import Departments from "../../../../Components/Sidebar/Departments";
import Commercebanner from "../Commerce/Commercebanner.jsx";
import Commerce from "../../../../Components/DepartSIde/Commerce.jsx";
import GauravCV from "../../../../Dummy_data/ImgPages/Commerce/CV_Gourav_Verma.pdf";
function Com_labstaff() {
  return (
    <div className=" flex flex-col">
      <div className="">
        <Commercebanner />
      </div>
      <div className="flex flex-row">
        <div className="w-[350px]">
          <Departments />
        </div>
        <div>
          <div className="w-[1100px]">
            <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
              Laboratory Staff
            </h2>

            <div className="table_section">
              <table className="mt-1 ml-5 mr-5">
                <thead>
                  <tr>
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
                        <button className="btn">Click Here</button>
                      </a>{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Com_labstaff;
