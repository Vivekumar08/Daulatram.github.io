import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./stl.css";

function Gallery_about() {
  return (
    <>
      <div
        className="Banner"
        style={{ backgroundImage: "url(/images/img1.jpeg)" }}
      >
        <div className="name">
          <div className="">
            <div className="flex flex-row justify-center">
              <p className="  text-[#fff] text-6xl shadow-lg  mt-12 font-bold  p-5 flex justify-center w-full rounded-md  ">
                Photo Gallery{" "}
              </p>
            </div>

            <div className=" bg-gray-400 pt-3 pb-3 pl-5 text-lg text-[#000080] mt-28 ">
              <Link to={"/"}>
                <span className="ml-5">Home</span>
              </Link>
              <span className="ml-5">About Us</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="w-[350px]">
          <Sidebar />
        </div>
        <div className="w-[1100px]">
          <h2 className="text-3xl md:text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center  ">
            Gallery
          </h2>
          <div className="main_conta">
            <div class="sliderr">
              <div class="slidee-track">
                <div class="slidee">
                  <img
                    src="/images/ImgPages/Biochemistry/Anita_g.jpg"
                    alt=""
                  />
                </div>
                <div class="slidee">
                  <img
                    src="/images/ImgPages/Biochemistry/Biochemistry1.jpg"
                    alt=""
                  />
                </div>
                <div class="slidee">
                  <img
                    src="/images/ImgPages/Biochemistry/association1.jpg"
                    alt=""
                  />
                </div>
                <div class="slidee">
                  <img
                    src="/images/ImgPages/Biochemistry/association2.jpg"
                    alt=""
                  />
                </div>
                <div class="slidee">
                  <img
                    src="/images/ImgPages/Biochemistry/association3.jpg"
                    alt=""
                  />
                </div>
                <div class="slidee">
                  <img
                    src="/images/ImgPages/Biochemistry/association4.jpg"
                    alt=""
                  />
                </div>
                <div class="slidee">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
                    alt=""
                  />
                </div>
                <div class="slidee">
                  <img
                    src="/images/ImgPages/Biochemistry/leena.jpg"
                    alt=""
                  />
                </div>
                <div class="slidee">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
                    alt=""
                  />
                </div>
                <div class="slidee">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
                    alt=""
                  />
                </div>
                <div class="slidee">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
                    alt=""
                  />
                </div>
                <div class="slidee">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
                    alt=""
                  />
                </div>
                <div class="slidee">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
                    alt=""
                  />
                </div>
                <div class="slidee">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery_about;
