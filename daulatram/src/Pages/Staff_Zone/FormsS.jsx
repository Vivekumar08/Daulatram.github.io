import React from "react";
import Banner from "../../Components/Banners/Formsstaff";
import Sidebar from "../../Components/Sidebar/Staff_side";
import "./Att1.css";
import f1 from "../Staff_Zone/1. CAS APAR DU Stage I and Stage II.docx";
import f2 from "../Staff_Zone/2. CAS PBAS DU Stage II and Stage III.docx";
import f3 from "../Staff_Zone/3. CAS APAR_DU Stage III and above.docx";
import f4 from "../Staff_Zone/4. CAS_PBAS-DU-Associate-Professor-and-above-2018-1.docx";
import f5 from "../Staff_Zone/5. TDS Circular.pdf";
import f6 from "../Staff_Zone/6. Investment-Plan.xlsx";
import f7 from "../Staff_Zone/7. Medical Form.pdf";
import f8 from "../Staff_Zone/8. Advance for Festival.pdf";
import f9 from "../Staff_Zone/9. Life Certificate Form For Pensioners.pdf";
import f10 from "../Staff_Zone/10. Form For Grant of LTC Advance.pdf";
import f11 from "../Staff_Zone/11. Requisition For Advance.pdf";
import f12 from "../Staff_Zone/12. Pension Restoration Form.pdf";
import f13 from "../Staff_Zone/13. HRA Form.pdf";
import f14 from "../Staff_Zone/14. Requisition Advance Form.pdf";
import f15 from "../Staff_Zone/15. Requisition For The Conference_Seminar Hall.pdf";
import f16 from "../Staff_Zone/16. LTC Cash Voucher Scheme.pdf";

const Forms = () => {
  return (
    <>
      <div className="">
        <Banner />
      </div>

      <div className="flex flex-row ">
        <div className="w-[280px]">
          <Sidebar />
        </div>
        <div className="ml-3 mb-5">
          <div className=" md:w-[1100px]">
            <h2 className="text-4xl font-bold mb-3 mt-[5%] flex flex-row justify-center items-center ">
              FORMS
            </h2>
            {/* <div className=" "> */}
              <table className="mt-1   ml-auto mr-auto">
                <tr>
                  <th>S.no</th>
                  <th>About</th>
                  <th>PDF</th>
                </tr>
                <tr className="h-20">
                  <td>1</td>
                  <td>CAS APAR DU Stage I and Stage II</td>
                  <td>
                    {" "}
                    <a href={f1} target="_blank" rel="noreferrer">
                      {" "}
                      <button className="btn1">Click Here</button>
                    </a>{" "}
                  </td>
                </tr>
                <tr className="h-20">
                  <td>2</td>
                  <td>CAS PBAS DU Stage II and Stage III</td>
                  <td>
                    {" "}
                    <a href={f2} target="_blank" rel="noreferrer">
                      {" "}
                      <button className="btn1">Click Here</button>
                    </a>{" "}
                  </td>
                </tr>
                <tr className="h-20">
                  <td>3</td>
                  <td>CAS APAR_DU Stage III and above</td>
                  <td>
                    {" "}
                    <a href={f3} target="_blank" rel="noreferrer">
                      {" "}
                      <button className="btn1">Click Here</button>
                    </a>{" "}
                  </td>
                </tr>
                <tr className="h-20">
                  <td>4</td>
                  <td>CAS_PBAS DU Associate Professor and above</td>
                  <td>
                    {" "}
                    <a href={f4} target="_blank" rel="noreferrer">
                      {" "}
                      <button className="btn1">Click Here</button>
                    </a>{" "}
                  </td>
                </tr>
                <tr className="h-20">
                  <td>5</td>
                  <td>TDS Circular</td>
                  <td>
                    {" "}
                    <a href={f5} target="_blank" rel="noreferrer">
                      {" "}
                      <button className="btn1">Click Here</button>
                    </a>{" "}
                  </td>
                </tr>
                <tr className="h-20">
                  <td>6</td>
                  <td>
                    Investment Declaration Form For Tax Saving For Financial
                    Year 2020-2021
                  </td>
                  <td>
                    {" "}
                    <a href={f6} target="_blank" rel="noreferrer">
                      {" "}
                      <button className="btn1">Click Here</button>
                    </a>{" "}
                  </td>
                </tr>
                <tr className="h-20">
                  <td>7</td>
                  <td>Medical Form </td>
                  <td>
                    {" "}
                    <a href={f7} target="_blank" rel="noreferrer">
                      {" "}
                      <button className="btn1">Click Here</button>
                    </a>{" "}
                  </td>
                </tr>
                <tr className="h-20">
                  <td>8</td>
                  <td>Advance for Festival</td>
                  <td>
                    {" "}
                    <a href={f8} target="_blank" rel="noreferrer">
                      {" "}
                      <button className="btn1">Click Here</button>
                    </a>{" "}
                  </td>
                </tr>
                <tr className="h-20">
                  <td>9</td>
                  <td>Life Certificate Form For Pensioners</td>
                  <td>
                    {" "}
                    <a href={f9} target="_blank" rel="noreferrer">
                      {" "}
                      <button className="btn1">Click Here</button>
                    </a>{" "}
                  </td>
                </tr>
                <tr className="h-20">
                  <td>10</td>
                  <td>Form For Grant of LTC Advance </td>
                  <td>
                    {" "}
                    <a href={f10} target="_blank" rel="noreferrer">
                      {" "}
                      <button className="btn1">Click Here</button>
                    </a>{" "}
                  </td>
                </tr>
                <tr className="h-20">
                  <td>11</td>
                  <td>Requisition For Advance </td>
                  <td>
                    {" "}
                    <a href={f11} target="_blank" rel="noreferrer">
                      {" "}
                      <button className="btn1">Click Here</button>
                    </a>{" "}
                  </td>
                </tr>
                <tr className="h-20">
                  <td>12</td>
                  <td>Pension Restoration Form</td>
                  <td>
                    {" "}
                    <a href={f12} target="_blank" rel="noreferrer">
                      {" "}
                      <button className="btn1">Click Here</button>
                    </a>{" "}
                  </td>
                </tr>
                <tr className="h-20">
                  <td>13</td>
                  <td>HRA Form</td>
                  <td>
                    {" "}
                    <a href={f13} target="_blank" rel="noreferrer">
                      {" "}
                      <button className="btn1">Click Here</button>
                    </a>{" "}
                  </td>
                </tr>
                <tr className="h-20">
                  <td>14</td>
                  <td>Requisition Advance Form</td>
                  <td>
                    {" "}
                    <a href={f14} target="_blank" rel="noreferrer">
                      {" "}
                      <button className="btn1">Click Here</button>
                    </a>{" "}
                  </td>
                </tr>
                <tr className="h-20">
                  <td>15</td>
                  <td>Requisition For The Conference/Seminar Hall </td>
                  <td>
                    {" "}
                    <a href={f15} target="_blank" rel="noreferrer">
                      {" "}
                      <button className="btn1">Click Here</button>
                    </a>{" "}
                  </td>
                </tr>
                <tr className="h-20">
                  <td>16</td>
                  <td>LTC Cash Voucher Scheme </td>
                  <td>
                    {" "}
                    <a href={f16} target="_blank" rel="noreferrer">
                      {" "}
                      <button className="btn1">Click Here</button>
                    </a>{" "}
                  </td>
                </tr>
              </table>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Forms;
