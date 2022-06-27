import React from 'react'
// import Internalbanner from "../../Components/Banners/Internalbanner";
import AntiRagbanner from '../../Components/Banners/AntiRagbanner';
import Student_side from "../../Components/Sidebar/Student_side";
import "./Att.css";
import anti1 from "../Student_zone/Anti-ragg1.pdf"
import anti2 from "../Student_zone/Anti-Ragging2.pdf"
import anti3 from "../Student_zone/Anti-Ragging3.pdf"

const Antiragging = () => {
  return (
<>
<div className="">
        <AntiRagbanner/>
      </div>

      <div className="flex ">
        <div className="w-[350px] flex flex-row">
          <Student_side />
        </div>
        <div className="w-[1100px]">
          <h2 className="text-4xl font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
          Anti-ragging Helplines
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
                <td>Anti-ragging Helplines</td>
                <td>
                  {" "}
                  <a href={anti1} target="_blank" rel="noreferrer">
                    {" "}
                    <button className="btn">Click Here</button>
                  </a>{" "}
                </td>
              </tr>
              <tr className="h-20">
                <td>2</td>
                <td>Anti-ragging Helplines</td>
                <td>
                  {" "}
                  <a href={anti2} target="_blank" rel="noreferrer">
                    {" "}
                    <button className="btn">Click Here</button>
                  </a>{" "}
                </td>
              </tr>
              <tr className="h-20">
                <td>3</td>
                <td>Anti-ragging Helplines</td>
                <td>
                  {" "}
                  <a href={anti3} target="_blank" rel="noreferrer">
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
    )
}

export default Antiragging