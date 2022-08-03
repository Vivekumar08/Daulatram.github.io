import React, { useContext, useEffect, useRef, useState } from "react";

import Hindibanner from "./Hindibanner.jsx";
import Hindi from "../../../../Components/DepartSIde/Hindi.jsx";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../../../../Context/AuthProvider";
import Dropzone from "react-dropzone";
import axios from "axios";
// import './awards.css'
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
const tt = () => {
  const [visible, setVisible] = useState(false);
  const [data1, setData1] = useState();
  const userRef = useRef();
  const errRef = useRef();
  const dropRef = useRef();
  const [link, setLink] = useState("");
  const [caption, setCaption] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [previewSrc, setPreviewSrc] = useState("");
  const [isPreviewAvailable, setIsPreviewAvailable] = useState(false);
  const [file, setFile] = useState(null);
  const { auth, setAuth } = useContext(AuthContext);

  const fetchdata = async () => {
    const response = await fetch("/Hin_tt");
    setData1(await response.json());
  };

  const onDrop = (files) => {
    const [uploadedFile] = files;
    setFile(uploadedFile);

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewSrc(fileReader.result);
    };
    fileReader.readAsDataURL(uploadedFile);
    setIsPreviewAvailable(
      uploadedFile.name.match(/\.(jpeg|jpg|png|pdf|doc|docx|xlsx|xls)$/)
    );
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const del = async (id) => {
    console.log(id);
    const response = await fetch(
      `/delete_Hin_tt/${id}`,
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
        const formData = new FormData();
        formData.append("file", file);
        formData.append("link", link);
        formData.append("title", caption);

        setErrMsg("");
        console.log(formData);
        await axios.post(`/Hin_tt_add`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        setCaption("");
        setLink("");
        setFile("");
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
      <Hindibanner />

      <div className="flex flex-row">
      <div className="md:hidden absolute bg-white">
          {visible ? (
            <>
                <div className=" flex  flex-col mt-8 ml-2">
                  <FontAwesomeIcon
                    icon={faClose}
                    size="lg"
                    onClick={() => setVisible(!visible)}
                    className=" border-2  border-[#000080] mr-2 hover:text-black text-white  rounded-lg p-2 cursor-pointer hover:bg-white bg-[#000080]"
                  />
                  <Hindi />
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
        <div className=" md:flex md:w-[250px] hidden md:flex-col mt-12 ml-2">
          <Hindi />
        </div>

        <div className="w-full ml-auto mr-auto ">
          <h2 className=" md:text-3xl text-xl sm:text-xl  uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center">
          Timetable
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2  xl:grid-cols-3  md:ml-24 lg:ml-2 w-full mt-5 mb-5">
            {data1 &&
              data1.map((curElem) => {
                const { _id, title, file_path, link } = curElem;
                var path_pic = file_path;
                var path2 = path_pic.replace(/\\/g, "/");
                var path = path2.slice(19);
                return (
                  <>
                        <div class="card2 ml-12 mb-8 md:ml-4 " key={_id}>
                      <span className="  font-bold text-justify text-lg w-[75%] ">{link}</span>
                      <div className="flex flex-col ml-4 w-full">
                        <div class="info2  w-full">
                          <p className="text-justify ">{title}</p>
                          <br />
                          <a href={path} className="">
                            <button className="w-[90%]">View</button>
                            <br />
                          </a>
                          {auth && (
                            <>
                              <div className="flex flex-col w-full">
                                <FontAwesomeIcon
                                  icon={faTrashCan}
                                  size="lg"
                                  className=" cursor-pointer ml-auto  hover:text-red-500"
                                  onClick={() => del(_id)}
                                ></FontAwesomeIcon>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
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
                    placeholder="Enter Text Here"
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
                <div class="md:flex flex-col md:items-center">
                  {/* <div class="md:w-1/3"></div> */}
                  <div className="upload-section flex h-[200px] mb-[10px] w-full">
                    <Dropzone
                      onDrop={onDrop}
                      onDragEnter={() => updateBorder("over")}
                      onDragLeave={() => updateBorder("leave")}
                    >
                      {({ getRootProps, getInputProps }) => (
                        <div
                          {...getRootProps({
                            className:
                              "drop-zone mb-[10px] py-[40px] px-[10px] flex flex-col justify-center items-center cursor-pointer focus:outline-none border-2 border-dashed border-[#e9ebeb] w-full h-full",
                          })}
                          ref={dropRef}
                        >
                          <input {...getInputProps()} />
                          <p>
                            Drag and drop a file OR click here to select a file
                          </p>
                          {file && (
                            <div>
                              <strong>Selected file:</strong> {file.name}
                            </div>
                          )}
                        </div>
                      )}
                    </Dropzone>
                    {previewSrc ? (
                      isPreviewAvailable ? (
                        <div className="image-preview ml-[5%] w-full">
                          <img
                            className="preview-image w-full h-full block mb-[10px]"
                            src={previewSrc}
                            alt="Preview"
                          />
                        </div>
                      ) : (
                        <div className="preview-message flex justify-center items-center ml-[5%]">
                          <p>No preview available for this file</p>
                        </div>
                      )
                    ) : (
                      <div className="preview-message flex justify-center items-center ml-[5%]">
                        <p>Image preview will be shown here after selection</p>
                      </div>
                    )}
                  </div>
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

export default tt;
