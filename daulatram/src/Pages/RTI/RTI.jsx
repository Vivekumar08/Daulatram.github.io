import React, { useContext, useEffect, useRef, useState } from "react";
import AuthContext from "../../Context/AuthProvider";
import { Link } from "react-router-dom";
import axios from "axios";
import Dropzone from "react-dropzone";

import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RTI = () => {
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
  const userRef = useRef(null);
  const errRef = useRef(null);
  const [filter, setFilter] = useState("RTI");
  const dropRef = useRef(null);
  const [date_exp, setDate_exp] = useState("");
  const [month_exp, setMonth_exp] = useState("");
  const [year_exp, setYear_exp] = useState("");
  const [check, setCheck] = useState(false);
  const [new_opt, setNew_opt] = useState(false);
  const [caption, setCaption] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [previewSrc, setPreviewSrc] = useState("");
  const [isPreviewAvailable, setIsPreviewAvailable] = useState(false);
  const [file, setFile] = useState(null);

  const { auth, setAuth } = useContext(AuthContext);

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const fetchdata = async () => {
    const response = await fetch("/RTI_Footer");
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

  const updateBorder = (dragState) => {
    if (dragState === "over") {
      dropRef.current.style.border = "2px solid #000";
    } else if (dragState === "leave") {
      dropRef.current.style.border = "2px dashed #e9ebeb";
    }
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

  const del = async (id) => {
    console.log(id);
    const response = await fetch(`/delete_RTI_Footer/${id}`, {
      method: "DELETE",
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
    try {
      if (caption.trim() !== "") {
        if (!date_exp || !month_exp || !year_exp) {
          const date_e = null;
          const formData = new FormData();
          formData.append("file", file);
          formData.append("title", caption);
          formData.append("date", date);
          formData.append("date_exp", date_e);
          formData.append("new_", new_opt);
          formData.append("filter", filter);

          setErrMsg("");
          await axios.post(`/RTI_Footer_add`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          setCaption("");
          setFile("");
          setIsPreviewAvailable(false);
          setPreviewSrc("");
          setAuth(true);
          fetchdata();
        } else {
          const date_e = `${date_exp}/${month_exp}/${year_exp}`;
          const formData = new FormData();
          formData.append("file", file);
          formData.append("title", caption);
          formData.append("date", date);
          formData.append("date_exp", date_e);
          formData.append("new_", new_opt);
          formData.append("filter", filter);

          setErrMsg("");
          await axios.post(`/RTI_Footer_add`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          setCaption("");
          setFile("");
          setIsPreviewAvailable(false);
          setPreviewSrc("");
          setAuth(true);
          fetchdata();
        }
      } else {
        setErrMsg("Please enter all the field values.");
      }
    } catch (err) {
      err.response && setErrMsg(err.response.data);
    }
  };
  const handleSubmit1 = async (e) => {
    e.preventDefault();
    try {
      if (!date_exp || !month_exp || !year_exp) {
        const date_e = null;
        setErrMsg("");
        const response = await fetch("/RTI_Footer_add_link", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: caption,
            file: file,
            date: date,
            date_exp: date_e,
            new_: new_opt,
            filter: filter,
          }),
        });
        const data = await response.json();
        if (data && response.status === 200) {
          setCaption("");
          setFile("");
          setAuth(true);

          fetchdata();
        } else if (response.status === 401) {
          setErrMsg("Fill Complete Details");
        } else if (response.status === 400) {
          setErrMsg("Error while uploading file. Try again later.");
        } else {
          setErrMsg("No Server Response");
        }
      } else {
        const date_e = `${date_exp}/${month_exp}/${year_exp}`;
        setErrMsg("");
        const response = await fetch("/RTI_Footer_add_link", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: caption,
            file: file,
            date: date,
            date_exp: date_e,
            new_: new_opt,
            filter: filter,
          }),
        });
        const data = await response.json();
        if (data && response.status === 200) {
          setCaption("");
          setFile("");
          setAuth(true);

          fetchdata();
        } else if (response.status === 401) {
          setErrMsg("Fill Complete Details");
        } else if (response.status === 400) {
          setErrMsg("Error while uploading file. Try again later.");
        } else {
          setErrMsg("No Server Response");
        }
      }
    } catch (err) {
      console.log(err);
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
            <p className="  text-[#fff] text-6xl  mt-12 font-bold  p-5 flex justify-center w-full rounded-md  ">
              RTI{" "}
            </p>
          </div>

          <div className=" bg-gray-400 pt-3 pb-3 pl-5 text-lg text-[#000080] mt-28 ">
            <Link to={"/"}>
              <span className="ml-5">Home</span>
            </Link>
              <span className="ml-5">RTI</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col mb-5 ml-8 gap-3">
        <h2 className="text-4xl uppercase font-bold mb-5 mt-5 flex flex-row justify-start items-center ">
          {""}
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
              filter,
            } = curElem;
            let date_e = null;
            let exp_date;
            if (date_exp !== null) {
              date_e = date_exp.split("/");
              exp_date = new Date(date_e[2], date_e[1], date_e[0]);
            }
            const cur_date = new Date();
            const diffTime = Math.abs(exp_date - cur_date);
            // const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            var path2 = file_path.replace(/\\/g, "/");
            var path = path2.slice(19);
            return (
              <>
                {filter === "Simple" && (
                  <>
                    <div
                      className="flex relative w-full items-center  mb-2 "
                      key={_id}
                    >
                      <li className="list-disc">
                        {file_mimetype !== "text/link" ? (
                          <a
                            href={path}
                            className="text-lg hover:text-[#000080] hover:font-semibold"
                          >
                            {" "}
                            {title}{" "}
                            {diffTime > 0 && new_ && (
                              <sup className="font-extrabold text-transparent  bg-clip-text text-lg bg-gradient-to-r from-red-600 to-fuchsia-600 animate-text">
                                new
                              </sup>
                            )}
                          </a>
                        ) : (
                          <a
                            href={file_path}
                            className="text-lg hover:text-[#000080] hover:font-semibold"
                          >
                            {" "}
                            {title}{" "}
                            {diffTime > 0 && new_ && (
                              <sup className="font-extrabold text-transparent  bg-clip-text text-lg bg-gradient-to-r from-red-600 to-fuchsia-600 animate-text">
                                new
                              </sup>
                            )}
                          </a>
                        )}
                      </li>
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
                )}
              </>
            );
          })}
      </div>
      <div className="flex flex-col mb-5 gap-3 ml-8">
        <h2 className="text-4xl uppercase font-bold mb-5 mt-5 flex flex-row justify-start items-center ">
          RTI Manual
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
              filter,
            } = curElem;
            let date_e = null;
            let exp_date;
            if (date_exp !== null) {
              date_e = date_exp.split("/");
              exp_date = new Date(date_e[2], date_e[1], date_e[0]);
            }
            const cur_date = new Date();
            const diffTime = Math.abs(exp_date - cur_date);
            // const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            var path2 = file_path.replace(/\\/g, "/");
            var path = path2.slice(19);
            return (
              <>
                {filter === "RTI" && (
                  <>
                    <div
                      className="flex relative w-full items-center  mb-2 "
                      key={_id}
                    >
                      <li className="list-disc">
                        {file_mimetype !== "text/link" ? (
                          <a
                            href={path}
                            className="text-lg hover:text-[#000080] hover:font-semibold"
                          >
                            {" "}
                            {title}{" "}
                            {diffTime > 0 && new_ && (
                              <sup className="font-extrabold text-transparent  bg-clip-text text-lg bg-gradient-to-r from-red-600 to-fuchsia-600 animate-text">
                                new
                              </sup>
                            )}
                          </a>
                        ) : (
                          <a
                            href={file_path}
                            className="text-lg hover:text-[#000080] hover:font-semibold"
                          >
                            {" "}
                            {title}{" "}
                            {diffTime > 0 && new_ && (
                              <sup className="font-extrabold text-transparent  bg-clip-text text-lg bg-gradient-to-r from-red-600 to-fuchsia-600 animate-text">
                                new
                              </sup>
                            )}
                          </a>
                        )}
                      </li>
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
                )}
              </>
            );
          })}
      </div>
      {auth && (
        <>
          <form
            method="post"
            className="flex flex-col justify-center content-center max-w-sm  h-full ml-auto mr-auto mb-5"
          >
            <h2 className="text-xl uppercase font-bold ml-10 mb-4 mt-[0] mr-auto flex flex-row justify-center items-center text-red-500">
              <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>
                {errMsg}
              </p>
            </h2>
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
                placeholder="Enter Title"
              ></textarea>
            </div>
            <div className="mb-3">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="mb-3 mt-3 bg-gray-200 cursor-pointer border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#000080]"
              >
                <option
                  value="RTI"
                  className="p-2 text-lg acctive:text-white  block px-4 py-2  "
                >
                  RTI MANUALS
                </option>
                <option
                  value="Simple"
                  className="p-2 text-lg acctive:text-white  block px-4 py-2 "
                >
                  SIMPLE RTI
                </option>
              </select>
            </div>
            <div className="mb-3 flex ">
              <input
                value={`Date: ${current.getDate()}`}
                className="bg-gray-200 appearance-none border-2 mr-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#000080]"
                disabled
              />
              <input
                value={`Month: ${mS[current.getMonth()]}`}
                className="bg-gray-200 appearance-none border-2 mr-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#000080]"
                // placeholder={}
                disabled
              />
              <input
                value={`Year: ${current.getFullYear()}`}
                className="bg-gray-200 appearance-none border-2  border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#000080]"
                // placeholder={}
                disabled
              />
            </div>

            <div className="flex flex-col h-full ">
              <div>
                <label
                  htmlFor="checked-toggle"
                  className="inline-flex relative items-center cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value={new_opt}
                    id="checked-toggle"
                    className="sr-only peer"
                    onChange={() => setNew_opt(!new_opt)}
                  />
                  <div className="w-11 h-6  bg-gray-200 rounded-full peer  dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <p className="ml-3">
                    Toggle to set{" "}
                    <span className="font-extrabold text-transparent  bg-clip-text text-lg bg-gradient-to-r from-red-600 to-fuchsia-600 animate-text">
                      new
                    </span>{" "}
                    label
                  </p>
                </label>
              </div>
              {new_opt && (
                <>
                  <div className="mb-3 flex ">
                    <input
                      onChange={(e) => setDate_exp(e.target.value)}
                      value={date_exp}
                      ref={userRef}
                      className="bg-gray-200 appearance-none border-2 mr-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#000080]"
                      placeholder={"DD"}
                    />
                    <input
                      onChange={(e) => setMonth_exp(e.target.value)}
                      ref={userRef}
                      value={month_exp}
                      className="bg-gray-200 appearance-none border-2 mr-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#000080]"
                      placeholder={"MM"}
                    />
                    <input
                      onChange={(e) => setYear_exp(e.target.value)}
                      ref={userRef}
                      value={year_exp}
                      className="bg-gray-200 appearance-none border-2  border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#000080]"
                      placeholder={"YYYY"}
                    />
                  </div>
                </>
              )}

              <div>
                <label
                  htmlFor="checkedd-togglee"
                  className="inline-flex relative items-center cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value={check}
                    id="checkedd-togglee"
                    className="sr-only peer"
                    onChange={() => setCheck(!check)}
                  />
                  <div className="w-11 h-6  bg-gray-200 rounded-full peer  dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <p className="ml-3">Toggle to switch between File and Link</p>
                </label>
              </div>
              {check ? (
                <>
                  <div className="flex flex-col h-full">
                    <span className="ml-3  text-md font-medium text-gray-900">
                      File
                    </span>
                    <div className="md:flex flex-col h-full">
                      <div className="upload-section h-[200px] flex  mb-[10px] w-full">
                        <Dropzone
                          onDrop={onDrop}
                          onDragEnter={() => updateBorder("over")}
                          onDragLeave={() => updateBorder("leave")}
                        >
                          {({ getRootProps, getInputProps }) => (
                            <div
                              {...getRootProps({
                                className:
                                  "drop-zone   mb-[10px] py-[40px] px-[10px] flex flex-col justify-center items-center cursor-pointer focus:outline-none border-2 border-dashed border-[#e9ebeb] w-full ",
                              })}
                              ref={dropRef}
                            >
                              <input {...getInputProps()} />
                              <p>
                                Drag and drop a file OR click here to select a
                                file
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
                                className="preview-image w-full  block mb-[10px]"
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
                              Image preview will be shown here after selection
                            </p>
                          </div>
                        )}
                      </div>
                      <div className="md:w-2/3 ">
                        <button
                          className="shadow w-full  bg-[#000080] hover:bg-[#0000d0] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
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
                  <div className="flex flex-col h-full">
                    {/* <div className=""> */}
                    <span className="ml-3  text-md font-medium text-gray-900">
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
                    <div className="md:w-2/3 mt-2 mb-16 ">
                      <button
                        className="shadow w-full  bg-[#000080] hover:bg-[#0000d0] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
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
    </>
  );
};

export default RTI;
