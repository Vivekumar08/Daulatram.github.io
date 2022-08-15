import React, { useState, useContext, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan} from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../../Context/AuthProvider";

const Common_dat = (props) => {
  const errRef = useRef();
  const userRef = useRef();
  const [para, setPara] = useState("");

  const { auth } = useContext(AuthContext);

  var path_pic = props.pic;

  return (
    <figure className="flex flex-col">
      <div className="flex flex-row w-full">
        <div className="flex items-center w-full py-4">
          <h1 className="font-bold flex-shrink pr-4 text-2xl">
            {props.tittle}
          </h1>
          <div className="flex-grow h-px bg-gray-400"></div>
        </div>
        <span className="ml-6">
          {auth && (
            <>
              <div className="flex flex-col">
                <FontAwesomeIcon
                  icon={faTrashCan}
                  size="lg"
                  className="mt-6 cursor-pointer ml-auto mr-16 hover:text-red-500"
                  onClick={() => props.delete(props.id)}
                ></FontAwesomeIcon>
              </div>
            </>
          )}
        </span>
      </div>
      <p className="text-justify text-sm leading-14 mb-5 ">{props.para}</p>
      {path_pic.para &&
        path_pic.para.map((elem) => {
          return (
            <>
              <div className="flex flex-row  items-center mb-5 ">
                <p className="text-justify leading-14 w-full text-sm ">
                  {elem.para1}
                </p>
                {auth && (
                  <>
                    <div className="flex  w-full">
                      <FontAwesomeIcon
                        icon={faTrashCan}
                        size="lg"
                        className=" cursor-pointer ml-auto  hover:text-red-500"
                        onClick={() =>
                          props.delete_para(props.id, elem._id, "para")
                        }
                      ></FontAwesomeIcon>
                    </div>
                  </>
                )}
              </div>
            </>
          );
        })}
      {auth && (
        <>
          <form
            method="POST"
            className="flex flex-col justify-center content-center max-w-sm   ml-auto mr-auto mb-5"
          >
            <h2 className="text-xl uppercase font-bold ml-10 mb-4 mt-[0] mr-auto flex flex-row justify-center items-center text-[#000080]">
              <p>Update data</p>
            </h2>
            <h2 className="text-xl uppercase font-bold ml-10 mb-4 mt-[0] mr-auto flex flex-row justify-center items-center text-red-500">
              <p ref={errRef} className={props.errMsg ? "errmsg" : "offscreen"}>
                {props.errMsg}
              </p>
            </h2>
            <div className="mb-3">
              <textarea
                name="para"
                // id=""
                cols="10"
                rows="5"
                ref={userRef}
                onChange={(e) => setPara(e.target.value)}
                value={para}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#000080]"
                placeholder="Enter Paragraph Here"
              ></textarea>
            </div>
            <div className="md:w-2/3 ">
              <button
                className="shadow w-full  bg-[#000080] hover:bg-[#0000d0] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mb-5 rounded"
                type="button"
                onClick={() => props.add_para(props.id, para)}
              >
                Add Para
              </button>
            </div>
            
          </form>
        </>
      )}
    </figure>
  );
};

export default Common_dat;
