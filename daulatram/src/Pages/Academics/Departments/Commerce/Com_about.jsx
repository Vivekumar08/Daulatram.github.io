import React from "react";
import Departments from "../../../../Components/Sidebar/Departments";
import Commercebanner from "../Commerce/Commercebanner.jsx";
import Commerce from "../../../../Components/DepartSIde/Commerce.jsx";
function Com_about() {
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
            About the department
          </h2>

          <div className="flex flex-row">
            <div className="flex flex-col">
              <figure className="flex pr-4 pl-4 pb-2">
                <div
                  style={{
                    backgroundImage:
                      "url(/images/ImgPages/Commerce/Aboutcom.jpg)",
                    width: "750px",
                    height: "370px",
                  }}
                  className="bg-center ml-auto mr-auto bg-no-repeat mt-[3%] bg-cover h-10  rounded-3xl border-2 border-black"
                  // className="rounded-3xl border-black border-2 h-[400px] mr-10 ml-64"
                ></div>
              </figure>
              <div className="pr-3 pl-3 flex mr-1 ml-2">
                <span className="text-lg text-justify font-medium mt-3">
                  The Commerce Department of Daulat Ram college has got 13th
                  position all India in India Today Ranking.Commerce as a stream
                  of education encompasses study of business activities and
                  trade, while providing vast career opportunities in diverse
                  fields. The Department of Commerce which completed its 50
                  years in 2019-2020, offers two courses{" "}
                  <strong>B.Com (H)</strong> and <strong>B.Com.</strong>
                  These courses equip the students with the requisite knowledge
                  and skills to analyse, evaluate and unravel the contemporary
                  realities of the dynamic business arena. Through subjects like
                  Accounting, Taxation, Marketing, Finance, Law, Computers etc.,
                  students gain not only disciplinary knowledge but also develop
                  critical thinking, communication skills, moral & ethical
                  awareness, digital literacy, reflective thinking and a
                  problem-solving approach. This provides the foundation for
                  students to pursue <strong>professional courses</strong> such
                  as C.A., CS, ICWA, L.L.B, and MBA. The course structure not
                  only enhances the employability options of students, but is
                  designed to also cultivate{" "}
                  <strong>entrepreneurial skills</strong> and mindset to develop
                  future business leaders.
                </span>
              </div>
              <br />
              <div className="pr-3 pl-3 flex mr-1 ml-2">
                <span className="text-lg text-justify font-medium ">
                  The Department also offers{" "}
                  <strong>
                    Entrepreneurship and Small Business Development (ESB)
                  </strong>{" "}
                  as a discipline option to the B.A Programme students. This
                  course inculcates in students, the intricacies of starting
                  their own business ventures by developing analytical and
                  managerial skills. Generic Elective Papers offered to students
                  of other departments such as Investing in Stock Market,
                  Business Management, Advertising, Insurance and Risk
                  Management, Entrepreneurship etc. provide a holistic view
                  about the evolving business world. In order to nurture the
                  intellectual, personal, interpersonal and social skills of
                  students, the Department through Commerce Association and
                  specialised cells like Cyber Cell, Finance and Investment Cell
                  and SMarketing Cell conducts events throughout the year. The
                  Annual Commerce Fest <strong> ‘Comvision’,</strong> provides
                  students with a platform to showcase and develop their talent
                  and creativity by organising and participating in events such
                  as Case Study, Business Plan, Debate, Group Discussion, Ad-Mad
                  etc. <strong>‘Combuzz’</strong> is the annual newsletter of
                  the department where the students share their thoughts,
                  innovative ideas and perspectives about the commerce
                  landscape. The Department also organises skill development
                  programmes, seminars and workshops for students on various
                  contemporary topics such as Startups, Goods and Services Tax,
                  Research Methodology, Career Prospects etc. This year, the
                  Department organised a National Conference jointly with the
                  Economics department on “Income Inequality, Protectionism and
                  International Trade in Digital Age: With reference to India”.
                  The Department was awarded DU Innovation Project in 2013 and
                  Star Project in 2015 to pursue field and research work.
                </span>
              </div>
              <br />
              <div className="pr-3 pl-3 flex mr-1 ml-2">
                <span className="text-lg text-justify font-medium ">
                  Final year students in high numbers{" "}
                  <strong>
                    get placed in reputed companies such as EY, KPMG, Deloitte,
                    Finedge, S&P Global, Genpact{" "}
                  </strong>{" "}
                  etc through the college Placement Cell, while those in first
                  and second years are provided internship opportunities in
                  companies like Global Arcus, Reliance, Zomato, Outlook etc. to
                  get exposure of the corporate world. On Annual Day of the
                  college, the students are awarded proficiency prizes for their
                  academic achievement. This year, the All-Round Best Student of
                  the College Prize was awarded to a student of our department.
                  Institutional Prizes such as Sh. Ved Prakash Tandon Memorial
                  Prize, prize instituted by Dr. Malti Subramanian, Prize
                  instituted by Dr. Gurpinder Chopra and Instituted Scholarships
                  such as Shri Sultan Chand Memorial Scholarship and Dr. Usha
                  Aggarwal ‘Tejaswita’ Scholarship are awarded to Commerce
                  students based on their academic performance.
                </span>
              </div>
              <br />
              <div className="pr-3 pl-3 flex mr-1 ml-2 mb-6">
                <span className="text-lg text-justify font-medium ">
                  The Department has experienced faculty which constantly
                  mentors the students in pursuing their career goals and helps
                  them in realising their potential. The Department continues to
                  have excellent results with majority of the students securing
                  good grades. The Alumni of the Department comprises of
                  students who have excelled in the fields of Academics,
                  Business and Management and Government administration.
                </span>
              </div>
             
            </div>
          </div>
        </div>
        <div className=" flex  flex-col mr-16 mt-32">
          <Commerce />
        </div>
      </div>
    </div>
  );
}

export default Com_about;
