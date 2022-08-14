

import React, { useContext, useEffect, useState, useRef } from "react";
import Musicbanner from "./Musicbanner.jsx";
import Music from "../../../../Components/DepartSIde/Music.jsx";
import Dropzone from "react-dropzone";
import axios from "axios";
import AuthContext from "../../../../Context/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import Common_dat from "../Common_dat";

function Music_association() {
  const [visible, setVisible] = useState(false);
  const [data1, setData1] = useState();
  const userRef = useRef();
  const errRef = useRef();
  const [link, setLink] = useState("");
  const [caption, setCaption] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const { auth, setAuth } = useContext(AuthContext);

  const fetchdata = async () => {
    const response = await fetch("/Music_Association");
    setData1(await response.json());
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const handleSubmit_img = async (id, file) => {
    try {
      if (file) {
        setErrMsg("");
        await axios.post(
          `/Music_Association_img_upload/${id}`,
          { file: file },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setCaption("");
        setLink("");
        setAuth(true);
        fetchdata();
      } else {
        setErrMsg("Please select a file to add.");
      }
    } catch (err) {
      err.response && setErrMsg(err.response.data);
    }
  };

  const del_para = async (id, pid, type) => {
    try {
      const arr = { pid: pid, type: type };
      console.log(id, arr);
      const response = await fetch(`/delete_Music_Association_para/${id}`, {
        method: "POST",
        body: JSON.stringify(arr),
        headers: { "Content-Type": "application/json" },
      });
      await response.json();
      if (response.status === 200) {
        fetchdata();
      } else if (response.status === 202) {
        fetchdata();
      } else {
        setErrMsg("");
      }
    } catch (err) {
      console.log("Unable to delete");
    }
  };

  const del = async (id) => {
    console.log(id);
    const response = await fetch(`/delete_Music_Association/${id}`, {
      method: "POST",
    });
    await response.json();
    if (response.status === 200) {
      setErrMsg("");
      fetchdata();
    } else if (response.status === 400) {
      setErrMsg("First Delete all the images related to this section");
    }
  };

  const delete_file = async (id, pid, file_path1) => {
    console.log(id);
    console.log(file_path1);
    await axios.post(
      `/delete_pdf_link_Music_Association_fac/${id}`,
      { file_path1: file_path1, pid: pid },
      {
        method: "POST",
      }
    );
    fetchdata();
  };
  const dele = async (id, pid, file_path1) => {
    console.log(id);
    console.log(file_path1);
    await axios.post(
      `/delete_img_Music_Association_fac/${id}`,
      { file_path1: file_path1, pid: pid },
      {
        method: "POST",
      }
    );
    fetchdata();
  };

  const handleSubmit_data = async (id, para) => {
    try {
      if (para !== "") {
        setErrMsg("");
        const arr = { para1: para };
        console.log(arr);
        await fetch(`/Music_Association_add_para/${id}`, {
          method: "POST",
          body: JSON.stringify(arr),
          headers: { "Content-Type": "application/json" },
        });
        setAuth(true);
        fetchdata();
      } else {
        setErrMsg("Please enter all the field values.");
      }
    } catch (err) {
      err.response && setErrMsg(err.response.data);
    }
  };

  const handleSubmit_link = async (id, link) => {
    try {
      console.log(link);
      await axios.post(`/Music_Association_add_link/${id}`, {
        link: link,
      });
      setCaption("");
      setAuth(true);
      fetchdata();
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit_file = async (id, pdf) => {
    console.log(id);
    try {
      console.log(pdf);
      if (pdf) {
        await axios.post(
          `/Music_Association_file_upload/${id}`,
          {
            file: pdf,
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setCaption("");
        setAuth(true);
        fetchdata();
      } else {
        setErrMsg("Please select a file to add.");
      }
    } catch (err) {
      err.response && setErrMsg(err.response.data);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (link.trim() !== "" && caption.trim() !== "") {
        // if (file) {
        setErrMsg("");
        await axios.post(`/Music_Association_upload`, {
          title: link,
          description: caption,
        });
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
    <div className=" flex flex-col">
      <div className="">
        <Musicbanner />
      </div>

      <div className="flex flex-row">
        <div className="md:hidden">
          {visible ? (
            <>
              <div className=" flex  flex-col mt-8 ml-2">
                <FontAwesomeIcon
                  icon={faClose}
                  size="lg"
                  onClick={() => setVisible(!visible)}
                  className=" border-2  border-[#000080] mr-2 hover:text-black text-white  rounded-lg p-2 cursor-pointer hover:bg-white bg-[#000080]"
                />
                <Music />
              </div>
            </>
          ) : (
            <div className=" flex  flex-col mt-8 ml-2">
              <FontAwesomeIcon
                icon={faBars}
                size="lg"
                onClick={() => setVisible(!visible)}
                className="text-black border-2 border-[#000080] mr-2 hover:text-white bg-[#fff] rounded-lg p-2 cursor-pointer hover:bg-[#000080]"
              />
            </div>
          )}
        </div>
        <div className="  md:flex hidden md:flex-col mt-12 ml-2 ">
          <Music />
        </div>
        <div className="w-full mr-16">
          <h2 className="text-3xl lg:text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
            Association
          </h2>
          <div className="text-justify p-3 m-2 ml-4">
            {data1 &&
              data1.map((curElem) => {
                const { _id, title, description, img_data } = curElem;
                return (
                  <>
                    <Common_dat
                      key={_id}
                      id={_id}
                      tittle={title}
                      para={description}
                      pic={img_data}
                      delete={del}
                      delete_img={dele}
                      delete_file={delete_file}
                      delete_para={del_para}
                      add_para={handleSubmit_data}
                      file_upload={handleSubmit_file}
                      Link_upload={handleSubmit_link}
                      submit_img={handleSubmit_img}
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
                <h2 className="text-xl uppercase font-bold ml-10 mb-4 mt-[0] mr-auto flex flex-row justify-center items-center text-[#000080]">
                  <p>Add New Data</p>
                </h2>
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
    </div>
  );
}

export default Music_association;
