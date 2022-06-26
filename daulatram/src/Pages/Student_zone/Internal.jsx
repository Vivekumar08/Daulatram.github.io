import React from "react";
import Internalbanner from "../../Components/Banners/Internalbanner";
import Student_side from "../../Components/Sidebar/Student_side";
// import "./Attendence.css"
import "./Att.css";

const Internal = () => {
  return (
    <>
      <div className="">
        <Internalbanner />
      </div>

      <div className="flex ">
        <div className="w-[350px] flex flex-row">
          <Student_side />
        </div>
        <div className="w-[1100px]">
          <h2 className="text-4xl font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
            Internal Assesments
          </h2>
          <div className="main flex-col ">
            {/* <div className='w-[200px] small  mt-20 p-3'>Internal Assesments</div> */}
            <table>
              <tr>
                <th>S.no</th>
                <th>About</th>
                <th>PDF</th>
              </tr>
              <tr className="h-20">
                <td>1</td>
                <td>Internal Assessment For The First Year(May-Jun 2022)</td>
                <td>
                  {" "}
                  <a href="../Student_Zone/Internal_Assesments/First_year">
                    {" "}
                    <button className="btn">Click Here</button>
                  </a>{" "}
                </td>
              </tr>
              <tr className="h-20">
                <td>2</td>
                <td>Internal Assessment For The Second Year</td>
                <td>
                  {" "}
                  <a href="../Student_Zone/Internal_Assesments/Second_year">
                    <button className="btn">Click Here</button>
                  </a>{" "}
                </td>
              </tr>
              <tr className="h-20">
                <td>3</td>
                <td>Internal Assessment For The Third Year</td>
                <td className="w-56">
                  {" "}
                  <a href="../Student_Zone/Internal_Assesments/Third_year">
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

export default Internal;
