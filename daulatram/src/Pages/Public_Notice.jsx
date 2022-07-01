import React, { useState } from "react";
import { PublicInfo } from "../Components/Info";
import Public_Noticebanner from "../Components/Banners/Public_Noticebanner";
// import "./Notice.css";
import Notice_side from "../Components/Sidebar/Notice_side";
const Student_Notice = () => {
  const [Publicinfo, setPublicinfo] = useState(PublicInfo);

  return (
    <>
      <div className="">
        <Public_Noticebanner />
      </div>

      <div className="flex flex-row">
        <div className="w-[280px] mt-7 ">
          <Notice_side />
        </div>
        <div className="ml-3 mb-5">
          <div className="w-[1100px]">
            <h2 className="text-4xl uppercase font-bold mb-5 mt-5 flex flex-row justify-center items-center ">
              Public Notice
            </h2>
            {Publicinfo.map((curElem) => {
              const { id, info, link, day, mon } = curElem;
              return (
                <>
                  <div className="flex relative w-full items-center border rounded-xl bg-[#daa520] ">
                    <div class="  p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25 ">
                      <span class="text-base tracking-wide  font-bold border-b border-white font-sans">
                        {day}
                      </span>
                      <span class="text-xs tracking-wide font-bold uppercase block font-sans">
                        {mon}
                      </span>
                    </div>
                    <span className="text-xl ">{info} </span>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Student_Notice;
