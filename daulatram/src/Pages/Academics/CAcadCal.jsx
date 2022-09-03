import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../../Context/AuthProvider";
import Dropzone from "react-dropzone";
import axios from "axios";
import Banner from "../../Components/Banners/acal";
import DeptSidebar from "../../Components/Sidebar/DeptSidebar";

const CAcadCal = () => {
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
    const response = await fetch("/C_Acad_Cal");
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
      `/delete_C_Acad_Cal/${id}`,
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
          `/C_Acad_Cal_add`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setCaption("");
        setLink("");
        setFile(null);
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
        
          <div className="md:w-[500px] lg:w-[1100px]">
            <h2 className=" text-2xl md:text-3xl lg:text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center">
            College Academic Calendar
            </h2>
            <div className="main flex-col">
              <table className="w-96 h-48 ml-3 md:table-fixed md:ml-10 md:w-[500px] md:h-[180px] lg:ml-32 lg:w-[800px] lg:h-[180px] mt-1">
                <tr className="h-20 text-m md:text-lg">
                  <th className="row text-m md:text-lg">S. No.</th>
                  <th className="text-m md:text-lg">About</th>
                  <th className="text-m md:text-lg">PDF</th>
                  {auth && <th className="text-m md:text-lg w-[15%]">Delete</th>}
                </tr>
                {data1 &&
                  data1.sort(sortOn("link")).map((curElem) => {
                    const { _id, title, file_path, link } = curElem;
                    var path_pic = file_path;
                    var path2 = path_pic.replace(/\\/g, "/");
                    var path = path2.slice(19);
                    return (
                      <>
                        <tr className=" ">
                          <td className="text-lg">{link}</td>
                          <td className="text-m md:text-lg ">
                            <strong>{title} </strong>
                          </td>
                          <td>
                            {" "}
                            <a href={path} target="_blank" rel="noreferrer">
                              {" "}
                              <button className="btn">Click Here</button>
                            </a>{" "}
                          </td>
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
                      placeholder="About"
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
                            Image preview will be shown here after selection
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
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    
  );
};

export default CAcadCal;
