import React from "react";

function DepartBanner() {
  return (
    <>
      <div
        className="Banner"
        style={{
          backgroundImage: "url(/images/img1.jpg)",
          width: "100%",
          height: "280px",
        }}
      >
        <div className="Priyanshu_lodu">
          <span className="flex flex-row text-[#000080] text-6xl  justify-center pt-14">
            Chemistry
          </span>
          <div className=" pl-5 text-xl text-[#000080] bg-gray-400 pt-3 pb-3 mt-28">
            <span className="ml-5">Home</span>
            <span className="ml-5">Academics</span>
            <span className="ml-5">Departments</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default DepartBanner;
