import React, { useContext, useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../../Context/AuthProvider";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import NotFound from "../NotFound";

const ResetPassword = () => {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState("");
  const [isLoading, setisLoading] = useState(true);
  const [psswd, setPsswd] = useState("");
  const [errMsg, setErrMsg] = useState(false);
  const [update, setUpdate] = useState(false);

  const param = useParams();
  const token = param.Token;
  const fetchdata = async () => {
      
      console.log(token);
      const response = await axios.get("/resetData", {
          params: {
        resetPasswordToken: token,
      },
    });
    // const data = await response.json()
    if (response.status === 200) {
      setUser(response.Username)
      // console.log(response)
      setUpdate(false);
      setisLoading(false);
      setErrMsg(false);
    } else {
      setUpdate(false);
      setisLoading(true);
      setErrMsg(true);
    }
  };

  useEffect(() => {
    fetchdata();
    // userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "/updatePasswordViaEmail",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Username: user,
          Password: psswd,
        }),
      }
    );
    const data = await response.json();
    if (!data) {
      setErrMsg("No Server Response");
    } else if (response.status === 200) {
      setErrMsg(false);
      setUpdate(true);
      navigate("/Admin");
    } else {
      setErrMsg(true);
      setUpdate(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <NotFound/>
      ) : (
        <form class="flex flex-col justify-center content-center max-w-sm mt-5 h-[450px] ml-auto mr-auto mb-5">
          <span>
            <h2 className="text-xl uppercase font-bold ml-10 mb-4 mt-[0] mr-auto flex flex-row justify-center items-center text-red-500">
              <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>
                {errMsg}
              </p>
            </h2>
            {/* <div class="md:w-1/3"></div> */}
            <h2 className="text-2xl uppercase font-bold ml-10 mb-6 mt-[0] flex flex-row justify-center items-center ">
              <FontAwesomeIcon icon={faUser} className="mr-5"></FontAwesomeIcon>
              Reset Password
            </h2>
          </span>
          <div class="md:flex md:items-center mb-3">
            <div class="md:w-1/3">
              <label
                class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="Username"
              >
                Username
              </label>
            </div>
            <div class="md:w-2/3">
              <input
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#000080]"
                id="Username"
                type="text"
                placeholder="Old Username"
                ref={userRef}
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />
            </div>
          </div>
          <div class="md:flex md:items-center mb-3">
            <div class="md:w-1/3">
              <label
                class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="Username"
              >
                New Password
              </label>
            </div>
            <div class="md:w-2/3">
              <input
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#000080]"
                id="Username"
                type="Username"
                placeholder="**********"
                ref={userRef}
                onChange={(e) => setPsswd(e.target.value)}
                value={psswd}
                required
              />
            </div>
          </div>

          <div class="md:flex md:items-center">
            <div class="md:w-1/3"></div>
            <div class="md:w-2/3 ">
              <button
                class="shadow w-full  bg-[#000080] hover:bg-[#0000d0] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
                onClick={handleSubmit}
              >
                Reset
              </button>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default ResetPassword;
