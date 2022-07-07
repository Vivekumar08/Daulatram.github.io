import React from "react";
import Psychology from "../../../../Components/DepartSIde/Psychology";
import Psychobanner from "./Psychobanner";
function Psycho_about() {
  return (
    <div className=" flex flex-col">
      <div className="">
        <Psychobanner />
      </div>
      <div className="flex flex-row">
        <div className=" flex  flex-col mt-12 ml-2">
          <Psychology />
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
                        "url(/images/ImgPages/Psychology/about_theme.png)",
                      width: "700px",
                      height: "400px",
                    }}
                    className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mr-auto ml-auto mb-4 rounded-3xl border-2 border-black"
                  />

                  <div className="pr-3 pl-3 flex mr-1 ml-2">
                    <span className="text-lg text-justify font-medium mt-3">
                      The discipline of Psychology provides in depth
                      understanding of various aspects of human behaviour and
                      personality. Psychologists are constantly evolving new
                      approaches and techniques to adapt to the changing needs
                      of contemporary society. The subject provides exposure to
                      its diverse ﬁelds such as Introduction to Psychology,
                      Social Psychology, Understanding Psychological Disorders,
                      Health Psychology, Bio Psychology and Developmental
                      Psychology. The study of Psychology opens avenues for
                      Careers in Counselling, Clinical and Organizational
                      settings, teaching and research. It also helps to prepare
                      for careers in Civil Services, HRM, Social Work,
                      Advertising and Media.
                    </span>
                  </div>
                  <div className="pr-3 pl-3 flex mr-1 ml-2 mb-5">
                    <span className="text-lg text-justify font-medium mt-3">
                      The department which has a history of over ﬁve decades is
                      well-equipped with state-of-art laboratories, latest
                      psychological tests and equipment. It has an active
                      Psychology Association which organizes several academic
                      and co- curricular activities including Conferences and a
                      Departmental magazine “PsyTrack”. The department is also
                      the ﬁrst in the University to have a ‘Psychology Resource
                      Centre’ which is actively involved in working towards
                      positive self- development, mental health enhancement,
                      etc. The Counselling Centre is also being run in the
                      department for students, teaching and non-teaching staﬀ.
                      The dedicated faculty uses latest teaching methods such as
                      multimedia preparations, role-play and experimental
                      training. Our faculty also actively participates in
                      academic pursuits such as publication of research papers,
                      attending conferences and supervising doctoral work. In
                      keeping with the demands of the contemporary world and the
                      emphasis on skills, the department regularly organizes
                      skill development and value engagement programs
                    </span>
                  </div>
                  <div className="pr-3 pl-3 flex mr-1 ml-2 mb-5">
                    <span className="text-lg text-justify font-medium mt-3">
                      The Psychology association organized various activities in
                      the session 2019-2020. On 6th April 2019, a talk on
                      ‘Exploring the Vulnerabilities if the LGBTQIA+ Community
                      in India’ was organized. On 11th April 2019, farewell for
                      the outgoing batch was organized, and on 6th September,
                      2019, the inaugural function and fresher’s welcome for the
                      ﬁrst-year psychology students was held. On 26th August
                      2019, movie screening and analysis workshop under the
                      title ‘A Transformation from Loneliness to Solitude’ by
                      Mr. Sourav Sarkar was organized. On August 28, 2019, a
                      workshop for ﬁnal year students titled ‘Perceptive Leader’
                      was conducted by Mr. V. Shri Hari. The FiGh Value
                      Engagement Program on “Values enhancing Well-Being” was
                      organised from 16th August to 30th September, 2019 for
                      ﬁrst year undergraduate Psychology students. On October
                      1st, 2019, World Mental Health Day was organized. The
                      highlight of the day was a panel discussion on the theme
                      ‘Promoting Eudaimonia: A State of Happiness and
                      Satisfaction’. Two events were organized by the Positive
                      Psychology Center (under PRC): one day workshop on
                      Self-Positive on 7th June, 2019 and ‘Positive
                      Conversations: Inspiring Youth Series’ on 31st October,
                      2019. Finally, to commemorate the completion of 50 years
                      of the department, Golden Jubilee celebrations were
                      organized on 5th March, 2020. The program consisted of
                      sharing of experiences by retired teachers, alumni,
                      cultural programs and interactive session. In the second
                      part of the day students from across all the colleges of
                      University of Delhi participated in three inter-college
                      competitions, namely, slam poetry, debate, and quiz.
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

export default Psycho_about;
