import React from "react";
import { Link } from "react-router-dom";

const RTI = () => {
  return (
    <>
      <div
        className="Banner"
        style={{ backgroundImage: "url(/images/img5.jpeg)" }}
      >
        <div className="name">
          <div className="flex flex-row justify-center">
            <p className="  text-[#fff] text-3xl md:text-4xl lg:text-6xl shadow-lg  mt-12 font-bold  p-5 flex justify-center w-full rounded-md  ">
              RTI{" "}
            </p>
          </div>
          <div className=" bg-gray-400 pt-3 pb-3 pl-5 text-lg text-[#000080] mt-28 ">
            <Link to={"/"}>
              <span className="ml-5">Home</span>
            </Link>
              <span className="ml-5">RTI</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col mb-5">
        <a href="">1. NOTICE: Right to Information Act,2005</a>
        <a href="">2. ORDINANCE XV-B</a>
        <a href="">3. ORDINANCE XV-C</a>
        <a href="">4. ORDINANCE XV-D</a>
      </div>
      <div className="flex flex-col mb-5 gap-3">
        <h2 className="text-xl font-bold">RTI MANUAL</h2>
        <a href="">1.PARTICULARS OF ORGANIZATION, FUNCTIONS AND DUTIES</a>
        <a href="">2.POWER AND DUTIES OF OFFICERS & STAFF</a>
        <a href="">3.PROCEDURE FOLLOWED IN DECISION � MAKING PROCESS</a>
        <a href="">4.NORMS SET FOR DISACHARGE OF FUNCTIONS</a>
        <a href="">
          5.RULES, REGULATIONS, INSTRUCTIONS, MANUAL AND RECORDS, FOR
          DISCHARGING FUNCTIONS
        </a>
        <a href="">
          6.A STATEMENT OF CATEGORIES OF DOCUMENT THAT ARE HELD BY IT FOR UNDER
          ITS CONTROL
        </a>
        <a href="">7.MODE OF PUBLIC PARTICIPATION:</a>
        <a href="">8.ADDRESS LIST OF THE TEACHING AND NON TEACHING STAFF</a>
        <a href="">
          9.THE MONTHLY REMUNERATION RECEIVED BY EACH OF ITS OFFICERS AND
          EMPLOYEES, INCLUDING THE SYSTEM OF COMPENSATION AS PROVIDED IN
          REGULATIONS
        </a>
        <a href="">10.The Budget Allocated to each Agency</a>
        <a href="">11.THE MANNER OF EXECUTION OF SUBSIDY PROGRAM</a>
        <a href="">
          12.PARTICULARS OF RECIPIENTS OF CONCESSIONS, PERMITS OR AUTHORIZATIONS
          GRANTED
        </a>
        <a href="">13.INFORMATION AVAILABLE IN AN ELECTRONIC FORM</a>
        <a href="">
          14.PARTICULARS OF FACILITIES AVAILABLE TO CITIZENS FOR OBTAINING
          INFORMATION
        </a>
        <a href="">
          15.NAME, DESIGNATION AND OTHER PARTICULARS OF PUBLIC INFORMATION
          OFFICERS
        </a>
        <a href="">16.OTHER INFORMATION AS MAY BE PRESCRIBED</a>
      </div>
    </>
  );
};

export default RTI;
