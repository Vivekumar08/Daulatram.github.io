import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../../Context/AuthProvider";
import Dropzone from "react-dropzone";
import axios from "axios";
import Ethic from "../../Components/Banners/Ethicsb";
import Sidebar from "../../Components/Sidebar/Staff_side";

const Ethics = () => {
  const [data1, setData1] = useState();
  const userRef = useRef();
  const errRef = useRef();
  const dropRef = useRef();
  const [link, setLink] = useState("");
  const [heading, setHead] = useState("");
  const [caption, setCaption] = useState("");
  const [check, setCheck] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [previewSrc, setPreviewSrc] = useState("");
  const [isPreviewAvailable, setIsPreviewAvailable] = useState(false);
  const [file, setFile] = useState(null);
  const { auth, setAuth } = useContext(AuthContext);

  const fetchdata = async () => {
    const response = await fetch("/Ethics_");
    setData1(await response.json());
  };

  const updateBorder = (dragState) => {
    if (dragState === "over") {
      dropRef.current.style.border = "2px solid #000";
    } else if (dragState === "leave") {
      dropRef.current.style.border = "2px dashed #e9ebeb";
    }
  };

  const onDrop = (files) => {
    const [uploadedFile] = files;
    setFile(uploadedFile);

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewSrc(fileReader.result);
    };
    fileReader.readAsDataURL(uploadedFile);
    setIsPreviewAvailable(
      uploadedFile.name.match(/\.(jpeg|jpg|png|pdf|doc|docx|xlsx|xls)$/)
    );
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const del = async (id) => {
    console.log(id);
    const response = await fetch(`/delete_Ethics/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    if (data || response.status === 200) {
      fetchdata();
    } else {
      setErrMsg("Unable to Delete");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (link.trim() !== "" && caption.trim() !== "") {
        // if (file) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("link", link);
        formData.append("title", caption);
        formData.append("heading", heading);

        setErrMsg("");
        await axios.post(`/Ethics_add`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        setCaption("");
        setHead("");
        setLink("");
        setFile("");
        setPreviewSrc("");
        setIsPreviewAvailable(false);
        setAuth(true);
        fetchdata();
      } else {
        // setErrMsg("Please select a file to add.");
        setErrMsg("Please enter all the field values.");
      }
      // } else {
      // }
    } catch (err) {
      err.response && setErrMsg(err.response.data);
    }
  };
  const handleSubmit1 = async (e) => {
    e.preventDefault();
    console.log(link, caption, file);
    const response = await fetch(
      "/Ethics_add_link",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          link: link,
          title: caption,
          file: file,
          heading:heading,
        }),
      }
    );
    const data = await response.json();
    if (!data) {
      setErrMsg("No Server Response");
    } else if (response.status === 400) {
      setErrMsg("Fill Complete Details");
    } else {
      setCaption("");
      setLink("");
      setHead("");
      setFile(null);
      setAuth(true);
      fetchdata();
    }
  };

  return (
    <>
      <Ethic />

      <div className="flex flex-row">
        <div className="md:w-[350px] ">
          <Sidebar />
        </div>
        <div className=" w-full ml-auto mr-auto mb-5">
          <div className=" lg:w-[700px] xl:w-[1000px] w-full">
            <h1 className=" ml-8 md:ml-1 text-2xl lg:text-4xl md:text-3xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center  ">
              Professional Code of Ethics
            </h1>
            <div className="text-justify p-3 m-2 ml-4">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-5 mt-5 flex flex-row justify-left items-center ">
                I. Teachers and their Responsibilities
              </h1>
              <figure className="flex p-4">
                <span className="leading-14 font-medium text-justify text-base md:text-lg ">
                  Whoever adopts teaching as a profession assumes the obligation
                  to conduct · himself / herself in accordance with the ideal of
                  the profession. A teacher is constantly under the scrutiny of
                  her/his students and the society at large. Therefore, every
                  teacher should see that there is no incompatibility between
                  her/his precepts and practice. The national ideals of
                  education which have already been set forth and which she/he
                  should seek to inculcate among students must be her/his own
                  ideals. The profession further requires that the teacher
                  should be calm, patient and communicative by temperament and
                  amiable in disposition.
                </span>
              </figure>
              <figure className="flex  p-4">
                <span className="leading-14 font-medium text-justify text-base md:text-lg ">
                  Teacher should:
                  <li className="  ml-7">
                    {" "}
                    Adhere to a responsible pattern of conduct and demeanor
                    expected of them by the community;
                  </li>
                  <li className="ml-7">
                    {" "}
                    Manage their private affairs in a manner consistent with the
                    dignity of the profession;
                  </li>
                  <li className="ml-7">
                    {" "}
                    Seek to make professional growth continuous through study
                    and research;
                  </li>
                  <li className="ml-7">
                    {" "}
                    Express free and frank opinion by participation at
                    professional meetings, seminars, conferences etc., towards
                    the contribution of knowledge;
                  </li>
                  <li className="ml-7">
                    {" "}
                    Maintain active membership of professional organisations and
                    strive to improve education and profession through them;
                  </li>
                  <li className="ml-7">
                    {" "}
                    Perform their duties in the form of teaching, tutorials,
                    practicals, seminars and research work, conscientiously and
                    with dedication;
                  </li>
                  <li className="ml-7">
                    {" "}
                    Discourage and not indulge in plagiarism and other unethical
                    behaviour in teaching and research;
                  </li>
                  <li className="ml-7">
                    {" "}
                    Abide by the Act, Statute and Ordinance of the University
                    and to respect its ideals, vision, mission, cultural
                    practices and tradition;
                  </li>
                  <li className="ml-7">
                    {" "}
                    Co-operate and assist in carrying out the functions relating
                    to the educational responsibilities of the college and the
                    university, such as: assisting in appraising applications
                    for admission, advising and counselling students as well as
                    assisting the conduct of university and college
                    examinations, including supervision, invigilation and
                    evaluation; and
                  </li>
                  <li className="ml-7">
                    {" "}
                    Participate in extension, co-curricular and extra-curricular
                    activities, including community service.
                  </li>
                </span>
              </figure>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-5 mt-5 flex flex-row justify-left items-center ">
                II. Teachers and Students
              </h1>

              <figure className="flex p-4">
                <span className="  leading-14 font-medium text-justify text-base md:text-lg ">
                  Teacher should:
                  <li className="ml-7">
                    {" "}
                    Respect the rights and dignity of the student in expressing
                    her/his opinion;
                  </li>
                  <li className="ml-7">
                    {" "}
                    Deal justly and impartially with students regardless of
                    their religion, caste, gender, political, economic, social
                    and physical characteristics;
                  </li>
                  <li className="ml-7">
                    {" "}
                    Recognise the difference in aptitude and capabilities among
                    students and strive to meet their individual needs;
                  </li>
                  <li className="ml-7">
                    {" "}
                    Encourage students to improve their attainments, develop
                    their personalities and at the same time contribute to
                    community welfare;
                  </li>
                  <li className="ml-7">
                    {" "}
                    Inculcate among students scientific temper, spirit of
                    inquiry and ideals of democracy, patriotism, social justice,
                    environmental protection and peace;
                  </li>
                  <li className="ml-7">
                    {" "}
                    Treat the students with dignity and not behave in a
                    vindictive manner towards any of them for any reason;
                  </li>
                  <li className="ml-7">
                    {" "}
                    Pay attention to only the attainment of the student in the
                    assessment of merit
                  </li>
                  <li className="ml-7">
                    {" "}
                    Make themselves available to the students even beyond their
                    class hours and help and guide students without any
                    remuneration or reward;
                  </li>
                  <li className="ml-7">
                    {" "}
                    Aid students to develop an understanding of our national
                    heritage and national goals; and
                  </li>
                  <li className="ml-7">
                    {" "}
                    Refrain from inciting students against other students,
                    colleagues or administration.
                  </li>
                </span>
              </figure>
              <h1 className=" text-xl md:text-2xl lg:text-3xl font-bold mb-5 mt-5 flex flex-row justify-left items-center ">
                III. Teachers and Colleagues
              </h1>

              <figure className="flex p-4">
                <span className="  leading-14 font-medium text-justify text-base md:text-lg ">
                  Teacher should:
                  <li className="ml-7">
                    {" "}
                    Treat other members of the profession in the same manner as
                    they themselves wish to be treated;
                  </li>
                  <li className="ml-7">
                    {" "}
                    Speak respectfully to other teachers and render assistance
                    for professional betterment;
                  </li>
                  <li className="ml-7">
                    {" "}
                    Refrain from making unsubstantiated allegations against
                    colleagues to higher authorities; and
                  </li>
                  <li className="ml-7">
                    {" "}
                    Refrain from allowing considerations of caste, creed,
                    religion, race or sex in their professional endeavour.
                  </li>
                </span>
              </figure>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-5 mt-5 flex flex-row justify-left items-center ">
                IV. Teachers and Authorities
              </h1>

              <figure className="flex p-4">
                <span className="  leading-14 font-medium text-justify text-base md:text-lg ">
                  Teacher should:
                  <li className="ml-7">
                    {" "}
                    Discharge their professional responsibilities according to
                    the existing rules and adhere to procedures and methods
                    consistent with their profession in initiating steps through
                    their own institutional bodies and / or professional
                    organisations for change of any such rule detrimental to the
                    professional interest;
                  </li>
                  <li className="ml-7">
                    {" "}
                    Refrain from undertaking any other employment and
                    commitment, including private tuitions and coaching classes
                    which are likely to interfere with their professional
                    responsibilities;
                  </li>
                  <li className="ml-7">
                    {" "}
                    Co-operate in the formulation of policies of the institution
                    by accepting various offices and discharge responsibilities
                    which such offices may demand;
                  </li>
                  <li className="ml-7">
                    {" "}
                    Co-operate through their organisations in the formulation of
                    policies of the other institutions and accept offices;
                  </li>
                  <li className="ml-7">
                    {" "}
                    Co-operate with the authorities for the betterment of the
                    institutions keeping in view the interest and in conformity
                    with the dignity of the profession;
                  </li>
                  <li className="ml-7"> Adhere to the terms of contract;</li>
                  <li className="ml-7">
                    {" "}
                    Give and expect due notice before a change of position takes
                    place; and
                  </li>
                  <li className="ml-7">
                    {" "}
                    Refrain from availing themselves of leave except on
                    unavoidable grounds and as far as practicable with prior
                    intimation, keeping in view their particular responsibility
                    for completion of academic schedule.
                  </li>
                </span>
              </figure>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-5 mt-5 flex flex-row justify-left items-center ">
                V. Teachers and Non-Teaching Staff
              </h1>

              <figure className="flex p-4">
                <span className="  leading-14 font-medium text-justify text-base md:text-lg ">
                  Teacher should:
                  <li className="ml-7">
                    {" "}
                    Treat the non-teaching staff as colleagues and equal
                    partners in a cooperative undertaking, within every
                    educational institution;
                  </li>
                  <li className="ml-7">
                    {" "}
                    Help in the functioning of joint-staff councils covering
                    both the teachers and the non-teaching staff.
                  </li>
                </span>
              </figure>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-5 mt-5 flex flex-row justify-left items-center ">
                VI. Teachers and Guardians
              </h1>

              <figure className="flex p-4">
                <span className="  leading-14 font-medium text-justify text-base md:text-lg ">
                  Teacher should try to see through teachers' bodies and
                  organisations that institutions maintain contact with the
                  guardians, their students, send reports of their performance
                  to the guardians whenever necessary and meet the guardians in
                  meetings convened for the purpose for mutual exchange of ideas
                  and for the benefit of the institution.
                </span>
              </figure>
              <h1 className="text-xl md:text-3xl font-bold mb-5 mt-5 flex flex-row justify-left items-center ">
                VII. Teachers and Society
              </h1>

              <figure className="flex p-4">
                <span className="  leading-14 font-medium text-justify text-base md:text-lg ">
                  Teacher should:
                  <li className="ml-7">
                    {" "}
                    Recognise that education is a public service and strive to
                    keep the public informed of the educational programmes which
                    are being provided;
                  </li>
                  <li className="ml-7">
                    {" "}
                    Work to improve education in the community and strengthen
                    the community's moral and intellectual life;
                  </li>
                  <li className="ml-7">
                    {" "}
                    Be aware of social problems and take part in such activities
                    as would be conducive to the progress of society and hence
                    the country as a whole;
                  </li>
                  <li className="ml-7">
                    {" "}
                    Perform the duties of citizenship, participate in community
                    activities and shoulder responsibilities of public offices;
                  </li>
                  <li className="ml-7">
                    {" "}
                    Refrain from taking part in or subscribing to or assisting
                    in any way activities, which tend to promote feelings of
                    hatred or enmity among different communities, religions or
                    linguistic groups but actively work for national
                    integration.
                  </li>
                </span>
              </figure>
            </div>
          </div>
          {data1 && data1.map((curElem) => {
            const { _id, heading, title, file_path, link } = curElem;
            var path_pic = file_path;
            var path2 = path_pic.replace(/\\/g, "/");
            var path = path2.slice(19);
            return (
              <>
                <h1 className="text-xl md:text-3xl font-bold mb-5 mt-5 flex flex-row justify-left items-center ">
                  {heading}
                </h1>
                <div className="flex flex-row mb-2 ml-5">
                  <li className="mt-2 list-none" key={_id}>
                    <div className="flex flex-col mr-10 ">
                      <h1 className="mt-5">
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="ml-3 font-medium text-justify text-base md:text-lg  md:text-left text-blue-400"
                        />
                        <a
                          href={path}
                          target="_blank"
                          className="ml-1 font-medium text-justify text-base md:text-lg  md:text-left text-blue-400 hover:pl-3"
                        >
                          {" "}
                          {link}{" "}
                        </a>
                        <p className=" ml-3 mt-2 leading-14 font-medium text-justify text-base md:text-lg">
                          {title}
                        </p>
                      </h1>
                    </div>
                  </li>

                  <span className="ml-auto">
                    {auth && (
                      <>
                        <div className="flex flex-col">
                          <FontAwesomeIcon
                            icon={faTrashCan}
                            size="lg"
                            className="mt-16 cursor-pointer ml-auto mr-16 hover:text-red-500"
                            onClick={() => del(_id)}
                          ></FontAwesomeIcon>
                        </div>
                      </>
                    )}
                  </span>
                </div>
              </>
            );
          })}
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
                <div className="mb-3">
                  <input
                    type="text"
                    name="Link"
                    // id=""
                    ref={userRef}
                    onChange={(e) => setHead(e.target.value)}
                    value={heading}
                    placeholder="Enter Heading"
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#000080]"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="Link"
                    // id=""
                    ref={userRef}
                    onChange={(e) => setLink(e.target.value)}
                    value={link}
                    placeholder="Enter Text Here"
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
                    placeholder="Description"
                  ></textarea>
                </div>
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
                      <p className="ml-3">
                        Toggle to switch between File and Link
                      </p>
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
                                  <p>
                                    Drag and drop a file OR click here to select
                                    a file
                                  </p>
                                  {file && (
                                    <div>
                                      <strong>Selected file:</strong>{" "}
                                      {file.name}
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
                                  Image preview will be shown here after
                                  selection
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
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
                          onClick={handleSubmit1}
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
        </div>
      </div>
    </>
  );
};

export default Ethics;
