import React, { useContext, useEffect, useRef, useState } from "react";
import Student_side from "../../Components/Sidebar/Student_side";
import { Link } from "react-router-dom";
import AuthContext from "../../Context/AuthProvider";
import Maintanence from "../../Components/UnderMaintanence/Maintanence";
import Common_dat from "../Staff_Zone/Common_dat";
import "../Academics/Att.css";

const Grievance = () => {
  const [data1, setData1] = useState();
  const userRef = useRef();
  const errRef = useRef();
  const [link, setLink] = useState("");
  const [caption, setCaption] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const { auth, setAuth } = useContext(AuthContext);

  const fetchdata = async () => {
    const response = await fetch("/Student_Grievance");
    setData1(await response.json());
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const del_para = async (id, pid, type) => {
    try {
      const arr = { pid: pid, type: type };
      console.log(id, arr);
      const response = await fetch(`/delete_Student_Grievance_para/${id}`, {
        method: "POST",
        body: JSON.stringify(arr),
        headers: { "Content-Type": "application/json" },
      });
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

  const del = async (id) => {
    console.log(id);
    const response = await fetch(`/delete_Student_Grievance/${id}`, {
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

  const handleSubmit_data = async (id, para) => {
    try {
      if (para !== "") {
        setErrMsg("");
        const arr = { para1: para };
        console.log(arr);
        await fetch(`/Student_Grievance_add_para/${id}`, {
          method: "POST",
          body: JSON.stringify(arr),
          headers: { "Content-Type": "application/json" },
        });
        setAuth(true);
        fetchdata();
      } else {
        setErrMsg("Please enter all the field values.");
      }
    } catch (err) {
      err.response && setErrMsg(err.response.data);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (link !== "" && caption !== "") {
        console.log(link, caption);
        // if (file) {
        setErrMsg("");
        const arr = {
          title: link,
          description: caption,
        };
        // await axios.post(`/Student_Grievance_upload`);
        const response = await fetch(`/Student_Grievance_upload/`, {
          method: "POST",
          body: JSON.stringify(arr),
          headers: { "Content-Type": "application/json" },
        });
        if (response.status == 200) {
          setCaption("");
          setLink("");
          setAuth(true);
          fetchdata();
        } else {
          console.log("Unable to add");
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
      <div className=" flex flex-col">
        <div
          className="Banner"
          style={{ backgroundImage: "url(/images/img1.jpeg)" }}
        >
          <div className="name">
            <div className="flex flex-row justify-center">
              <p className="  text-[#fff] text-3xl md:text-4xl lg:text-6xl shadow-lg  mt-12 font-bold  p-5 flex justify-center w-full rounded-md  ">
                Grievance Redressal{" "}
              </p>
            </div>
            <div className=" bg-gray-400 pt-3 pb-3 pl-5 text-lg text-[#000080] mt-28 ">
              <Link to={"/"}>
                <span className="ml-5">Home</span>
              </Link>
              <span className="ml-5">Student Zone</span>
            </div>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="md:w-[350px]">
            <Student_side />
          </div>
          <div className="  ml-auto mr-auto mb-5">
            <div className="lg:w-[1100px] w-full">
              <h2 className="text-2xl md:text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
                Grievance Redressal
              </h2>
              {data1 && data1.length === 0 && <Maintanence />}

              <div className="text-justify p-3 m-2 ml-4">
                {data1 &&
                  data1.map((curElem) => {
                    const { _id, title, description, img_data } = curElem;
                    return (
                      <>
                        <Common_dat
                          key={_id}
                          id={_id}
                          tittle={title}
                          para={description}
                          pic={img_data}
                          delete={del}
                          err={errMsg}
                          delete_para={del_para}
                          add_para={handleSubmit_data}
                        />
                      </>
                    );
                  })}
              </div>
            </div>
            {auth && (
              <>
                <form
                  method="post"
                  className="flex flex-col justify-center content-center max-w-sm  h-[450px] ml-auto mr-auto mb-5"
                >
                  <h2 className="text-xl uppercase font-bold ml-10 mb-4 mt-[0] mr-auto flex flex-row justify-center items-center text-[#000080]">
                    <p>Add New Data</p>
                  </h2>
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

export default Grievance;
