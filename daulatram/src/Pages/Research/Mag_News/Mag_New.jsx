import React, { useContext, useEffect, useState, useRef } from "react";
import Research_side from "../../../Components/Sidebar/Research_side";
import AuthContext from "../../../Context/AuthProvider";
import Mag_new_data from "./Mag_new_data";
import axios from "axios";
import { Link } from "react-router-dom";

const Mag_New = () => {
  const [data1, setData1] = useState();
  const userRef = useRef();
  const errRef = useRef();
  const [link, setLink] = useState("");
  const [caption, setCaption] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const { auth, setAuth } = useContext(AuthContext);

  const fetchdata = async () => {
    const response = await fetch("/Magz_and_News_res");
    setData1(await response.json());
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (link.trim() !== "" && caption.trim() !== "") {
        // if (file) {
        const formData = new FormData();
        // formData.append("file", file);
        // formData.append("title", link);
        // formData.append("description", caption);
        console.log(link, caption);
        console.log(formData);

        setErrMsg("");
        const response = await axios.post(
          `/Magz_and_News_res_upload`,
          { title: link, description: caption }
        );
        setCaption("");
        setLink("");
        setAuth(true);
        fetchdata();
      } else {
        setErrMsg("Please enter all the field values.");
      }
    } catch (err) {
      err.response && setErrMsg(err.response.data);
    }
  };

  return (
    <>
      <div
        className="Banner"
        style={{ backgroundImage: "url(/images/img1.jpeg)" }}
      >
        <div className="name">
          <div className="flex flex-row justify-center">
            <p className="  text-[#fff] text-6xl shadow-lg  mt-12 font-bold  p-5 flex justify-center w-full rounded-md  ">
              Magazines and Newsletter{" "}
            </p>
          </div>
          <div className=" bg-gray-400 pt-3 pb-3 pl-5 text-lg text-[#000080]  mt-28 ">
            <Link to={"/"}>
              <span className="ml-5">Home</span>
            </Link>
            <span className="ml-5">Research</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row">
        <div className="w-[350px] mb-2">
          <Research_side />
        </div>
        <div className="w-[1100px]">
          <div className="flex justify-center items-center flex-col">
            <div>
              <h2 className="text-3xl md:text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center  ">
                Magazines and Newsletter
              </h2>
            </div>
          </div>
          <div className="text-justify p-3 m-2 ml-4">
            {data1 &&
              data1.map((curElem) => {
                const { _id, title, description, img_data } = curElem;
                return (
                  <>
                    <Mag_new_data
                      key={_id}
                      id={_id}
                      tittle={title}
                      para={description}
                      pic={img_data}
                    />
                  </>
                );
              })}
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
                    placeholder="Title"
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
    </>
  );
};

export default Mag_New;
