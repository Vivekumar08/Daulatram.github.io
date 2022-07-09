import React from "react";
import Departments from "../../../../Components/Sidebar/Departments";
import Ecobanner from "../Economics/Ecobanner.jsx";
import Economics from "../../../../Components/DepartSIde/Economics.jsx";

import "./style1.css";

function Eco_photogallery() {
  return (

    <div className=" flex flex-col">
      <div className="">
        <Ecobanner />
      </div>
      <div className="flex flex-row">
      <div className=" flex  flex-col ml-2 mt-12 mb-60">
          <Economics />
        </div>
        <div className="w-full mr-16">
          <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
            Photo Gallery
          </h2>

          <div class="box">
            <div class="carousel">
              <div class="carousel__item">
                <img
                  src="/images/ImgPages/Economics/Image1.png"
                  className="  mt-[3%]   w-[450px] h-[370px] rounded-2xl border-2 border-black"
                />
              </div>
              <div class="carousel__item">
                <img
                  src="/images/ImgPages/Economics/Image2.jpg"
                  className="  mt-[3%]   w-[450px] h-[370px] rounded-2xl border-2 border-black"
                />
              </div>
              <div class="carousel__item">
                <img
                  src="/images/ImgPages/Economics/Image3.jpg"
                  className="  mt-[3%]   w-[450px] h-[370px] rounded-2xl border-2 border-black"
                />
              </div>
              <div class="carousel__item">
                <img
                  src="/images/ImgPages/Economics/Image4.jpg"
                  className="  mt-[3%]   w-[450px] h-[370px] rounded-2xl border-2 border-black"
                />
              </div>
              <div class="carousel__item">
                <img
                  src="/images/ImgPages/Economics/Image5.jpg"
                  className="  mt-[3%]   w-[450px] h-[370px] rounded-2xl border-2 border-black"
                />
              </div>
              <div class="carousel__item">
                <img
                  src="/images/ImgPages/Economics/Image6.jpg"
                  className="  mt-[3%]   w-[450px] h-[370px] rounded-2xl border-2 border-black"
                />
              </div>
              <div class="carousel__item">
                <img
                  src="/images/ImgPages/Economics/Image7.jpg"
                  className="  mt-[3%]   w-[450px] h-[370px] rounded-2xl border-2 border-black"
                />
              </div>
              <div class="carousel__item">
                <img
                  src="/images/ImgPages/Economics/Image8.jpg"
                  className="  mt-[3%]   w-[450px] h-[370px] rounded-2xl border-2 border-black"
                />
              </div>
              <div class="carousel__item">
                <img
                  src="/images/ImgPages/Economics/Image8.jpg"
                  className="  mt-[3%]   w-[450px] h-[370px] rounded-2xl border-2 border-black"
                />
              </div>
              <div class="carousel__item">
                <img
                  src="/images/ImgPages/Economics/Image10.jpg"
                  className="  mt-[3%]   w-[450px] h-[370px] rounded-2xl border-2 border-black"
                />
              </div>
              <div class="carousel__item">
                <img
                  src="/images/ImgPages/Economics/Image11.jpg"
                  className="  mt-[3%]   w-[450px] h-[370px] rounded-2xl border-2 border-black"
                />
              </div>
              <div class="carousel__item">
                <img
                  src="/images/ImgPages/Economics/Image12.jpg"
                  className="  mt-[3%]   w-[450px] h-[370px] rounded-2xl border-2 border-black"
                />
              </div>
              <div class="carousel__item">
                <img
                  src="/images/ImgPages/Economics/Image13.jpg"
                  className="  mt-[3%]   w-[450px] h-[370px] rounded-2xl border-2 border-black"
                />
              </div>
              <div class="carousel__item">
                <img
                  src="/images/ImgPages/Economics/Image14.jpg"
                  className="  mt-[3%]   w-[450px] h-[370px] rounded-2xl border-2 border-black"
                />
              </div>
              <div class="carousel__item">
                <img
                  src="/images/ImgPages/Economics/Image15.jpg"
                  className="  mt-[3%]   w-[450px] h-[370px] rounded-2xl border-2 border-black"
                />
              </div>
              <div class="carousel__item">
                <img
                  src="/images/ImgPages/Economics/Image16.jpg"
                  className="  mt-[3%]   w-[450px] h-[370px] rounded-2xl border-2 border-black"
                />
              </div>
              <div class="carousel__item">
                <img
                  src="/images/ImgPages/Economics/Image17.jpg"
                  className="  mt-[3%]   w-[450px] h-[370px] rounded-2xl border-2 border-black"
                />
              </div>
              <div class="carousel__item">
                <img
                  src="/images/ImgPages/Economics/Image18.jpg"
                  className="  mt-[3%]   w-[450px] h-[370px] rounded-2xl border-2 border-black"
                />
              </div>
              <div class="carousel__item">
                <img
                  src="/images/ImgPages/Economics/Image19.jpg"
                  className="  mt-[3%]   w-[450px] h-[370px] rounded-2xl border-2 border-black"
                />
              </div>
              <div class="carousel__item">
                <img
                  src="/images/ImgPages/Economics/Image20.jpg"
                  className="  mt-[3%]   w-[450px] h-[370px] rounded-2xl border-2 border-black"
                />
              </div>
            </div>
          </div>
        </div>
         
      </div>
    </div>
  );
}

export default Eco_photogallery;
