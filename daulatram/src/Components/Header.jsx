import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../Context/AuthProvider";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  const { auth, setAuth } = useContext(AuthContext);
  const [logout, setLogout] = useState(false);
  

  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );

    window.googleTranslateElementInit = googleTranslateElementInit;
    return () => document.body.appendChild(addScript);
  }, []);

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        // layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      },
      "google_translate_element"
    );
  };

  return (
    <>
      <div className="hidden lg:m-5 lg:flex lg:flex-row xl:justify-between lg:justify-start  bg-[#fff]">
        <div className="  ">
          <Link to="/">
            <img
              className="w-[150px] h-[150px] ml-8 mt-2"
              src="\images\logo.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="text-[#000080] mt-2 flex flex-col ml-16 mr-16">
          <div>
            <Link to="/">
              <div className="flex flex-col justify-center items-center">
                <div>
                  <span className="college_name text-4xl tracking-[4px] font-Noto_Serif">
                    <strong>Daulat Ram College</strong>
                  </span>
                </div>
                <div className=" font-bold text-xl flex flex-col items-center justify-center">
                  <span> University of Delhi </span>
                  <span>Star College, Estb. 1960</span>
                </div>
              </div>
            </Link>
            <div className="text-[#F80CA7] text-base flex flex-wrap justify-center font-bold mt-5 ">
              <div>
                NIRF RANK: 29 <span style={{ color: "black" }}>{" | "}</span>
              </div>
              <div className="ml-1">
                {"NAAC GRADE 'A' "} <span style={{ color: "black" }}> | </span>
              </div>
              <div className="ml-1">
                INDIA TODAY RANK (SCIENCE:7 COMMERCE:15 HUMANITIES:17 ){" "}
                <span style={{ color: "black" }}>| </span>
              </div>
              <div className="ml-1">DBT STAR COLLEGE</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ">
          {auth ? (
            <>
              <div className="mt-2 mr-10">
                <p className=" text-base w-[160px] bg-gray-300 p-2 rounded-md  text-Black">
                  {" "}
                  <span className="justify-center items-center flex flex-row ml-2">
                    Hi,{" "}
                    <FontAwesomeIcon
                      icon={faUserCircle}
                      size="lg"
                      className="ml-2 mr-1 text-[#000080]"
                    ></FontAwesomeIcon>{" "}
                    Admin
                    {logout ? (
                      <FontAwesomeIcon
                        icon={faChevronUp}
                        className="pl-4 mr-2 cursor-pointer"
                        onClick={() => setLogout(!logout)}
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className="pl-4 mr-2 cursor-pointer"
                        onClick={() => setLogout(!logout)}
                      />
                    )}
                  </span>{" "}
                </p>
                {logout && (
                  <div
                    className="flex justify-center transition absolute w-[150px] duration-500 mt-1 rounded-md hover:bg-blue-600 bg-[#000080] p-2 text-base cursor-pointer"
                    onClick={() => setAuth(!auth)}
                  >
                    <span className="   text-white">Logout</span>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="mt-2 mr-12">
                <Link
                  to="/Admin"
                  className="text-lg   font-semibold text-[#000080]  "
                >
                  <button className=" bg-[#000080] hover:bg-blue-600 rounded-lg pl-10 pr-10 p-2 text-white">
                    {" "}
                    Admin{" "}
                  </button>
                </Link>
              </div>
            </>
          )}
          <div id="google_translate_element" className="mt-2 mb-2"></div>
        </div>
      </div>
      {/* Mobile View */}
      <div className="flex flex-col m-5 lg:hidden bg-[#fff] ">
        <div className="flex flex-row justify-evenly  ">
          <div className=" ">
            <Link to="/">
              <img
                className="w-[100px] h-[100px]  mt-2"
                src="\images\logo.png"
                alt="logo"
              />
            </Link>
          </div>
          <div className="text-[#000080] mt-4 ml-2 flex flex-col ">
            <Link to="/">
              <div className="flex flex-col justify-center   items-center">
                <div>
                  <span className=" tracking-[2px] text-[22px] font-semibold font-Noto_Serif">
                    <strong>Daulat Ram College</strong>
                  </span>
                </div>
                <div className=" font-bold text-[16px] flex flex-col items-center justify-center">
                  <span> University of Delhi </span>
                  <span>Star College, Estb. 1960</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="text-[#F80CA7] text-base   text-justify  font-bold mt-5 ml-10 mr-1">
          NIRF RANK: 29
          <span style={{ color: "black" }} className="ml-1 mr-1">
            {" | "}
          </span>
          {"NAAC GRADE 'A' "}{" "}
          <span style={{ color: "black" }} className="ml-1 mr-1">
            {" "}
            {"|"}{" "}
          </span>
          INDIA TODAY RANK (SCIENCE: 7 COMMERCE: 13 HUMANITIES: 15 ){" "}
          <span style={{ color: "black" }} className="ml-1 mr-1">
            |{" "}
          </span>
          DBT STAR COLLEGE
        </div>
      </div>
    </>
  );
}

export default Header;
