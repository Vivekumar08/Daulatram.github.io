import React, { useContext } from "react";
import Admission_side from "../../Components/Sidebar/Admission_side.";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faTrashCan,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import AuthContext from "../../Context/AuthProvider";

const OnlineAdmission = () => {
  const { auth } = useContext(AuthContext);
  return (
    <div className=" flex flex-col">
      <div
        className="Banner"
        style={{ backgroundImage: "url(/images/img1.jpg)" }}
      >
        <span className="flex flex-row uppercase text-[#000080] text-6xl justify-center pt-14">
          Online Admission{" "}
        </span>
        <div className=" bg-gray-400 pt-3 pb-3 pl-5 text-lg text-[#000080] mt-28 ">
          <Link to={"/"}>
            <span className="ml-5">Home</span>
          </Link>
          <span className="ml-5">Admisssion</span>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="w-[350px]">
          <Admission_side />
        </div>
        <div className="ml-3 mb-5">
          <div className="w-[1100px]">
            <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
              Online Admission
            </h2>
            <div className="flex flex-row">
              <div className="flex flex-col">
                <h1 className="mt-12">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-blue-400"
                  />
                  <a
                    href="http://www.admissions.uod.ac.in/"
                    target="_blank"
                    className="text-blue-400  hover:pl-3"
                  >
                    {" "}
                    http://www.admissions.uod.ac.in/
                  </a>
                </h1>
                <p className="mt-2 ">
                  All the rules and guidelines, as and when shared by University
                  of Delhi, shall be applicable.
                </p>
              </div>
              <span className="ml-auto">
                {auth ? (
                  <>
                    <div className="flex flex-col">
                      <FontAwesomeIcon
                        icon={faPen}
                        size="lg"
                        className="mt-8 ml-auto cursor-pointer mr-16 hover:text-blue-600"
                      ></FontAwesomeIcon>
                      <FontAwesomeIcon
                        icon={faTrashCan}
                        size="lg"
                        className="mt-6 cursor-pointer ml-auto mr-16 hover:text-red-500"
                      ></FontAwesomeIcon>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </span>
            </div>
            {auth ? (
              <>
                <form
                  method="post"
                  className="flex flex-col justify-center content-center max-w-sm  h-[450px] ml-auto mr-auto mb-5"
                >
                  <div className="mb-3">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter Link"
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#000080]"
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      name=""
                      id=""
                      cols="10"
                      rows="5"
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#000080]"
                      placeholder="Enter Caption"
                    ></textarea>
                  </div>
                  <div class="md:flex md:items-center">
                    {/* <div class="md:w-1/3"></div> */}
                    <div class="md:w-2/3 ">
                      <button
                        class="shadow w-full  bg-[#000080] hover:bg-[#0000d0] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                        type="button"
                        // onClick={handleSubmit}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </form>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineAdmission;
