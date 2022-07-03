import React from "react";
import Departments from "../../../../Components/Sidebar/Departments";
import Chembanner from "../Chemistry/Chembanner.jsx";
import Chemistry from "../../../../Components/DepartSIde/Chemistry.jsx";
import chemasso from "../../../../Dummy_data/ImgPages/Chemistry/chem_associationTheChemicalsocietyofDaulatRamCollege.pdf";

function Chemassociation() {
  return (
    <div className=" flex flex-col">
      <div className="">
        <Chembanner />
      </div>
      <div className="flex flex-row">
        <div className=" flex  flex-col  ml-2 mt-12">
          <Chemistry />
        </div>

        <div className="w-full mr-auto ml-auto">
          <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
            Research
          </h2>

          <div className="flex flex-row justify-between ">
            <div class="wrapper2  mt-5 mb-5">
              <div class="card2">
                <div className="">
                  <span className=" text-2xl font-bold ml-12">Association</span>
                </div>
                <div class="info">
                  <h1 className="font-bold flex justify-center">Description</h1>
                  <p className="flext text-justify">
                    The Chemical Society – “CHEMPHORIA” organizes various
                    activities year-round including Fresher’s, Farewell, Annual
                    Fest- ‘Quanta’, workshops, and guest talks by prominent
                    personalities.
                  </p>

                  <a href={chemasso}>
                    <button className="w-full">View</button>
                  </a>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chemassociation;
