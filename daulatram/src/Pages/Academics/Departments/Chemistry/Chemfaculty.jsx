import React from "react";
import Departments from "../../../../Components/Sidebar/Departments";
import Chembanner from "../Chemistry/Chembanner.jsx";
import Chemistry from "../../../../Components/DepartSIde/Chemistry.jsx";
import suchij from "../../../../Dummy_data/ImgPages/Chemistry/Suchi.jpg";
import shuchik from "../../../../Dummy_data/ImgPages/Chemistry/Shuchi.pdf";
import archana from "../../../../Dummy_data/ImgPages/Chemistry/Archana.jpg";
import archanap from "../../../../Dummy_data/ImgPages/Chemistry/ARCHANA.pdf";
import preetim from "../../../../Dummy_data/ImgPages/Chemistry/preeti_m.jpg";
import preetimp from "../../../../Dummy_data/ImgPages/Chemistry/Priti_m.pdf";
import suchijj from "../../../../Dummy_data/ImgPages/Chemistry/Suchi.jpg";
import shuchikj from "../../../../Dummy_data/ImgPages/Chemistry/Shuchi.pdf";
import darshan from "../../../../Dummy_data/ImgPages/Chemistry/Darshan.jpg";
import darshanp from "../../../../Dummy_data/ImgPages/Chemistry/DARSHAN.pdf";
import ritu from "../../../../Dummy_data/ImgPages/Chemistry/Ritu.jpg";
import ritup from "../../../../Dummy_data/ImgPages/Chemistry/Ritu.pdf";
import avneet from "../../../../Dummy_data/ImgPages/Chemistry/Avneet.jpg";
import avneetp from "../../../../Dummy_data/ImgPages/Chemistry/Avneet.pdf";
import arti from "../../../../Dummy_data/ImgPages/Chemistry/Arti.jpg";
import artip from "../../../../Dummy_data/ImgPages/Chemistry/ARTI.pdf";
import aditi from "../../../../Dummy_data/ImgPages/Chemistry/Aditi.jpg";
import aditip from "../../../../Dummy_data/ImgPages/Chemistry/aditi.pdf";
import anamika from "../../../../Dummy_data/ImgPages/Chemistry/Anamika.png";
import anamikap from "../../../../Dummy_data/ImgPages/Chemistry/Anamika.pdf";
import anuradha from "../../../../Dummy_data/ImgPages/Chemistry/anuradha.jpeg";
import anuradhap from "../../../../Dummy_data/ImgPages/Chemistry/Anuradha.pdf";
import preeti from "../../../../Dummy_data/ImgPages/Chemistry/preeti.jpg";
import preetip from "../../../../Dummy_data/ImgPages/Chemistry/preeti.pdf";
import divya from "../../../../Dummy_data/ImgPages/Chemistry/Divya.jpg";
import divyap from "../../../../Dummy_data/ImgPages/Chemistry/Divya.pdf";
import gauri from "../../../../Dummy_data/ImgPages/Chemistry/Gauri.jpg";
import gaurip from "../../../../Dummy_data/ImgPages/Chemistry/GAURI.pdf";
import suchi from "../../../../Dummy_data/ImgPages/Chemistry/Suchi.jpg";
import shuchi from "../../../../Dummy_data/ImgPages/Chemistry/Shuchi.pdf";

