import React from "react";
import { Link } from "react-router-dom";
import Icons from "./Icons";

function Header() {
  return (
    <>
      <div className="main_header flex bg-[#fff]">
        <div className="ml-28 mt-4  flex">
          <div className="logo ">
            <Link to="/">
              <img className="logo" src="\images\logo.png" alt="logo" />
            </Link>
          </div>
          <div className="header1  ">
            <Link to="/">
              <span className="college_name text-4xl">
                <strong>Daulat Ram College, University of Delhi</strong>
              </span>
              <div className="header2 mb-3">
                Star College, <strong>Estb. 1960 </strong>
              </div>
            </Link>
            <div className="header3 mt-2">
              NIRF RANK: 26 <span style={{ color: "black" }}>| </span> NAAC
              GRADE 'A' <span style={{ color: "black" }}>| </span> INDIA TODAY
              RANK (SCIENCE:7 COMMERCE:13 HUMANITIES:15 ){" "}
              <span style={{ color: "black" }}>| </span> DBT STAR COLLEGE
            </div>
          </div>

        </div>
        {/* <Icons/> */}
      </div>
    </>
  );
}

export default Header;
