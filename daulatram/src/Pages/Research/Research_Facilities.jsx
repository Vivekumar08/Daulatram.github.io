import React from "react";
import Research_banner from "../../Components/Banners/Research_banner";
import Research_side from "../../Components/Sidebar/Research_side";

const Research_Facilities = () => {
  return (
    <>
      <Research_banner />

      <div className="flex flex-row">
        <div className="w-[350px] mb-2">
          <Research_side />
        </div>
        <div className="w-[1100px]">
          <div className="flex justify-center items-center flex-col">
            <div>
              <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
                Research and Facilities Centres
              </h2>
            </div>
          </div>
          <div className="text-justify p-3 m-2 ml-4">
            <figure className="flex flex-col">
              <h1 className="font-bold text-2xl">Library and Reading Room</h1>
              <p>
                Library and Reading Room facilities are open only to students
                and staff of the college. The College Library possesses an
                excellent collection of books, journals/periodicals. The Library
                is open from 9 a.m. to 5 p.m. Monday to Friday. For the purpose
                of issuing, books are categorized into three sections: General
                Section, Reserved Section and Reference Section. The library is
                well equipped with latest technical facilities alongside a
                developed Braille Section with a software of Brail (Angel:
                Talking Digital Pocket Daisy Player, E-Book Reader, MP3 Player,
                Radio cum voice Recorder) for the benefit of reading, writing
                and listening to provide equal opportunity to differently-abled
                students.
              </p>
            </figure>
            <br />
            <h1 className="font-bold text-2xl">Laboratories</h1>
            <p>
              The College has well equipped and well managed laboratories for
              all the Science courses offered, viz. Bio-Chemistry, Botany,
              Chemistry, Mathematics, Physics and Zoology. The Departments of
              Nutrition & Health Education and Psychology also have separate
              well equipped labs.
            </p>
            <br />
            <h1 className="font-bold text-2xl">Computer Labs</h1>
            <p>
              The College has well equipped Computer Labs with Pentium machines
              with the latest configuration. The Labs have connectivity with the
              Delhi University intranet with access to the internet. The main
              computer lab has 38 computers and there is an additional computer
              lab for Commerce and Maths students having 25 computers with an
              internet facility.
            </p>
            <br />
            <h1 className="font-bold text-2xl">Psychology Resource Centre</h1>
            <p>
              The Psychology Resource Centre (PRC) addresses the psycho-social
              needs of the students, teachers and non-teaching staﬀ, that is, to
              be aware of and eﬀectively manage with everyday life issues and
              stressors which include self-growth and development, handling
              stress and emotions, relationship issues, academic pressures,
              constant worry and anxiety. With changing times, human life has
              become increasingly stressful making it imperative for people to
              be aware and develop a psychological understanding of themselves
              and their surroundings. This is achieved by PRC by providing
              counselling services, Faculty Development Programs, functions and
              events that address the mental health and well- being of all
              stakeholders. PRC includes: Mental Health Centre, Value Education
              Centre, Positive Psychology Centre and Capacity Building Centre.
            </p>
            <br />
            <h1 className="font-bold text-2xl">Drosophila Resource Centre</h1>
            <div className="flex flex-col mb-5">
              <p>
                Drosophila Resource Centre was set up in Department of
                Biochemistry almost 10 years ago. The centre is funded by DBT
                Star College Project. It aims to teach the basic principles of
                genetics using Drosophila as model system. Almost 250 students
                have been trained since its inception. Students of diﬀerent life
                science streams such as Botany, Biochemistry, Life Sciences and
                Zoology from DU and Punjab University have been trained at the
                centre. A lab manual on ‘Rediscovering Genetics’ has been
                published in 2016 that covers the range of experiments performed
                by the students at the centre. The students have been immensely
                beneﬁted by this training which is reﬂected in their selection
                and persual of higher education in genetics from prestigious
                places. The centre also provides stocks and support to many
                colleges of Delhi University and AIIMS.
              </p>
              <div
                style={{
                  backgroundImage: "url(/images/research/res1.png)",
                  width: "100%",
                  height: "250px",
                }}
                className="bg-cover bg-no-repeat bg-center mt-5 rounded-lg border-2   border-black"
              ></div>
            </div>
            <h1 className="font-bold text-2xl">Zebraﬁsh Lab Facility</h1>
            <div className="flex flex-col mb-5">
              <p>
                The zebraﬁsh lab facility was set up in October 2015, jointly by
                Biochemistry department and Zoology department in collaboration
                with CSIR-IGIB, Mathura Road, Delhi, and Sansriti Foundation
                Delhi. The facility is funded by Star Innovation projects DU,
                Star College project DBT, Govt. of India, and Innovation
                projects DU. It was developed with the aim of providing an
                alternative in vivonon –invasive model system for science
                education, teaching and research. The facility provides training
                in zebraﬁsh model system to faculty and students. Till date,
                approximately 50 faculty members and 500 students from various
                science streams of diﬀerent Delhi University Colleges have
                participated in several workshops conducted for training in
                zebraﬁsh lab facility. The state of the art temperature and
                photo-period controlled facility houses automated re-circulatory
                ﬁsh habitat system, RO water plant, stereo-microscopes, inverted
                microscope with digital display screen ( Evos) and ﬂuorescent
                microscope (Nikon). The facility has been hosting summer
                internship program for students (under-graduate and post
                graduate) to get hands on training and research experience.
                Zebraﬁsh lab facility also serves as a resource centre to
                provide zebraﬁsh and embryos to other colleges/ departments and
                research institutes to support teaching and lab product.
              </p>
              <div
                style={{
                  backgroundImage: "url(/images/research/res2.png)",
                  width: "100%",
                  height: "250px",
                }}
                className="bg-cover bg-no-repeat bg-center mt-5 rounded-lg border-2   border-black"
              ></div>
            </div>
            <h1 className="font-bold text-2xl">Recycling Unit</h1>
            <p>
              College aims to become a zero-discharge campus and hence, it has
              set up a recycling unit in its campus which houses a paper
              recycling machine for recycling used papers and leaves shredder
              machine to make manure. The functioning of recycling unit is
              improving day by day with manufacture of tons of fertiliser which
              is used in household or sold outside, preparation of ceramic pots
              with medicinal/anti pollutant plants, manufacturing of white and
              brown recycled paper. Ceramic pots and paintings made here are
              used as gifts for the academic guests in the college. Students can
              do their internship and also earn NSS hours by participating in
              its functioning. Ever since its inception in 2016, this unit has
              processed tons of shredded leaves into manure, recycled paper and
              cartons, provided potted plants for gifting and also made folders,
              paintings, carry bags from recycled paper. Training workshops are
              organised regularly which helps to train the students and
              community members from time to time.
            </p>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default Research_Facilities;
