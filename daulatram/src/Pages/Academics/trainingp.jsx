import React from 'react'
import tac from "../Academics/Flier-InternshipinZebrafishmodelsystem June22.pdf"
import Sidebar from "../../Components/Sidebar/DeptSidebar";
import Banner from "../../Components/Banners/training";
import "./Att.css";


const trainingp = () => {
  return (
<>
    <div className="">
        <Banner/>
      </div>

      <div className="flex ">
        <div className="w-[350px] flex flex-row">
          <Sidebar />
        </div>
        <div className="w-[1100px]">
          <h2 className="text-4xl font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
          TRAINING PROGRAMS
          </h2>
         <div className='main flex-col'>
             <table className='table-fixed' >
            
            <tr className ="stop">
            <th className='row'>S.no</th>
                <th>About</th>
                <th>PDF</th>
              </tr>
             <tr className="h-20 ">
             <td>1</td>
                <td className="text-lg "><strong>Training Programs </strong></td>
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
    )
}

export default trainingp