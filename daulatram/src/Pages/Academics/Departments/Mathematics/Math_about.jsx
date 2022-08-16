import React, { useContext, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan,faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../../../../Context/AuthProvider";
import Dropzone from "react-dropzone";
import axios from "axios";
import DepartBanner from "./Mathbanner";
import Sidebar from "../../../../Components/DepartSIde/Mathematics";

const Math = () => {
  const [visible, setVisible] = useState(false);
  const [data1, setData1] = useState();
  const userRef = useRef();
  const errRef = useRef();
  const dropRef = useRef();
  const [para, setPara] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [previewSrc, setPreviewSrc] = useState("");
  const [isPreviewAvailable, setIsPreviewAvailable] = useState(false);
  const [file, setFile] = useState(null);
  const { auth, setAuth } = useContext(AuthContext);


  const fetchdata = async () => {
    const response = await fetch("/Math_About");
    const dat = await response.json();
    console.log(dat);
    {
      dat ? dat.map((elem) => setData1(elem)) : setData1(dat);
    }
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


  const del = async (id, pid, type) => {
    try {
      const arr = { pid: pid, type: type };
      console.log(id, arr);
      const response = await fetch(
        `/delete_Math_About_data/${id}`,
        {
          method: "POST",
          body: JSON.stringify(arr),
          headers: { "Content-Type": "application/json" },
        }
      );
      await response.json();
      if (response.status === 200) {
        fetchdata();
      } else if (response.status === 202) {
        fetchdata();
      } else {
        setErrMsg("");
      }
    } catch (err) {
      console.log("Unable to delete");
    }
  };

  const handleSubmit = async (files) => {
    try {
      if (files) {
        console.log(files);
        setErrMsg("");
        await axios.post(
          `/Math_About_add`,
          { file: files },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setFile("");
        setPreviewSrc("");
        setIsPreviewAvailable(false);
        setAuth(true);
        fetchdata();
      } else {
        setErrMsg("Please select a file to add.");
      }
    } catch (err) {
      err.response && setErrMsg(err.response.data);
    }
  };
  const handleSubmit_data = async (id) => {
    try {
      if (para !== "") {
        setErrMsg("");
        const arr = { para1: para };
        console.log(arr);
        await fetch(`/Math_About_add_data/${id}`, {
          method: "POST",
          body: JSON.stringify(arr),
          headers: { "Content-Type": "application/json" },
        });
        setPara("");
        setAuth(true);
        fetchdata();
      } else {
        setErrMsg("Please enter all the field values.");
      }
    } catch (err) {
      err.response && setErrMsg(err.response.data);
    }
  };


  return (
    <>
      <div className="">
        <DepartBanner />
      </div>
      <div className="flex flex-row">
        <div className="md:hidden absolute bg-white">
          {visible ? (
            <>
              <div className=" flex  flex-col mt-8 ml-2">
                <FontAwesomeIcon
                  icon={faClose}
                  size="lg"
                  onClick={() => setVisible(!visible)}
                  className=" border-2  border-[#000080] mr-2 hover:text-black text-white  rounded-lg p-2 cursor-pointer hover:bg-white bg-[#000080]"
                />
                <Sidebar />
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
        <div className=" md:flex hidden md:flex-col mt-12 ml-2">
          <Sidebar />
        </div>
        <div className=" w-full mr-16 ">
          <h2 className="text-3xl lg:text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
            About the Department
          </h2>
          <figure className="flex flex-col p-4 ">
            {data1 &&
              data1.img_data.file_path &&
              data1.img_data.file_path.map((elem) => {
                var path2 = elem.file_path1.replace(/\\/g, "/");
                var path = path2.slice(19);
                // console.log(path);
                return (
                  <>
                    <div className=" flex flex-row  items-center p-4">
                      <img
                        src={path}
                        style={{
                          width: "300px",
                          height: "250px",
                        }}
                        alt="founder"
                        className="rounded-3xl border-black border-2  md:h-[300px] md:w-[380px] ml-2 md:ml-28 lg:ml-80"
                      />
                      {auth && (
                        <>
                          <div className="flex  ml-auto">
                            <FontAwesomeIcon
                              icon={faTrashCan}
                              size="lg"
                              className=" cursor-pointer   hover:text-red-500"
                              onClick={() => del(data1._id, elem._id, "link")}
                            ></FontAwesomeIcon>
                          </div>
                        </>
                      )}
                    </div>
                  </>
                );
              })}
            {data1 &&
              data1.img_data.para &&
              data1.img_data.para.map((elem) => {
                return (
                  <>
                    <div className="flex flex-row  items-center p-4 ">
                      <span className="card-description leading-14 font-medium text-justify text-base md:text-lg  ">
                        {elem.para1}
                      </span>
                      {auth && (
                        <>
                          <div className="flex  w-full">
                            <FontAwesomeIcon
                              icon={faTrashCan}
                              size="lg"
                              className=" cursor-pointer ml-auto  hover:text-red-500"
                              onClick={() => del(data1._id, elem._id, "para")}
                            ></FontAwesomeIcon>
                          </div>
                        </>
                      )}
                    </div>
                  </>
                );
              })}
          </figure>
          {auth && data1 && (
            <>
              <form
                method="post"
                className="flex flex-col justify-center content-center max-w-sm w-full  full ml-auto mr-auto mb-5"
              >
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
                <div class="md:w-2/3 ">
                  <button
                    class="shadow w-full  bg-[#000080] hover:bg-[#0000d0] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="button"
                    onClick={() => handleSubmit_data(data1._id)}
                  >
                    Add Para
                  </button>
                </div>
              </form>
            </>
          )}
          {auth && !data1 && (
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
                <div class="md:flex flex-col md:items-center h-full">
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
                          <p>
                            Drag and drop a file OR click here to select a file
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
                        <p>Image preview will be shown here after selection</p>
                      </div>
                    )}
                  </div>
                  <div class="md:w-2/3 ">
                    <button
                      class="shadow w-full  bg-[#000080] hover:bg-[#0000d0] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                      type="button"
                      onClick={() => handleSubmit(file)}
                    >
                      Add Image
                    </button>
                  </div>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Math;
