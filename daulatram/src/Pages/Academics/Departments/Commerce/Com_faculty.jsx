import React from "react";
import Departments from "../../../../Components/Sidebar/Departments";
import Commercebanner from "../Commerce/Commercebanner.jsx";
import Commerce from "../../../../Components/DepartSIde/Commerce.jsx";
import anubha from "../../../../Dummy_data/ImgPages/Commerce/anubha_com.jpg";
import anubha_cv from "../../../../Dummy_data/ImgPages/Commerce/Anubha_com.pdf";
import male from "../../../../Dummy_data/images/male.png";
import female from "../../../../Dummy_data/images/female_user.png";
import deepika_cv from "../../../../Dummy_data/ImgPages/Commerce/Deepika_com.pdf";
import gunjan from "../../../../Dummy_data/ImgPages/Commerce/gunjan_com.png";
import gunjan_cv from "../../../../Dummy_data/ImgPages/Commerce/gunjan_com.pdf";
import gurup_cv from "../../../../Dummy_data/ImgPages/Commerce/Gurpinder_com.pdf";
import hritanshu from "../../../../Dummy_data/ImgPages/Commerce/Hritanshu_com.png";
import hritanshu_cv from "../../../../Dummy_data/ImgPages/Commerce/Hritanshu_com.pdf";
import indu_cv from "../../../../Dummy_data/ImgPages/Commerce/Indu_com.pdf";
import ishab from "../../../../Dummy_data/ImgPages/Commerce/isha_bhatt.png";
import ishab_cv from "../../../../Dummy_data/ImgPages/Commerce/isha_bhatt.pdf";
import ishag_cv from "../../../../Dummy_data/ImgPages/Commerce/Isha_Goel.pdf";
import kalpana from "../../../../Dummy_data/ImgPages/Commerce/kalpana_com.png";
import kalpana_cv from "../../../../Dummy_data/ImgPages/Commerce/kalpana_com.pdf";
import kavita from "../../../../Dummy_data/ImgPages/Commerce/Kavita_com.png";
import kavita_cv from "../../../../Dummy_data/ImgPages/Commerce/Kavita_com.pdf";
import madhu from "../../../../Dummy_data/ImgPages/Commerce/Madhu_com.png";
import madhu_cv from "../../../../Dummy_data/ImgPages/Commerce/Madhu_com.pdf";
import manisha from "../../../../Dummy_data/ImgPages/Commerce/Manisha_com.png";
import manisha_cv from "../../../../Dummy_data/ImgPages/Commerce/Manisha_com.pdf";
import mansi from "../../../../Dummy_data/ImgPages/Commerce/mansi_com.png";
import mansi_cv from "../../../../Dummy_data/ImgPages/Commerce/mansi_com.pdf";
import meeta_cv from "../../../../Dummy_data/ImgPages/Commerce/meeta_com.pdf";
import megha from "../../../../Dummy_data/ImgPages/Commerce/megha_com.png";
import megha_cv from "../../../../Dummy_data/ImgPages/Commerce/megha_com.pdf";
import minakshi from "../../../../Dummy_data/ImgPages/Commerce/Minakshi_com.png";
import minakshi_cv from "../../../../Dummy_data/ImgPages/Commerce/Minakshi_com.pdf";
import preeti from "../../../../Dummy_data/ImgPages/Commerce/Preeti_com.png";
import preeti_cv from "../../../../Dummy_data/ImgPages/Commerce/Preeti_com.pdf";
import raman from "../../../../Dummy_data/ImgPages/Commerce/Raman_com.png";
import raman_cv from "../../../../Dummy_data/ImgPages/Commerce/Raman_com.pdf";
import reema from "../../../../Dummy_data/ImgPages/Commerce/Reema_com.png";
import reema_cv from "../../../../Dummy_data/ImgPages/Commerce/Reema_com.pdf";
import renu from "../../../../Dummy_data/ImgPages/Commerce/renu_com.png";
import renu_cv from "../../../../Dummy_data/ImgPages/Commerce/Renu_com.pdf";
import richa from "../../../../Dummy_data/ImgPages/Commerce/Richa_com.png";
import richa_cv from "../../../../Dummy_data/ImgPages/Commerce/Richa_com.pdf";
import roopshikha from "../../../../Dummy_data/ImgPages/Commerce/Roopshikha_com.png";
import roopshikha_cv from "../../../../Dummy_data/ImgPages/Commerce/Roopshikha_com.pdf";
import sarita_cv from "../../../../Dummy_data/ImgPages/Commerce/Sarita_com.pdf";
import shuchita from "../../../../Dummy_data/ImgPages/Commerce/shuchita_com.png";
import shuchita_cv from "../../../../Dummy_data/ImgPages/Commerce/shuchita_com.pdf";
import soumya from "../../../../Dummy_data/ImgPages/Commerce/Soumya_com.jpg";
import soumya_cv from "../../../../Dummy_data/ImgPages/Commerce/Soumya_com.pdf";
import sunita from "../../../../Dummy_data/ImgPages/Commerce/Sunita_com.jpg";
import sunita_cv from "../../../../Dummy_data/ImgPages/Commerce/Sunita_com.pdf";
import sushma_cv from "../../../../Dummy_data/ImgPages/Commerce/Sushma_com.pdf";
import tonika from "../../../../Dummy_data/ImgPages/Commerce/tonika_com.png";
import tonika_cv from "../../../../Dummy_data/ImgPages/Commerce/tonika_com.pdf";
import tripti from "../../../../Dummy_data/ImgPages/Commerce/Tripti_com.jpg";
import tripti_cv from "../../../../Dummy_data/ImgPages/Commerce/Tripti_com.pdf";
function Com_faculty() {
  return (
    <div className=" flex flex-col">
      <div className="">
        <Commercebanner />
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
            <span className="font-bold text-xl ml-7">Commerce Faculty</span>
            <div class="wrapper1 mt-5 mb-8">
              <div class="card">
                <img src={female} />
                <div class="info">
                  <h1> Mrs. Meeta Mathur</h1>
                  <p>Associate Professor</p>
                  <a href={meeta_cv}>
                    <button>View CV</button>
                  </a>
                </div>
              </div>
              <div class="card">
                <img src={kalpana} />
                <div class="info">
                  <h1>Dr. Kalpana Vaish</h1>
                  <p>Associate Professor</p>
                  <a href={kalpana_cv}>
                    <button>View CV</button>
                  </a>
                </div>
              </div>
              <div class="card">
                <img src={sunita} />
                <div class="info">
                  <h1>Dr. Sunita</h1>
                  <p>Associate Professor</p>
                  <a href={sunita_cv}>
                    <button>View CV</button>
                  </a>
                </div>
              </div>
            </div>
            <div class="wrapper1 mt-5 mb-8">
              <div class="card">
                <img src={male} />
                <div class="info">
                  <h1>Dr. Gurmeet Kaur</h1>
                  <p> Associate Professor</p>
                  <a href={"#"}>
                    <button>View CV</button>
                  </a>
                </div>
              </div>

              <div class="card">
                <img src={manisha} />
                <div class="info">
                  <h1> `Dr. Manisha Jaiswal</h1>
                  <p>Associate Professor</p>
                  <a href={manisha_cv}>
                    <button>View CV</button>
                  </a>
                </div>
              </div>
              <div class="card">
                <img src={reema} />
                <div class="info">
                  <h1>Dr. Reema Popli Dehal</h1>
                  <p>Associate Professor (Level XII)</p>
                  <a href={reema_cv}>
                    <button>View CV</button>
                  </a>
                </div>
              </div>
            </div>

            <div class="wrapper1 mt-5 mb-8">
              <div class="card">
                <img src={tonika} />
                <div class="info">
                  <h1>Dr. Tonika Rana</h1>
                  <p>Assistant Professor</p>
                  <a href={tonika_cv}>
                    <button>View CV</button>
                  </a>
                </div>
              </div>
              <div class="card">
                <img src={gunjan} />
                <div class="info">
                  <h1>Dr. Gunjan Gupta</h1>
                  <p> Assistant Professor</p>
                  <a href={gunjan_cv}>
                    <button>View CV</button>
                  </a>
                </div>
              </div>

              <div class="card">
                <img src={richa} />
                <div class="info">
                  <h1> Ms. Richa Kaur</h1>
                  <p>Assistant Professor</p>
                  <a href={richa_cv}>
                    <button>View CV</button>
                  </a>
                </div>
              </div>
            </div>
            <div class="wrapper1 mt-5 mb-8">
              <div class="card">
                <img src={mansi} />
                <div class="info">
                  <h1>Ms. Mansi Kanojia</h1>
                  <p>Assistant Professor</p>
                  <a href={mansi_cv}>
                    <button>View CV</button>
                  </a>
                </div>
              </div>
              <div class="card">
                <img src={female} />
                <div class="info">
                  <h1>Dr. Isha Goel</h1>
                  <p>Assistant Professor</p>
                  <a href={ishag_cv}>
                    <button>View CV</button>
                  </a>
                </div>
              </div>
              <div class="card">
                <img src={shuchita} />
                <div class="info">
                  <h1>Ms. Shuchita Verma</h1>
                  <p> Assistant Professor</p>
                  <a href={shuchita_cv}>
                    <button>View CV</button>
                  </a>
                </div>
              </div>
            </div>
            <div class="wrapper1 mt-5 mb-8">
              <div class="card">
                <img src={female} />
                <div class="info">
                  <h1>Ms. Deepika Jindal</h1>
                  <p>Assistant Professor</p>
                  <a href={deepika_cv}>
                    <button>View CV</button>
                  </a>
                </div>
              </div>
              <div class="card">
                <img src={raman} />
                <div class="info">
                  <h1>Ms. Raman Arora</h1>
                  <p>Assistant Professor</p>
                  <a href={raman_cv}>
                    <button>View CV</button>
                  </a>
                </div>
              </div>
              <div class="card">
                <img src={minakshi} />
                <div class="info">
                  <h1>Dr. Minakshi Paliwal</h1>
                  <p> Assistant Professor</p>
                  <a href={minakshi_cv}>
                    <button>View CV</button>
                  </a>
                </div>
              </div>
            </div>
            <div class="wrapper1 mt-5 mb-8">
              <div class="card">
                <img src={roopshikha} />
                <div class="info">
                  <h1>Ms. Roopshikha</h1>
                  <p> Assistant Professor</p>
                  <a href={roopshikha_cv}>
                    <button>View CV</button>
                  </a>
                </div>
              </div>
              <div class="card">
                <img src={preeti} />
                <div class="info">
                  <h1>Ms. Preeti Singh</h1>
                  <p>Assistant Professor</p>
                  <a href={preeti_cv}>
                    <button>View CV</button>
                  </a>
                </div>
              </div>
              <div class="card">
                <img src={ishab} />
                <div class="info">
                  <h1>Ms. Isha Bhatt</h1>
                  <p>Assistant Professor</p>
                  <a href={ishab_cv}>
                    <button>View CV</button>
                  </a>
                </div>
              </div>
            </div>
            <div class="wrapper1 mt-5 mb-8">
              <div class="card">
                <img src={megha} />
                <div class="info">
                  <h1>Dr. Megha Jain</h1>
                  <p> Assistant Professor</p>
                  <a href={megha_cv}>
                    <button>View CV</button>
                  </a>
                </div>
              </div>
              <div class="card">
                <img src={hritanshu} />
                <div class="info">
                  <h1>Ms. Hritanshu Jeph</h1>
                  <p>Assistant Professor</p>
                  <a href={hritanshu_cv}>
                    <button>View CV</button>
                  </a>
                </div>
              </div>
              <div class="card">
                <img src={soumya} />
                <div class="info">
                  <h1>Ms. Soumya Sharma</h1>
                  <p>Assistant Professor</p>
                  <a href={soumya_cv}>
                    <button>View CV</button>
                  </a>
                </div>
              </div>
            </div>
            <div class="wrapper1 mt-5 mb-8">
              <div class="card">
                <img src={renu} />
                <div class="info">
                  <h1>Dr. Renu Yadav</h1>
                  <p> Assistant Professor</p>
                  <a href={renu_cv}>
                    <button>View CV</button>
                  </a>
                </div>
              </div>
              <div class="card">
                <img src={anubha} />
                <div class="info">
                  <h1>Dr. Anubha Godara</h1>
                  <p>Assistant Professor</p>
                  <a href={anubha_cv}>
                    <button>View CV</button>
                  </a>
                </div>
              </div>
              <div class="card">
                <img src={tripti} />
                <div class="info">
                  <h1>Ms. Tripti Goel</h1>
                  <p>Assistant Professor</p>
                  <a href={tripti_cv}>
                    <button>View CV</button>
                  </a>
                </div>
              </div>
            </div>
            {/* <div class="wrapper4 mt-5 mb-9 ">
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
          </div> */}

            <span className="font-bold text-xl ml-6 mt-20 mb-9">
              Superannuated Faculty
            </span>

            <div class="wrapper1 mt-4 mb-10 ">
              <div class="card">
                <img src={madhu} />
                <div class="info">
                  <h1> Dr. Madhu Agrawal</h1>
                  <p>Associate Professor</p>
                  <a href={madhu_cv}>
                    <button>View CV</button>
                  </a>
                </div>
              </div>
              <div class="card ">
                <img src={female} />
                <div class="info">
                  <h1>Mrs. Sushma Arora</h1>
                  <p>Associate Professor</p>
                  <a href={sushma_cv}>
                    <button>View CV</button>
                  </a>
                </div>
              </div>
              <div class="card ">
                <img src={female} />
                <div class="info">
                  <h1>Dr. Indu Jain</h1>
                  <p>Associate Professor</p>
                  <a href={indu_cv}>
                    <button>View CV</button>
                  </a>
                </div>
              </div>
            </div>
            <div class="wrapper1 mt-4 mb-8">
              <div class="card ">
                <img src={female} />
                <div class="info">
                  <h1>Mrs. Sarita Jain</h1>
                  <p>Associate Professor</p>
                  <a href={sarita_cv}>
                    <button>View CV</button>
                  </a>
                </div>
              </div>

              <div class="card">
                <img src={male} />
                <div class="info">
                  <h1> Dr. Gurpinder Chopra</h1>
                  <p>Associate Professor</p>
                  <a href={gurup_cv}>
                    <button>View CV</button>
                  </a>
                </div>
              </div>
              <div class="card ">
                <img src={kavita} />
                <div class="info">
                  <h1>Prof. Kavita Sharma</h1>
                  <p>Professor</p>
                  <a href={kavita_cv}>
                    <button>View CV</button>
                  </a>
                </div>
              </div>
            </div>
            <div class="wrapper1 mt-4 mb-8">
              <div class="card ">
                <img src={female} />
                <div class="info">
                  <h1>Prof. Shirin Rathore</h1>
                  <p>Professor</p>
                  <a href={"#"}>
                    <button>View CV</button>
                  </a>
                </div>
              </div>

              <div class="card">
                <img src={female} />
                <div class="info">
                  <h1> Dr. Malti Gupta</h1>
                  <p>Associate Professor</p>
                  <a href={"#"}>
                    <button>View CV</button>
                  </a>
                </div>
              </div>
              <div class="card ">
                <img src={female} />
                <div class="info">
                  <h1>Dr. Bimla Gautam</h1>
                  <p>Associate Professor</p>
                  <a href={"#"}>
                    <button>View CV</button>
                  </a>
                </div>
              </div>
            </div>

            <div class="wrapper1 mt-6 mb-16">
                <div class="card ml-2">
                  <img src={female} />
                  <div class="info">
                    <h1>Mrs. Uma Jain</h1>
                    <p>Associate Professor</p>
                    <a href={"#"}>
                      <button>View CV</button>
                    </a>
                  </div>
                </div>
                <div class="card ml-10">
                  <img src={female} />
                  <div class="info">
                    <h1>Dr. Meera Lal</h1>
                    <p> Associate Professor</p>
                    <a href={"#"}>
                      <button>View CV</button>
                    </a>
                  </div>
                </div>
              </div>

          </div>
        </div>
          <div className=" flex  flex-col mr-16 mt-36">
            <Commerce />
          </div>
      </div>
    </div>
  );
}

export default Com_faculty;
