import React, { useContext, useEffect, useState, useRef } from "react";
import Sidebar from "../../../Components/Sidebar/Student_side";
import Banner from "../../../Components/Banners/StuFac";
import AuthContext from "../../../Context/AuthProvider";
import Res_fac_data from "./Facilities_dat";
import axios from "axios";

const Facilities = () => {
  const [data1, setData1] = useState();
  const userRef = useRef();
  const errRef = useRef();
  const [link, setLink] = useState("");
  const [caption, setCaption] = useState("");
  const [errMsg, setErrMsg] = useState("");
  
  const { auth, setAuth } = useContext(AuthContext);

  const fetchdata = async () => {
    const response = await fetch("/Student_Facilities");
    setData1(await response.json());
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const handleSubmit_img = async (id,file) => {
    try {
      if (file) {
        setErrMsg("");
        await axios.post(
          `/Student_Facilities_img_upload/${id}`,
          { file: file },
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

  const del = async (id) => {
    console.log(id);
    const response = await fetch(`/delete_Student_Facilities_fac/${id}`, {
      method: "POST",
    });
    await response.json();
    if (response.status === 200) {
      setErrMsg("");
      fetchdata();
    } else if (response.status === 400) {
      setErrMsg("First Delete all the images related to this section");
    }
  };

  const dele = async (id, pid, file_path1) => {
    console.log(id);
    console.log(file_path1);
    await axios.post(
      `/delete_img_Student_Facilities_fac/${id}`,
      { file_path1: file_path1, pid: pid },
      {
        method: "POST",
      }
    );
    fetchdata();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (link.trim() !== "" && caption.trim() !== "") {
        // if (file) {
        setErrMsg("");
        await axios.post(`/Student_Facilities_upload`, {
          title: link,
          description: caption,
        });
        setCaption("");
        setLink("");
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
      <div className=" flex flex-col">
        <div className="">
          <Banner />
        </div>
        <div className="flex flex-row">
          <div className="w-[350px]">
            <Sidebar />
          </div>
          <div className="w-[1100px] ">
            <h2 className="text-3xl uppercase md:text-4xl font-bold mb-5 mt-[5%] flex flex-row justify-center items-center  ">
             Student Facilities
            </h2>

            <div className="text-justify p-3 m-2 ml-8">
              {data1 &&
                data1.map((curElem) => {
                  const { _id, title, description, img_data } = curElem;
                  return (
                    <>
                      <Res_fac_data
                        key={_id}
                        id={_id}
                        tittle={title}
                        para={description}
                        pic={img_data}
                        delete={del}
                        delete_img={dele}
                        submit_img={handleSubmit_img}
                      />
                    </>
                  );
                })}
            </div>
            {auth && (
              <>
                <form
                  method="post"
                  className="flex flex-col justify-center content-center max-w-sm  h-[450px] ml-auto mr-auto mb-5"
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
                      placeholder="Title"
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
                      placeholder="Enter Caption"
                    ></textarea>
                  </div>
                  <div class="md:flex flex-col md:items-center">
                    {/* <div class="md:w-1/3"></div> */}

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
    </>
  );
};

export default Facilities;
