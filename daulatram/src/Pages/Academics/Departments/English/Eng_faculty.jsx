import React from "react";
import Departments from "../../../../Components/Sidebar/Departments";
import Engbanner from "../English/Engbanner.jsx";
import English from "../../../../Components/DepartSIde/English.jsx";
import deepshikha_cv from "../../../../Dummy_data/ImgPages/English/Deepshikha_eng_cv.pdf";
import deepshikha from "../../../../Dummy_data/ImgPages/English/Deepshikha_eng.png";
import sangeeta_cv from "../../../../Dummy_data/ImgPages/English/Sangeeta_eng_cv.pdf";
import sangeeta from "../../../../Dummy_data/ImgPages/English/Sangeeta_eng.jpg";
import haritha_cv from "../../../../Dummy_data/ImgPages/English/Haritha_eng_cv.pdf";
import haritha from "../../../../Dummy_data/ImgPages/English/Haritha_eng.png";
import prastavana_cv from "../../../../Dummy_data/ImgPages/English/Prastavana_eng_cv.pdf";
import prastavana from "../../../../Dummy_data/ImgPages/English/Prastavana_eng.jpg";
import sakshi_cv from "../../../../Dummy_data/ImgPages/English/Sakshi_eng_cv.pdf";
import sakshi from "../../../../Dummy_data/ImgPages/English/Sakshi_eng.png";
import saneya_cv from "../../../../Dummy_data/ImgPages/English/Saneya_eng_cv.pdf";
import saneya from "../../../../Dummy_data/ImgPages/English/Saneya_eng.png";
import vandana_cv from "../../../../Dummy_data/ImgPages/English/Vandana_eng_cv.pdf";
import vandana from "../../../../Dummy_data/ImgPages/English/Vandana_eng.jpg";
import violina_cv from "../../../../Dummy_data/ImgPages/English/Violina_eng_cv.pdf";
import violina from "../../../../Dummy_data/ImgPages/English/Violina_eng.jpg";
import trisha_cv from "../../../../Dummy_data/ImgPages/English/Trisha_eng_cv.pdf";
import trisha from "../../../../Dummy_data/ImgPages/English/Trisha_eng.jpg";
import owais_cv from "../../../../Dummy_data/ImgPages/English/Owais_eng_cv.pdf";
import owais from "../../../../Dummy_data/ImgPages/English/Owais_eng.png";
import kiran_cv from "../../../../Dummy_data/ImgPages/English/Kiran_eng_cv.pdf";
import kiran from "../../../../Dummy_data/ImgPages/English/Kiran_eng.png";
import richa_cv from "../../../../Dummy_data/ImgPages/English/Richa_eng_cv.pdf";
import richa from "../../../../Dummy_data/ImgPages/English/Richa_eng.jpg";
import rashmi_cv from "../../../../Dummy_data/ImgPages/English/Rashmi_eng_cv.pdf";
import rashmi from "../../../../Dummy_data/ImgPages/English/Rashmi_eng.jpg";
import kaihru_cv from "../../../../Dummy_data/ImgPages/English/Kaihru_eng_cv.pdf";
import kaihru from "../../../../Dummy_data/ImgPages/English/Kaihru_eng.jpg";
function Eng_faculty() {
  return (
    <div className=" flex flex-col">
      <div className="">
        <Engbanner />
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
          <div className="flex flex-row">
            <div>
              <div class="wrapper1 mt-5 mb-5 ">
                <div class="card">
                  <img src={sangeeta} />
                  <div class="info">
                    <h1>Mrs. Sangeeta Gupta</h1>
                    <p>Senior Associate Professor</p>
                    <a href={sangeeta_cv}>
                      <button>View CV</button>
                    </a>
                  </div>
                </div>
                <div class="card">
                  <img src={deepshikha} />
                  <div class="info">
                    <h1>Dr. Deepshikha Mahanta Bortamuly</h1>
                    <p>Associate Professor</p>
                    <a href={deepshikha_cv}>
                      <button>View CV</button>
                    </a>
                  </div>
                </div>
                <div class="card">
                  <img src={haritha} />
                  <div class="info">
                    <h1>Ms. Haritha P.</h1>
                    <p>Assistant Professor</p>
                    <a href={haritha}>
                      <button>View CV</button>
                    </a>
                  </div>
                </div>
              </div>
              <div class="wrapper1 mt-6 mb-5">
                <div class="card">
                  <img src={prastavana} />
                  <div class="info">
                    <h1>Dr. Prastavana Mohan</h1>
                    <p> Assistant Professor</p>
                    <a href={prastavana_cv}>
                      <button>View CV</button>
                    </a>
                  </div>
                </div>
                <div class="card">
                  <img src={sakshi} />
                  <div class="info">
                    <h1> Dr. Sakshi Wason</h1>
                    <p>Assistant Professor (Ad hoc)</p>
                    <a href={sakshi}>
                      <button>View CV</button>
                    </a>
                  </div>
                </div>
                <div class="card">
                  <img src={saneya} />
                  <div class="info">
                    <h1>Ms. Saneya</h1>
                    <p>Assistant Professor</p>
                    <a href={saneya_cv}>
                      <button>View CV</button>
                    </a>
                  </div>
                </div>
              </div>
              <div class="wrapper1 mt-6 mb-5">
                <div class="card">
                  <img src={vandana} />
                  <div class="info">
                    <h1>Ms. Vandana</h1>
                    <p> Assistant Professor</p>
                    <a href={vandana_cv}>
                      <button>View CV</button>
                    </a>
                  </div>
                </div>
                <div class="card">
                  <img src={violina} />
                  <div class="info">
                    <h1> Ms. Violina Borah</h1>
                    <p>Assistant Professor (Ad hoc)</p>
                    <a href={violina_cv}>
                      <button>View CV</button>
                    </a>
                  </div>
                </div>
                <div class="card">
                  <img src={trisha} />
                  <div class="info">
                    <h1>Ms. Trisha Mitra</h1>
                    <p>Assistant Professor</p>
                    <a href={trisha_cv}>
                      <button>View CV</button>
                    </a>
                  </div>
                </div>
              </div>
              <div class="wrapper1 mt-6 mb-5">
                <div class="card">
                  <img src={owais} />
                  <div class="info">
                    <h1>Mr. Owais Farooq</h1>
                    <p> Assistant Professor</p>
                    <a href={owais_cv}>
                      <button>View CV</button>
                    </a>
                  </div>
                </div>
                <div class="card">
                  <img src={kiran} />
                  <div class="info">
                    <h1> Ms. Kiran Yadav</h1>
                    <p>Assistant Professor</p>
                    <a href={kiran_cv}>
                      <button>View CV</button>
                    </a>
                  </div>
                </div>
                <div class="card">
                  <img src={richa} />
                  <div class="info">
                    <h1>Ms. Richa Dawar</h1>
                    <p>Assistant Professor</p>
                    <a href={richa_cv}>
                      <button>View CV</button>
                    </a>
                  </div>
                </div>
              </div>

              <div class="wrapper1 mt-6 mb-16">
                <div class="card ml-10">
                  <img src={rashmi} />
                  <div class="info">
                    <h1>Ms. Rashmi Yadav</h1>
                    <p> Assistant Professor</p>
                    <a href={rashmi_cv}>
                      <button>View CV</button>
                    </a>
                  </div>
                </div>
              
              <div class="card ml-2">
                <img src={kaihru} />
                <div class="info">
                  <h1>Mr. Kehru L</h1>
                  <p>Assistant Professor</p>
                  <a href={kaihru_cv}>
                    <button>View CV</button>
                  </a>
                </div>
              </div>
              
</div>
              </div>
            <div className=" flex  flex-col mt-2">
              <English />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eng_faculty;
