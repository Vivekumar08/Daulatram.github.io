import React from 'react'
import Formsbanner from '../../Components/Banners/Formsbanner';
import Student_side from "../../Components/Sidebar/Student_side";
import "./Att.css";
import clearance_form from "../Student_zone/Student_Clearance_Form.pdf";
import refund_form from "../Student_zone/Student_Fee_Refund_form.pdf"

const Forms = () => {
  return (
<>
<div className="">
        <Formsbanner/>
      </div>

      <div className="flex ">
        <div className="w-[350px] flex flex-row">
          <Student_side />
        </div>
        <div className="w-[1100px]">
          <h2 className=" text-3xl md:text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
            Forms
          </h2>
          <div className="main flex-col ">
            {/* <div className='w-[200px] small  mt-20 p-3'>Internal Assesments</div> */}
            <table className="text-xs md:text-base leading-5 w-80 h-40 ml-3 md:table-fixed md:ml-32 md:w-[800px] md:h-[180px] mt-1">
              <tr>
                <th>S.no</th>
                <th>About</th>
                <th>Forms</th>
              </tr>
              <tr className="h-20">
                <td>1</td>
                <td>Fee For 2nd Year Student</td>
                <td>
                  {" "}
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfiQCrP10qQBdk6npKnEfrOxYhUugXDgCylj0WXvZO-wH4qYA/viewform">
                    {" "}
                    <button className="btn">Click Here</button>
                  </a>{" "}
                </td>
              </tr>
              <tr className="h-20">
                <td>2</td>
                <td>Fee For 3rd Year Student</td>
                <td>
                  {" "}
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfl_dI5NZKAQcTu87wbRBsPyD-_DzdaYKmkWgtj6z0RAS587w/viewform">
                    <button className="btn">Click Here</button>
                  </a>{" "}
                </td>
              </tr>
              <tr className="h-20">
                <td>3</td>
                <td>Student Document Verification</td>
                <td className="w-56">
                  {" "}
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSdEJYt-OfQYqgcc3rO5xLx4t73061rFD4UEZc23WXkFy6bMWw/viewform">
                    <button className="btn">Click Here</button>
                  </a>{" "}
                </td>
              </tr>
              <tr className="h-20">
                <td>4</td>
                <td>Student Clearance Form</td>
                <td className="w-56">
                  {" "}
                  <a href={clearance_form} target="_blank" rel="noreferrer">
                    <button className="btn">Click Here</button>
                  </a>{" "}
                </td>
              </tr>
              <tr className="h-20">
                <td>5</td>
                <td>Fee Refund Form</td>
                <td className="w-56">
                  {" "}
                  <a href={refund_form} target="_blank" rel="noreferrer">
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

export default Forms