import React, { useContext, useEffect, useRef, useState } from "react";
import Admission_side from "../../Components/Sidebar/Admission_side.";
import Bulletin from "../../Dummy_data/pdfs/Admission/UGCF_2022.pdf";
import guideline from "../../Dummy_data/pdfs/Admission/OBC_SC_ST_EWS_guidelines.pdf";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../../Context/AuthProvider";
import Dropzone from "react-dropzone";
import axios from "axios";

const Anti_Ragging = () => {
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
    const response = await fetch("http://localhost:5000/Anti_Ragging");
    setData1(await response.json());
  };
  useEffect(() => {
    fetchdata();
  }, []);

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

  

  const del = async (id) => {
    console.log(id);
    const response = await fetch(
      `http://localhost:5000/deleteAntiRagging/${id}`,
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
        await axios.post(`http://localhost:5000/admission_Anti_Ragging`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        setCaption("");
        setLink("");
        // setAuth(true);
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
      <div
        className="Banner"
        style={{ backgroundImage: "url(/images/img1.jpg)" }}
      >
        <span className="flex flex-row uppercase text-[#000080] text-6xl justify-center pt-14">
          Anti-Ragging Guidelines{" "}
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
        <div className="ml-3 mb-5">
          <div className="w-[1100px]">
            <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
            Anti-Ragging Guidelines
            </h2>
            {data1 && data1.map((curElem) => {
              const { _id, title, file_path, link } = curElem;
              var path_pic = file_path;
              var path2 = path_pic.replace(/\\/g, "/");
              var path = path2.slice(19);
              return(
              <>
                <div className="flex flex-row mb-5 ml-5">
                  <li className="mt-12 list-none" key={_id}>
                    <div className="flex flex-col ">
                      <h1 className="mt-5">
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="text-blue-400"
                        />
                        <a
                          href={path}
                          target="_blank"
                          className="text-blue-400  hover:pl-3"
                        >
                          {" "}
                          {link}{" "}
                        </a>
                        <p>{title}</p>
                      </h1>
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
                            onClick={() => del(_id)}
                          ></FontAwesomeIcon>
                        </div>
                      </>
                    )}
                  </span>
                </div>
              </>
            )})}
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
    </div>
  );
};

export default Anti_Ragging;
