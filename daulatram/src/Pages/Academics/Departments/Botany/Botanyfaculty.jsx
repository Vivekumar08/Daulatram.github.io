import React from "react";

import Botanybanner from "../Botany/Botanybanner.jsx";
import Departments from "../../../../Components/Sidebar/Departments";
import "./botfac.css";
import ng from "../../../../Dummy_data/ImgPages/Botany/Nidhi_Gautam.jpg";
import ngp from "../../../../Dummy_data/ImgPages/Botany/NidhiG_CV.pdf";
import rpp from "../../../../Dummy_data/ImgPages/Botany/Rama_Pasricha_cv.pdf";
import rp from "../../../../Dummy_data/ImgPages/Botany/Rama_Pasricha.jpg";
import rkp from "../../../../Dummy_data/ImgPages/Botany/Rekha_Kathal_cv.pdf";
import rk from "../../../../Dummy_data/ImgPages/Botany/Rekha_Kathal.jpg";
import mbp from "../../../../Dummy_data/ImgPages/Botany/Meenam_Bhatia_cv.pdf";
import mb from "../../../../Dummy_data/ImgPages/Botany/Meenam_Bhatia.jpg";

import sgp from "../../../../Dummy_data/ImgPages/Botany/Sunita_George.pdf";
import sg from "../../../../Dummy_data/ImgPages/Botany/SUNITA_GEORGE.jpg";
import msp from "../../../../Dummy_data/ImgPages/Botany/Meenakshi_Sharma_cv.pdf";
import ms from "../../../../Dummy_data/ImgPages/Botany/Meenakshi_Sharma.jpg";
import vdp from "../../../../Dummy_data/ImgPages/Botany/Vidhi_Chaudhary_cv.pdf";
import vd from "../../../../Dummy_data/ImgPages/Botany/Vidhi_Chaudhary.jpg";
import mlp from "../../../../Dummy_data/ImgPages/Botany/Mayanglambam_Leleeka_cv.pdf";
import ml from "../../../../Dummy_data/ImgPages/Botany/leleeka_mayanglambam.jpg";

import ayp from "../../../../Dummy_data/ImgPages/Botany/Aradhana_Yadav_cv.pdf";
import ay from "../../../../Dummy_data/ImgPages/Botany/Aradhana_Yadav.jpg";
import pkp from "../../../../Dummy_data/ImgPages/Botany/Pratibha_Kumari_cv.pdf";
import pk from "../../../../Dummy_data/ImgPages/Botany/Pratibha_Kumari.jpeg";
import sdp from "../../../../Dummy_data/ImgPages/Botany/Shagun_Danda_cv.pdf";
import sd from "../../../../Dummy_data/ImgPages/Botany/Shagun_Danda.jpg";
import agpp from "../../../../Dummy_data/ImgPages/Botany/Asmita_Gupta_cv.pdf";
import agt from "../../../../Dummy_data/ImgPages/Botany/Asmita_Gupta.JPG";
import kkp from "../../../../Dummy_data/ImgPages/Botany/Kamlesh_Kumari.pdf";
import kk from "../../../../Dummy_data/ImgPages/Botany/Kamlesh_Kumari.jpg";

import ssp from "../../../../Dummy_data/ImgPages/Botany/Sunita_Sinha_cv.pdf";
import ss from "../../../../Dummy_data/ImgPages/Botany/Sunita_Sinha.png";
import rmp from "../../../../Dummy_data/ImgPages/Botany/Rajeshwari_Madhavan_cv.pdf";
import rm from "../../../../Dummy_data/ImgPages/Botany/Rajeshwari_Madhavan.png";
import spp from "../../../../Dummy_data/ImgPages/Botany/Sudha_Prakash_cv.pdf";
import spt from "../../../../Dummy_data/ImgPages/Botany/Sudha_Prakash.jpg";

