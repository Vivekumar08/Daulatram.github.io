import React from "react";
import Admin_banner from "../../Components/Banners/Admin_banner";
import Sidebar from "../../Components/Sidebar/Sidebar";

const Administration = () => {
  return (
    <>
      <div className=" flex flex-col">
        <div className="">
          <Admin_banner />
        </div>
        <div className="flex flex-row">
          <div className="w-[350px]">
            <Sidebar />
          </div>
          <div>
            <div className="md:w-[500px] lg:w-[1100px]">
              <h2 className="ml-40 lg:ml-0 text-2xl md:text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row md:justify-center items-center  ">
                Administration
              </h2>
              {/* <div className="flex pr-4 pl-4 pb-2"></div> */}
              <div
                style={{
                  backgroundImage: "url(/images/About/administration.jpg)",
                  width: "450px",
                  height: "450px",
                }}
                className="rounded-3xl border-black border-2  md:h-[300px] md:w-[380px] ml-2 md:ml-28 lg:ml-80"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Administration;
