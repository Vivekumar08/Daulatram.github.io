import React from "react";
import Philosophybanner from "../Philosophy/Philosophybanner.jsx";
import Philosophy from "../../../../Components/DepartSIde/Philosophy";
function Nhe_about() {
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
            About the department
          </h2>

          <div className="flex flex-row">
            <div className="flex flex-col">
              <div className="flex flex-row">
                <div>
                  <img
                    style={{
                      backgroundImage:
                        "url(/images/ImgPages/Philosophy/Philosophy_depart.jpg)",
                      width: "800px",
                      height: "450px",
                    }}
                    className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mr-auto ml-auto mb-4 rounded-3xl border-2 border-black"
                  />
                  <div className="pr-3 pl-3 flex mr-1 ml-2">
                    <span className="text-xl text-justify font-medium mt-3">
                     <b> VISION</b> and <b>MISSION</b>
                      </span>
                    </div>
                    <div className="pr-3 pl-3 flex mr-1 ml-2">
                    <span className="text-lg text-justify font-medium mt-3">
                      Started in 1960, the Department of Philosophy has evolved
                      leaps and bounds with the experience and knowledge of
                      committed and distinguished faculty members specialized in
                      areas such as, Indian Philosophy, Logic, Analytic
                      Philosophy, Moral Philosophy, Meta Ethics, Bioethics,
                      Applied Ethics, Philosophy of Religion, Continental
                      Thought among many others. The department started with
                      offering Philosophy to both honours and pass course
                      students. Over the past 60 years the department, through
                      its dynamic and multifaceted approach, has mentored
                      thousands of students who have contributed in diverse
                      fields, ranging from teaching, research, serving in
                      administrative services, judiciary, multi national
                      corporations at national and international arenas.
                    </span>
                    </div>
                    <div className="pr-3 pl-3 flex mr-1 ml-2">
                    <span className="text-lg text-justify font-medium mt-3 ">

                      Consistently working towards broadening the horizons of
                      the young minds, we believe in the spirit of the dictum-
                      “Philosophy is the eternal quest for truth, a quest that
                      is never defeated.” Philosophy, being the mother of all
                      disciplines, imparts wisdom and in-depth understanding of
                      the perennial questions arising in the human mind.
                      Philosophy deals with ethical, (nature of good, duty,
                      utility principles etc.) metaphysical, (Does God exist?
                      Does soul exist? Is rebirth possible? etc.) social and
                      political, (society, justice, rights, power) and logical
                      (correct and incorrect reasoning, validity, invalidity,
                      truth and falsity etc.) issues that are central to our
                      existence. Studying philosophy equips one to distinguish
                      good reasoning from bad, to ask questions pertaining to
                      human existence, to think, reflect, argue and speculate
                      about life. This exploration opens a whole range of
                      possibilities to know, understand and weave the interface
                      of human beings with the animate and inanimate world.
                    </span>
                    </div>
                    
                    <div className="pr-3 pl-3 flex mr-1 ml-2">
                    <span className="text-lg text-justify font-medium mt-3">
                      With a student centric approach we believe in engaged
                      learning. Over the three years of undergraduate program
                      students develop cognitive and ratiocinative abilities.
                      They develop an indepth understanding of a wide range of
                      thought provoking papers in Classical Indian Philosophy,
                      Formal Logic, Social and Political Philosophy, Greek
                      Philosophy, Western Philosophy, Philosophy of Mind,
                      Philosophy of Law, Philosophy of Language, Philosophy of
                      Mind, Feminism, Art and Film Appreciation, Critical
                      Thinking, Ethical Decision Making and many others.
                      Philosophy provides higher understanding skills and art of
                      reasoning, analysis and synthesis that are crucial to the
                      process of knowledge acquisition in any field of study.
                      The subject has large scope for higher learning in the
                      field of law, computer application, corporate world,
                      journalism and media, social work, environmental field,
                      administrative and civil services among many others.
                    </span>
                    </div>
                    
                    <div className="pr-3 pl-3 flex mr-1 ml-2 mb-10">
                    <span className="text-lg text-justify font-medium mt-3">
                      The mission of the department is to not only to inculcate
                      values, sense of empowerment and ratiocinative abilities
                      among students but to equip them with effective decision
                      making skills to live a meaningful and fulfilling life. We
                      aim to create an interactive space for our students
                      wherein they can share a common platform with researchers,
                      eminent academicians, professionals for enriching
                      discussions on a wide range of issues. To this end we aim
                      to organize seminars, conferences, lectures, student
                      development programs, workshops in collaboration with
                      other institutions and universities, both national and
                      international.
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

export default Nhe_about;