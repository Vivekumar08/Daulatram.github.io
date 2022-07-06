import React from 'react'
import Sidebar from "../../Components/Sidebar/Sidebar";
import Chairperson_banner from '../../Components/Banners/Chairperson_banner';
import chairman from "../../Dummy_data/ImgPages/About/Chairman.jpeg";
import Founder_banner from '../../Components/Banners/Founder_banner';

const Chairperson = () => {
  return (
   <>
   <div className=" flex flex-col">
        <div className="">
        {/* <Founder_banner/> */}
        <Chairperson_banner/>
        </div>
        <div className="flex flex-row">
          <div className="w-[350px]">
            <Sidebar />
          </div>
          <div className="w-[1100px]">
            <h2 className="text-3xl md:text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center  ">
                    Chairperson's Message
                    </h2>

            <figure className="flex flex-col p-4 ">
              <img 
                src={chairman}
                alt="chairman"
                className="rounded-3xl border-black border-2 h-[250px] w-[300px] md:h-[300px] md:w-[380px] ml-2 md:ml-80 mb-4"
                width={180}
              />

              <span className=" card-description leading-14 font- medium text-justify text-base md:text-lg m-50 pr-4 pl-4 pt-2">
              Daulat Ram College is a premium college for women in Delhi University, founded by the individualistic educationist,
               Late Shri Daulat Ram Gupta in 1960. The institute, a large constituent college of University of Delhi, originally started as
                ‘Pramila College’ and was renamed as Daulat Ram College in 1964 as it grew into a full-fledged extended college of University of Delhi.
                 It imparts education at the Bachelors level in Arts, Science and Commerce. It also enrols students at the Masters Level and hold M.A. Tutorials.
                 <br/>
                </span>
              
            </figure>
            <figure className="flex p-2">
              <span className="card-description leading-14 font- medium text-justify text-base md:text-lg ml-6 ">
                At present the college has 18 departments, over 3546 students on rolls, 185 teaching staff and 71 non-teaching staff. 
                The courses in Science were introduced in 1968 which led to the construction of the Science Block and Science laboratories. 
                The Commerce and M.A. courses as well as new Courses in B.A. (Hons.) and B.A. Programme were added simultaneously. 
                Further expansion occurred with the introduction of B.Sc. (Hons.) in Bio-Chemistry, Chemistry and addition of Nutrition and
                 Health Education (NHE), Office Management cum Secretarial Practice (OMSP) and Mathematics (Hons.). Foreign language as an
                  add-on Course in the college is open to the public. It offers Certificate/Diploma/Advanced Diploma courses in French/ German/ 
                  Spanish/ Italian/ Chinese/ Japanese and Korean languages. The College building also houses a block of tutorial rooms, an 
                  imposing seminar hall, Computer laboratories with internet facilitates and a well-equipped library with over 90,000 titles.
                   The college holds a leading position in sports and was developed as a training venue for the Commonwealth Games, 2010. 
                   It boasts of a State-de-arte multi-sports Academy and compendium of latest sports facilities. Co-curricular activities
                    like Societies, Departmental Associations, the Women’s Development Centre, Eco-Club, N.S.S and N.C.C. are available.
                     For the old students to connect to their alma mater, the college has an active Alumni Association. The college 
                     student’s hostel has an intake capacity of nearly 204 students. Every year it wins the University award for the best
                      maintained environment and hostel in Delhi University. The intensely cherished dream of the founder Shri Daulat Ram 
                      Gupta was finally given expression in 1990 by the then Chairperson late Shri Mahendra Nath Gupta (his son) who called
                       upon Shri Rajiv Gandhi to lay the foundation stone of what stands today as an imposing multi -purpose auditorium in 
                       the frontage of the college. On the spur of the moment, it was named ‘Sadbhavana Bhawan’. From 1990 onwards, Shri 
                       Mahendra Nath Gupta relentlessly pursued its construction in 1997, the ‘Sadbhavana Bhawan’ was inaugurated to 
                       articulate the talent and the creative genius in Arts, Culture, Sports & Drama of the students and having a seating 
                       capacity of over 1400 persons. The vibrant mix of the cocurricular and extracurricular activities both at the intra-college
                        and inter-college levels adds to the multidimensional character of the college. I feel privileged to be the Chairperson 
                        of such an institution and carrying forward the vision of its founder Daulat Ram Gupta, as his descendant.
              </span>
            </figure>
            <figure className="flex p-4 ">
              

              <span className=" card-description leading-14 font- medium text-justify text-base md:text-lg  p-4">
    
                 <b> - Prof. Mukund Gupta</b>
                </span>
              
            </figure>
            
            
           
          </div>
        </div>
      </div>

   
   </>
  )
}

export default Chairperson