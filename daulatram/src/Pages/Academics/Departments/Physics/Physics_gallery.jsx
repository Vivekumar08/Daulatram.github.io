import { Link } from "react-router-dom";
import React, { useContext, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../../../../Context/AuthProvider";
import Dropzone from "react-dropzone";
import axios from "axios";
import Physicsbanner from "./Physicsbanner";
import Physics from "../../../../Components/DepartSIde/Physics";
// import "../../../AboutUs/stl.css";

function Physics_gallery() {
  const [data1, setData1] = useState();
  const errRef = useRef();
  const dropRef = useRef();
  const [errMsg, setErrMsg] = useState("");
  const [previewSrc, setPreviewSrc] = useState("");
  const [isPreviewAvailable, setIsPreviewAvailable] = useState(false);
  const [file, setFile] = useState(null);
  const { auth, setAuth } = useContext(AuthContext);

  const fetchdata = async () => {
    const response = await fetch("http://localhost:5000/Physics_Gallery");
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
      `http://localhost:5000/delete_Physics_Gallery/${id}`,
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
      if (file) {
        const formData = new FormData();
        formData.append("file", file);

        setErrMsg("");
        await axios.post(`http://localhost:5000/Physics_Gallery_add`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        setFile("");
        setIsPreviewAvailable(false);
        setPreviewSrc("");
        setAuth(true);
        fetchdata();
      } else {
        setErrMsg("Please select a file to add.");
      }
    } catch (err) {
      setErrMsg(err.response.data);
    }
  };

  return (
    <>
      {/* <div className=" flex flex-col"> */}
        <Physicsbanner />

        <div className="flex flex-row">
          <div className="flex  flex-col mt-12 ml-2 ">
            <Physics />
          </div>

          <div className="w-[1100px]">
            <h2 className="text-3xl md:text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center   ">
              Photo Gallery
            </h2>
            <div className="main_conta">
              <div class="sliderr">
                <div class="slidee-track">
                  {data1 &&
                    data1.map((curElem) => {
                      const { _id, file_path } = curElem;
                      var path_pic = file_path;
                      var path2 = path_pic.replace(/\\/g, "/");
                      var path = path2.slice(19);
                      return (
                        <>
                          <div class="slidee" key={_id}>
                            <img src={path} alt={path} />
                          </div>
                        </>
                      );
                    })}
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-4">
              {data1 &&
                auth &&
                data1.map((curElem) => {
                  const { _id, file_path } = curElem;
                  var path_pic = file_path;
                  var path2 = path_pic.replace(/\\/g, "/");
                  var path = path2.slice(19);
                  return (
                    <>
                      <div class="flex flex-col items-center mb-5" key={_id}>
                        <img
                          src={path}
                          style={{ height: "250px", width: "250px" }}
                          alt={path}
                        />
                        <div>
                          <FontAwesomeIcon
                            icon={faTrashCan}
                            size="xl"
                            className=" cursor-pointer ml-auto mr-auto mt-[25%]   hover:text-red-500"
                            onClick={() => del(_id)}
                          ></FontAwesomeIcon>
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>
          </div>
        </div>
      {/* </div> */}
      {auth && (
        <form
          method="post"
          className="flex flex-col h-full justify-center content-center max-w-sm mt-5 ml-auto mr-auto mb-16"
        >
          <h2 className="text-xl uppercase font-bold ml-10 mb-4 mt-5 mr-auto flex flex-row justify-center items-center text-red-500">
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>
              {errMsg}
            </p>
          </h2>
          <div class="md:flex flex-col h-full ">
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
                        "drop-zone mb-[10px] py-[40px] px-[10px] flex flex-col justify-center items-center cursor-pointer focus:outline-none border-2 border-dashed border-[#e9ebeb] w-full ",
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
      )}
    </>
  );
}

export default Physics_gallery;