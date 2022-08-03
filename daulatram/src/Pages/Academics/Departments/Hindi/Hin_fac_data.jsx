import React, { useContext, useEffect, useRef, useState } from "react";
import AuthContext from "../../../../Context/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Dropzone from "react-dropzone";

const Hin_fac_data = (props) => {
  const [data1, setData1] = useState();

  const dropRef = useRef();
  const [previewSrc, setPreviewSrc] = useState("");
  const [isPreviewAvailable, setIsPreviewAvailable] = useState(false);
  const [pdf, setPdf] = useState(null);
  const [pdf_path, setPdf_path] = useState(null);
  const { auth, setAuth } = useContext(AuthContext);

  const fetchdata = async () => {
    const response = await fetch("/hin_faculty");
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

  return (
    <>
      {props.filter == "Current" && (
        <div className="flex flex-col">
          <div class="first fac ">
            {props.img_data.file_path &&
              props.img_data.file_path.map((elem) => {
                var path2 = elem.file_path1.replace(/\\/g, "/");
                var path = path2.slice(19);
                return (
                  <>
                    <img class="Fac-img" src={path} key={elem._id} alt="" />
                    <div class="fac-description-bk"></div>
                    <div class="Fac-description">
                      <p>{props.description}</p>
                      <p className="font-medium">{props.title}</p>
                    </div>
                  </>
                );
              })}

            {/* <> */}
            {/* </> */}

            {props.img_data.pdf_path.map((elem) => {
              const path2 = elem.pdf_path1.replace(/\\/g, "/");
              const path = path2.slice(19);
              return (
                <>
                  {elem.value === "true" && (
                    <>
                      <a href={path}>
                        <div class="fac-btn">View CV</div>
                      </a>
                    </>
                  )}
                </>
              );
            })}
            {auth && (
              <div className="flex flex-col w-full  ml-auto">
                <FontAwesomeIcon
                  icon={faTrash}
                  size="lg"
                  className=" cursor-pointer text-white  absolute right-10 bottom-5 hover:text-black"
                  onClick={() => props.delete(props.id)}
                />
              </div>
            )}
          </div>
          {props.img_data.pdf_path.map((elem) => {
            return (
              <>
                {auth&&elem.value === "false" && (
                  <>
                    {/* // <div key={props.id}> */}

                    <p>CV of the Faculty</p>
                    <div className=" flex w-[220px] mb-[10px] ml-2">
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
                            {pdf && (
                              <div>
                                <strong>Selected file:</strong> {pdf.name}
                              </div>
                            )}
                          </div>
                        )}
                      </Dropzone>
                    </div>
                    <div class="md:w-2/3  ">
                      <button
                        class="shadow w-full  bg-[#000080] hover:bg-[#0000d0] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                        type="button"
                        onClick={() => props.cv(props.id, pdf)}
                      >
                        Add CV
                      </button>
                    </div>
                  </>
                )}
              </>
            );
          })}

        </div>
      )}
    </>
  );
};

export default Hin_fac_data;
