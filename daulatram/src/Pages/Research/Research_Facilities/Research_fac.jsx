import React, { useState } from "react";
import Research_banner from "../../../Components/Banners/Research_banner";
import Research_side from "../../../Components/Sidebar/Research_side";
import { res_data } from "./data";
import Research_data from "./Research_data";

const Research_fac = () => {
  const [data, setData] = useState(res_data);
  return (
    <>
      <Research_banner />

      <div className="flex flex-row">
        <div className="w-[350px] mb-2">
          <Research_side />
        </div>
        <div className="w-[1100px]">
          <div className="flex justify-center items-center flex-col">
            <div>
              <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
                Research and Facilities Centres
              </h2>
            </div>
          </div>
          <div className="text-justify p-3 m-2 ml-4">
            {data &&
              data.map((curElem) => {
                const { id, tittle, para, pic } = curElem;
                return <Research_data key={id} tittle={tittle} para={para} pic={pic} />;
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Research_fac;
