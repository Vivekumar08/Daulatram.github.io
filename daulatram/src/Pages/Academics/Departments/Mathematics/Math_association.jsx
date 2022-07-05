import React from "react";
import Mathbanner from "../Mathematics/Mathbanner.jsx";
import Mathematics from "../../../../Components/DepartSIde/Mathematics.jsx";
function Math_association() {
  return (
    <div className=" flex flex-col">
      <div className="">
        <Mathbanner />
      </div>
      <div className="flex flex-row">
        <div className=" flex  flex-col ml-2 mt-12 ">
          <Mathematics />
        </div>
        <div className="ml-3 ">
          <div className="w-full mr-16">
            <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
              Association
            </h2>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col">
              <div className="flex flex-row">
                <div className="mr-16">
                  <div className="pr-3 pl-3 flex mr-1 ml-2">
                    <span className="text-lg text-justify font-medium mt-3">
                      The Mathematics Association of Daulat Ram College -
                      ‘AFFINE’ takes immense pride in organizing a plethora of
                      activities year-round covering Fresher’s, Farewell, Fest-
                      ‘Sh00nya’, year-round seminars, skill enhancement
                      workshops, and guest lectures by prominent personalities.
                    </span>
                  </div>
                  <br />
                  <div className="pr-3 pl-3 flex mr-1 ml-2">
                    <span className="text-lg text-justify font-medium ">
                      The annual Fresher’s party is hosted by the 2nd and 3rd
                      year students at the start of a new session to welcome new
                      students into the warm and loving family of Affine. The
                      annual Farewell, organised by 1st and 2nd year students at
                      the end of a session celebrates the three year journey of
                      passing out seniors and bids them a bittersweet adieu.
                    </span>
                  </div>
                  <br />

                  <div className="pr-3 pl-3 flex mr-1 ml-2">
                    <span className="text-lg text-justify font-medium ">
                      The annual fest- Shoonya, hosts large crowds of
                      math-loving students, enthusiastic to experience a
                      culmination of guest lectures, talent shows, high spirited
                      crowd, entertaining activities; all put together by
                      combined efforts of the Affine family.
                      <img
                      src="/images/ImgPages/Mathematics/Fest1.jpg"
                        style={{
                          width: "700px",
                          height: "450px",
                        }}
                        className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mr-auto ml-auto mb-4 rounded-3xl border-2 border-black"
                      />
                      <img
                      src="/images/ImgPages/Mathematics/Fest2.jpg"
                        style={{
                          width: "700px",
                          height: "450px",
                        }}
                        className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mr-auto ml-auto mb-4 rounded-3xl border-2 border-black"
                      />
                      <img
                      src="/images/ImgPages/Mathematics/Fest3.jpg"
                        style={{
                          width: "700px",
                          height: "450px",
                        }}
                        className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mr-auto ml-auto mb-4 rounded-3xl border-2 border-black"
                      />
                    </span>
                  </div>
                  <div className="pr-3 pl-3 flex mr-1 ml-2">
                    <span className="text-lg text-justify font-medium ">
                      The Student Union body consisting of 5 members is
                      democratically elected after contesting elections. It
                      consists of The President and Vice President from the 3rd
                      year, General Secretary and Treasurer from the 2nd year,
                      and Joint Secretary from the 1st year. The extension of
                      the Union Body Includes Editorial Heads, Marketing Heads,
                      Digital Heads, Creative Heads, and Sponsorship Heads. The
                      department works tirelessly year-round to ensure the best
                      college experience for aspiring mathematicians.
                      <img
                      src="/images/ImgPages/Mathematics/Union1.jpg"
                        style={{
                          width: "700px",
                          height: "450px",
                        }}
                        className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mr-auto ml-auto mb-4 rounded-3xl border-2 border-black"
                      />
                    </span>
                  </div>
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

export default Math_association;
