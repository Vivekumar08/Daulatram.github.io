import React, { useContext, useEffect, useRef, useState } from "react";
import Admission_side from "../../Components/Sidebar/Admission_side.";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import AuthContext from "../../Context/AuthProvider";

const Helpdesk = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [link, setLink] = useState("");
  const [caption, setCaption] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const { auth, setAuth } = useContext(AuthContext);
  const [data, setData] = useState([]);

  const fetchdata = async () => {
    const response = await fetch("http://localhost:5000/helpdesk");
    setData(await response.json());
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const del = async (id) => {
    const response = await fetch(`http://localhost:5000/deleteHelpdesk/${id}`, {
      method: "DELETE",
      // headers: {
      //   "Content-Type": "application/json",
      // },
    });
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
    const response = await fetch("http://localhost:5000/helpdesk_admission", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Link: link,
        Caption: caption,
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
      setAuth(true);
      fetchdata();
    }
  };

  return (
    <div className=" flex flex-col">
      <div
        className="Banner"
        style={{ backgroundImage: "url(/images/img1.jpg)" }}
      >
        <span className="flex flex-row uppercase text-[#000080] text-6xl justify-center pt-14">
          Helpdesk{" "}
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
        
          <div className="w-[1100px]">
            <h2 className=" text-3xl md:text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
              Helpdesk
            </h2>
            {data.map((datas) => (
              <>
                <div className="flex flex-row">
                  <li className=" list-none" key={datas._id}>
                    <div className="flex flex-col">
                      <p className="mt-2 ml-3 leading-14 font-medium text-justify text-base md:text-lg ">{datas.Caption}</p>
                      <h1 className="mt-2">
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="ml-3 font-medium text-justify text-base md:text-lg text-center md:text-left text-blue-400"
                        />
                        <a
                          href={datas.Link}
                          target="_blank"
                          className="ml-1 font-medium text-justify text-base md:text-lg text-center md:text-left text-blue-400  hover:pl-3"
                        >
                          {" "}
                          {datas.Link}
                        </a>
                      </h1>
                    </div>
                  </li>
                  <span className="ml-auto">
                    {auth ? (
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
                    ) : (
                      ""
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
                    <textarea
                      name="Caption"
                      // id=""
                      cols="10"
                      rows="5"
                      ref={userRef}
                      onChange={(e) => setCaption(e.target.value)}
                      value={caption}
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

export default Helpdesk;
