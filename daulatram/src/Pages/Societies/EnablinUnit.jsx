import React from "react";
import Societies_side from "../../Components/Sidebar/Socieities_side";
import { Link } from "react-router-dom";

export const EnablinUnit = () => {
  return (
    <>
      <div
        className="Banner"
        style={{ backgroundImage: "url(/images/img1.jpg)" }}
      >
        <span className="flex flex-row uppercase text-[#000080] text-6xl justify-center pt-14">
          Societies{" "}
        </span>
        <div className="ml-2 text-lg text-white mt-28">
          <Link to={"/"}>
          <span className="ml-5">Home</span>
          </Link>
          <span className="ml-5">Societies</span>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="w-[350px] mb-2">
          <Societies_side />
        </div>
        <div className="w-[1100px]">
          <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
            Enabling Unit
          </h2>
          <div className="text-justify p-3 m-2">
            <p>
              Enabling Unit is committed to provide assistance to
              differently-abled students and staff members to enable them to
              participate fully in the academic, intellectual, social and
              cultural life of the College, University and beyond by organizing
              workshops, talks, training programmes, cultural activities and
              competitions providing assistive devices like ABRAR to visually
              challenged students and writers during examination time. Enabling
              unit supports orthopedic differently abled students too. The cell
              conducts different computer based skill enhancement courses from
              time to time to upgrade and uplift their level of skill set.
            </p>
            <br />
            <div className="flex">
              <span className="font-semibold">Convener/Co-convener:</span>
              <span className="ml-3"> Dr Manjula Rath/ Jyoti Sharma</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
