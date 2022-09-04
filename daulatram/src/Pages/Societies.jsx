import React, { useState, useRef, useEffect, useContext } from "react";
import "./Societies.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../Context/AuthProvider";
import Dropzone from "react-dropzone";
import axios from "axios";
import { Link } from "react-router-dom";

const Societies = () => {
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
    const response = await fetch("/Socitie");
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
    const response = await fetch(`/delete_Socities/${id}`, {
      method: "DELETE",
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
        await axios.post(`/Soc`, formData, {
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
    <>
      <div
        className="Banner"
        style={{ backgroundImage: "url(/images/img1.jpeg)" }}
      >
        <div className="name">
          <div className="flex flex-row justify-center">
            <p className="  text-[#fff] text-6xl  mt-12 font-bold  p-5 flex justify-center w-full rounded-md  ">
              Societies{" "}
            </p>
          </div>

          <div className=" bg-gray-400 pt-3 pb-3 pl-5 text-lg text-[#000080] mt-28 ">
            <Link to={"/"}>
              <span className="ml-5">Home</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="main_head">
        <h1>
          <span>Societies</span>
        </h1>
      </div>

      {data1 &&
        data1.sort(sortOn("title")).map((currElem) => {
          const { _id, title, file_path, link } = currElem;
          var path_pic = file_path;
          var path2 = path_pic.replace(/\\/g, "/");
          var path = path2.slice(19);
          return (
            <div class="first1 fac1" key={_id}>
              <img class="Fac-img1" src={path} alt="" />
              <div class="hero-description-bk"></div>
              <div className="">
                <div className="">
                  <div class="hero-description ">
                    <p className="font-medium"> {title}</p>
                  </div>
                  <a href={link} target="_blank">
                    <div class="hero-btn ml-12">Learn More</div>
                  </a>
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
          );
        })}
      {auth && (
        <>
          <form
            method="post"
            className="flex flex-col justify-center content-center max-w-sm   ml-auto mr-auto mb-5"
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
                placeholder="Google Site link"
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
                placeholder="Title of Society"
              ></textarea>
            </div>
            <div class="md:flex flex-col md:items-center">
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
};

export default Societies;
