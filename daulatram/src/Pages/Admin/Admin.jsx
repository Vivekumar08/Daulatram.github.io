import React, { useContext, useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faUser } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../../Context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [Passwd, setPasswd] = useState(true);
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, pwd);
    const response = await fetch("/AdminLogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Username: user,
        Password: pwd,
      }),
    });
    const data = await response.json();
    if (!data || response.status === 400) {
      setErrMsg("No Server Response");
    } else if (response.status === 401) {
      setErrMsg("Missing Username or Password");
    } else if (response.status === 402) {
      setErrMsg("Unauthorized");
    } else {
      setUser("");
      setPwd("");
      setAuth(true);
      navigate("/");
    }
  };

  return (
    <>
      <form class="flex flex-col justify-center content-center max-w-sm mt-5 h-[450px] ml-auto mr-auto mb-5">
        <span>
          <h2 className="text-xl uppercase font-bold ml-10 mb-4 mt-[0] mr-auto flex flex-row justify-center items-center text-red-500">
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>
              {errMsg}
            </p>
          </h2>
          <div class="md:w-1/3"></div>
          <h2 className="text-4xl uppercase font-bold ml-10 mb-16 mt-[0] flex flex-row justify-center items-center ">
            <FontAwesomeIcon icon={faUser} className="mr-5"></FontAwesomeIcon>
            Admin
          </h2>
        </span>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="full-name"
            >
              Username
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#000080]"
              id="full-name"
              type="text"
              autoComplete="off"
              ref={userRef}
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="password"
            >
              Password
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 ml-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#000080]"
              id="password"
              type={Passwd ? "password" : "text"}
              placeholder="******************"
              ref={userRef}
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
          </div>
          <FontAwesomeIcon
            icon={Passwd ? faEye : faEyeSlash}
            className="cursor-pointer"
            onClick={() => setPasswd(!Passwd)}
          ></FontAwesomeIcon>
        </div>
        <div class="md:flex md:items-center">
          <div class="md:w-1/3"></div>
          <div class="md:w-2/3 ">
            <button
              class="shadow w-full  bg-[#000080] hover:bg-[#0000d0] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>
        </div>
        <Link to="/forgot">
          <div className="justify-end flex mt-3 text-blue-500  hover:scale-105 ">
            Forgot Password?
          </div>
        </Link>
      </form>
    </>
  );
};

export default Admin;
