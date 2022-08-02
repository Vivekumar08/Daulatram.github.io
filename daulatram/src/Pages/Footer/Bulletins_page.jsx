import React, { useContext, useEffect, useRef, useState } from "react";
import AuthContext from "../..//Context/AuthProvider";
// import axios from "axios";
import Notice_side from "../..//Components/Sidebar/Notice_side";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Bulletins_page = () => {
  var mS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const [data1, setData1] = useState();
  const [errMsg, setErrMsg] = useState("");

  const { auth, setAuth } = useContext(AuthContext);

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1
    }/${current.getFullYear()}`;

  const fetchdata = async () => {
    const response = await fetch("http://localhost:5000/Bulletins_notice");
    setData1(await response.json());
  };

  useEffect(() => {
    fetchdata();
  }, []);


  const del = async (id) => {
    console.log(id);
    const response = await fetch(
      `http://localhost:5000/delete_Bulletins_notice/${id}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    if (data || response.status === 200) {
      fetchdata();
    } else {
      setErrMsg("Unable to Delete");
    }
  };

  return (
    <div className=" flex flex-col">
      <div
        className="Banner"
        style={{ backgroundImage: "url(/images/img1.jpeg)" }}
      >
        <div className="name">
          <div className="flex flex-row justify-center">
            <p className="  text-[#fff] text-6xl   mt-12 font-bold  p-5 flex justify-center w-full rounded-md  ">
              Bulletins{" "}
            </p>
          </div>
          <div className=" bg-gray-400 pt-3 pb-3 pl-5 text-lg text-[#000080] mt-28 ">
            <Link to={"/"}>
              <span className="ml-5">Home</span>
            </Link>
            <span className="ml-5">Bulletins</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="md:w-[280px] mt-2 ">
          <Notice_side />
        </div>
        <div className="ml-5 mb-5 mr-6 w-full">
          <div className=" w-full ">
            <h2 className=" ml-28 text-xl  lg:text-3xl md:text-2xl uppercase font-bold mb-12 mt-12 flex flex-row md:justify-center items-center  ">
              Bulletins
            </h2>
            {data1 &&
              data1.map((curElem) => {
                const {
                  _id,
                  title,
                  file_mimetype,
                  file_path,
                  new_,
                  date_exp,
                  date,
                } = curElem;
                const date_split = date.split("/");
                const cur_date = new Date();
                const exp_date = new Date(date_exp);
                const diffTime = Math.abs(exp_date - cur_date);
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                var path2 = file_path.replace(/\\/g, "/");
                var path = path2.slice(19);
                return (
                  <>
                    <div
                      className="flex relative w-full items-center border rounded-xl bg-[#daa520] "
                      key={_id}
                    >
                      <div className="  p-2 m-3 md:m-4 w-12 h-13 md:w-16 md:h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25 ">
                        <span className=" text-xs md:text-base tracking-wide  font-bold border-b border-white font-sans">
                          {date_split[0]}
                        </span>
                        <span className="text-xs md:text-base tracking-wide font-bold uppercase block font-sans">
                          {mS[date_split[1] - 1]}
                        </span>
                      </div>
                      <div>
                        {file_mimetype !== "text/link" ? (
                          <>
                            <a
                              href={path}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="text-base md:text-xl">
                                {title}
                                {diffDays > 0 && new_ && (
                                  <sup className="font-extrabold text-transparent  bg-clip-text text-lg bg-gradient-to-r from-red-600 to-fuchsia-600 animate-text">
                                    new
                                  </sup>
                                )}
                              </span>
                            </a>
                          </>
                        ) : (
                          <>
                            <a
                              href={file_path}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="text-base md:text-xl">
                                {title}
                                {new_ && (
                                  <sup className="font-extrabold ml-1 text-transparent  bg-clip-text text-lg bg-gradient-to-r from-red-600 to-fuchsia-600 animate-text">
                                    new
                                  </sup>
                                )}
                              </span>
                            </a>
                          </>
                        )}
                      </div>
                      {auth && (
                        <>
                          <div className="ml-auto items-center">
                            <FontAwesomeIcon
                              icon={faTrashCan}
                              size="xl"
                              className=" cursor-pointer  mr-5 hover:text-red-700"
                              onClick={() => del(_id)}
                            />
                          </div>
                        </>
                      )}
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bulletins_page;
