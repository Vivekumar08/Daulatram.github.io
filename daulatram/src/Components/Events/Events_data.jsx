import React, { useContext, useEffect, useRef, useState } from "react";
import AuthContext from "../../Context/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Dropzone from "react-dropzone";

const Events_data = (props) => {
  const [data1, setData1] = useState();
  const errRef = useRef();
  const userRef = useRef();
  const [errMsg, setErrMsg] = useState("");
  const dropRef = useRef();
  const [previewSrc, setPreviewSrc] = useState("");
  const [pdf, setPdf] = useState(null);
  const [file, setFile] = useState("");
  const [check, setCheck] = useState(false)
  
  const { auth } = useContext(AuthContext);

  const fetchdata = async () => {
    const response = await fetch("/bio_faculty");
    setData1(await response.json());
  };

  useEffect(() => {
    fetchdata();
  }, []);

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
  const updateBorder = (dragState) => {
    if (dragState === "over") {
      dropRef.current.style.border = "2px solid #000";
    } else if (dragState === "leave") {
      dropRef.current.style.border = "2px dashed #e9ebeb";
    }
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={false}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        centerMode={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div className="small_box">
          <img
            className="event_img z=-10"
            style={{ width: "300px", height: "300px" }}
            src="images/IQAC1.jpg"
            alt="IQAC Events"
          />
          <span className="event_name text-4xl font-bold w-[200px] text-justify">
            IQAC Events
          </span>
          <a href="">
            <button className="read_btn ">Read More </button>
          </a>
        </div>

        <div className="small_box">
          <img
            className="event_img z=-10"
            style={{ width: "300px", height: "300px" }}
            src="images/Vidya.png"
            alt="IQAC Events"
          />
          <span className="event_name text-4xl font-bold w-[200px] text-justify">
            Vidya Vistar
          </span>
          <a href="">
            <button className="read_btn ">Read More </button>
          </a>
        </div>
        <div className="small_box">
          <img
            className="event_img z=-10"
            style={{ width: "300px", height: "300px" }}
            src="images/IQAC1.jpg"
            alt="IQAC Events"
          />
          <span className="event_name text-4xl font-bold w-[200px] text-justify">
            IQAC Events
          </span>
          <a href="">
            <button className="read_btn ">Read More </button>
          </a>
        </div>
        <div className="small_box">
          <img
            className="event_img z=-10"
            style={{ width: "300px", height: "300px" }}
            src="images/Vidya.png"
            alt="IQAC Events"
          />
          <span className="event_name text-4xl font-bold w-[200px] text-justify">
            Vidya Vistar
          </span>
          <a href="">
            <button className="read_btn ">Read More </button>
          </a>
        </div>
      </Carousel>
      {auth && (
        <>
          <form
            method="post"
            className="flex flex-col justify-center content-center max-w-sm mt-5 h-full ml-auto mr-auto mb-16"
          >
            <h2 className="text-xl uppercase font-bold ml-10 mb-4 mt-5 mr-auto flex flex-row justify-center items-center text-red-500">
              <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>
                {errMsg}
              </p>
            </h2>
            <div class="flex flex-col h-full">
              <div>
                <label
                  htmlFor="checked-toggle"
                  class="inline-flex relative items-center cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value={check}
                    id="checked-toggle"
                    class="sr-only peer"
                    onChange={() => setCheck(!check)}
                  />
                  <div class="w-11 h-6  bg-gray-200 rounded-full peer  dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <p className="ml-3">Toggle to switch between File and Link</p>
                </label>
              </div>
              {check ? (
                <>
                  <div className="flex flex-col ">
                    <span class="ml-3  text-md font-medium text-gray-900">
                      File
                    </span>
                    <div class="md:flex flex-col ">
                      {/* <div class="md:w-1/3"></div> */}
                      <div className="upload-section flex h-[200px]  mb-[10px] w-full">
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
                                Drag and drop a file OR click here to select a
                                file
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
                            <p>
                              Image preview will be shown here after selection
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                    <div class="md:w-2/3 ">
                      <button
                        class="shadow w-full  bg-[#000080] hover:bg-[#0000d0] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                        type="button"
                        onClick={() => props.file_upload(props.id, file)}
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
                    <span class="ml-3  text-md font-medium text-gray-900">
                      Link
                    </span>
                    <input
                      type="text"
                      name="Link"
                      // id=""
                      ref={userRef}
                      onChange={(e) => setFile(e.target.value)}
                      value={file}
                      placeholder="link"
                      className=" bg-gray-200 appearance-none border-2 mb-3 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#000080]"
                    />
                  </div>
                  <div class="md:w-2/3 mt-2 mb-16 ">
                    <button
                      class="shadow w-full  bg-[#000080] hover:bg-[#0000d0] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                      type="button"
                      onClick={()=>props.Link_upload(props.id, file)}
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
};

export default Events_data;
