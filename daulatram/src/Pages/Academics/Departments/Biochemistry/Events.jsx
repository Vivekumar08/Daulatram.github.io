import React, { useContext, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan,faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../../../../Context/AuthProvider";
import Dropzone from "react-dropzone";
import axios from "axios";
import DepartBanner from "../../../../Components/Banners/DepartBanner";
import Biochemistry from "../../../../Components/DepartSIde/Biochemistry";

function Events() {
  const [visible, setVisible] = useState(false);
  const [data1, setData1] = useState();
  const userRef = useRef();
  const errRef = useRef();
  const dropRef = useRef();
  const [link, setLink] = useState("");
  const [caption, setCaption] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [previewSrc, setPreviewSrc] = useState("");
  const [isPreviewAvailable, setIsPreviewAvailable] = useState(false);
  const [file, setFile] = useState(null);
  const { auth, setAuth } = useContext(AuthContext);

  const fetchdata = async () => {
    const response = await fetch("/Socitie");
    setData1(await response.json());
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
    const response = await fetch(
      `/delete_Socities/${id}`,
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
  function sortOn(property) {
    return function (a, b) {
      if (a[property] < b[property]) {
        return -1;
      } else if (a[property] > b[property]) {
        return 1;
      } else {
        return 0;
      }
    };
  }

  const updateBorder = (dragState) => {
    if (dragState === "over") {
      dropRef.current.style.border = "2px solid #000";
    } else if (dragState === "leave") {
      dropRef.current.style.border = "2px dashed #e9ebeb";
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

        setErrMsg("");
        console.log(formData);
        await axios.post(`/Soc`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        setCaption("");
        setLink("");
        setFile("");
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
        <div className="ml-3 ">
          <div className="w-full ml-2">
            <h2 className="md:text-4xl text-lg uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center ml-4 items-center ">
              Events
            </h2>
          </div>
          <div className="flex flex-row">
            <div className="mr-11">
              <div>
                <p className="md:text-1xl text-lg ml-4 font-bold">Year 2020-21</p>
              </div>
              <ol className="list-decimal md:text-base text-sm mt-2 ml-10 mr-4 text-justify mb-4">
                <li>
                  <strong>
                    SDP held by Department of Biochemistry from 19th August 2020
                    to 21st August 2020 titled E-skill development program on
                    enhanced learning through ICT tools.
                  </strong>
                </li>

                <p>
                  The objective of the SDP was to introduce the latest ICT tools
                  to students as this year due to Covid 19 all the classes are
                  held on the online platform.Course coordinator: Dr Sarita
                  Nanda (TIC, biochemistry department) Duration with dates: The
                  SDP was help from 11:00 am to 1:00 pm from 19th to 21st August
                  2020
                </p>
                <br />
                <li>
                  <strong>
                    Report on SDP held by Department of Biochemistry from 17th
                    December 2020 to 19th December 2020 titled E-skill
                    development program on enhanced learning through ICT tools.
                  </strong>
                </li>

                <p>
                  The objective of the SDP was to introduce the latest ICT tools
                  to students as this year due to Covid 19 all the classes are
                  held on the online platform. Course coordinator: Dr Sarita
                  Nanda (TIC, biochemistry department) Duration with dates: The
                  SDP was help from 11:00 am to 1:00 pm from 17th to 19th
                  December 2020
                </p>
                <br />
                <li>
                  The Biochemistry department festival{" "}
                  <strong>
                    BIOMANIA 2020-21 was held on 13 February 2021{" "}
                  </strong>{" "}
                  over zoom meet In our effort to sensitise our students towards
                  important environmental and sustainability issues facing the
                  world today,the Biochemistry department organised an intra
                  college contest:{" "}
                  <strong>
                    "The Innovation Challenge :Create a better future"
                  </strong>{" "}
                  under the convenership of{" "}
                  <strong>Dr. Padmshree Mudgal and Dr. Leena Vig.</strong>
                </li>
                <br />
                <li>
                  The Biochemistry association’s inaugural lecture was held on
                  25th November, 2020. It was organised by the Department of
                  Biochemistry, Daulat Ram College. Covid 19 pandemic has
                  impacted the whole world and the key to prevent the spread is
                  early detection. We were very fortunate to have with us Dr
                  Debojyoti Chakraborty and his team who have been pioneers in
                  indigenously developing CRISPR based COVID-19 detection kit
                  which is now popularly known as Feluda.
                </li>
                <br />
              </ol>
              <div>
                <p className="md:text-1xl text-lg ml-4 font-bold ">Year 2019-20</p>
              </div>
              <ol className="list-decimal mt-2 md:text-base text-sm ml-10 mr-4 text-justify mb-4">
                <li>
                  <strong>Ellora Sen, PhD,</strong> Scientist, National Brain
                  Research Centre, Manesar gave a talk on Re-inventing Oneself:
                  Science as a Career under{" "}
                  <strong> Meet the scientist series</strong> on 10th April,
                  2019
                </li>
              </ol>

              <div>
                <p className="md:text-1xl text-lg ml-4 font-bold">Year 2018-19</p>
              </div>
              <ol className="list-decimal mt-2 md:text-base text-sm ml-10 mr-4 text-justify mb-4">
                <li>
                  <strong>
                    {" "}
                    BIOMANIA18, an intracollege Science festival was organized
                    by Biochemistry department on 20th Feb, 2018.
                  </strong>{" "}
                  Various events like Poster presention on “Future
                  Technologies”, Just a minute, and Dumb Charades were
                  organized. Under{" "}
                  <strong>
                    Meet the scientist series, Prof Suman kundu,
                  </strong>{" "}
                  head, Department Of Biochemistry, University of Delhi, South
                  Campus, Delhi, gave an talk on <strong>Proteomics</strong>.
                </li>
                <br />
                <li>
                  Scientist talk –
                  <strong>
                    {" "}
                    Dr. Nisheeth Agarwal (Associate Professor, Translational
                    Health Science and Technology Institute, Faridabad){" "}
                  </strong>
                  came and delivered a lecture on the topic- “Nuts & bolts of
                  CRISPR interference: optimization & implication mycobacteria
                </li>
              </ol>
            </div>
            {/* <div className=" flex  flex-col mr-16 ">
            <Biochemistry/>

            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
