import React from "react";
import insta from "../Dummy_data/images/instagram.png"

function Icons() {
  return (
    <div>
      <div className="icons z-50 fixed top-[30%] w-[50px] left-[0px] ">
        <a
          href="https://www.facebook.com/DRC1960"
          target="_blank"
          rel="noreferrer"
          className="block items-center pl-[10px] p-[8px] bg-[#1877f2] rounded-r-md hover:w-[65px] hover:pl-[15px]"
        >
          <i className="fa fa-facebook"></i>
        </a>
        <a
          href="https://twitter.com/drc_du"
          target="_blank"
          rel="noreferrer"
          className="block items-center pl-[10px] p-[8px] bg-[#1da1f2] rounded-r-md hover:w-[65px] hover:pl-[15px]"
        >
          <i className="fa fa-twitter"></i>
        </a>
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="block items-center pl-[10px] p-[8px] bg-[#0a66c2] rounded-r-md hover:w-[65px] hover:pl-[15px]"
          >
          <i className="fa fa-linkedin "></i>
        </a>
        <a
          href="https://www.instagram.com/daulat_ram_college_/?hl=en"
          target="_blank"
          rel="noreferrer"
          className="block items-center p-[8px] w-full h-full bg-[#fff] rounded-r-md hover:w-[65px] hover:pl-[10px]"
        >
          {/* <i class="fa fa-instagram  "></i> */}
          <img src={insta} className="w-[35px] h-[35px]"/>
        </a>
      </div>
    </div>
  );
}

export default Icons;
