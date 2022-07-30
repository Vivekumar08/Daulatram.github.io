import React, {useState} from "react";
import Philosophybanner from "../Philosophy/Philosophybanner.jsx";
import Philosophy from "../../../../Components/DepartSIde/Philosophy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
function Philosophy_association() {
  const [visible, setVisible] = useState(false);
  return (
    <div className=" flex flex-col">
      <div className="">
        <Philosophybanner />
      </div>
      <div className="flex flex-row">
      <div className="md:hidden absolute bg-white">
          {visible ? (
            <>
              <div className=" flex  flex-col mt-8 ml-2">
                <FontAwesomeIcon
                  icon={faClose}
                  size="lg"
                  onClick={() => setVisible(!visible)}
                  className=" border-2  border-[#000080] mr-2 hover:text-black text-white  rounded-lg p-2 cursor-pointer hover:bg-white bg-[#000080]"
                />
                <Philosophy />
              </div>
            </>
          ) : (
            <div className=" flex  flex-col mt-8 ml-2">
              <FontAwesomeIcon
                icon={faBars}
                size="lg"
                onClick={() => setVisible(!visible)}
                className="text-black border-2 border-[#000080] mr-2 hover:text-white bg-[#fff] rounded-lg p-2 cursor-pointer hover:bg-[#000080]"
              />
            </div>
          )}
        </div>
        <div className=" md:flex hidden md:flex-col mt-12 ml-2">
          <Philosophy />
        </div>
        <div className="w-full mr-16">
          <h2 className="md:text-4xl text-lg uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center ml-4 items-center ">
            Association
          </h2>

          <div className="flex flex-row">
            <div className="flex flex-col">
              <div className="flex flex-row">
                <div>
                  <div className="pr-3 pl-3 flex mr-1 md:ml-2 ml-16">
                    <span className="md:text-xl text-lg  text-justify font-medium mt-3">
                      <b> The Philosophy Association- Skeptics</b>
                    </span>
                  </div>
                  <div className="pr-3 pl-3 flex mr-1 md:ml-2 ml-16">
                    <span className="md:text-lg text-sm text-justify font-medium mt-3">
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
                  <div className="pr-3 pl-3 flex mr-1 md:ml-2 ml-16">
                    <span className="md:text-lg text-sm text-justify font-medium mt-3 ">
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
