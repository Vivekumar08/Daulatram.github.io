import React from "react";
import Research_banner from "../../Components/Banners/Research_banner";
import Research_side from "../../Components/Sidebar/Research_side";
import R_A from "../../Dummy_data/pdfs/Research/Sheet1.pdf";
import Books from "../../Dummy_data/pdfs/Research/Sheet2.pdf";
function Publications_res() {
  return (
    <div className=" flex flex-col">
      <Research_banner/>
      <div className="flex flex-row">
        <div className="w-[350px]">
          <Research_side />
        </div>
        <div className="ml-3 mb-5">
          <div className="w-[1100px]">
            <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
              Publications
            </h2>
          </div>
          <div class="wrapper3 mt-5 mb-5">
            <div class="card2">
              <span className="font-bold text-xl ml-2">
                Research Articles & Papers
              </span>
              <div className="flex flex-col">
                <div class="info">
                  <p className="ml-14">Research Articles & Papers</p>

                  <br />
                  <a href={R_A}>
                    <button className="ml-16">View</button>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </a>
                </div>
              </div>
            </div>
            <div class="card2">
              <div className="flex flex-row justify-center">
                <span className="font-bold text-xl ml-20">Books</span>
              </div>
              <div className="flex flex-col">
                <div class="info ml-8">
                  <p className="ml-20">Books</p>

                  <br />
                  <a href={Books}>
                    <button className="ml-16">View</button>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </a>
                </div>
              </div>
            </div>
            <div class="card2">
              <span className="font-bold text-xl ml-20">Magzine</span>
              <div className="flex flex-col">
                <div class="info ml-8">
                  <p className="ml-16">Magzine</p>

                  <br />
                  <a href={"#"}>
                    <button className="ml-16">View</button>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Publications_res;
