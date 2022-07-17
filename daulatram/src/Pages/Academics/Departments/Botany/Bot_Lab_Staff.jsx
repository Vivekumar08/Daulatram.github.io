import React, { useContext, useEffect, useRef, useState } from "react";
import AuthContext from "../../../../Context/AuthProvider";
import Dropzone from "react-dropzone";
import axios from "axios";
import Botany from "../../../../Components/DepartSIde/Botany";
import Botanybanner from "../Botany/Botanybanner.jsx";

import Bot_fac_data from "./Bot_fac_data";
import Bot_fac_data_sup from "./Bot_fac_data_sup";

const Bot_faculty = () => {
  const [data1, setData1] = useState();
  const userRef = useRef();
  const errRef = useRef();
  const dropRefImg = useRef();
  const dropRef = useRef();
  const [filter, setFilter] = useState("");
  const [link, setLink] = useState("");
  const [caption, setCaption] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [previewSrcImg, setPreviewSrcImg] = useState("");
  const [isPreviewAvailableImg, setIsPreviewAvailableImg] = useState(false);
  const [imag, setImg] = useState(null);
  const { auth, setAuth } = useContext(AuthContext);

  const fetchdata = async () => {
    const response = await fetch("http://localhost:5000/bot_Lab_faculty");
    setData1(await response.json());
  };

  const onDropImg = (files) => {
    const [uploadedFile] = files;
    setImg(uploadedFile);
    // setData(prev=>({...prev,image:uploadedFile}))

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewSrcImg(fileReader.result);
    };
    fileReader.readAsDataURL(uploadedFile);
    setIsPreviewAvailableImg(uploadedFile.name.match(/\.(jpeg|jpg|png)$/));
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

  const del = async (id) => {
    console.log(id);
    const response = await fetch(
      `http://localhost:5000/delete_bot_Lab_faculty/${id}`,
      {
        method: "POST",
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
    // setFile({imag,pdf} );
    // console.log(data);
    try {
      if (link.trim() !== "" && caption.trim() !== "") {
        if (imag) {
          // setErrMsg("");
          console.log(link, caption, imag, filter);
          const data = await axios.post(
            `http://localhost:5000/bot_Lab_faculty_file_upload`,
            // { method: "POST" },
            { title: caption, description: link, file: imag, filter: filter },
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          setCaption("");
          setLink("");
          setFile("");
          setAuth(true);
          fetchdata();
        } else {
          setErrMsg("Please select a file to add.");
        }
      } else {
        setErrMsg("Please enter all the field values.");
      }
    } catch (err) {
      err.response && setErrMsg(err.response.data);
    }
  };

  return (
    <div className=" flex flex-col">
      <Botanybanner />
      <div className="flex flex-row">
        <div className="w-[350px] ml-2 mt-12">
          <Botany />
        </div>
        <div className="w-[1100px]">
          <h2 className=" text-3xl md:text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center  ">
            Laboratory Stuff
          </h2>
          <div className="  ">
            <h2 className="text-2xl uppercase font-bold  flex   ">
              Dedicated Laboratory Staff
            </h2>
          </div>
          <div class="grid grid-cols-1 ml-5 md:grid-cols-3 w-full mt-5 mb-5">
            {data1 &&
              data1.map((curElem) => {
                const { _id, title, description, img_data, filter } = curElem;
                console.log(curElem);
                return (
                  <>
                    {img_data&&img_data.file_path.map((elem) => {
                      var path2 = elem.file_path1.replace(/\\/g, "/");
                      var path = path2.slice(19);
                      return (
                        <>
                          <div class="first1 fac1 " key={_id}>
                            <img class="Fac-img1" src={path} alt="" />
                            <div class="fac-description-bk"></div>

                            <div class="Fac-description1">
                              <p>{description}</p>
                              <p className="font-medium"> {title}</p>
                              <p>Date of Joining: {filter}</p>
                            </div>
                          </div>
                        </>
                      );
                    })}
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
                    name="Link"
                    // id=""
                    ref={userRef}
                    onChange={(e) => setLink(e.target.value)}
                    value={link}
                    placeholder="Enter Name of Faculty"
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
                    placeholder="Designation"
                  ></textarea>
                </div>
                <div className="mb-3">
                  <input
                    value={filter}
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#000080]"
                    onChange={(e) => setFilter(e.target.value)}
                    placeholder="Date of Joining eg:(DD/MM/YYYY)"
                  />
                </div>
                <div class="md:flex flex-col md:items-center">
                  {/* <div class="md:w-1/3"></div> */}
                  <p>Image of the Faculty</p>
                  <div className="upload-section flex h-[200px] mb-[10px] w-full">
                    <Dropzone
                      onDrop={onDropImg}
                      onDragEnter={() => updateBorder("over")}
                      onDragLeave={() => updateBorder("leave")}
                    >
                      {({ getRootProps, getInputProps }) => (
                        <div
                          {...getRootProps({
                            className:
                              "drop-zone mb-[10px] py-[40px] px-[10px] flex flex-col justify-center items-center cursor-pointer focus:outline-none border-2 border-dashed border-[#e9ebeb] w-full h-full",
                          })}
                          ref={dropRefImg}
                        >
                          <input {...getInputProps()} />
                          <p>
                            Drag and drop a file OR click here to select a file
                          </p>
                          {imag && (
                            <div>
                              <strong>Selected file:</strong> {imag.name}
                            </div>
                          )}
                        </div>
                      )}
                    </Dropzone>
                    {previewSrcImg ? (
                      isPreviewAvailableImg ? (
                        <div className="image-preview ml-[5%] w-full">
                          <img
                            className="preview-image w-full h-full block mb-[10px]"
                            src={previewSrcImg}
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
                </div>
                <div class="md:w-2/3 h-full ">
                  <button
                    class="shadow w-full  bg-[#000080] hover:bg-[#0000d0] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Add
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Bot_faculty;
