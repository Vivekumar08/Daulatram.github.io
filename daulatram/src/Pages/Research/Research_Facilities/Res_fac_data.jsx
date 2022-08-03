import React, { useState, useContext, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../../../Context/AuthProvider";
import Dropzone from "react-dropzone";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Res_fac_data = (props) => {
  const [visible, setVisible] = useState(false);
  const errRef = useRef();
  const dropRef = useRef();
  const [previewSrc, setPreviewSrc] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [file, setFile] = useState("");
  const [isPreviewAvailable, setIsPreviewAvailable] = useState(false);

  const { auth, setAuth } = useContext(AuthContext);

  var path_pic = props.pic;
  // console.log(path_pic.file_path);

  const del = async (id) => {
    console.log(id);
    const response = await fetch(
      `/delete_research_fac/${id}`,
      {
        method: "POST",
      }
    );
    await response.json();
    if (response.status === 200) {
      // navigate('/research/research_facilities')
      window.location.reload();
      setErrMsg("");
    } else if (response.status === 400) {
      window.location.reload();
      setErrMsg("First Delete all the images related to this section");
    }
  };
  const dele = async (id, pid, file_path1) => {
    console.log(id);
    console.log(file_path1);
    const response = await axios.post(
      `/delete_img_research_fac/${id}`,
      { file_path1: file_path1, pid: pid },
      {
        method: "POST",
      }
    );
    window.location.reload();
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

  const handleSubmit = async (id) => {
    // id.preventDefault();
    try {
      if (file) {
        console.log(file);
        // console.log(e);

        setErrMsg("");
        const response = await axios.post(
          `/research_img_upload/${id}`,
          { file: file },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        // const data = await response.json();
        setAuth(true);
        window.location.reload();
      } else {
        setErrMsg("Please select a file to add.");
        //   setErrMsg("Please enter all the field values.");
      }
      // } else {
      // }
    } catch (err) {
      err.response && setErrMsg(err.response.data);
    }
  };

  return (
    <figure className="flex flex-col">
      <div className="flex flex-row w-full">
        <div
          className="flex items-center w-full py-4 cursor-pointer"
          onClick={() => setVisible(!visible)}
        >
          <h1 className="font-bold flex-shrink pr-4 text-2xl">
            {props.tittle}
          </h1>
          <div class="flex-grow h-px bg-gray-400"></div>
          {visible ? (
            <FontAwesomeIcon icon={faChevronUp} className="pl-4" />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} className="pl-4" />
          )}
        </div>
        <span className="ml-6">
          {auth && (
            <>
              <div className="flex flex-col">
                <FontAwesomeIcon
                  icon={faTrashCan}
                  size="lg"
                  className="mt-6 cursor-pointer ml-auto mr-16 hover:text-red-500"
                  onClick={() => del(props.id)}
                ></FontAwesomeIcon>
              </div>
            </>
          )}
        </span>
      </div>
      <h2 className="text-xl uppercase font-bold ml-10 mb-4 mt-[0] mr-auto flex flex-row justify-center items-center text-red-500">
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>
          {errMsg}
        </p>
      </h2>
      {visible && <p>{props.para}</p>}
      {visible && (
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
                    className="bg-cover bg-no-repeat bg-center mt-5 rounded-lg border-2   border-black"
                  />
                  {auth && (
                    <>
                      <div className="flex flex-col">
                        <FontAwesomeIcon
                          icon={faTrashCan}
                          size="3x"
                          className=" cursor-pointer ml-5  hover:text-red-500"
                          onClick={() =>
                            dele(props.id, elem._id, elem.file_path1)
                          }
                        ></FontAwesomeIcon>
                      </div>
                    </>
                  )}
                </div>
              </>
            );
          })}
        </>
      )}
      {auth && visible && (
        <>
          <form
            method="POST"
            className="flex flex-col justify-center content-center max-w-sm  h-[450px] ml-auto mr-auto mb-5"
          >
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
                onClick={() => handleSubmit(props.id)}
              >
                Add Image
              </button>
            </div>
          </form>
        </>
      )}
    </figure>
  );
};

export default Res_fac_data;
