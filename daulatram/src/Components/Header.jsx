import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="m-5 flex flex-row justify-between bg-[#fff]">
        {/* <div className="  "> */}
        <Link to="/">
          <img
            className="w-[180px] h-[180px] ml-8 mt-2"
            src="\images\logo.png"
            alt="logo"
          />
        </Link>
        <div className="text-[#000080] mt-2 flex flex-col ml-16 mr-16">
          <div>
            <Link to="/">
              <div className="flex flex-col justify-center items-center">
                <div>
                  <span className="college_name text-6xl tracking-[4px] font-Noto_Serif">
                    <strong>Daulat Ram College</strong>
                  </span>
                </div>
                <div className="mb-5 font-bold text-3xl flex flex-col items-center justify-center">
                  <span> University of Delhi </span>
                  <span>Star College, Estb. 1960</span>
                </div>
              </div>
            </Link>
            <div className="text-[#F80CA7] text-xl flex flex-wrap justify-center font-bold ">
              <div>
                NIRF RANK: 26 <span style={{ color: "black" }}>| </span>
              </div>
              <div>
                NAAC GRADE 'A' <span style={{ color: "black" }}>| </span>
              </div>
              <div>
                INDIA TODAY RANK (SCIENCE:7 COMMERCE:13 HUMANITIES:15 ){" "}
                <span style={{ color: "black" }}>| </span>
              </div>
              <div>DBT STAR COLLEGE</div>
            </div>
          </div>
        </div>
        <div className="mt-2 mr-12">
          <Link
            to="/Admin"
            className="text-lg   font-semibold text-[#000080]  "
          >
            <span className=" bg-[#000080] hover:bg-blue-600 rounded-lg pl-10 pr-10 p-2 text-white">
              {" "}
              Admin{" "}
            </span>
          </Link>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Header;
