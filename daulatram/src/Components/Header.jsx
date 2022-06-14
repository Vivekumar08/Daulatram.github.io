import React from "react";
import { Link } from "react-router-dom";
import Icons from "./Icons";

function Header() {
  return (
    <>
      <div className="main_header mb-8 bg-[#fff]">
        <div className="ml-24  mt-4 flex flex-row justify-center ">
          <div className="">
            <Link to="/">
              <img
                className="w-[150px] h-[150px]"
                src="\images\logo.png"
                alt="logo"
              />
            </Link>
          </div>
          <div className="text-[#000080] mt-2 flex flex-col ml-52">
            <div>
              <Link to="/">
                <div className="flex flex-col justify-center items-center">
                  <div>
                    <span className="college_name text-5xl font-Noto_Serif">
                      <strong>Daulat Ram College</strong>
                    </span>
                  </div>
                  <div>
                    <span className="text-xl font-medium"> University of Delhi</span>
                  </div>
                  <div className="header2 mb-3">
                    <strong>Star College, Estb. 1960 </strong>
                  </div>
                </div>
              </Link>
              <div className="header3">
                NIRF RANK: 26 <span style={{ color: "black" }}>| </span> NAAC
                GRADE 'A' <span style={{ color: "black" }}>| </span> INDIA TODAY
                RANK (SCIENCE:7 COMMERCE:13 HUMANITIES:15 ){" "}
                <span style={{ color: "black" }}>| </span> DBT STAR COLLEGE
              </div>
            </div>
          </div>
        </div>
        {/* <Icons/> */}
      </div>
    </>
  );
}

export default Header;
