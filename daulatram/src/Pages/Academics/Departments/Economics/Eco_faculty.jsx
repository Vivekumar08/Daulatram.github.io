import React from 'react'
import Departments from "../../../../Components/Sidebar/Departments";
import Ecobanner from "../Economics/Ecobanner.jsx";
import Economics from "../../../../Components/DepartSIde/Economics.jsx"; 
import  aisha from "../../../../Dummy_data/ImgPages/Economics/Aisha.jpg"
import  aisha_cv from "../../../../Dummy_data/ImgPages/Economics/Aisha_cv.pdf"
import  ashok from "../../../../Dummy_data/ImgPages/Economics/Ashok.png"
import  ashok_cv from "../../../../Dummy_data/ImgPages/Economics/Ashok_cv.pdf"
import  malini from "../../../../Dummy_data/ImgPages/Economics/Malini.jpg"
import  malini_cv from "../../../../Dummy_data/ImgPages/Economics/Malini_cv.pdf"
import  nitish from "../../../../Dummy_data/ImgPages/Economics/Nitish.png"
import  nitish_cv from "../../../../Dummy_data/ImgPages/Economics/Nitish_cv.pdf"
import  poojak from "../../../../Dummy_data/ImgPages/Economics/Pooja_k.jpg"
import  poojak_cv from "../../../../Dummy_data/ImgPages/Economics/Pooja_k_cv.pdf"
import  poojas from "../../../../Dummy_data/ImgPages/Economics/Pooja_s.jpg"
import  poojas_cv from "../../../../Dummy_data/ImgPages/Economics/Pooja_s_cv.pdf"
import  priyanka from "../../../../Dummy_data/ImgPages/Economics/Priyanka.png"
import  priyanka_cv from "../../../../Dummy_data/ImgPages/Economics/Priyanka_cv.pdf"
import  rita from "../../../../Dummy_data/ImgPages/Economics/Rita.png"
import  rita_cv from "../../../../Dummy_data/ImgPages/Economics/Rita_cv.pdf"
import  ritu from "../../../../Dummy_data/ImgPages/Economics/Ritu.jpg"
import  saachi from "../../../../Dummy_data/ImgPages/Economics/Saachi.png"
import  saachi_cv from "../../../../Dummy_data/ImgPages/Economics/Saachi_cv.pdf"
import sikha from "../../../../Dummy_data/ImgPages/Economics/Sikha.png"
import  sikha_cv from "../../../../Dummy_data/ImgPages/Economics/Shikha_cv.pdf"
import  sumeet from "../../../../Dummy_data/ImgPages/Economics/Sumeet.png"
import  sumeet_cv from "../../../../Dummy_data/ImgPages/Economics/Sumeet_cv.pdf"
function Eco_faculty() {
  return (
    <div className=" flex flex-col">
    <div className="">
      <Ecobanner />
    </div>
    <div className="flex flex-row">
      <div className="w-[350px]">
        <Departments />
      </div>

      <div className="w-[1100px]">
        <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
          Faculty
        </h2>
        <div className="flex flex-col">
          <span className="font-bold text-xl ml-7">Economics Faculty</span>
          <div class="wrapper1 mt-5 mb-8">
            <div class="card">
              <img src={malini} />
              <div class="info">
                <h1> Dr. Malini Sharma</h1>
                <p>Associate Professor</p>
                <a href={malini_cv}>
                  <button>View CV</button>
                </a>
              </div>
            </div>
            <div class="card">
              <img src={poojak} />
              <div class="info">
                <h1>Ms. Pooja Khanna</h1>
                <p>Assistant Professor</p>
                <a href={poojak_cv}>
                  <button>View CV</button>
                </a>
              </div>
            </div>
            <div class="card">
              <img src={ritu} />
              <div class="info">
                <h1>Ms. Ritu Khanna</h1>
                <p>Assistant Professor</p>
                <a href={"#"}>
                  <button>View CV</button>
                </a>
              </div>
            </div>
          </div>
          <div class="wrapper1 mt-5 mb-8">
            <div class="card">
              <img src={rita} />
              <div class="info">
                <h1>Dr. Rita Rani</h1>
                <p> Associate Professor</p>
                <a href={rita_cv}>
                  <button>View CV</button>
                </a>
              </div>
            </div>

            <div class="card">
              <img src={poojas} />
              <div class="info">
                <h1> Ms. Pooja Sharma</h1>
                <p>Sr. Assistant Professor</p>
                <a href={poojas_cv}>
                  <button>View CV</button>
                </a>
              </div>
            </div>
            <div class="card">
              <img src={sikha} />
              <div class="info">
                <h1>Ms. Shikha Singh</h1>
                <p>Assistant Professor</p>
                <a href={sikha_cv}>
                  <button>View CV</button>
                </a>
              </div>
            </div>
          </div>

          <div class="wrapper1 mt-5 mb-8">
            <div class="card">
              <img src={sumeet} />
              <div class="info">
                <h1>Ms. Sumeet Goyal</h1>
                <p>Assistant Professor</p>
                <a href={sumeet_cv}>
                  <button>View CV</button>
                </a>
              </div>
            </div>
            <div class="card">
              <img src={priyanka} />
              <div class="info">
                <h1>Ms. Priyanka Yadav</h1>
                <p> Assistant Professor</p>
                <a href={priyanka_cv}>
                  <button>View CV</button>
                </a>
              </div>
            </div>

            <div class="card">
              <img src={saachi} />
              <div class="info">
                <h1> Ms. Saachi Bhutani Bhagat</h1>
                <p>Assistant Professor</p>
                <a href={saachi_cv}>
                  <button>View CV</button>
                </a>
              </div>
            </div>
          </div>
          <div class="wrapper1 mt-5 mb-8">
            <div class="card">
              <img src={aisha} />
              <div class="info">
                <h1>Ms. Aisha Ahmed</h1>
                <p>Assistant Professor</p>
                <a href={aisha_cv}>
                  <button>View CV</button>
                </a>
              </div>
            </div>
            <div class="card">
              <img src={nitish} />
              <div class="info">
                <h1>Mr. Nitish Kashyap</h1>
                <p>Assistant Professor</p>
                <a href={nitish_cv}>
                  <button>View CV</button>
                </a>
              </div>
            </div>
            <div class="card">
              <img src={ashok} />
              <div class="info">
                <h1>Mr. Ashok Kumar</h1>
                <p> Assistant Professor</p>
                <a href={ashok_cv}>
                  <button>View CV</button>
                </a>
              </div>
            </div>
          </div>
            </div>
          </div>
          <div className=" flex  flex-col mr-16 mt-36">
            <Economics />
            </div>
      </div></div>
  )
}

export default Eco_faculty