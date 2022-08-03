import React, { useContext, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../../../../Context/AuthProvider";
import Dropzone from "react-dropzone";
import axios from "axios";
import PhysicalEdubanner from "./PhysicalEdubanner.jsx";
import PhysicalEdu from "../../../../Components/DepartSIde/PhysicalEdu";

function PhysicalEdu_fac() {
  const [visible, setVisible] = useState(false);
  const [data1, setData1] = useState();
  const userRef = useRef();
  const errRef = useRef();
  const dropRef = useRef();
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [Qualification, setQualification] = useState("");
  const [email, setEmail] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [previewSrc, setPreviewSrc] = useState("");
  const [isPreviewAvailable, setIsPreviewAvailable] = useState(false);
  const [file, setFile] = useState(null);
  const { auth, setAuth } = useContext(AuthContext);

  const fetchdata = async () => {
    const response = await fetch("/PE_Fac");
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
    const response = await fetch(`/delete_PE_Fac/${id}`, {
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
    console.log(name,email,Qualification,designation, file)
    try {
      if (name.trim() !== "" && designation.trim() !== "" && Qualification !=="" && email !=="") {
        // if (file) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("name", name);
        formData.append("Designation", designation);
        formData.append("Qualification", Qualification);
        formData.append("email", email);

        setErrMsg("");
        console.log(formData);
        await axios.post(`/PE_Fac_add`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        setName("")
        setDesignation("")
        setQualification("")
        setEmail("")
        setFile("")
        setIsPreviewAvailable(false)
        setPreviewSrc("")
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
        <PhysicalEdubanner />
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
                <PhysicalEdu />
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
        <div className="w-[250px]  md:flex hidden md:flex-col mt-12 ml-2 ">
          <PhysicalEdu />
        </div>
        <div className="w-full mr-16">
          <h2 className="md:text-4xl text-xl sm:text-xl uppercase font-bold mb-5 mt-[7%] flex flex-row ml-3 md:justify-center items-center  ">
            Faculty
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-full mt-5 mb-5  ">
            {data1 &&
              data1.map((curElem) => {
                const {
                  _id,
                  name,
                  Designation,
                  Qualification,
                  email,
                  file_path,
                } = curElem;
                var path_pic = file_path;
                var path2 = path_pic.replace(/\\/g, "/");
                var path = path2.slice(19);
                return (
                  <>
                  
                    <div className="mr-5 ml-12 mb-10">
                      <img
                        src={path}

                        className="bg-center bg-no-repeat w-[300px] h-[300px] mt-[1%] bg-cover  mr-auto  mb-1 rounded-3xl border-2 border-black"
                      />
                      <div className="pr-3 pl-3 flex mr-auto  w-[320px] ">
                        <span className="md:text-lg text-sm text-justify mt-3 ">
                          <ul>
                            <li className="flex justify-center">
                              <b>{name}</b>
                            </li>
                    <br />

                            <li>
                              <b>Designation</b>: {Designation}
                            </li>
                            <li>
                              <b>Qualification</b>: {Qualification}
                            </li>

                            <li>
                              <b>E-mail</b>: {email}
                            </li>
                          </ul>
                        </span>
                      </div>
                      {auth && (
                        <>
                          <div className="flex flex-col w-full">
                            <FontAwesomeIcon
                              icon={faTrashCan}
                              size="lg"
                              className=" cursor-pointer ml-auto  hover:text-red-500"
                              onClick={() => del(_id)}
                            ></FontAwesomeIcon>
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
                  <input
                    type="text"
                    name="Name"
                    // id=""
                    ref={userRef}
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder="Name of the Faculty"
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#000080]"
                  />
                </div>
                <div className="mb-3">
                  <input
                    name="Designation"
                    // id=""
                    ref={userRef}
                    onChange={(e) => setDesignation(e.target.value)}
                    value={designation}
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#000080]"
                    placeholder="Designation"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    name="Qualification"
                    // id=""
                    cols="10"
                    rows="5"
                    ref={userRef}
                    onChange={(e) => setQualification(e.target.value)}
                    value={Qualification}
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#000080]"
                    placeholder="Qualification"
                  ></textarea>
                </div>
                <div className="mb-3">
                  <input
                    name="Email"
                    // id=""
                    ref={userRef}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#000080]"
                    placeholder="Email"
                  />
                </div>
                <div class="md:flex flex-col h-full md:items-center">
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
}

export default PhysicalEdu_fac;
