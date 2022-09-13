import React, { useContext, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../../../../Context/AuthProvider";
import Dropzone from "react-dropzone";
import axios from "axios";
import "../../../Societies.css";
// import DepartBanner from "../../../../Components/Banners/DepartBanner";
// import Biochemistry from "../../../../Components/DepartSIde/Biochemistry";
import Engbanner from "../English/Engbanner";
import English from "../../../../Components/DepartSIde/English";


function Events() {
  const [visible, setVisible] = useState(false);
  const [data1, setData1] = useState();
  const userRef = useRef();
  const errRef = useRef();
  const dropRef = useRef();
  const [caption, setCaption] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [previewSrc, setPreviewSrc] = useState("");
  const [isPreviewAvailable, setIsPreviewAvailable] = useState(false);
  const [file, setFile] = useState(null);
  const [pdf, setPdf] = useState(null);
  const { auth, setAuth } = useContext(AuthContext);

  const fetchdata = async () => {
    const response = await fetch("/Eng_Events");
    setData1(await response.json());
  };

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

  useEffect(() => {
    fetchdata();
  }, []);

  const del = async (id) => {
    // console.log(id);
    const response = await fetch(`/delete_Eng_Events/${id}`, {
      method: "POST",
    });
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

  const updateBorder = (dragState) => {
    if (dragState === "over") {
      dropRef.current.style.border = "2px solid #000";
    } else if (dragState === "leave") {
      dropRef.current.style.border = "2px dashed #e9ebeb";
    }
  };

  const handleSubmit_file = async (id, pdf) => {
    try {
      if (pdf) {
        await axios.post(
          `/Eng_Events_file_add/${id}`,
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
        setPdf("");
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
      if (caption.trim() !== "") {

        setErrMsg("");
        console.log(file, caption);
        await axios.post(
          `/Eng_Events_add`,
          { file: file, title: caption },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setCaption("");
        setFile("");
        setPreviewSrc("");
        setIsPreviewAvailable(false);
        setAuth(true);
        fetchdata();
      } else {
        // setErrMsg("Please select a file to add.");
        setErrMsg("Please enter all the field values.");
      }
    } catch (err) {
      err.response && setErrMsg(err.response.data);
    }
  };
  return (
    <>
      <div className="">
        <Engbanner />
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
                <English />
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
          <English />
        </div>
        <div className="flex flex-col md:w-[1100px]">
          <div className="">
            <h2 className="md:text-4xl text-lg uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center  items-center ">
              Events
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {data1 &&
              data1.sort(sortOn("title")).map((currElem) => {
                const { _id, title, img_data } = currElem;
                return (
                  <div className="flex flex-col ">
                    <div class="first1 fac1" key={_id}>
                      <div class="hero-description-bk"></div>
                      <div className="">
                        <div className="">
                          {img_data.file_path &&
                            img_data.file_path.map((elem) => {
                              var path2 = elem.file_path1.replace(/\\/g, "/");
                              var path = path2.slice(19);
                              return (
                                <>
                                  <img
                                    class="Fac-img1"
                                    src={path}
                                    alt=""
                                  />
                                </>
                              );
                            })}
                          <div class="hero-description-bk"></div>
                          <div class="Fac-description ">
                            <p className="font-medium">{title}</p>
                          </div>
                          {img_data.pdf_path &&
                            img_data.pdf_path.map((elem) => {
                              const path2 = elem.pdf_path1.replace(/\\/g, "/");
                              const path = path2.slice(19);
                              return (
                                <>
                                  {elem.value === "true" && (
                                    <>
                                      <a href={path}>
                                        <div class="hero-btn ml-12">
                                          Learn More
                                        </div>
                                      </a>
                                    </>
                                  )}
                                </>
                              );
                            })}
                        </div>
                      </div>
                      {auth && (
                        <>
                          <div className="flex flex-col">
                            <FontAwesomeIcon
                              icon={faTrashCan}
                              size="lg"
                              className="mt-6 cursor-pointer absolute right-0 bottom-5 mr-16 hover:text-black text-white"
                              onClick={() => del(_id)}
                            ></FontAwesomeIcon>
                          </div>
                        </>
                      )}
                    </div>
                    {img_data.pdf_path &&
                      img_data.pdf_path.map((elem) => {
                        return (
                          <>
                            {auth && elem.value != "true" && (
                              <>
                                <div
                                  className="flex flex-col justify-center content-center max-w-sm w-[220px]  ml-auto mr-auto mb-5"
                                  key={_id}
                                >
                                  <p>Events file</p>
                                  <div class="md:flex flex-col md:items-center h-full ">
                                    <div className="upload-section flex h-full mb-[10px] ">
                                      <Dropzone
                                        onDrop={onDropPdf}
                                        onDragEnter={() => updateBorder("over")}
                                        onDragLeave={() =>
                                          updateBorder("leave")
                                        }
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
                                              Drag and drop a file OR click here
                                              to select a file
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
                                    <div class="md:w-[220px]  ">
                                      <button
                                        class="shadow w-full  bg-[#000080] hover:bg-[#0000d0] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                        type="button"
                                        onClick={() =>
                                          handleSubmit_file(_id, pdf)
                                        }
                                      >
                                        Add Event file
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </>
                            )}
                          </>
                        );
                      })}
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      {auth && (
        <>
          <form
            method="post"
            className="flex flex-col justify-center content-center max-w-sm  full ml-auto mr-auto mb-5"
          >
            <h2 className="text-xl uppercase font-bold ml-10 mb-4 mt-[0] mr-auto flex flex-row justify-center items-center text-red-500">
              <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>
                {errMsg}
              </p>
            </h2>
            <div className="mb-3">
              <textarea
                name="Caption"
                cols="10"
                rows="5"
                ref={userRef}
                onChange={(e) => setCaption(e.target.value)}
                value={caption}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#000080]"
                placeholder="Title of Society"
              ></textarea>
            </div>
            <div class="md:flex flex-col md:items-center h-full">
              {/* <div class="md:w-1/3"></div> */}
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
    </>
  );
}

export default Events;
