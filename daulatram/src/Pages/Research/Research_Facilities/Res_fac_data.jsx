import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../../../Context/AuthProvider";
import Dropzone from "react-dropzone";
import axios from "axios";

const Res_fac_data = (props) => {
  const [visible, setVisible] = useState(false);
  const { auth, setAuth } = useContext(AuthContext);

  var path_pic = props.pic;
  var path2 = path_pic.replace(/\\/g, "/");
  var path = path2.slice(19);

  const del = async (id) => {
    console.log(id);
    const response = await fetch(
      `http://localhost:5000/delete_research_fac/${id}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    if (data || response.status === 200) {
      // navigate('/research/research_facilities')
      window.location.reload();
    } else {
      setErrMsg("Unable to Delete");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // if (link.trim() !== "" && caption.trim() !== "") {
      // if (file) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("title", link);
        formData.append("description", caption);

        setErrMsg("");
        console.log(formData);
        const response = await axios.post(
          `http://localhost:5000/research_upload/${e}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setAuth(true);
        fetchdata();
      // } else {
      //   // setErrMsg("Please select a file to add.");
      //   setErrMsg("Please enter all the field values.");
      // }
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
      {visible && <p>{props.para}</p>}
      {props.pic && visible && (
        <img
          src={path}
          style={{
            width: "100%",
            height: "250px",
          }}
          className="bg-cover bg-no-repeat bg-center mt-5 rounded-lg border-2   border-black"
        />
      )}
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
            onClick={handleSubmit}
          >
            Add Image
          </button>
        </div>
      </form>
    </figure>
  );
};

export default Res_fac_data;
