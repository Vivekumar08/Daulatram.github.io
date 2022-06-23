import React from "react";
import DepartBanner from "../../../../Components/Banners/DepartBanner";
import Biochemistry from "../../../../Components/DepartSIde/Biochemistry";
import Departments from "../../../../Components/Sidebar/Departments";

function Events() {
  return (
    <div className=" flex flex-col">
      <div className="">
        <DepartBanner />
      </div>
      <div className="flex flex-row">
        <div className="w-[900px]">
          <Departments />
        </div>
        <div className="ml-3 ">
          <div className="w-[1100px]">
            <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
              Events
            </h2>
          </div>
          <div className="flex flex-row">
            <div className="mr-5">
              <div>
                <p className="text-1xl ml-4 font-bold text-xl">Year 2020-21</p>
              </div>
              <ol className="list-decimal mt-2 ml-10 mr-4 text-justify mb-4">
                <li>
                  <strong>
                    SDP held by Department of Biochemistry from 19th August 2020
                    to 21st August 2020 titled E-skill development program on
                    enhanced learning through ICT tools.
                  </strong>
                  <br />
                </li>
                <br />
                <p>
                  The objective of the SDP was to introduce the latest ICT tools
                  to students as this year due to Covid 19 all the classes are
                  held on the online platform.Course coordinator: Dr Sarita
                  Nanda (TIC, biochemistry department) Duration with dates: The
                  SDP was help from 11:00 am to 1:00 pm from 19th to 21st August
                  2020
                </p>
                <br />
                <li>
                  <strong>
                    Report on SDP held by Department of Biochemistry from 17th
                    December 2020 to 19th December 2020 titled E-skill
                    development program on enhanced learning through ICT tools.
                  </strong>
                </li>
                <br />
                <p>
                  The objective of the SDP was to introduce the latest ICT tools
                  to students as this year due to Covid 19 all the classes are
                  held on the online platform. Course coordinator: Dr Sarita
                  Nanda (TIC, biochemistry department) Duration with dates: The
                  SDP was help from 11:00 am to 1:00 pm from 17th to 19th
                  December 2020
                </p>
                <br />
                <li>
                  The Biochemistry department festival{" "}
                  <strong>
                    BIOMANIA 2020-21 was held on 13 February 2021{" "}
                  </strong>{" "}
                  over zoom meet In our effort to sensitise our students towards
                  important environmental and sustainability issues facing the
                  world today,the Biochemistry department organised an intra
                  college contest:{" "}
                  <strong>
                    "The Innovation Challenge :Create a better future"
                  </strong>{" "}
                  under the convenership of{" "}
                  <strong>Dr. Padmshree Mudgal and Dr. Leena Vig.</strong>
                </li>
                <br />
                <li>
                  The Biochemistry association’s inaugural lecture was held on
                  25th November, 2020. It was organised by the Department of
                  Biochemistry, Daulat Ram College. Covid 19 pandemic has
                  impacted the whole world and the key to prevent the spread is
                  early detection. We were very fortunate to have with us Dr
                  Debojyoti Chakraborty and his team who have been pioneers in
                  indigenously developing CRISPR based COVID-19 detection kit
                  which is now popularly known as Feluda.
                </li>
                <br />
              </ol>
              <div>
                <p className="text-1xl ml-4 font-bold text-xl">Year 2019-20</p>
              </div>
              <ol className="list-decimal mt-2 ml-10 mr-4 text-justify mb-4">
                <li>
                  <strong>Ellora Sen, PhD,</strong> Scientist, National Brain
                  Research Centre, Manesar gave a talk on Re-inventing Oneself:
                  Science as a Career under{" "}
                  <strong> Meet the scientist series</strong> on 10th April,
                  2019
                </li>
              </ol>

              <div>
                <p className="text-1xl ml-4 font-bold text-xl">Year 2018-19</p>
              </div>
              <ol className="list-decimal mt-2 ml-10 mr-4 text-justify mb-4">
                <li>
                  <strong>
                    {" "}
                    BIOMANIA18, an intracollege Science festival was organized
                    by Biochemistry department on 20th Feb, 2018.
                  </strong>{" "}
                  Various events like Poster presention on “Future
                  Technologies”, Just a minute, and Dumb Charades were
                  organized. Under{" "}
                  <strong>
                    Meet the scientist series, Prof Suman kundu,
                  </strong>{" "}
                  head, Department Of Biochemistry, University of Delhi, South
                  Campus, Delhi, gave an talk on <strong>Proteomics</strong>.
                </li>
                <br />
                <li>
                  Scientist talk –
                  <strong>
                    {" "}
                    Dr. Nisheeth Agarwal (Associate Professor, Translational
                    Health Science and Technology Institute, Faridabad){" "}
                  </strong>
                  came and delivered a lecture on the topic- “Nuts & bolts of
                  CRISPR interference: optimization & implication mycobacteria
                </li>
              </ol>
            </div>
            <div className=" flex  flex-col mr-16 ">
            <Biochemistry/>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
