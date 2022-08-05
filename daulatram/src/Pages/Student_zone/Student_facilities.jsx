import React from "react";
import Student_side from "../../Components/Sidebar/Student_side";
import Studentfacbanner from "../../Components/Banners/Studentfacbanner";
const Student_facilities = () => {
  return (
    <>
      <div className="">
        <Studentfacbanner />
      </div>

      <div className="flex ">
        <div className="w-[350px]">
          <Student_side />
        </div>

        <div className="relative ml-2 w-[1100px]">
          <h2 className=" text-3xl md:text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
            FACILITIES
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold  mb-5 mt-5 flex flex-row justify-center items-center text-center ">
            Library and Reading Room
          </h3>
          <figure className="flex p-4">
            <span className=" card-description mr-16 font-medium text-justify text-base  md:text-lg ">
              Library and Reading Room facilities are open only to students and
              staﬀ of the college. The College Library possesses an excellent
              collection of more than 1,20,000 books and journals/ periodicals.
              The library is open from 9 a.m. to 5 p.m. on week days i.e. Monday
              to Friday. On Saturday, the library is open for students but the
              book issue and return facility is not available. The library is
              completely digitized with the latest software. Library boasts of a
              separate Braille Section with soft wares such as (Angel: Talking
              Digital Pocket Daisy Player, E- Book Reader, MP3 Player, Radio cum
              voice Recorder) for the beneﬁt of diﬀerently-abled students,
              especially visually handicapped.
            </span>
          </figure>
          {/* <div className="flex justify-center items-center">
                  <img
                    src={process.env.PUBLIC_URL + ""}
                    style={{
                      width: "700px",
                      height: "400px",
                    }}
                    className="bg-cover bg-no-repeat bg-center mt-5 rounded-lg border-2   border-black"
                  />
                </div> */}
          <h4 className="text-2xl md:text-3xl font-bold mb-5 mt-5 flex flex-row justify-center items-center text-center ">
            Terms and Conditions
          </h4>
          <figure className="ml-3">
            <span className=" leadig-14 font-medium text-justify text-base  md:text-lg ">
              <li>
                Before leaving the counter, the member should ensure that the
                book lent to them is in sound condition. If not, it should
                immediately be brought to the notice of the Librarian, as
                otherwise, the member would be held liable for any loss/damage
                and required to replace it with a sound/fresh copy.
              </li>
              <li>
                {" "}
                Periodicals, directories, encyclopaedias, which might be diﬃcult
                to replace and other books that are declared reference books by
                the Librarian shall not be lent out
              </li>
              <li>
                Members are not allowed to sub-lend the books of the library.
              </li>
              <li>
                Students who return books later than the due date will be liable
                to pay a ﬁne as decided by the College authorities from time to
                time.
              </li>
              <li>
                At present the ﬁne for general section books is ₹ 1 per day for
                ﬁrst ﬁfteen days of delay. Thereafter, it will be ₹ 5 per day
                for one month, after which the ﬁne will be ₹ 10 per day. Fine
                for Reserved Section books is ₹ 2 per day for ﬁrst week and
                thereafter it is ₹ 10 per day.
              </li>
              <li>
                Any infringement of the rules will deprive the member of the
                privilege of admission to and of borrowing books from the
                library.
              </li>
              <li>
                Each student of M.A. course is entitled to borrow six books at a
                time.
              </li>
              <li>
                The library membership will be valid till the student leaves the
                college.
              </li>
              <li> Timings for Issue and Return of Books:</li>

              <p className="ml-7">
                {" "}
                <strong>-- </strong>Books from General Section are issued and
                returned from 9.00 a.m. to 4.00 p.m
              </p>
              <p className="ml-7">
                {" "}
                <strong>-- </strong> Timings for issue of books from Reserved
                Section are from 12.30 p.m. to 4.00 p.m.
              </p>
              <p className="ml-7">
                {" "}
                <strong>-- </strong> Books from Reference Section are only
                issued for consultation in the Library against Reference Card
                from 9 a.m. to 5 p.m.
              </p>
            </span>
            <h3 className="text-2xl md:text-3xl font-bold mb-5 mt-5 flex flex-row justify-center items-center text-center">
              Laboratories
            </h3>
            <figure className="flex p-3">
              <span className=" card-description leading-14 font-medium text-justify text-base md:text-lg ">
                The College has well equipped and well managed laboratories for
                all the Science Courses oﬀered, viz. Bio-Chemistry, Botany,
                Chemistry, Physics and Zoology. The Departments of Nutrition &
                Health Education, Maths and Psychology also have separate well
                equipped labs.
              </span>
            </figure>
            <h3 className="text-2xl md:text-3xl font-bold mb-5 mt-5 flex flex-row justify-center items-center text-center">
              Computer Lab
            </h3>
            <figure className="flex p-3">
              <span className=" card-description leading-14 font-medium text-justify text-base md:text-lg ">
                The College has well equipped Computer Labs with Pentium
                machines powered by the latest conﬁguration. The Labs have
                connectivity with the Delhi University intranet with access to
                the internet. The main computer lab has 38 computers and there
                is an additional computer lab for Commerce and Mathematics
                students which has 25 computers with internet facility. The
                Commerce computer lab and maths computer lab has 40 computer
                terminals each. The mathematics computer lab has licensed UBUNTU
                version 8.1 and is well equipped with mathematical softwares
                such as Mathematica, Latex, R and operational Research soft
                wares such as TORA.
              </span>
            </figure>
            <h3 className="text-2xl md:text-3xl font-bold mb-5 mt-5 flex flex-row justify-center items-center text-center">
              College Auditorium- Sadbhavna Bhawan
            </h3>
            <figure className="flex p-3">
              <span className=" card-description leading-14 font-medium text-justify text-base md:text-lg ">
                The college auditorium, Sadbhavna Bhawan is a proscenium hall
                with a large stage and a seating capacity of over 1,000, ideally
                suited for theatre activities and dramatics with plays having
                large cast. All major intra-college and inter-college events
                also take place in the auditorium.
              </span>
            </figure>

            <h3 className="text-2xl md:text-3xl font-bold mb-5 mt-5 flex flex-row justify-center items-center text-center">
              Conference Hall
            </h3>
            <figure className="flex p-3">
              <span className=" card-description leading-14 font-medium text-justify text-base md:text-lg ">
                The Conference Hall has a capacity of 200. Since its inception
                in October 2016, it has been a venue for a large number of
                academic workshops, seminars and conferences. The hall is fully
                air-conditioned, Wi-Fi enabled with digital projection and best
                audio facility. The college host inter- college, intra- college
                and departmental activities in this hall. It has been a big
                asset for the college.
              </span>
            </figure>

            <h3 className="text-2xl md:text-3xl font-bold mb-5 mt-5 flex flex-row justify-center items-center text-center">
              Seminar Hall
            </h3>
            <figure className="flex p-3">
              <span className=" card-description leading-14 font-medium text-justify text-base md:text-lg ">
                The Seminar Hall of the college is the place for multifarious
                activities throughout the year. The activities in the seminar
                room range from curricular and co-curricular seminars, lectures,
                debates, discussions and workshops to Student Union functions,
                NSS and Women Development Centre activities. It serves as a
                perfect venue for hosting departmental farewell and freshers'
                programs. It is air conditioned, with a seating capacity of 200
                people. Its wooden panels allow space division making the large
                area convenient to be used for simultaneous multipurpose
                activities.{" "}
              </span>
            </figure>

            <h3 className="text-2xl md:text-3xl font-bold mb-5 mt-5 flex flex-row justify-center items-center text-center">
              Amphitheatre
            </h3>
            <figure className="flex p-3">
              <span className=" card-description leading-14 font-medium text-justify text-base md:text-lg ">
                The open-air amphitheatre, namely Rangshala, oﬀers a stage to
                the young students to hone their talent, communication and
                performing skills. It has been a witness to many famous events
                and has provided a forum to many burgeoning artists. It is a
                perfect spot for various activities such as nukkad natak,
                societies' practice and dance performances. It has been a venue
                for hoisting national ﬂag during Republic Day and Independence
                Day celebrations.
              </span>
            </figure>

            <h3 className="text-2xl md:text-3xl font-bold mb-5 mt-5 flex flex-row justify-center items-center text-center">
              Medical Room
            </h3>
            <figure className="flex p-3">
              <span className=" card-description leading-14 font-medium text-justify text-base md:text-lg ">
                Medical room with an attendant nurse and ﬁrst aid facilities is
                available from 9:00 a.m. to 5:00 p.m. The students can also
                avail of the World University Health Service of the University
                of Delhi against the nominal annual fee of ₹ 5/-.{" "}
              </span>
            </figure>

            <h3 className="text-2xl md:text-3xl font-bold mb-5 mt-5 flex flex-row justify-center items-center text-center">
              College Canteen
            </h3>
            <figure className="flex p-3">
              <span className=" card-description leading-14 font-medium text-justify text-base md:text-lg ">
                The College canteen oﬀers a varied menu at subsidized rates. The
                College Canteen provides healthy and nutritious food for
                students. A range of cuisines are freshly and hygienically
                prepared and made available for breakfast and lunch. Apart from
                cooked choices, students can buy branded packed snacks too.{" "}
              </span>
            </figure>

            <h3 className="text-2xl md:text-3xl font-bold mb-5 mt-5 flex flex-row justify-center items-center text-center">
              Bank
            </h3>
            <figure className="flex p-3">
              <span className=" card-description leading-14 font-medium text-justify text-base md:text-lg ">
                The College has banking facilities in its premises. The
                University Branch of Indian Overseas Bank operates in the
                College. It also has an ATM facility for students.
              </span>
            </figure>

            <h3 className="text-2xl md:text-3xl font-bold mb-5 mt-5 flex flex-row justify-center items-center text-center">
              RO Water
            </h3>
            <figure className="flex p-3">
              <span className=" card-description leading-14 font-medium text-justify text-base md:text-lg ">
                Cold and puriﬁed drinking water is supplied to the students
                through the RO system. Upgraded from bulky water coolers, the
                water is dispensed through seamless junction of taps located in
                a clean area dedicated for this purpose. Located on ground and
                ﬁrst ﬂoors, the area is beautifully lit up by posters signifying
                the importance of water conservation.{" "}
              </span>
            </figure>

            <h3 className="text-2xl md:text-3xl font-bold mb-5 mt-5 flex flex-row justify-center items-center text-center">
              Wi-Fi Connectivity
            </h3>
            <figure className="flex p-3">
              <span className=" card-description leading-14 font-medium text-justify text-base md:text-lg ">
                The College is fully Wi-Fi enabled. Keeping in mind the advanced
                technological demands of the students, the college provides this
                facility to all the students by sharing a secure password to be
                used within the college premises.
              </span>
            </figure>

            <h3 className="text-2xl md:text-3xl font-bold mb-5 mt-5 flex flex-row justify-center items-center text-center">
              CCTV Surveillance
            </h3>
            <figure className="flex p-3">
              <span className=" card-description leading-14 font-medium text-justify text-base md:text-lg ">
                Closed-Circuit Television Units, 50 approx. in number, are
                strategically installed in the college and hostel premises to
                ensure that proper discipline is maintained. It is also useful
                for safety concerns of students.
              </span>
            </figure>

            <h3 className="text-2xl md:text-3xl font-bold mb-5 mt-5 flex flex-row justify-center items-center text-center">
              Hostel
            </h3>
            <figure className="flex p-3">
              <span className=" card-description leading-14 font-medium text-justify text-base md:text-lg ">
                Daulat Ram College Hostel established in 1974, is the
                accommodation facility exclusively meant for 200 undergraduate
                students of the College. The hostel is equipped with various
                modern facilities and amenities, viz., air-conditioned rooms,
                laundry, free Wi-ﬁ, computer room, medical room etc. to ensure a
                comfortable and happy stay for the resident students. The hostel
                has pleasing ambience with well laid out lawns and gardens which
                help in providing a peaceful and conducive atmosphere for
                studies. It has been winning acclaim and awards for the best
                maintained environment in Delhi University. The hostel also has
                its own kitchen garden. Active participation of resident
                students in all co-curricular, extra- curricular and cultural
                events of college and hostel help in their holistic development.
                It is proud of its successful and illustrious alumnae for whom
                it was always a 'home away from home'. Admission to the hostel
                is strictly on the basis of merit. All admission related
                information is displayed on the hostel notice board from time to
                time.
              </span>
            </figure>

            <h3 className="text-2xl md:text-3xl font-bold mb-5 mt-5 flex flex-row justify-center items-center text-center">
              Green Ride: (Last Mile Connectivity)
            </h3>
            <figure className="flex p-3">
              <span className=" card-description leading-14 font-medium text-justify text-base md:text-lg ">
                Introduced in 2017, it is a public bicycle sharing system which
                is one of the unique features of DRC. Promoting healthier
                lifestyle and everyday practices, this is an initiative which is
                environmental friendly. Students can hire bicycles for rides
                within the university campus. Once the ride is complete, the
                bicycles can be deposited at any of the ﬁve such centres located
                in North Campus. Please contact the centre for more details.
              </span>
            </figure>

            <h3 className="text-2xl md:text-3xl font-bold mb-5 mt-5 flex flex-row justify-center items-center text-center">
              Sports Complex and Gym
            </h3>
            <figure className="flex p-3">
              <span className=" card-description leading-14 font-medium text-justify text-base md:text-lg ">
                The college has a state-of-the-art gym complete with latest
                ﬁtness equipment and machinery including treadmills, cross- body
                trainer, exercising bike, weight trainer etc. Promoting a
                healthy and active lifestyle, it caters to the students and staﬀ
                who wish to avail the facility.
              </span>
            </figure>

            <h3 className="text-2xl md:text-3xl font-bold mb-5 mt-5 flex flex-row justify-center items-center text-center">
              Email IDs for Educational Purpose
            </h3>
            <figure className="flex p-3">
              <span className=" card-description leading-14 font-medium text-justify text-base md:text-lg ">
                The college provides its students unique email IDs with their
                Roll numbers in the oﬃcial domain name @dr.du.ac.in.
                Facilitating an uncompromised and secure learning environment in
                the virtual space, these are to be used strictly for educational
                purposes. Students are also guided and oriented through SDPs on
                E-learning.
              </span>
            </figure>
          </figure>
        </div>
      </div>
    </>
  );
};

export default Student_facilities;
