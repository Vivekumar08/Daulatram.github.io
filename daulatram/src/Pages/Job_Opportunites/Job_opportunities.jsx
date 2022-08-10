import React from "react";
import tac from "../Academics/FlierInternshipinZebrafishmodelsystemJune22.pdf";
import { Link } from "react-router-dom";

const Job_opportunities = () => {
  return (
    <>
       <div
        className="Banner"
        style={{ backgroundImage: "url(/images/img1.jpeg)" }}
      >
        <div className="name">
        <div className="flex flex-row justify-center">
            <p className="  text-[#fff] uppercase text-3xl md:text-4xl lg:text-6xl shadow-lg  mt-12 font-bold  p-5 flex justify-center w-full rounded-md  ">
            Job Opportunites{" "}
            </p>
          </div>
          <div className=" bg-gray-400 pt-3 pb-3 pl-5 text-lg text-[#000080] mt-28 ">
            <Link to={"/"}>
              <span className="ml-5">Home</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex ">
        {/* <div className="w-[350px] flex flex-row"><Sidebar /></div> */}
        <div className="w-[1100px] ml-auto mr-auto ">
          <div className="flex-col">
            <h2 className="text-4xl font-bold mb-5 mt-[5%] flex flex-row justify-center items-center uppercase ">
              || Teaching Vacancy ||
            </h2>
            <table className="table-fixed w-full mt-1 ml-auto mr-auto">
              <tr className="h-20 text-lg">
                <th className="w-[15%] text-lg">S.no</th>
                <th className="w-full text-lg">About</th>
                <th className="w-[30%] text-lg">PDF</th>
              </tr>
              <tr className=" ">
                <td className="text-lg">1</td>
                <td className="text-lg ">
                  <strong>Adhoc Vacancy Notice in Commerce Department </strong>
                </td>
                <td>
                  {" "}
                  <a href={tac} target="_blank" rel="noreferrer">
                    {" "}
                    <button className="btn">Click Here</button>
                  </a>{" "}
                </td>
              </tr>
              <tr className=" ">
                <td className="text-lg">2</td>
                <td className="text-lg ">
                  <strong>
                    Adhoc Vacancy Notice in Physical Education Department{" "}
                  </strong>
                </td>
                <td>
                  {" "}
                  <a href={tac} target="_blank" rel="noreferrer">
                    {" "}
                    <button className="btn">Click Here</button>
                  </a>{" "}
                </td>
              </tr>
              <tr className=" ">
                <td className="text-lg">3</td>
                <td className="text-lg ">
                  <strong>Apply for Teaching Vacancy 2020 </strong>
                </td>
                <td>
                  {" "}
                  <a href={tac} target="_blank" rel="noreferrer">
                    {" "}
                    <button className="btn">Click Here</button>
                  </a>{" "}
                </td>
              </tr>
              <tr className=" ">
                <td className="text-lg">4</td>
                <td className="text-lg ">
                  <strong>Corrigendum for Teaching Vacancy 2020</strong>
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
            <h2 className="text-4xl font-bold mb-5 mt-[5%] flex flex-row justify-center items-center uppercase ">
              || Non-Teaching Vacancy ||
            </h2>
            <table className="table-fixed w-full mt-1 ml-auto mr-auto">
              <tr className="h-20 text-lg">
                <th className="w-[15%] text-lg">S.no</th>
                <th className="w-full text-lg">About</th>
                <th className="w-[30%] text-lg">PDF</th>
              </tr>
              <tr className=" ">
                <td className="text-lg">1</td>
                <td className="text-lg ">
                  <strong>Assistant Result </strong>
                </td>
                <td>
                  {" "}
                  <a href={tac} target="_blank" rel="noreferrer">
                    {" "}
                    <button className="btn">Click Here</button>
                  </a>{" "}
                </td>
              </tr>
              <tr className=" ">
                <td className="text-lg">2</td>
                <td className="text-lg ">
                  <strong>
                  Sr. PA Result {" "}
                  </strong>
                </td>
                <td>
                  {" "}
                  <a href={tac} target="_blank" rel="noreferrer">
                    {" "}
                    <button className="btn">Click Here</button>
                  </a>{" "}
                </td>
              </tr>
              <tr className=" ">
                <td className="text-lg">3</td>
                <td className="text-lg ">
                  <strong>Advertisement for the Post of Administrative Officer Under PwBD Category </strong>
                </td>
                <td>
                  {" "}
                  <a href={tac} target="_blank" rel="noreferrer">
                    {" "}
                    <button className="btn">Click Here</button>
                  </a>{" "}
                </td>
              </tr>
              <tr className=" ">
                <td className="text-lg">4</td>
                <td className="text-lg ">
                  <strong>Apply Online for the Post of Administrative Officer Under PwBD Category</strong>
                </td>
                <td>
                  {" "}
                  <a href={tac} target="_blank" rel="noreferrer">
                    {" "}
                    <button className="btn">Click Here</button>
                  </a>{" "}
                </td>
              </tr>
              <tr className=" ">
                <td className="text-lg">5</td>
                <td className="text-lg ">
                  <strong>Offline Application Form for the Post of Administrative Officer Under PwBD Category</strong>
                </td>
                <td>
                  {" "}
                  <a href={tac} target="_blank" rel="noreferrer">
                    {" "}
                    <button className="btn">Click Here</button>
                  </a>{" "}
                </td>
              </tr>
              <tr className=" ">
                <td className="text-lg">6</td>
                <td className="text-lg ">
                  <strong>Notice for Cancellation of Re-Skill Test for the Post of Sr.PA</strong>
                </td>
                <td>
                  {" "}
                  <a href={tac} target="_blank" rel="noreferrer">
                    {" "}
                    <button className="btn">Click Here</button>
                  </a>{" "}
                </td>
              </tr>
              <tr className=" ">
                <td className="text-lg">7</td>
                <td className="text-lg ">
                  <strong>Senior Assistant Result 2021</strong>
                </td>
                <td>
                  {" "}
                  <a href={tac} target="_blank" rel="noreferrer">
                    {" "}
                    <button className="btn">Click Here</button>
                  </a>{" "}
                </td>
              </tr>
              <tr className=" ">
                <td className="text-lg">8</td>
                <td className="text-lg ">
                  <strong>Notice for Skill Test for the Post of Junior Assistant</strong>
                </td>
                <td>
                  {" "}
                  <a href={tac} target="_blank" rel="noreferrer">
                    {" "}
                    <button className="btn">Click Here</button>
                  </a>{" "}
                </td>
              </tr>
              <tr className=" ">
                <td className="text-lg">9</td>
                <td className="text-lg ">
                  <strong>Lab Attendant Result 2021</strong>
                </td>
                <td>
                  {" "}
                  <a href={tac} target="_blank" rel="noreferrer">
                    {" "}
                    <button className="btn">Click Here</button>
                  </a>{" "}
                </td>
              </tr>
              <tr className=" ">
                <td className="text-lg">10</td>
                <td className="text-lg ">
                  <strong>Lab Attendant Merit List 2021</strong>
                </td>
                <td>
                  {" "}
                  <a href={tac} target="_blank" rel="noreferrer">
                    {" "}
                    <button className="btn">Click Here</button>
                  </a>{" "}
                </td>
              </tr>
              <tr className=" ">
                <td className="text-lg">11</td>
                <td className="text-lg ">
                  <strong>Scheme of Examination for Non-Teaching Vacancy 2020</strong>
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

export default Job_opportunities;
