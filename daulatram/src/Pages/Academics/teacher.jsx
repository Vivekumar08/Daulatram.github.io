import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../../Context/AuthProvider";
// import Dropzone from "react-dropzone";
import axios from "axios";
import Banner from "../../Components/Banners/teach";
import DeptSidebar from "../../Components/Sidebar/DeptSidebar";

const teacher = () => {
  const [data1, setData1] = useState();
  const userRef = useRef();
  const errRef = useRef();
  const [link, setLink] = useState("");
  const [caption, setCaption] = useState("");
  const [tic1, setTic1] = useState("");
  const [tic2, setTic2] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const { auth, setAuth } = useContext(AuthContext);

  const fetchdata = async () => {
    const response = await fetch("/Teacher_In_Charge");
    setData1(await response.json());
  };

  function sortOn(property) {
    return function (a, b) {
      if (a[property] < b[property]) {
        return -1;
      } else if (a[property] > b[property]) {
        return 1;
      } else {
        return 0;
      }
    };
  }

  useEffect(() => {
    fetchdata();
  }, []);

  const del = async (id) => {
    console.log(id);
    const response = await fetch(
      `/delete_Teacher_In_Charge/${id}`,
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (link.trim() !== "" && caption.trim() !== "") {
        // if (file) {
        // const formData = new FormData();
        // formData.append("Tic1", tic1);
        // formData.append("Tic2", tic2);
        // formData.append("link", link);
        // formData.append("title", caption);
        // console.log(tic1, tic2, link, caption);

        setErrMsg("");
        await axios.post(`/Teacher_In_Charge_add`, {
          Tic1: tic1,
          Tic2: tic2,
          link: link,
          title: caption,
        });
        setCaption("");
        setLink("");
        setTic1("");
        setTic2("");
        setAuth(true);
        fetchdata();
      } else {
        // setErrMsg("Please select a file to add.");
        setErrMsg("Please enter all the field values.");
      }
      // } else {
      // }
    } catch (err) {
      err.response && setErrMsg(err.response.data);
    }
  };

  return (
    <div className=" flex flex-col">
      <div className="">
        <Banner />
      </div>
      <div className="flex flex-row">
        <div className="w-[350px] flex flex-row">
          <DeptSidebar />
        </div>

        <div className="w-[1100px]">
          <h2 className=" text-xl  lg:text-3xl md:text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center   ">
            TEACHERS-IN-CHARGE
          </h2>
          <div className="main flex-col whitespace-none">
            <table className=" w-96 h-48 ml-3 md:ml-26 md:w-[500px] md:h-[160px] lg:table-fixed lg:ml-32 lg:w-[800px] lg:h-[180px] mt-1 ">
              <tr className="h-12 md:h-14 lg:h-20 text-lg">
                <th className="row text-sm md:text-lg w-[15%]">S. No.</th>
                <th className="text-sm md:text-sm lg:text-lg w-[20%]">Departments</th>
                <th className="text-sm md:md:text-sm lg:text-lg w-[25%]">
                  TIC 2021-22
                </th>
                <th className="text-sm md:text-sm lg:text-lg w-[25%]">
                  TIC 2022-23
                </th>
                {auth && (
                  <th className="text-sm md:text-sm lg:text-lg w-[15%]">
                    Delete
                  </th>
                )}
              </tr>
              {data1 &&
                data1.sort(sortOn("link")).map((curElem) => {
                  const { _id, title, Tic1, Tic2, link } = curElem;
                  return (
                    <>
                      <tr className=" h-12 md:h-14 lg:h-20">
                        <td className="text-sm md:text-sm lg:text-lg  overlay ">
                          {link}
                        </td>
                        <td className="">
                          <strong>{title} </strong>
                        </td>
                        <td>{Tic1}</td>
                        <td>{Tic2}</td>
                        {auth && (
                          <>
                            <td className=" ">
                              <FontAwesomeIcon
                                icon={faTrashCan}
                                size="2xl"
                                className=" cursor-pointer ml-auto mr-auto mt-[25%]  hover:text-red-500"
                                onClick={() => del(_id)}
                              ></FontAwesomeIcon>
                            </td>
                          </>
                        )}
                      </tr>
                    </>
                  );
                })}
            </table>
          </div>
          {auth && (
            <>
              <form
                method="post"
                className="flex flex-col justify-center content-center max-w-sm  h-[450px] ml-auto mr-auto mb-5"
              >
                <h2 className="text-xl uppercase font-bold ml-10 mb-4 mt-[0] mr-auto flex flex-row justify-center items-center text-red-500">
                  <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>
                    {errMsg}
                  </p>
                </h2>
                <div className="mb-3">
                  <input
                    type="text"
                    name="Link"
                    // id=""
                    ref={userRef}
                    onChange={(e) => setLink(e.target.value)}
                    value={link}
                    placeholder="Enter S.No. here"
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#000080]"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    name="Caption"
                    // id=""
                    cols="10"
                    rows="5"
                    ref={userRef}
                    onChange={(e) => setCaption(e.target.value)}
                    value={caption}
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#000080]"
                    placeholder="Departments"
                  ></textarea>
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="TIC1"
                    // id=""
                    ref={userRef}
                    onChange={(e) => setTic1(e.target.value)}
                    value={tic1}
                    placeholder="Previous Teacher In Charge "
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#000080]"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="TIC2"
                    // id=""
                    ref={userRef}
                    onChange={(e) => setTic2(e.target.value)}
                    value={tic2}
                    placeholder="Current Teacher In Charge "
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#000080]"
                  />
                </div>
                <div class="md:flex flex-col md:items-center">
                  {/* <div class="md:w-1/3"></div> */}
                  <div class="md:w-2/3 ">
                    <button
                      class="shadow w-full  bg-[#000080] hover:bg-[#0000d0] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                      type="button"
                      onClick={handleSubmit}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default teacher;
