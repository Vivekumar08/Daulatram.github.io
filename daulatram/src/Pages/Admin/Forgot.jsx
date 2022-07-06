import React, { useContext, useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../../Context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Forgot = () => {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    const response = await fetch("http://localhost:5000/forgotEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Email: email,
      }),
    });
    const data = await response.json();
    if (!data) {
      setErrMsg("No Server Response");
    } else if (response.status === 401) {
      setErrMsg("Email not in database");
    } else if (response.status === 400) {
      setErrMsg("Please filled Email");
    } else {
      setEmail("");
      window.alert("Email has been sent, Please check your inbox");

      setAuth(true);
      //   navigate("/Admin");
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
          {/* <div class="md:w-1/3"></div> */}
          <h2 className="text-2xl uppercase font-bold ml-10 mb-6 mt-[0] flex flex-row justify-center items-center ">
            <FontAwesomeIcon icon={faUser} className="mr-5"></FontAwesomeIcon>
            Reset Password
          </h2>
        </span>
        <div class="md:flex md:items-center text-justify mb-10">
          <div class="md:w-2/3"></div>
          <p>
            Enter your admin email address and we will send you a password reset
            link.
          </p>
        </div>
        <div class="md:flex md:items-center mb-3">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="email"
            >
              Email
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#000080]"
              id="email"
              type="email"
              placeholder="XYZ@gmail.com"
              ref={userRef}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
        </div>

        <div class="md:flex md:items-center mb-10">
          <div class="md:w-1/3"></div>
          <div class="md:w-2/3">
            <p>Verify Your account</p>
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
              Send Email
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Forgot;
