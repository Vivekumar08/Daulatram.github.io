import React from "react";
import { Link } from "react-router-dom";

const Research_banner = () => {
  return (
    <div>
      <div
        className="Banner"
        style={{ backgroundImage: "url(/images/img1.jpg)" }}
      >
        <span className="flex flex-row uppercase text-[#000080] text-6xl justify-center outline-2 outline-black  pt-14">
          Research{" "}
        </span>
        <div className=" bg-gray-400 pt-3 pb-3 pl-5 text-lg text-[#000080]  mt-28 ">
          <Link to={"/"}>
            <span className="ml-5">Home</span>
          </Link>
          <span className="ml-5">Research</span>
        </div>
      </div>
    </div>
  );
};

export default Research_banner;
