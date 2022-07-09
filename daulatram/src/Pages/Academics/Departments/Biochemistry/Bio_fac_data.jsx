import React, { useContext, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../../../../Context/AuthProvider";
import axios from "axios";
import Dropzone from "react-dropzone";

const Bio_fac_data = (props) => {
  const [data1, setData1] = useState();

  const dropRef = useRef();
  const [previewSrc, setPreviewSrc] = useState("");
  const [isPreviewAvailable, setIsPreviewAvailable] = useState(false);
  const [pdf, setPdf] = useState(null);
  const { auth, setAuth } = useContext(AuthContext);

  const fetchdata = async () => {
    const response = await fetch("http://localhost:5000/bio_faculty");
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

  const del = async (id) => {
    console.log(id);
    const response = await fetch(
      `http://localhost:5000/delete_bio_faculty/${id}`,
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

  const handleSubmit_cv = async (id, pid) => {
    console.log(id, pid);
    try {
      console.log(pdf);
      if (pdf) {
        // setErrMsg("");
        await axios.post(
          `http://localhost:5000/bio_faculty_cv_upload/${id}`,
          {
            file: pdf,
            pid: pid,
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setCaption("");
        setLink("");
        // setAuth(true);
        fetchdata();
      } else {
        setErrMsg("Please select a file to add.");
      }
    } catch (err) {
      err.response && setErrMsg(err.response.data);
    }
  };
  return (
    <>
      <div className="flex flex-col">
        {/* {filter == "Current" && ( */}
        {/* <> */}
        {props.img_data.file_path &&
          props.img_data.file_path.map((elem) => {
            var path2 = elem.file_path1.replace(/\\/g, "/");
            //   var path3 = elem.file_path2.replace(/\\/g, "/");
            var path = path2.slice(19);
            //   var pdf_path = path3.slice(19);
            return (
              <>
                <div class="first fac " key={props.id}>
                  <img class="Fac-img" src={path} key={elem._id} alt="" />
                  <div class="fac-description-bk"></div>
                  {auth && (
                    <>
                      <div className="flex flex-col w-full">
                        <FontAwesomeIcon
                          icon={faTrashCan}
                          size="lg"
                          className=" cursor-pointer ml-auto  hover:text-red-500"
                          onClick={() => del(props.id)}
                        ></FontAwesomeIcon>
                      </div>
                    </>
                  )}
                  <div class="Fac-description">
                    <p>{props.title}</p>
                    <p className="font-medium"> {props.description}</p>
                  </div>

                  <a href={""}>
                    <div class="fac-btn">View CV</div>
                  </a>
                </div>

                <p>CV of the Faculty</p>
                <div className=" flex  mb-[10px] ">
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
                          Drag and drop a file OR click here to select a file
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
                    onClick={() => handleSubmit_cv(props.id, elem._id)}
                  >
                    Add CV
                  </button>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default Bio_fac_data;
