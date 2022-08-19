import React, { useContext, useEffect, useState, useRef } from "react";
import Hostelbanner from "../../Components/Banners/Hostelbanner";
import Student_side from "../../Components/Sidebar/Student_side";
import "./Hostel.css";

import AuthContext from "../../Context/AuthProvider";
import Hostel_dat from "./Hostel_dat";
import axios from "axios";

const Hostel = () => {
  const [data1, setData1] = useState();
  const userRef = useRef();
  const errRef = useRef();
  const [link, setLink] = useState("");
  const [caption, setCaption] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const { auth, setAuth } = useContext(AuthContext);

  const fetchdata = async () => {
    const response = await fetch("/Stud_Hostel");
    setData1(await response.json());
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const handleSubmit_img = async (id, file) => {
    try {
      if (file) {
        setErrMsg("");
        await axios.post(
          `/Stud_Hostel_img_upload/${id}`,
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

  const del_para = async (id, pid, type) => {
    try {
      const arr = { pid: pid, type: type };
      console.log(id, arr);
      const response = await fetch(`/delete_Stud_Hostel_para/${id}`, {
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
    const response = await fetch(`/delete_Stud_Hostel/${id}`, {
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

  const delete_file = async (id, pid, file_path, file_mimetype) => {
    console.log(id, pid);
    await axios.post(
      `/delete_pdf_link_Stud_Hostel_fac/${id}`,
      { pid: pid, file_path: file_path, file_mimetype: file_mimetype },
      {
        method: "POST",
      }
    );
    fetchdata();
  };
  const dele = async (id, pid, file_path1) => {
    console.log(id);
    console.log(file_path1);
    await axios.post(
      `/delete_img_Stud_Hostel_fac/${id}`,
      { file_path1: file_path1, pid: pid },
      {
        method: "POST",
      }
    );
    fetchdata();
  };

  const Bulle = async (_id, title, file_mimetype, file_path, date) => {
    try {
      const response = await fetch("/Bulletins_notice_add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          file_mimetype,
          file_path,
          new_: false,
          date_exp: null,
          date,
        }),
      });
      const data = await response.json();
      if (!data && response.status === 400) {
        setErrMsg("No Server Response");
      } else if (response.status === 402) {
        window.alert("Delete some previous bulletin");
        setErrMsg("Delete some previous bulletin");
      } else {
        setAuth(true);
        window.alert("Your information added into bulletin");
        fetchdata();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit_data = async (id, para) => {
    try {
      if (para !== "") {
        setErrMsg("");
        const arr = { para1: para };
        console.log(arr);
        await fetch(`/Stud_Hostel_add_para/${id}`, {
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

  const handleSubmit_link = async (id, link, title) => {
    try {
      console.log(link);
      await axios.post(`/Stud_Hostel_add_link/${id}`, {
        title: title,
        link: link,
      });
      setCaption("");
      setAuth(true);
      fetchdata();
    } catch (err) {
      err.response && setErrMsg(err.response.data);
    }
  };

  const handleSubmit_file = async (id, pdf, title) => {
    console.log(id);
    try {
      if (pdf) {
        await axios.post(
          `/Stud_Hostel_file_upload/${id}`,
          {
            title: title,
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
      if (link.trim() !== "" && caption.trim() !== "") {
        // if (file) {
        setErrMsg("");
        await axios.post(`/Stud_Hostel_upload`, {
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
          <Hostelbanner />
        </div>

        <div className="flex flex-row">
          <div className="md:w-[350px]">
            <Student_side />
          </div>
          <div className="w-full mr-16">
            <h2 className="text-3xl lg:text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
              Hostel
            </h2>
            {data1 && data1.length === 0 && (
              <div className="main_txt text-base leading-10  md:ml-8 md:text-4xl">
                <blink>* Closed for Academic Session 2022-23</blink>
              </div>
            )}
            <div className="text-justify p-3 m-2 md:ml-16">
              {data1 &&
                data1.map((curElem) => {
                  const { _id, title, description, img_data } = curElem;
                  return (
                    <>
                      <Hostel_dat
                        key={_id}
                        id={_id}
                        tittle={title}
                        para={description}
                        pic={img_data}
                        errMsg = {errMsg}
                        delete={del}
                        delete_img={dele}
                        delete_file={delete_file}
                        delete_para={del_para}
                        Bulle={Bulle}
                        add_para={handleSubmit_data}
                        file_upload={handleSubmit_file}
                        Link_upload={handleSubmit_link}
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

export default Hostel;
