import React from "react";
import Botanybanner from "../Botany/Botanybanner.jsx";
import Departments from "../../../../Components/Sidebar/Departments";
import rameshk from "../../../../Dummy_data/ImgPages/Botany/1_Mr_Ramesh_Nagar.JPG";
import sureshk from "../../../../Dummy_data/ImgPages/Botany/2_Mr_Suresh_Kumar.jpg";
import satishk from "../../../../Dummy_data/ImgPages/Botany/3_Mr_Satish_Kumar_Chauhan.jpg";
import mahendra from "../../../../Dummy_data/ImgPages/Botany/4_Mr_Mahendra_Pal.JPG";
import rambir from "../../../../Dummy_data/ImgPages/Botany/5_Mr_Rambir_Mann.jpg";
import neeraj from "../../../../Dummy_data/ImgPages/Botany/6_Mr_Neeraj.jpg";
import geetanjali from "../../../../Dummy_data/ImgPages/Botany/7_Ms_Geetanjali.jpg";
import "./botlabstaff.css";
function Bot_Lab_Staff() {
  return (
    <div className=" flex flex-col">
      <div className="">
        <Botanybanner />
      </div>
      <div className="flex flex-row">
        <div className="w-[350px]">
          <Departments />
        </div>
        <div>
          <div className="w-[1100px]">
            <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
              Lab Staff
            </h2>
          </div>
          <div className="flex flex-col">
            <div class="wrapper mt-5 mb-8">
              <div class="card">
                <img src={rameshk} />
                <div class="info">
                  <h1> 1- Mr. Suresh Kumar </h1>
                  <p>Laboratory Assistant</p>
                  <p>Date of Joining- 21/12/1988</p>
                </div>
              </div>
              <div class="card">
                <img src={sureshk} />
                <div class="info">
                  <h1>2- MR. Ramesh Nagar</h1>
                  <p>Laboratory Assistant</p>
                  <p>Date of joining- 29/03/1993</p>
                </div>
              </div>
              <div class="card">
                <img src={satishk} />
                <div class="info">
                  <h1>3- Mr. Satish Kumar Chauhan</h1>
                  <p>Laboratory Assistant</p>
                  <p>Date of joining-12/06/2006</p>
                </div>
              </div>
            </div>
            <div class="wrapper mt-5 mb-8">
              <div class="card">
                <img src={mahendra} />
                <div class="info">
                  <h1> 4- Mr. Mahendra Pal </h1>
                  <p>Laboratory Assistant</p>
                  <p>Date of Joining-12/06/2006</p>
                </div>
              </div>
              <div class="card">
                <img src={rambir} />
                <div class="info">
                  <h1>5- Mr. Rambir Mann</h1>
                  <p>Chowkidar</p>
                  <p>Date of joining-18/06/2009</p>
                </div>
              </div>
              <div class="card">
                <img src={neeraj} />
                <div class="info">
                  <h1>6- Mr. Niraj</h1>
                  <p>Laboratory Assistant</p>
                  <p>Date of joining-12/09/2019</p>
                </div>
              </div>
            </div>
            <div class="wrapper5 mt-5 mb-9 ">
              <div class="card ">
                <img src={geetanjali} />
                <div class="info">
                  <h1> 7- Ms. Gitanjali</h1>
                  <p>Laboratory Assistant</p>
                  <p>Date of joining-12/09/2019</p>
                </div>
              </div>
        
            </div>
          </div>
        </div>
      </div>
         
    </div>
  );
}

export default Bot_Lab_Staff;
