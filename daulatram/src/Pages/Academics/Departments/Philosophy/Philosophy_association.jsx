import React from "react";
import Philosophybanner from "../Philosophy/Philosophybanner.jsx";
import Philosophy from "../../../../Components/DepartSIde/Philosophy";
function Philosophy_association() {
  return (
    <div className=" flex flex-col">
      <div className="">
        <Philosophybanner />
      </div>
      <div className="flex flex-row">
        <div className=" flex  flex-col mt-12 ml-2">
          <Philosophy />
        </div>
        <div className="w-full mr-16">
          <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
            Association
          </h2>

          <div className="flex flex-row">
            <div className="flex flex-col">
              <div className="flex flex-row">
                <div>
                  <div className="pr-3 pl-3 flex mr-1 ml-2">
                    <span className="text-xl text-justify font-medium mt-3">
                      <b> The Philosophy Association- Skeptics</b>
                    </span>
                  </div>
                  <div className="pr-3 pl-3 flex mr-1 ml-2">
                    <span className="text-lg text-justify font-medium mt-3">
                      With an aim to enhance inter disciplinary approach in
                      teaching-learning pedagogy the Department Association-
                      Skeptics periodically organizes conferences, seminars,
                      round table sessions, special lectures and talks inviting
                      eminent academicians and philosophers from across the
                      globe. Prof. Nirmalangshu Mukherjee, Prof. H.S. Prasad,
                      Prof. Bijoy Boruah, Prof. Srinivas Rao, Prof. Ashok Vohra,
                      Prof. Kanchana Natarajan, Prog Balaganapathi Devarakonda,
                      Prof. Roy W. Perrett, Swami Nikhilananda Saraswati, Dr.
                      Vijay Tankha, Dr. Nilanjan Bhowmick, Dr. Kranti Saran, Dr.
                      Stuart Gray, Dr. Bharat Gupt, Honourable Judge Ms. Chetna
                      Singh, Honourable Judge Ms. Shreya Arora Mehta and others
                      have delivered lectures at the department. These
                      interactions expose students to the nuances of research
                      and to develop an exhaustive understanding of the
                      philosophical explorations outside classroom.
                    </span>
                  </div>
                  <div className="pr-3 pl-3 flex mr-1 ml-2">
                    <span className="text-lg text-justify font-medium mt-3 ">
                      The Annual Philosophy Festival- DARSANA is celebrated in
                      the month of February ever year. Along with academic
                      lectures and discussions the festival provides a platform
                      for student participation in various inter college
                      competitions, like, Debates, Open MIC, Interpret the
                      Picture, On the spot photography and many more.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Philosophy_association;
