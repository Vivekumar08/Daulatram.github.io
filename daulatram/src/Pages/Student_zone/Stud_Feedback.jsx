import React, { useContext, useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faTrashCan,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { Link, Navigate } from "react-router-dom";
import AuthContext from "../../Context/AuthProvider";
import Student_side from "../../Components/Sidebar/Student_side";

const Stud_Feedback = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [link, setLink] = useState("");
  const [text, setText] = useState("");
  const [caption, setCaption] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const { auth, setAuth } = useContext(AuthContext);
  const [data, setData] = useState([]);

  const fetchdata = async () => {
    const response = await fetch("/Studfeedback");
    setData(await response.json());
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const del = async (id) => {
    console.log(id);
    const response = await fetch(
      `/deletestudfeedback/${id}`,
      {
        method: "DELETE",
        // headers: {
        //   "Content-Type": "application/json",
        // },
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
    console.log(link, caption);
    const response = await fetch("/StudentZone_feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Link: link,
        Caption: caption,
        text:text,
      }),
    });
    const data = await response.json();
    if (!data) {
      setErrMsg("No Server Response");
    } else if (response.status === 400) {
      setErrMsg("Fill Complete Details");
    } else {
      setCaption("");
      setLink("");
      setText("");
      setAuth(true);
      fetchdata();
    }
  };

  return (
    <div className=" flex flex-col">
      <div
        className="Banner"
        style={{ backgroundImage: "url(/images/img1.jpeg)" }}
      ><div className="name">
            <div className="flex flex-row justify-center">
              <p className="  text-[#fff] text-6xl  mt-12 font-bold  p-5 flex justify-center w-full rounded-md  ">
                Feedback{" "}
              </p>
            </div>
        <div className=" bg-gray-400 pt-3 pb-3 pl-5 text-lg text-[#000080] mt-28 ">
          <Link to={"/"}>
            <span className="ml-5">Home</span>
          </Link>
          <span className="ml-5">Staff Zone</span>
        </div>
      </div>
      </div>
      <div className="flex flex-row">
        <div className="w-[350px]">
          <Student_side />
        </div>
       
          <div className="w-[1100px]">
            <h2 className=" text-3xl md:text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
              Feedback Form for Students
            </h2>
            {data.map((datas) => (
              <>
                <div className="flex flex-row">
                  <li className="mt-12 list-none" key={datas._id}>
                    <div className="flex flex-col">
                      <span>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="ml-3 font-medium text-justify text-base md:text-lg  md:text-left text-blue-400"
                        />
                        <a
                          href={datas.Link}
                          target="_blank"
                          className="ml-1 font-medium text-justify text-base md:text-lg  md:text-left text-blue-400  hover:pl-3"
                        >
                          {" "}
                          {datas.text}
                        </a>
                      </span>
                      <p className=" mt-2 ml-3 leading-14 font-medium text-justify text-base md:text-lg ">{datas.Caption}</p>
                    </div>
                  </li>

                  <span className="ml-auto">
                    {auth && (
                      <>
                        <div className="flex flex-col">
                          <FontAwesomeIcon
                            icon={faTrashCan}
                            size="lg"
                            className="mt-16 cursor-pointer ml-auto mr-16 hover:text-red-500"
                            onClick={() => del(datas._id)}
                          ></FontAwesomeIcon>
                        </div>
                      </>
                    )}
                  </span>
                </div>
              </>
            ))}
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
                      placeholder="Enter Link"
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#000080]"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="Link"
                      // id=""
                      ref={userRef}
                      onChange={(e) => setText(e.target.value)}
                      value={text}
                      placeholder="Enter Text"
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
                      placeholder="Description"
                    ></textarea>
                  </div>
                  <div class="md:flex md:items-center">
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

export default Stud_Feedback;
