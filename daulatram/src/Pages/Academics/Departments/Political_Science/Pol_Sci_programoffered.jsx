import React from "react";
import PolScibanner from "./PolScibanner";
import Political_Science from "../../../../Components/DepartSIde/Political_Science";
import ba1 from "../../../../Dummy_data/ImgPages/Political_Science/1_Political_Science_BA_Hons_SEM_I_August.pdf";
import ba2 from "../../../../Dummy_data/ImgPages/Political_Science/2PoliticalScienceBAHonsSemesterIIJanuary2020.pdf";
import ba3 from "../../../../Dummy_data/ImgPages/Political_Science/3PoliticalScienceBAHonsSemesterIIIjuly2020.pdf";
import ba4 from "../../../../Dummy_data/ImgPages/Political_Science/4PoliticalScienceBAHonsSemesterIVJan2021.pdf";
import ba5 from "../../../../Dummy_data/ImgPages/Political_Science/5PoliticalScienceBAHonsSemesterVJuly2021.pdf";
import cbcs from "../../../../Dummy_data/ImgPages/Political_Science/CBCSRevision2019BAHons.pdf";
import fyup from "../../../../Dummy_data/ImgPages/Political_Science/FYUP_UG_course.pdf";

function Pol_Sci_programoffered() {
  return (
    <div className=" flex flex-col">
      <div className="">
        <PolScibanner />
      </div>
      <div className="flex flex-row">
        <div className=" flex  flex-col mt-12 ml-2">
          <Political_Science />
        </div>

        <div className="w-full mr-16">
          <h2 className="text-4xl uppercase font-bold mb-5  mt-[5%] flex flex-row justify-center items-center ">
            Program Offered
          </h2>

          <div className="flex flex-col">
            <div class="grid grid-cols-3 mt-5 ml-12 mb-5">
              <div class="card2 mb-10 ">
                <div className="">
                  <span className=" text-2xl font-bold ">
                    B.A (Hons) Political Science{" "}
                  </span>
                </div>
                <div class="info">
                  <h1 className="font-bold flex justify-center">Description</h1>
                  <p className="flex justify-center">Sem 1 Aug</p>
                  <br />
                  <a href={ba1}>
                    <button className="w-full">View</button>
                  </a>
                  <br />
                </div>
              </div>
              <div class="card2 mb-10">
                <span className=" text-2xl font-bold">
                  B.A (Hons) Political Science
                </span>
                <div class="info">
                  <h1 className="font-bold flex justify-center ">
                    Description
                  </h1>
                  <p className="flex text-justify">Semester II January 2020</p>
                  <br />
                  <a href={ba2}>
                    <button className="w-full">View</button>
                  </a>
                  <br />
                </div>
              </div>
              <div class="card2 mb-10">
                <div className="flex flex-col">
                  <div>
                    <span className=" text-2xl font-bold">
                      B.A (Hons) Political Science
                      <br />
                    </span>
                  </div>
                </div>
                <div class="info">
                  <h1 className="font-bold flex justify-center">Description</h1>
                  <p className="flex text-justify">Semester III July 2020</p>
                  <br />

                  <a href={ba3}>
                    <button className="w-full">View</button>
                  </a>
                </div>
              </div>
              {/* </div> */}

              {/* <div class="wrapper2 mt-5 mb-5"> */}
              <div class="card2 mb-10">
                <div className="">
                  <span className=" text-2xl font-bold ">
                    B.A (Hons) Political Science{" "}
                  </span>
                </div>
                <div class="info">
                  <h1 className="font-bold flex justify-center">Description</h1>
                  <p className="flex justify-center">Sem IV Jan 2021</p>
                  <br />
                  <a href={ba4}>
                    <button className="w-full">View</button>
                  </a>
                  <br />
                </div>
              </div>
              <div class="card2 mb-10">
                <span className=" text-2xl font-bold ">
                  B.A (Hons) Political Science
                </span>
                <div class="info">
                  <h1 className="font-bold flex justify-center ">
                    Description
                  </h1>
                  <p className="flex text-justify">Semester V July 2021</p>
                  <br />
                  <a href={ba5}>
                    <button className="w-full">View</button>
                  </a>
                  <br />
                </div>
              </div>
              <div class="card2 mb-10">
                <div className="flex flex-col">
                  <div>
                    <span className=" text-2xl font-bold">
                      B.A (Hons) CBCS Revision 2019
                      <br />
                    </span>
                  </div>
                </div>
                <div class="info">
                  <h1 className="font-bold flex justify-center">Description</h1>
                  <p className="flex text-justify">CBCS Revision 2019</p>
                  <br />
                  <a href={cbcs}>
                    <button className="w-full">View</button>
                  </a>
                </div>
              </div>
              {/* </div>
            <div className="flex justify-start ">
            <div class="wrapper2  mt-5 mb-5 justify-start"> */}
              <div class="card2 mb-10">
                <div className="">
                  <span className=" text-2xl font-bold ml-6 ">
                    {" "}
                    FYUP UG course
                  </span>
                </div>
                <div class="info">
                  <h1 className="font-bold flex justify-center">Description</h1>
                  <p className="flex justify-center">
                    Political Science Department
                  </p>
                  <br />
                  <a href={fyup}>
                    <button className="w-full">View</button>
                    <br />
                  </a>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pol_Sci_programoffered;