import sdj from "../../../../Dummy_data/ImgPages/Botany/Shubhasni_Dewan.jpg";
import kn from "../../../../Dummy_data/ImgPages/Botany/Kanan_Nanda.jpeg";

function Botanyfaculty() {
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
              Faculty
            </h2>

            <span className="font-bold text-xl ml-7">Current Faculty</span>
            <div class="wrapper mt-5 mb-5">
              <div class="card">
                <img src={ng} />
                <div class="info">
                  <h1> Prof. Nidhi Gautam </h1>
                  <p>Assistant Professor</p>
                  <a href={ngp}>
                    <button>View CV</button>
                  </a>
                </div>
              </div>
              <div class="card">
                <img src={rp} />
                <div class="info">
                  <h1>Prof. Rama Pasricha</h1>
                  <p>Assistant Professor (Level XII)</p>
                  <a href={rpp}>
                    <button>View CV</button>
                  </a>
                </div>
              </div>
              <div class="card">
                <img src={rk} />
                <div class="info">
                  <h1>Prof. Rekha Kathal</h1>
                  <p>Associate Professor</p>
                  <a href={rkp}>
                    <button>View CV</button>
                  </a>
                </div>
              </div>
              <div class="card">
                <img src={mb} />
                <div class="info">
                  <h1>Dr. Meenam Bhatia</h1>
                  <p> Associate Professor</p>
                  <a href={mbp}>
                    <button>View CV</button>
                  </a>
                </div>
              </div>
            </div>

            <div class="wrapper mt-5 mb-5">
              <div class="card">
                <img src={sg} />
                <div class="info">
                  <h1> Dr. Sunita George </h1>
                  <p>Assistant Professor</p>
                  <a href={sgp}>
                    <button>View CV</button>
                  </a>
                </div>
              </div>
              <div class="card">
                <img src={ms} />
                <div class="info">
                  <h1>Dr. Meenakshi Sharma</h1>
                  <p>Assistant Professor (Level XII)</p>
                  <a href={msp}>
                    <button>View CV</button>
                  </a>
                </div>
              </div>
              <div class="card">
                <img src={vd} />
                <div class="info">
                  <h1>Dr. Vidhi Chaudhary</h1>
                  <p>Assistant Professor</p>
                  <a href={vdp}>
                    <button>View CV</button>
                  </a>
                </div>
              </div>
              <div class="card">
                <img src={ml} />
                <div class="info">
                  <h1>Dr. Leleeka Mayanglambam</h1>
                  <p> Assistant Professor</p>
                  <a href={mlp}>
                    <button>View CV</button>
                  </a>
                </div>
              </div>
            </div>

            <div class="wrapper mt-5 mb-5">
              <div class="card">
                <img src={ay} />
                <div class="info">
                  <h1> Dr. Aradhana Yadav</h1>
                  <p>Assistant Professor</p>
                  <a href={ayp}>
                    <button>View CV</button>
                  </a>
                </div>
              </div>
              <div class="card">
                <img src={pk} />
                <div class="info">
                  <h1>Dr. Pratibha Kumari</h1>
                  <p>Assistant Professor (Level XII)</p>
                  <a href={pkp}>
                    <button>View CV</button>
                  </a>
                </div>
              </div>
              <div class="card">
                <img src={sd} />
                <div class="info">
                  <h1>Dr. Shagun Danda</h1>
                  <p>Assistant Professor</p>
                  <a href={sdp}>
                    <button>View CV</button>
                  </a>
                </div>
              </div>
              <div class="card">
                <img src={agt} />
                <div class="info">
                  <h1>Dr. Asmita Gupta</h1>
                  <p> Assistant Professor</p>
                  <a href={agpp}>
                    <button>View CV</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="wrapper4 mt-5 mb-5 ">
            <div class="card ">
              <img src={kk} />
              <div class="info">
                <h1> Dr. Kamlesh Kumari</h1>
                <p>Assistant Professor (Ad hoc)</p>
                <a href={kkp}>
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

export default Botanyfaculty;
