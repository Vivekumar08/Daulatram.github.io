import React, { useContext } from "react";
import AuthContext from "../Context/AuthProvider";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const { auth } = useContext(AuthContext);
  return (
    <>
      <div className="m-5 flex flex-row justify-between bg-[#fff]">
        {/* <div className="  "> */}
        <Link to="/">
          <img
            className="w-[180px] h-[180px] ml-8 mt-2"
            src="\images\logo.png"
            alt="logo"
          />
        </Link>
        <div className="text-[#000080] mt-2 flex flex-col ml-16 mr-16">
          <div>
            <Link to="/">
              <div className="flex flex-col justify-center items-center">
                <div>
                  <span className="college_name text-6xl tracking-[4px] font-Noto_Serif">
                    <strong>Daulat Ram College</strong>
                  </span>
                </div>
                <div className="mb-5 font-bold text-3xl flex flex-col items-center justify-center">
                  <span> University of Delhi </span>
                  <span>Star College, Estb. 1960</span>
                </div>
              </div>
            </Link>
            <div className="text-[#932660] text-xl flex flex-wrap justify-center font-bold ">
              <div>
                NIRF RANK: 26 <span style={{ color: "black" }}>{" "}| </span>
              </div>
              <div>
              {" "}NAAC GRADE 'A' <span style={{ color: "black" }}>{" "}| </span>
              </div>
              <div>
              {" "}INDIA TODAY RANK (SCIENCE: 7 COMMERCE: 13 HUMANITIES: 15){" "}
                <span style={{ color: "black" }}>| </span>
              </div>
              <div>DBT STAR COLLEGE</div>
            </div>
          </div>
        </div>
        {auth ? (
          <>
            <div className="flex flex-col">
              <div className="mt-2 mr-12">
                <p className=" text-lg w-[160px] bg-gray-300 p-2 rounded-md  text-Black">
                  {" "}
                  <span className="justify-center items-center flex flex-row ml-2">
                    Hi,{" "}
                    <FontAwesomeIcon
                      icon={faUserCircle}
                      size="lg"
                      className="ml-2 mr-1 text-[#000080]"
                    ></FontAwesomeIcon>{" "}
                    Admin
                    {logout?(

                      
                      <FontAwesomeIcon
                      icon={faChevronUp}
                      className="pl-4 mr-2 cursor-pointer"
                      onClick={() => setLogout(!logout)}
                      />
                      ):(
                        
                        <FontAwesomeIcon
                        icon={faChevronDown}
                        className="pl-4 mr-2 cursor-pointer"
                        onClick={() => setLogout(!logout)}
                        />
                      )
                  }
                  </span>{" "}
                </p>
                {logout && (
                  <div className="flex justify-center transition duration-500 mt-1 rounded-md hover:bg-blue-600 bg-[#000080] p-2 text-xl cursor-pointer" onClick={() => setAuth(!auth) }>
                    <span  className="   text-white">Logout</span>
                  </div>
                )}
              </div>
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
      </div>
      {/* </div> */}
    </>
  );
}

export default Header;
