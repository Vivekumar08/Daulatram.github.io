import React, { useState, useContext, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faTrash } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../Context/AuthProvider";
import Dropzone from "react-dropzone";

const Common_dat = (props) => {
  const errRef = useRef();
  const userRef = useRef();
  const dropRef = useRef();
  const [para, setPara] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [previewSrc, setPreviewSrc] = useState("");
  const [pdf, setPdf] = useState(null);
  const [isPreviewAvailable, setIsPreviewAvailable] = useState(false);

  const [link, setLink] = useState("");
  const [file, setFile] = useState("");
  const [check, setCheck] = useState(false);

  const { auth } = useContext(AuthContext);

  var path_pic = props.pic;

  const onDropPdf = (files) => {
    const [uploadedFile] = files;
    setPdf(uploadedFile);
    // setData(prev=>({...prev,pdf:uploadedFile}))
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewSrc(fileReader.result);
    };
    fileReader.readAsDataURL(uploadedFile);
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

  const updateBorder = (dragState) => {
    if (dragState === "over") {
      dropRef.current.style.border = "2px solid #000";
    } else if (dragState === "leave") {
      dropRef.current.style.border = "2px dashed #e9ebeb";
    }
  };

  return (
    <figure className="flex flex-col">
      <div className="flex flex-row w-full">
        <div className="flex items-center w-full py-4">
          <h1 className="font-bold flex-shrink pr-4 text-2xl">
            {props.tittle}
          </h1>
          <div className="flex-grow h-px bg-gray-400"></div>
        </div>
        <span className="ml-6">
          {auth && (
            <>
              <div className="flex flex-col">
                <FontAwesomeIcon
                  icon={faTrashCan}
                  size="lg"
                  className="mt-6 cursor-pointer ml-auto mr-16 hover:text-red-500"
                  onClick={() => props.delete(props.id)}
                ></FontAwesomeIcon>
              </div>
            </>
          )}
        </span>
      </div>
      <p className="text-justify text-sm leading-14 mb-5 ">{props.para}</p>
      {path_pic.para &&
        path_pic.para.map((elem) => {
          return (
            <>
              <div className="flex flex-row  items-center mb-5 ">
                <p className="text-justify leading-14 w-full text-sm ">
                  {elem.para1}
                </p>
                {auth && (
                  <>
                    <div className="flex  w-full">
                      <FontAwesomeIcon
                        icon={faTrashCan}
                        size="lg"
                        className=" cursor-pointer ml-auto  hover:text-red-500"
                        onClick={() =>
                          props.delete_para(props.id, elem._id, "para")
                        }
                      ></FontAwesomeIcon>
                    </div>
                  </>
                )}
              </div>
            </>
          );
        })}
      <>
        {path_pic.file_path.map((elem) => {
          var path2 = elem.file_path1.replace(/\\/g, "/");
          var path = path2.slice(19);
          return (
            <>
              <div className="flex justify-center items-center">
                <img
                  src={path}
                  style={{
                    width: "700px",
                    height: "400px",
                  }}
                  className="bg-center ml-auto mr-auto lg:w-[800px] w-[250px] h-[190px] lg:h-[420px] bg-no-repeat mb-3 mt-[3%] bg-cover  rounded-2xl border-2 border-black"
                />
                {auth && (
                  <>
                    <div className="flex flex-col">
                      <FontAwesomeIcon
                        icon={faTrashCan}
                        size="3x"
                        className=" cursor-pointer ml-5  hover:text-red-500"
                        onClick={() =>
                          props.delete_img(props.id, elem._id, elem.file_path1)
                        }
                      ></FontAwesomeIcon>
                    </div>
                  </>
                )}
              </div>
            </>
          );
        })}
        {path_pic.pdf_path &&
          path_pic.pdf_path.map((elem) => {
            const path2 = elem.pdf_path1.replace(/\\/g, "/");
            const path = path2.slice(19);
            return (
              <>
                <div className="flex justify-center flex-col items-center">
                  <div className="flex justify-center items-center">
                    {elem.pdf_mimetype1 === "text/link" ? (
                      <>
                        <a href={elem.pdf_path1}>
                          <button className="btn mt-5 ">Read More</button>
                        </a>
                      </>
                    ) : (
                      <>
                        <a href={path}>
                          <button className="btn mt-5">Read More</button>
                        </a>
                      </>
                    )}

                    {auth && (
                      <div className="flex flex-col ">
                        <FontAwesomeIcon
                          icon={faTrashCan}
                          size="lg"
                          className=" cursor-pointer text-black ml-5 mt-2 hover:text-red-500"
                          onClick={() =>
                            props.delete_file(
                              props.id,
                              elem._id,
                              elem.pdf_path1
                            )
                          }
                        />
                      </div>
                    )}
                  </div>
                  {elem.pdf_path1 === "../daulatram/public/images/uploads" && (
                    <>
                      <p className="text-sm font-bold text-red-500">
                        {" "}
                        There's no data added yet
                      </p>
                    </>
                  )}
                </div>

                {auth && (
                  <>
                    <form
                      method="post"
                      className="flex flex-col justify-center content-center max-w-sm mt-5 h-full ml-auto mr-auto mb-16"
                    >
                      <h2 className="text-xl uppercase font-bold ml-10 mb-4 mt-[0] mr-auto flex flex-row justify-center items-center text-[#000080]">
                        <p>Modify File data</p>
                      </h2>
                      <h2 className="text-xl uppercase font-bold ml-10 mb-4 mt-5 mr-auto flex flex-row justify-center items-center text-red-500">
                        <p
                          ref={errRef}
                          className={errMsg ? "errmsg" : "offscreen"}
                        >
                          {errMsg}
                        </p>
                      </h2>
                      <div className="flex flex-col h-full">
                        <div>
                          <label
                            htmlFor="checked-toggle"
                            className="inline-flex relative items-center cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              value={check}
                              id="checked-toggle"
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
                            <div className="flex flex-col ">
                              <span className="ml-3  text-md font-medium text-gray-900">
                                File
                              </span>
                              <div className="md:flex flex-col ">
                                {/* <div className="md:w-1/3"></div> */}
                                <div className="upload-section flex h-full  mb-[10px] w-full">
                                  <Dropzone
                                    onDrop={onDropPdf}
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
                                          Drag and drop a file OR click here to
                                          select a file
                                        </p>
                                        {pdf && (
                                          <div>
                                            <strong>Selected file:</strong>{" "}
                                            {pdf.name}
                                          </div>
                                        )}
                                      </div>
                                    )}
                                  </Dropzone>
                                </div>
                              </div>
                              <div className="md:w-2/3 ">
                                <button
                                  className="shadow w-full  bg-[#000080] hover:bg-[#0000d0] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                  type="button"
                                  onClick={() =>
                                    props.file_upload(props.id, pdf)
                                  }
                                >
                                  Add
                                </button>
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="flex flex-col">
                              {/* <div className=""> */}
                              <span className="ml-3  text-md font-medium text-gray-900">
                                Link
                              </span>
                              <input
                                type="text"
                                name="Link"
                                // id=""
                                ref={userRef}
                                onChange={(e) => setLink(e.target.value)}
                                value={link}
                                placeholder="link"
                                className=" bg-gray-200 appearance-none border-2 mb-3 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#000080]"
                              />
                            </div>
                            <div className="md:w-2/3 mt-2 mb-16 ">
                              <button
                                className="shadow w-full  bg-[#000080] hover:bg-[#0000d0] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                type="button"
                                onClick={() =>
                                  props.Link_upload(props.id, link)
                                }
                              >
                                Add
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                    </form>
                  </>
                )}
              </>
            );
          })}
      </>
      {auth && (
        <>
          <form
            method="POST"
            className="flex flex-col justify-center content-center max-w-sm   ml-auto mr-auto mb-5"
          >
            <h2 className="text-xl uppercase font-bold ml-10 mb-4 mt-[0] mr-auto flex flex-row justify-center items-center text-[#000080]">
              <p>Update data</p>
            </h2>
            <h2 className="text-xl uppercase font-bold ml-10 mb-4 mt-[0] mr-auto flex flex-row justify-center items-center text-red-500">
              <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>
                {errMsg}
              </p>
            </h2>
            <div className="mb-3">
              <textarea
                name="para"
                // id=""
                cols="10"
                rows="5"
                ref={userRef}
                onChange={(e) => setPara(e.target.value)}
                value={para}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#000080]"
                placeholder="Enter Paragraph Here"
              ></textarea>
            </div>
            <div className="md:w-2/3 ">
              <button
                className="shadow w-full  bg-[#000080] hover:bg-[#0000d0] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mb-5 rounded"
                type="button"
                onClick={() => props.add_para(props.id, para)}
              >
                Add Para
              </button>
            </div>
            <div className="md:flex flex-col md:items-center h-full">
              <div className="upload-section flex h-full mb-[10px] w-full">
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
                      <p>Drag and drop a file OR click here to select a file</p>
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
              <div className="md:w-2/3 ">
                <button
                  className="shadow w-full  bg-[#000080] hover:bg-[#0000d0] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="button"
                  onClick={() => props.submit_img(props.id, file)}
                >
                  Add Image
                </button>
              </div>
            </div>
          </form>
        </>
      )}
    </figure>
  );
};

export default Common_dat;
