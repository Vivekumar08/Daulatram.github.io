import React from "react";

function Icons() {
  return (
    <div>
      <div className="invisible md:visible  lg:icons z-50 fixed top-[10%] w-[60px] right-[0px] ">
        <a
          href="https://www.facebook.com/DRC1960"
          target="_blank"
          rel="noreferrer"
          className="block items-center pl-[15px] p-[8px] bg-[#1877f2] rounded-l-md  hover:pl-[25px]"
        >
          <i className="fa fa-facebook"></i>
        </a>
        <a
          href="https://twitter.com/drc_du"
          target="_blank"
          rel="noreferrer"
          className="block items-center pl-[15px] p-[8px] bg-[#1da1f2] rounded-l-md  hover:pl-[25px]"
        >
          <i className="fa fa-twitter"></i>
        </a>
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="block items-center pl-[15px] p-[8px] bg-[#0a66c2] rounded-l-md  hover:pl-[25px]"
          >
          <i className="fa fa-linkedin "></i>
        </a>
        <a
          href="https://www.instagram.com/daulat_ram_college_/?hl=en"
          target="_blank"
          rel="noreferrer"
          className="block items-center pl-[15px] p-[6px] w-full h-full bg-[#ff1493] rounded-l-md  hover:pl-[25px]"
        >
          <i className="fa fa-instagram  "></i>

        </a>
      </div>
    </div>
  );
}

export default Icons;
