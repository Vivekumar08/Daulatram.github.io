import React, { useContext, useEffect, useState, useRef } from "react";
import Departments from "../../../../Components/Sidebar/Departments";
import DepartBanner from "../../../../Components/Banners/DepartBanner";
import association1 from "../../../../Dummy_data//ImgPages/Biochemistry/association1.jpg";
import association2 from "../../../../Dummy_data//ImgPages/Biochemistry/association2.jpg";
import association3 from "../../../../Dummy_data//ImgPages/Biochemistry/association3.jpg";
import association4 from "../../../../Dummy_data//ImgPages/Biochemistry/association4.jpg";
import Biochemistry from "../../../../Components/DepartSIde/Biochemistry";

import Dropzone from "react-dropzone";
import axios from "axios";
import AuthContext from "../../../../Context/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import Association_dat from "./Association_dat";

function Association() {
  const [visible, setVisible] = useState(false);
  const [data1, setData1] = useState();
  const userRef = useRef();
  const errRef = useRef();
  const [link, setLink] = useState("");
  const [caption, setCaption] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const { auth, setAuth } = useContext(AuthContext);

  const fetchdata = async () => {
    const response = await fetch("/Bio_Association");
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
          `/Bio_Association_img_upload/${id}`,
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
    const response = await fetch(`/delete_Bio_Association/${id}`, {
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

  const delete_file = async (id, pid, file_path1) => {
    console.log(id);
    console.log(file_path1);
    await axios.post(
      `/delete_pdf_link_Bio_Association_fac/${id}`,
      { file_path1: file_path1, pid: pid },
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
      `/delete_img_Bio_Association_fac/${id}`,
      { file_path1: file_path1, pid: pid },
      {
        method: "POST",
      }
    );
    fetchdata();
  };

  const handleSubmit_link = async (id, link) => {
    try {
      console.log(link);
      await axios.post(`/Bio_Association_add_link/${id}`, {
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
          `/Bio_Association_file_upload/${id}`,
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
      if (link.trim() !== "" && caption.trim() !== "") {
        // if (file) {
        setErrMsg("");
        await axios.post(`/Bio_Association_upload`, {
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
    <div className=" flex flex-col">
      <div className="">
        <DepartBanner />
      </div>

      <div className="flex flex-row">
        <div className="md:hidden">
          {visible ? (
            <>
              <div className=" flex  flex-col mt-8 ml-2">
                <FontAwesomeIcon
                  icon={faClose}
                  size="lg"
                  onClick={() => setVisible(!visible)}
                  className=" border-2  border-[#000080] mr-2 hover:text-black text-white  rounded-lg p-2 cursor-pointer hover:bg-white bg-[#000080]"
                />
                <Biochemistry />
              </div>
            </>
          ) : (
            <div className=" flex  flex-col mt-8 ml-2">
              <FontAwesomeIcon
                icon={faBars}
                size="lg"
                onClick={() => setVisible(!visible)}
                className="text-black border-2 border-[#000080] mr-2 hover:text-white bg-[#fff] rounded-lg p-2 cursor-pointer hover:bg-[#000080]"
              />
            </div>
          )}
        </div>
        <div className="  md:flex hidden md:flex-col mt-12 ml-2 ">
          <Biochemistry />
        </div>
        <div className="w-full mr-16">
          <h2 className="md:text-4xl text-xl uppercase font-bold mb-5 mt-[9%] flex flex-row justify-center ml-4  items-center ">
            Association
          </h2>
          <div className="text-justify p-3 m-2 ml-4">
            {data1 &&
              data1.map((curElem) => {
                const { _id, title, description, img_data } = curElem;
                return (
                  <>
                    <Association_dat
                      key={_id}
                      id={_id}
                      tittle={title}
                      para={description}
                      pic={img_data}
                      delete={del}
                      delete_img={dele}
                      delete_file = {delete_file}
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
          {/* <div>
            <div
              style={{
                backgroundImage:
                  "url(/images/ImgPages/Biochemistry/association1.jpg)",
              }}
              className="bg-center ml-auto mr-auto lg:w-[800px] w-[250px] h-[190px] lg:h-[420px] bg-no-repeat mb-3 mt-[3%] bg-cover  rounded-2xl border-2 border-black"
            ></div>

            <div className="flex pr-4 pl-4 pb-1">
              <span className=" card-description md:text-lg text-sm text-justify font-medium ">
                The Biochemistry Association of Daulat Ram College takes immense
                pride in organizing a plethora of activities year-round covering
                Fresher’s, Farewell, Fest- ‘Biomania’, year-round seminars (meet
                the scientist), skill enhancement workshops, and guest lectures
                by prominent personalities.
              </span>
            </div>
            <div className=" ml-4 flex flex-row pr-2 ">
              <span className=" card-description md:text-lg text-sm text-justify font-medium ">
                The annual Fresher’s party is hosted by the 2nd and 3rd year
                students at the start of a new session to welcome new students
                into the warm and loving family of biochemistry. The annual
                Farewell, organised by 1st and 2nd year students at the end of a
                session celebrates the three year journey of passing out seniors
                and bids them a bittersweet adieu. <br /> The annual fest-
                Biomania, hosts large crowds of students, enthusiastic to
                experience a culmination of guest lectures, talent shows, high
                spirited crowd, entertaining activities; all put together by
                combined efforts of the biomania family.
                <br /> There are various events organised by the department such
                as meet the scientist where prominent personalities are invited
                to deliver lectures on their recent research activities to
                motivate students.
              </span>
            </div>

            <div
              style={{
                backgroundImage:
                  "url(/images/ImgPages/Biochemistry/association2.jpg)",
              }}
              className="bg-center ml-auto mr-auto lg:w-[800px] w-[250px] h-[190px] lg:h-[450px] bg-no-repeat mb-3 mt-[3%] bg-cover  rounded-2xl border-2 border-black"
            ></div>

            <div
              style={{
                backgroundImage:
                  "url(/images/ImgPages/Biochemistry/association3.jpg)",
              }}
              className="bg-center ml-auto mr-auto lg:w-[800px] w-[250px] h-[190px] lg:h-[450px] bg-no-repeat mb-3 mt-[3%] bg-cover  rounded-2xl border-2 border-black"
            ></div>
            <div
              style={{
                backgroundImage:
                  "url(/images/ImgPages/Biochemistry/association4.jpg)",
              }}
              className="bg-center ml-auto mr-auto lg:w-[800px] w-[250px] h-[190px] lg:h-[450px] bg-no-repeat mb-3 mt-[3%] bg-cover  rounded-2xl border-2 border-black"
            ></div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Association;
