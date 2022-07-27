import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
// import "./toggle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../../Context/AuthProvider";
import Dropzone from "react-dropzone";
import axios from "axios";
import Banner from "../../Components/Banners/Formsstaff";
import Sidebar from "../../Components/Sidebar/Staff_side";

const Forms = () => {
  const [data1, setData1] = useState();
  const userRef = useRef();
  const errRef = useRef();
  const dropRef = useRef();
  const [link, setLink] = useState("");
  const [caption, setCaption] = useState("");
  const [check, setCheck] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [previewSrc, setPreviewSrc] = useState("");
  const [isPreviewAvailable, setIsPreviewAvailable] = useState(false);
  const [file, setFile] = useState(null);
  const { auth, setAuth } = useContext(AuthContext);

  const fetchdata = async () => {
    const response = await fetch("http://localhost:5000/StaffZone_forms");
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

  const del = async (id) => {
    console.log(id);
    const response = await fetch(
      `http://localhost:5000/delete_StaffZone_forms/${id}`,
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

  const updateBorder = (dragState) => {
    if (dragState === "over") {
      dropRef.current.style.border = "2px solid #000";
    } else if (dragState === "leave") {
      dropRef.current.style.border = "2px dashed #e9ebeb";
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
        await axios.post(
          `http://localhost:5000/StaffZone_forms_add`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setCaption("");
        setLink("");
        setFile("");
        setPreviewSrc("");
        setIsPreviewAvailable(false);
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
  const handleSubmit1 = async (e) => {
    e.preventDefault();
    console.log(link, caption, file);
    const response = await fetch(
      "http://localhost:5000/StaffZone_forms_add_link",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          link: link,
          title: caption,
          file: file,
        }),
      }
    );
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
    <div className=" flex flex-col mb-16 ">
      <div className="">
        <Banner />
      </div>
      <div className="flex flex-row">
        <div className="w-[280px]">
          <Sidebar />
        </div>

        <div className="w-[1100px] mb-5">
          <h2 className=" text-3xl md:text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center   ">
            Forms
          </h2>
          <div className="main flex-col ">
            <table className=" w-96 h-48 md:table-fixed md:ml-auto md:mr-auto md:w-[450px] md:h-[100px] lg:w-[700px] lg:h-[180px] xl:w-[900px] xl:h-[180px] mt-1 ">
              <tr className="h-20 text-lg">
                <th className="row text-lg w-[10%]">S.no</th>
                <th className="text-lg">About</th>
                <th className="text-lg w-[25%]">PDF</th>
                {auth && <th className="text-lg w-[15%]">Delete</th>}
              </tr>
              {data1 &&
                data1.sort(sortOn("link")).map((curElem) => {
                  const { _id, title, file_path, link, file_mimetype } =
                    curElem;
                  var path_pic = file_path;
                  var path2 = path_pic.replace(/\\/g, "/");
                  var path = path2.slice(19);
                  return (
                    <>
                      <tr className=" ">
                        <td className="text-lg  overlay ">{link}</td>
                        <td className="text-lg overlay">
                          <strong>{title} </strong>
                        </td>
                        <td>
                          {" "}
                          {file_mimetype === "text/link" ? (
                            <>
                              <a
                                href={file_path}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {" "}
                                <button className="md:btn text-sm font-semibold bg-[#fff] hover:bg-[#000080] text-black hover:text-white p-1 border border-2 border-[#000080] rounded-md">Click Here</button>
                              </a>{" "}
                            </>
                          ) : (
                            <>
                              <a href={path} target="_blank" rel="noreferrer">
                                {" "}
                                <button className="md:btn text-sm font-semibold bg-[#fff] hover:bg-[#000080] text-black hover:text-white p-1 border border-2 border-[#000080] rounded-md">Click Here</button>
                              </a>{" "}
                            </>
                          )}
                        </td>
                        {auth && (
                          <>
                            <td className="flex h-full overlay ">
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
                className="flex flex-col justify-center content-center max-w-sm mt-5 h-[55%] ml-auto mr-auto mb-16"
              >
                <h2 className="text-xl uppercase font-bold ml-10 mb-4 mt-5 mr-auto flex flex-row justify-center items-center text-red-500">
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
                    placeholder="About"
                  ></textarea>
                </div>
                <div class="flex flex-col">
                  <div>
                    <label
                      htmlFor="checked-toggle"
                      class="inline-flex relative items-center cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        value={check}
                        id="checked-toggle"
                        class="sr-only peer"
                        onChange={() => setCheck(!check)}
                      />
                      <div class="w-11 h-6  bg-gray-200 rounded-full peer  dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      <p className="ml-3">
                        Toggle to switch between File and Link
                      </p>
                    </label>
                  </div>
                  {check ? (
                    <>
                      <div className="flex flex-col">
                        <span class="ml-3  text-md font-medium text-gray-900">
                          File
                        </span>
                        <div class="md:flex flex-col ">
                          {/* <div class="md:w-1/3"></div> */}
                          <div className="upload-section flex h-[200px]  mb-[10px] w-full">
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
                                    Drag and drop a file OR click here to select
                                    a file
                                  </p>
                                  {file && (
                                    <div>
                                      <strong>Selected file:</strong>{" "}
                                      {file.name}
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
                                <p>
                                  Image preview will be shown here after
                                  selection
                                </p>
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
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex flex-col">
                        {/* <div className=""> */}
                        <span class="ml-3  text-md font-medium text-gray-900">
                          Link
                        </span>
                        <input
                          type="text"
                          name="Link"
                          // id=""
                          ref={userRef}
                          onChange={(e) => setFile(e.target.value)}
                          value={file}
                          placeholder="link"
                          className=" bg-gray-200 appearance-none border-2 mb-3 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#000080]"
                        />
                        <div class="md:w-2/3 mt-2 mb-16 ">
                          <button
                            class="shadow w-full  bg-[#000080] hover:bg-[#0000d0] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                            type="button"
                            onClick={handleSubmit1}
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Forms;
