import React from "react";
import Banner from "../../Components/Banners/ResourcesBanner";
import Sidebar from "../../Components/Sidebar/DeptSidebar";

const Resources = () => {
  return (
    <>
      <div className=" flex flex-col">
        <div className="">
          <Banner />
      </div>
       <div className="flex flex-row">
          <div className="w-[350px]">
            <Sidebar />
          </div>
          <div className="w-[1100px] ">
            <h2 className="text-3xl uppercase md:text-4xl font-bold mb-5 mt-[5%] flex flex-row justify-center items-center  ">
              RESOURCE Centres for innovation
            </h2>
            
          
          <div className="text-justify p-3 m-2 ml-4">
           
            <h1 className="font-bold text-2xl md:text-3xl">Psychology Resource Centre</h1>
            <br/>
            <p className=" card-description leading-14 font- medium text-justify text-base md:text-lg ">
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
            <h1 className="font-bold text-2xl md:text-3xl">Drosophila Resource Centre</h1>
            
             <br/>
              <p className=" card-description leading-14 font- medium text-justify text-base md:text-lg ">
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
                  
                  objectFit: "contain"
                }}
                className="w-200 h-32 md:w-480 md:h-48 bg-cover bg-no-repeat bg-center mt-5 rounded-lg border-2   border-black"
              ></div>
            <br/>
            <h1 className="font-bold text-2xl md:text-3xl">Zebraﬁsh Lab Facility</h1>
           
              <br/>
              <p className=" card-description leading-14 font- medium text-justify text-base md:text-lg ">
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
                 
                  objectFit: "contain"
                }}
                className="w-200 h-32 md:w-480 md:h-48 bg-cover bg-no-repeat bg-center mt-5 rounded-lg border-2   border-black"
              ></div>
           <br/>
            <h1 className="font-bold text-2xl md:text-3xl">Recycling Unit</h1>
            <br/>
            <p className=" card-description leading-14 font- medium text-justify text-base md:text-lg ">
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
            <div
                style={{
                  backgroundImage: "url(/images/academics/recycling.png)",
                  
                }}
                className="w-200 h-32 md:w-480 md:h-48 bg-cover bg-no-repeat bg-center mt-5 rounded-lg border-2   border-black"
              ></div>
        
            <br />
            </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Resources;
