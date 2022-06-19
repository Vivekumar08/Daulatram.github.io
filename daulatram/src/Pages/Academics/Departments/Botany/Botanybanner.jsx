import React from "react";



function DepartBanner() {
  return (
    <>
      <div
        className="Banner"
        style={{ backgroundImage: "url(/images/img1.jpg)" }}
      >
        <span className="flex flex-row text-[#000080] text-6xl justify-center pt-14">
          Botany
        </span>
        <div className="ml-2 text-lg text-white mt-28">
          <span className="ml-5">Home</span>
          <span className="ml-5">Academics</span>
          <span className="ml-5">Departments</span>
        </div>
      </div>
    </>
  );
}

export default DepartBanner;
