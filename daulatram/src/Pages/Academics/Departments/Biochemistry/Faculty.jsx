import React from "react";
import DepartBanner from "../../../../Components/Banners/DepartBanner";
import Departments from "../../../../Components/Sidebar/Departments";
import sn from "../../../../Dummy_data/ImgPages/Biochemistry/Sarita_Nanda.jpg";
import sp from "../../../../Dummy_data/ImgPages/Biochemistry/Sarita_cv.pdf";
import pp from "../../../../Dummy_data/ImgPages/Biochemistry/padam_cv.pdf";
import ps from "../../../../Dummy_data/ImgPages/Biochemistry/padmshree.jpg";
import ap from "../../../../Dummy_data/ImgPages/Biochemistry/Anita_M.pdf";
import am from "../../../../Dummy_data/ImgPages/Biochemistry/anita_mangla.jpg";
import np from "../../../../Dummy_data/ImgPages/Biochemistry/neeru_cv.pdf";
import nd from "../../../../Dummy_data/ImgPages/Biochemistry/neeru.jpg";

import lp from "../../../../Dummy_data/ImgPages/Biochemistry/Leena_cv.pdf";
import lv from "../../../../Dummy_data/ImgPages/Biochemistry/leena.jpg";
import rp from "../../../../Dummy_data/ImgPages/Biochemistry/Radhika_cv.pdf";
import rg from "../../../../Dummy_data/ImgPages/Biochemistry/Radhika.jpg";
import agp from "../../../../Dummy_data/ImgPages/Biochemistry/Anita_g_cv.pdf";
import dag from "../../../../Dummy_data/ImgPages/Biochemistry/anita_g.jpg";
import ndp from "../../../../Dummy_data/ImgPages/Biochemistry/Neeraj_cv.pdf";
import ndj from "../../../../Dummy_data/ImgPages/Biochemistry/neeraj.jpg";

import "./fac.css";

function Faculty() {
  return (
    <div className=" flex flex-col">
      <div className="">
        <DepartBanner />
      </div>
      <div className="flex flex-row">
        <div className="w-[350px]">
          <Departments />
        </div>
        <div className="ml-3 ">
          <div className="w-[1100px]">
            <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
              Faculty
            </h2>
          </div>
          <span className="font-bold text-xl ml-6">Current Faculty</span>
          <div class="wrapper mt-5 mb-5">
            <div class="card">
              <img src={sn} />
              <div class="info">
                <h1> Prof. Sarita Nanda </h1>
                <p>Vice Principal</p>
                <a href={sp}>
                  <button>View CV</button>
                </a>
              </div>
            </div>
            <div class="card">
              <img src={ps} />
              <div class="info">
                <h1>Dr. Padamshree Mudgal</h1>
                <p>Professor</p>
                <a href={pp}>
                  <button>View CV</button>
                </a>
              </div>
            </div>
            <div class="card">
              <img src={am} />
              <div class="info">
                <h1>Dr. Anita Garg Mangla</h1>
                <p>Assistant Professor</p>
                <a href={ap}>
                  <button>View CV</button>
                </a>
              </div>
            </div>
            <div class="card">
              <img src={nd} />
              <div class="info">
                <h1>Dr. Neeru Dhamija</h1>
                <p> Assistant Professor</p>
                <a href={np}>
                  <button>View CV</button>
                </a>
              </div>
            </div>
          </div>
          <div class="wrapper mt-6 mb-16">
            <div class="card">
              <img src={lv} />
              <div class="info">
                <h1> Dr. Leena Vij </h1>
                <p>Assistant Professor</p>
                <a href={lp}>
                  <button>View CV</button>
                </a>
              </div>
            </div>
            <div class="card">
              <img src={rg} />
              <div class="info">
                <h1>Dr. Radhika Gupta</h1>
                <p>Assistant Professor</p>
                <a href={rp}>
                  <button>View CV</button>
                </a>
              </div>
            </div>
            <div class="card">
              <img src={dag} />
              <div class="info">
                <h1>Dr. Anita Goel</h1>
                <p>Assistant Professor</p>
                <a href={agp}>
                  <button>View CV</button>
                </a>
              </div>
            </div>
            <div class="card">
              <img src={ndj} />
              <div class="info">
                <h1>Dr. Neeraj Dohare</h1>
                <p> Assistant Professor</p>
                <a href={ndp}>
                  <button>View CV</button>
                </a>
              </div>
            </div>
          </div>
          <span className="font-bold text-xl ml-6 mt-16">Superannuated Faculty</span>

          <div class="wrapper1 mt-6 mb-10 ">
            <div class="card ml-2">
              <img src={lv} />
              <div class="info">
                <h1> Dr. K. Nirmala </h1>
                <p>Associate Professor</p>
                <a href={lp}>
                  <button>View CV</button>
                </a>
              </div>
            </div>
            <div class="card ml-10">
              <img src={rg} />
              <div class="info">
                <h1>Dr. Sunita Joshi</h1>
                <p>Associate Professor</p>
                <a href={rp}>
                  <button>View CV</button>
                </a>
              </div>
            </div>
          </div>
          <div className="p-3 grid grid-cols-4 mr-2 ml-2">
            <span className=" mr-2 bg-blue-600 rounded-lg p-2 flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-500">
              <a href="./biochem/programmesoffer">Programmes Offered</a>
            </span>
            <span className=" mr-2 bg-blue-600 rounded-lg p-2 flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-500">
              <a href="./biochem/association">Association</a>
            </span>
            <span className=" mr-2 bg-blue-600 rounded-lg p-2 flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-500">
              <a href="./biochem/studentsachieve">Student's Achievements</a>
            </span>
            <span className=" mr-2 bg-blue-600 rounded-lg p-2 flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-500">
              <a href="./biochem/events">Events</a>
            </span>

            <span className=" mr-2 bg-blue-600 rounded-lg p-2 flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-500">
              <a href="./biochem/laboratorystaff">Laboratory Staff</a>
            </span>

            <span className=" mr-2 bg-blue-600 rounded-lg p-2 flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-500">
              <a href="./biochem/publications">Publications</a>
            </span>

            <span className=" mr-2 bg-blue-600 rounded-lg p-2 flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-500">
              <a href="./biochem/awards">Awards</a>
            </span>

            <span className=" mr-2 bg-blue-600 rounded-lg p-2 flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-500">
              <a href="./biochem/research">Research</a>
            </span>
            <span className=" mr-2 bg-blue-600 rounded-lg p-2 flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-500">
              <a href="https://drive.google.com/file/d/1GagyR2UNzjijUt-JLiLxulvspvfLdEZF/view?usp=sharing">
                Time Table
              </a>
            </span>
            <span className=" mr-2 bg-blue-600 rounded-lg p-2 flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-500">
              <a href="https://drive.google.com/file/d/1GagyR2UNzjijUt-JLiLxulvspvfLdEZF/view?usp=sharing">
                Photo Gallery
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faculty;
