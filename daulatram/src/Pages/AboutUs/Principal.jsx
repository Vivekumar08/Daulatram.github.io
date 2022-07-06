import React from 'react'
import Sidebar from "../../Components/Sidebar/Sidebar";
import Princi_banner from '../../Components/Banners/Princi_banner'
import founder from "../../Dummy_data/ImgPages/About/founder.png";
import princi1 from "../../Dummy_data/ImgPages/About/princi1.png";
import princi2 from "../../Dummy_data/ImgPages/About/princi2.png";


const Principal = () => {
  return (
    <>
    <div className=" flex flex-col">
        <div className="">
          <Princi_banner />
        </div>
        <div className="flex flex-row">
          <div className="w-[350px]">
            <Sidebar />
          </div>
          <div className="w-[1100px]">
            <h2 className="bg-yellow-500 md:bg-red-500 lg:bg-green-500 text-3xl md:text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
                    Principal's Message
                    </h2>

                    <figure className="flex flex-col p-4">
              <img
                src={princi1}
                alt="princi"
                className="rounded-3xl border-black border-2 h-[250px] w-[300px] md:h-[300px] md:w-[380px] ml-2 md:ml-80 mr-10 mt-10 mb-4 "
                width={250}
              />

              <span className=" card-description leading-14 font- medium text-justify text-base md:text-lg ">
              Daulat Ram College, a Star college, is one of the oldest and largest women colleges of the city imparting holistic and quality education in the field of Science, Humanities and Commerce. The college is located in the north campus of University of Delhi. The college is known for its
progressive staff and academic vigour which has produced alumni that have done
exceedingly well in all walks of life. The intake capacity for undergraduate programs is approx. 1200 students in all streams combined together. The college has a fully air conditioned hostel with first year intake of approx. 70 students. It is a home away from home with 24X7 internet and computing facility. It is a great pleasure as Principal to welcome you all to the beginning of your lifelong association with this College. You are joining us at a time when higher education is undergoing rapid and dramatic transformation. We live in an era when knowledge is growing in importance in addressing the world’s most pressing problems. We at Daulat Ram College aspire to empower all young women to succeed in their world by offering a wide variety of challenging, enjoyable and successful curricular, co-curricular and extra-curricular opportunities which is carried out through different clubs, societies, associations and student Union. In addition we set high expectations for our students with regard to their academic performance.

              </span>
            </figure>
            <figure className="flex p-4">
              <span className="card-description leading-14 font- medium text-justify text-base md:text-lg ">
              The Program like Miss DRC talent hunt, Manjari, hostel night, creative writing in college magazine “Pramila”, sports meet etc. are some of the platforms where students can participate and showcase their talent. We have been organizing self-defence training camps and Yoga training camps for physical and mental well-being of students. This has been made possible through NSS, NCC, WDC and Sports departments of the college. The Equal Opportunity Cell looks after the academic and extracurricular activities of the differently abled students. Students are given the opportunity to make campus clean and green through various initiatives taken by Eco club and NSS such as tree plantations and Swachchata Abhiyan. The other initiatives under which students can participate and contribute are converting garden waste to manure, Paper recycling etc. The college houses several summer programs such as in-house skill development programs, life skill programs and exchange programs. They also have an opportunity to undertake research and convert their idea into reality through innovation projects and star innovation activities. The entire campus is Wi-Fi enabled. The Placement cell of college is very active where students are exposed to various career opportunities and can opt for various openings / internships in industry.
              </span>
              {/* <img
                src={princi2}
                alt="princi2"
                className=" rounded-3xl h-[250px] border-black border-2 ml-10 mr-8 mt-16"
              /> */}
            </figure>
            <div className="p-3 flex  m-2">
              <span className="card-description leading-14 font- medium text-justify text-base md:text-lg ">
              In addition, students are encouraged to take advantage of other resources available in the college such as their teachers, the well-equipped library, the science laboratories & their museum, computer labs, state of art Gymnasium, amphitheatre etc. Our commitment is to provide a safe, positive, intellectual learning environment that will empower students to become creative problem solvers, thinkers and inspired learners. We want you to thrive and succeed here: academically, socially and personally. I wish you all the best for an exciting and rewarding, challenging and stimulating three years on this campus.


              </span>
            </div>
            <div className="p-3 flex  m-2">
            <span className="card-description leading-14 font- medium text-justify text-base md:text-lg "> <b>- Prof. Savita Roy</b> 
</span>
            
            </div>
            
           
          </div>
        </div>
      </div>

    </>
  )
}

export default Principal