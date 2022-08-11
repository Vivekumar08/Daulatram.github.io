import React, { useContext, useEffect, useRef, useState } from "react";
import Dropzone from "react-dropzone";
import axios from "axios";
import AuthContext from "../../Context/AuthProvider";

import Events_data from "./Events_data";

const Events1 = () => {
  const [data1, setData1] = useState();
  const userRef = useRef();
  const errRef = useRef();
  const dropRefImg = useRef();
  const dropRef = useRef();
  const [filter, setFilter] = useState("Current");
  const [link, setLink] = useState("");
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [previewSrcImg, setPreviewSrcImg] = useState("");
  const [isPreviewAvailableImg, setIsPreviewAvailableImg] = useState(false);
  const [imag, setImg] = useState(null);
  const { auth, setAuth } = useContext(AuthContext);

  const fetchdata = async () => {
    const response = await fetch("/bio_faculty");
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
    const response = await fetch(`/delete_bio_faculty/${id}`, {
      method: "POST",
    });
    const data = await response.json();
    if (data || response.status === 200) {
      fetchdata();
    } else {
      setErrMsg("Unable to Delete");
    }
  };

  const handleSubmit_link = async (id, link) => {
    const response = await fetch(`/admission_online_add_link/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        link: link,
      }),
    });
    const data = await response.json();
    if (!data) {
      setErrMsg("No Server Response");
    } else if (response.status === 400) {
      setErrMsg("Fill Complete Details");
    } else {
      setCaption("");
      setLink("");
      setFile(null);
      setAuth(true);
      fetchdata();
    }
  };

  const handleSubmit_file = async (id, pdf) => {
    console.log(id);
    try {
      console.log(pdf);
      if (pdf) {
        await axios.post(
          `/bio_faculty_cv_upload/${id}`,
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
        setLink("");
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
      if (link.trim() !== "" && caption.trim() !== "") {
        if (imag) {
          // setErrMsg("");
          console.log(link, caption, imag, filter);
          const data = await axios.post(
            `/bio_faculty_file_upload`,
            { title: caption, description: link, file: imag, filter: filter },
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          setCaption("");
          setImg("");
          setIsPreviewAvailableImg(false);
          setPreviewSrcImg("");
          setLink("");
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
    <>
      <div className="quick_links flex flex-row items-center mt-6 justify-center text-center text-white font-bold  ">
        <span className="uppercase w-full font-bold text-2xl">
          College Events and Activities
        </span>
      </div>
      {data1 &&
        data1.map((curElem) => {
          // const { _id, title, img_data } = curElem;
          // console.log(curElem);
          return (
            <>
              <Events_data
                // key={_id}
                // id={_id}
                // title={title}
                // img_data={img_data}
                delete={del}
                file_upload={handleSubmit_file}
                Link_upload={handleSubmit_link}
              />
            </>
          );
        })}
        <Events_data/>
      {/* </div> */}
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
                name="Title"
                // id=""
                ref={userRef}
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                placeholder="Enter Name of Faculty"
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#000080]"
              />
            </div>
            <div class="md:flex flex-col md:items-center">
              {/* <div class="md:w-1/3"></div> */}
              <p>Image of the Event</p>
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
                      <p>Drag and drop a file OR click here to select a file</p>
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
                onClick={()=>handleSubmit}
              >
                Add
              </button>
            </div>
          </form>
        </>
      )}
    </>
  );
};

export default Events1;
