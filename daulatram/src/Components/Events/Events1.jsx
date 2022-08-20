import React, { useContext, useEffect, useRef, useState } from "react";
import Dropzone from "react-dropzone";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import "./Carousel.css";
import AuthContext from "../../Context/AuthProvider";
import Events_data from "./Events_data";

const Events1 = () => {
  const [data1, setData1] = useState();
  const userRef = useRef();
  const errRef = useRef();
  const dropRefImg = useRef();
  const dropRef = useRef();
  const [caption, setCaption] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [previewSrcImg, setPreviewSrcImg] = useState("");
  const [isPreviewAvailableImg, setIsPreviewAvailableImg] = useState(false);
  const [imag, setImg] = useState(null);
  const { auth, setAuth } = useContext(AuthContext);
  const [moveClass, setMoveClass] = useState("");

  useEffect(() => {
    document.documentElement.style.setProperty("--num", data1 && data1.length);
  }, [data1]);

  const handleAnimationEnd = (e) => {
    e.preventDefault();
    if (moveClass === "prev") {
      shiftNext([...data1]);
    } else if (moveClass === "next") {
      shiftPrev([...data1]);
    }
    setMoveClass("");
  };

  const shiftPrev = (copy) => {
    let lastcard = copy.pop();
    copy.splice(0, 0, lastcard);
    setData1(copy);
  };

  const shiftNext = (copy) => {
    let firstcard = copy.shift();
    copy.splice(copy.length, 0, firstcard);
    setData1(copy);
  };

  const fetchdata = async () => {
    const response = await fetch("/Events_and_Activities");
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
    const response = await fetch(`/delete_Events_and_Activities/${id}`, {
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
    try {
      console.log(link);
      await axios.post(`/Events_and_Activities_add_link/${id}`, {
        link: link,
      });
      setCaption("");
      setAuth(true);
      fetchdata();
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit_file = async (id, pdf) => {
    console.log(id);
    try {
      console.log(pdf);
      if (pdf) {
        await axios.post(
          `/Events_and_Activities_file_upload/${id}`,
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
        if (imag) {
          setErrMsg("");
          await axios.post(
            `/Events_and_Activities_upload`,
            { title: caption, file: imag },
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

      <div className="carouselwrapper module-wrapper">
        <div className={data1 && data1.length >4 && "ui"}>
          <button onClick={() => setMoveClass("next")} className="prev">
            <FontAwesomeIcon icon={faArrowLeft} size="2xl" />
          </button>
          <button onClick={() => setMoveClass("prev")} className="next">
            <FontAwesomeIcon icon={faArrowRight} size="2xl" />
          </button>
        </div>
        <div
          onAnimationEnd={handleAnimationEnd}
          className={`${moveClass} carousel_car `}
        >
          {/* {carouselItems.map((t, index) => 
          <Card key={t.copy + index} icon={t.icon} copy={t.copy} />
        )} */}
          {data1 &&
            data1.map(
              (t, index) => (
                // const { _id, title, img_data } = curElem;
                // return (
                <Events_data
                  key={t._id + index}
                  id={t._id}
                  title={t.title}
                  img_data={t.img_data}
                  delete={del}
                  file_upload={handleSubmit_file}
                  Link_upload={handleSubmit_link}
                />
              )
              // );
            )}
        </div>
      </div>

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
                name="Title"
                // id=""
                ref={userRef}
                onChange={(e) => setCaption(e.target.value)}
                value={caption}
                placeholder="Enter Name of Event"
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#000080]"
              />
            </div>
            <div class="md:flex flex-col md:items-center">
              {/* <div class="md:w-1/3"></div> */}
              <p>Image of the Event</p>
              <div className="upload-section flex h-full mb-[10px] w-full">
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
                onClick={handleSubmit}
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
