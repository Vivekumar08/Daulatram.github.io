import React from "react";
import Vp_banner from "../../Components/Banners/Vp_banner";
import Sidebar from "../../Components/Sidebar/Sidebar";
import VP from "../../Dummy_data/ImgPages/About/Sarita_VP.jpg";

const VicePrincipal = () => {
  return (
    <>
      <div className=" flex flex-col">
        <div className="">
          <Vp_banner />
        </div>
        <div className="flex flex-row">
          <div className="w-[350px]">
            <Sidebar />
          </div>
          <div className="w-[1100px]">
            <h2 className=" text-3xl md:text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
              Vice-Principal's Message
            </h2>

            <figure className="flex flex-col pl-4 pr-4 pb-2 ">
              <img
                src={VP}
                alt="Vice-Principal"
                className="rounded-3xl border-black border-2h-[250px] w-[300px] md:h-[300px] md:w-[380px] ml-2 md:ml-80 mb-4"
                width={220}
              />

              <span className=" card-description leading-14 font- medium text-justify text-base md:text-lg  pr-4 pl-4 pt-2">
                Students you should be assured that you are about to be admitted
                to Daulat Ram College, which is a renowned affiliated college of
                Delhi University. The college imparts holistic education to
                female students by training students in education coursework as
                well as in co-curricular activities and extracurricular
                activities. The college also gives a chance to add additional
                skills for your progression into your career path by providing
                you the opportunity to participate in Skill Development Programs
                (SDP) which are conducted by the college faculty, in summer and
                winter breaks. These SDPs can provide you training in various
                progressive fields like Digital literacy, Bioinformatics, Music,
                cybercrimes and many more areas of interest.
                <br />
              </span>
            </figure>
            <figure className="flex pl-4 pr-4">
              <span className="card-description leading-14 font- medium text-justify text-base md:text-lg ml-4 ">
                You can register yourself to any of these courses which are
                launched from time to time by various departments. You can also
                enroll for National Service Scheme (NSS), for community services
                like blood donation, and National Cadet Corp (NCC) for advanced
                physical training like trekking, which will boost discipline,
                compassion and integrity within you. The college has an active
                placement cell which will train you in writing your resume,
                apprise you of off campus internships and career opportunities.
                You can also get on- campus placements in your final year
                through these opportunities. The college also has taken a
                proactive role in keeping the college campus environment neat
                and clean by recycling the college wastes. You can participate
                in this venture and make yourself aware of the environment
                sustainability of the campus which is one of the sustainable
                goals of the United Nations. In case you are interested in
                research, college can help you to acquire skill sets for this
                purpose. The college has maintained several resource centres
                like Zebrafish Facility, Drosophila Facility, Environment Lab
                where you can participate in Internships and also undertake
                small research projects. If you or your friends are facing any
                mental anxieties you can approach the psychology resource centre
                where you can take counselling about how to enhance your
                positive mental health. The college also has a well-equipped
                sports complex and big sports ground where you can train
                yourself in Gym and other sports activities. You will also have
                a chance to be a part of the Student Union to inculcate
                leadership skills. You will have a chance to upgrade and
                showcase your talent and organise events which can help other
                students to do the same. This academic session we are going to
                launch Vidya Vistar Scheme in which you may get an opportunity
                to be trained in skill sets which may be unique to colleges
                located away from NCR. College has been running Add courses in
                foreign languages for the last ten years. This provides
                education in 7 foreign languages like Spanish, French, Italian,
                German, Chinese, Korean and Japanese which gives you an
                opportunity to learn a foreign language thoroughly. You can
                enrol in any one of the courses in the first year itself in the
                certificate course. You can progress to Diploma and Advanced
                Diploma in the same language in the subsequent years. So, you
                can earn an additional qualification during your undergraduate
                degree education period. We are also launching some additional
                new add-on courses like Awareness in Legal Literacy , R
                analytics, Happiness and Well-being this academic session. You
                can enrol for any of these along with your degree course. Thus,
                college life is going to give you a plethora of platforms where
                you can groom yourself for the successful life ahead. It's up to
                you how much interest you can take, work with energy and passion
                to make the best use of campus life at Daulat Ram College. My
                best wishes are with you.
              </span>
            </figure>
            <figure className="flex p-4 ">
              <span className=" card-description leading-14 font- medium text-justify text-base md:text-lg  p-4">
                <b> - Prof. Sarita Nanda</b>
              </span>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default VicePrincipal;
