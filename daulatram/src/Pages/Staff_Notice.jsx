import React, { useContext, useEffect, useRef, useState } from "react";
import AuthContext from "../Context/AuthProvider";
import axios from "axios";
import Staff_Noticebanner from "../Components/Banners/Staff_Noticebanner";
import Notice_side from "../Components/Sidebar/Notice_side";
import Dropzone from "react-dropzone";
import { faAdd, faArchive, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Staff_Notice = () => {
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
  const userRef = useRef();
  const errRef = useRef();
  const dropRef = useRef();
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
    const response = await fetch("http://localhost:5000/Staff_notice");
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
    const response = await fetch(
      `http://localhost:5000/delete_Staff_notice/${id}`,
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
  const del_archive = async (id) => {
    console.log(id);
    const response = await fetch(
      `http://localhost:5000/delete_Staff_archive_notice/${id}`,
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

  const Bulle = async (
    _id,
    title,
    file_mimetype,
    file_path,
    new_,
    date_exp,
    date
  ) => {
    try {
      const response = await fetch("http://localhost:5000/Bulletins_notice_add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          file_mimetype,
          file_path,
          new_,
          date_exp,
          date,
        }),
      });
      const data = await response.json();
      if (!data && response.status === 400) {
        setErrMsg("No Server Response");
      } else if (response.status === 402) {
        window.alert("Delete some previous bulletin")
        setErrMsg("Delete some previous bulletin");
      } else {
        setAuth(true);
        window.alert("Your information added into bulletin")
        fetchdata();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const arch = async (
    _id,
    title,
    file_mimetype,
    file_path,
    new_,
    date_exp,
    date
  ) => {
    try {
      const response = await fetch("http://localhost:5000/Archive_notice_add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          file_mimetype,
          file_path,
          new_,
          date_exp,
          date,
        }),
      });
      const data = await response.json();
      if (!data && response.status === 400) {
        setErrMsg("No Server Response");
      } else if (response.status === 400) {
        setErrMsg("Fill Complete Details");
      } else {
        del_archive(_id);
        setAuth(true);
        fetchdata();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (caption.trim() !== "") {
        // if (file) {
        const date_e = `${date_exp}/${month_exp}/${year_exp}`;
        const formData = new FormData();
        formData.append("file", file);
        formData.append("title", caption);
        formData.append("date", date);
        formData.append("date_exp", date_e);
        formData.append("new_", new_opt);

        setErrMsg("");
        await axios.post(`http://localhost:5000/Staff_notice_add`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        setCaption("");
        setFile(null);
        setIsPreviewAvailable(false);
        setPreviewSrc("");
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
    try {
      const date_e = `${date_exp}/${month_exp}/${year_exp}`;
      const response = await fetch(
        "http://localhost:5000/Staff_notice_add_link",
        {
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
          }),
        }
      );
      const data = await response.json();
      if (!data && response.status === 400) {
        setErrMsg("No Server Response");
      } else if (response.status === 400) {
        setErrMsg("Fill Complete Details");
      } else {
        setCaption("");
        setFile(null);
        setAuth(true);
        fetchdata();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" flex flex-col">
        <Staff_Noticebanner />
      <div className="flex flex-row">
        <div className="md:w-[280px] mt-2 ">
          <Notice_side />
        </div>
        <div className="ml-5 mb-5 mr-6 w-full">
          <div className=" w-full ">
            <h2 className=" ml-28 text-xl md:text-2xl lg:text-3xl  uppercase font-bold mb-12 mt-12 flex flex-row md:justify-center items-center  ">
              Staff Notice
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
                      className="flex relative w-full mt-2 items-center border rounded-xl bg-[#daa520] "
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
                                {diffDays>0 && new_ && (
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
                            <FontAwesomeIcon
                              icon={faArchive}
                              size="xl"
                              className=" cursor-pointer  mr-5 hover:text-green-600"
                              onClick={() =>
                                arch(
                                  _id,
                                  title,
                                  file_mimetype,
                                  file_path,
                                  new_,
                                  date_exp,
                                  date
                                )
                              }
                            />
                            <FontAwesomeIcon
                              icon={faAdd}
                              size="xl"
                              className=" cursor-pointer  mr-5 hover:text-blue-700"
                              onClick={() =>
                                Bulle(
                                  _id,
                                  title,
                                  file_mimetype,
                                  file_path,
                                  new_,
                                  date_exp,
                                  date
                                )
                              }
                            />
                          </div>
                        </>
                      )}
                    </div>
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
                  {new_opt ? (
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
                  ) : (
                    ""
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
                      <p className="ml-3">
                        Toggle to switch between File and Link
                      </p>
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
                                  Image preview will be shown here after
                                  selection
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
        </div>
      </div>
    </div>
  );
};

export default Staff_Notice;
