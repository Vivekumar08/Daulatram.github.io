import React from "react";

function Header() {
  return (
    <>
      <div className="main_header flex bg-[#E3E5C7]">
        <div className="ml-28 flex">
          <div className="logo ">
            <img className="logo" src="\images\logo.png" alt="logo" />
          </div>
          <div className="header1">
            <span className="college_name">
              <strong>Daulat Ram College, University of Delhi</strong>
            </span>
            <div className="header2 mb-3">
              Star College, <strong>Estb. 1960 </strong>
            </div>
            <div className="header3 mt-2">
              NIRF RANK: 26 <span style={{ color: "black" }}>| </span> NAAC
              GRADE 'A' <span style={{ color: "black" }}>| </span> INDIA TODAY
              RANK (SCIENCE:7 COMMERCE:13 HUMANITIES:15 ){" "}
              <span style={{ color: "black" }}>| </span> DBT STAR COLLEGE
            </div>
          </div>
        </div>

        <div className="icons">
          <span className="facebook">
            <a
              href="https://www.facebook.com/DRC1960"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-facebook"></i>
            </a>
          </span>
          <span className="twitter">
            <a
              href="https://twitter.com/drc_du"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-twitter"></i>
            </a>
          </span>
          <span className="linkedin">
            <a href="#" target="_blank" rel="noreferrer">
              <i className="fa fa-linkedin"></i>
            </a>
          </span>
          <span className="instagram">
            <a
              href="https://www.instagram.com/daulat_ram_college_/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa fa-instagram"></i>
            </a>
          </span>
        </div>
      </div>
    </>
  );
}

export default Header;
