import React from "react";

function Information() {
  return (
    <>
      <div className="bg-blue-100 pb-4">
        <div className="quick_links top-[170px] flex flex-row items-center justify-center text-center text-white font-bold  ">
          <span className="quick_content uppercase">
            <strong>Information Section</strong>
          </span>
        </div>
        {/* content/body/messages */}
        <div className="flex flex-row w-auto h-[500px] mb-5 mt-8 justify-between ml-24 mr-24 ">
          <div className=" bg-[#d9d9d9] w-[20em] rounded-lg text-lg font-semibold">
            <span className="bg-[#273E47] rounded-t-lg flex flex-row justify-center  text-white pb-4  px-4 ">
              <span className="mt-3">Notice for Student</span>
            </span>
            <span className="ml-4 text-sm mb-4 mt-4">Daulat Ram College</span>
          </div>
          <div className=" bg-[#d9d9d9] w-[20em] rounded-lg text-lg font-semibold">
            <span className="bg-[#273E47] rounded-t-lg flex flex-row justify-center text-white pb-4  px-4 ">
              <span className="mt-3">Notice for Staff</span>
            </span>
            <span className="ml-4 mt-4 text-sm mb-4">Daulat Ram College</span>
          </div>
          <div className=" bg-[#d9d9d9] w-[20em] rounded-lg text-lg font-semibold">
            <span className="bg-[#273E47] rounded-t-lg flex flex-row justify-center text-white pb-4  px-4 ">
              <span className="mt-3">Notice for Public</span>
            </span>
            <span className="ml-4 mt-4 text-sm mb-4">Daulat Ram College</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Information;
