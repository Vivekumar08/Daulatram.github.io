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

          <div class="wrapper mt-6">
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
          <div class="wrapper1 mt-6 ">
            <div class="card ">
              <img src={lv} />
              <div class="info">
                <h1> Dr. K. Nirmala </h1>
                <p>Associate Professor</p>
                <a href={lp}>
                  <button>View CV</button>
                </a>
              </div>
            </div>
            <div class="card ml-7">
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
        </div>
      </div>
    </div>
  );
}

export default Faculty;