function Chemfaculty() {
  return (
    <div className=" flex flex-col">
      <div className="">
        <Chembanner />
      </div>
      <div className="flex flex-row">
        <div className="w-[350px]">
          <Departments />
        </div>

        <div className="w-[1100px]">
          <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
            Faculty
          </h2>
          
          <span className="font-bold text-xl ml-7">Chemistry Faculty</span>
          <div className="flex flex-col">
          <div class="wrapper1 mt-5 mb-8">
            <div class="card">
              <img src={suchij} />
              <div class="info">
                <h1>Dr. Shuchi Sharma</h1>
                <p>Associate Professor</p>
                <a href={shuchik}>
                  <button>View CV</button>
                </a>
              </div>
            </div>
            <div class="card">
              <img src={archana} />
              <div class="info">
                <h1>Dr. Archana Gupta</h1>
                <p>Associate Professor</p>
                <a href={archanap}>
                  <button>View CV</button>
                </a>
              </div>
            </div>
            <div class="card">
              <img src={preetim} />
              <div class="info">
                <h1>Prof. Priti Malhotra</h1>
                <p>Associate Professor</p>
                <a href={preetimp}>
                  <button>View CV</button>
                </a>
              </div>
            </div>
          </div>

          <div class="wrapper1 mt-5 mb-8">
            <div class="card">
              <img src={suchijj} />
              <div class="info">
                <h1>Dr. Asha</h1>
                <p>Associate Professor</p>
                <a href={shuchikj}>
                  <button>View CV</button>
                </a>
              </div>
            </div>
            <div class="card">
              <img src={darshan} />
              <div class="info">
                <h1>Dr. Darshan Singh</h1>
                <p>Assistant Professor</p>
                <a href={darshanp}>
                  <button>View CV</button>
                </a>
              </div>
            </div>
            <div class="card">
              <img src={ritu} />
              <div class="info">
                <h1>Dr. Ritu Gupta</h1>
                <p>Assistant Professor</p>
                <a href={ritup}>
                  <button>View CV</button>
                </a>
              </div>
            </div>
          </div>

          <div class="wrapper1 mt-5 mb-8">
            <div class="card">
              <img src={avneet} />
              <div class="info">
                <h1>Dr. Avneet Kaur</h1>
                <p>Assistant Professor</p>
                <a href={avneetp}>
                  <button>View CV</button>
                </a>
              </div>
            </div>
            <div class="card">
              <img src={arti} />
              <div class="info">
                <h1>Dr. Arti Jain</h1>
                <p>Assistant Professor</p>
                <a href={artip}>
                  <button>View CV</button>
                </a>
              </div>
            </div>
            <div class="card">
              <img src={aditi} />
              <div class="info">
                <h1>Dr. Aditi Puri</h1>
                <p>Assistant Professor</p>
                <a href={aditip}>
                  <button>View CV</button>
                </a>
              </div>
            </div>
          </div>

          <div class="wrapper1 mt-5 mb-8">
            <div class="card">
              <img src={anamika} />
              <div class="info">
                <h1>Dr. Anamika Debnath</h1>
                <p>Assistant Professor</p>
                <a href={anamikap}>
                  <button>View CV</button>
                </a>
              </div>
            </div>
            <div class="card">
              <img src={anuradha} />
              <div class="info">
                <h1>Dr. Anuradha</h1>
                <p>Assistant Professor</p>
                <a href={anuradhap}>
                  <button>View CV</button>
                </a>
              </div>
            </div>
            <div class="card">
              <img src={preeti} />
              <div class="info">
                <h1>Dr. Preeti Chadha</h1>
                <p>Assistant Professor</p>
                <a href={preetip}>
                  <button>View CV</button>
                </a>
              </div>
            </div>
          </div>

          <div class="wrapper1 mt-5 mb-8">
            <div class="card">
              <img src={divya} />
              <div class="info">
                <h1>Dr. Divya Mathur </h1>
                <p>Assistant Professor</p>
                <a href={divyap}>
                  <button>View CV</button>
                </a>
              </div>
            </div>
            <div class="card">
              <img src={gauri} />
              <div class="info">
                <h1>Dr. Gauri Ahuja</h1>
                <p>Assistant Professor</p>
                <a href={gaurip}>
                  <button>View CV</button>
                </a>
              </div>
            </div>
            <div class="card">
              <img src={suchi} />
              <div class="info">
                <h1>Dr. Arif Ahamad</h1>
                <p>Assistant Professor</p>
                <a href={shuchi}>
                  <button>View CV</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
          <div className=" flex  flex-col mr-16 mt-36">
          <Chemistry/>
        </div>
    </div>
    </div>
  );
}

export default Chemfaculty;
