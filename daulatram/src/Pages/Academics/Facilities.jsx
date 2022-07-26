import React from "react";
import Sidebar from "../../Components/Sidebar/DeptSidebar";
import Banner from "../../Components/Banners/Facilities";

const Facilities = () => {
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
            <h2 className="bg-yellow-500 md:bg-red-500 lg:bg-green-500 text-3xl md:text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center  ">
              FACILITIES
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold mb-5 mt-5 flex flex-row justify-center items-center text-center ">
              Library and Reading Room
            </h3>
            <figure className="flex p-4">
              <span className=" card-description leading-14 font-medium text-justify text-base md:text-lg ">
                Library and Reading Room facilities are open only to students
                and staﬀ of the college. The College Library possesses an
                excellent collection of more than 1,20,000 books and journals/
                periodicals. The library is open from 9 a.m. to 5 p.m. on week
                days i.e. Monday to Friday. On Saturday, the library is open for
                students but the book issue and return facility is not
                available. The library is completely digitized with the latest
                software. Library boasts of a separate Braille Section with soft
                wares such as (Angel: Talking Digital Pocket Daisy Player, E-
                Book Reader, MP3 Player, Radio cum voice Recorder) for the
                beneﬁt of diﬀerently-abled students, especially visually
                handicapped.
              </span>
            </figure>
            <h4 className="text-2xl md:text-3xl  font-bold mb-5 mt-5 flex flex-row justify-center items-center text-center ">
              Terms and Conditions
            </h4>
            <figure className="ml-3">
              <span className="card-description leading-14 text-justify flex flex-col text-base md:text-lg font-medium ">
                <li>
                  Before leaving the counter, the member should ensure that the
                  book lent to them is in sound condition. If not, it should
                  immediately be brought to the notice of the Librarian, as
                  otherwise, the member would be held liable for any loss/damage
                  and required to replace it with a sound/fresh copy.
                </li>
                <li>
                  {" "}
                  Periodicals, directories, encyclopaedias, which might be
                  diﬃcult to replace and other books that are declared reference
                  books by the Librarian shall not be lent out
                </li>
                <li>
                  Members are not allowed to sub-lend the books of the library.
                </li>
                <li>
                  Students who return books later than the due date will be
                  liable to pay a ﬁne as decided by the College authorities from
                  time to time.
                </li>
                <li>
                  At present the ﬁne for general section books is ₹ 1 per day
                  for ﬁrst ﬁfteen days of delay. Thereafter, it will be ₹ 5 per
                  day for one month, after which the ﬁne will be ₹ 10 per day.
                  Fine for Reserved Section books is ₹ 2 per day for ﬁrst week
                  and thereafter it is ₹ 10 per day.
                </li>
                <li>
                  Any infringement of the rules will deprive the member of the
                  privilege of admission to and of borrowing books from the
                  library.
                </li>
                <li>
                  Each student of M.A. course is entitled to borrow six books at
                  a time.
                </li>
                <li>
                  The library membership will be valid till the student leaves
                  the college.
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
              <h3 className="text-2xl md:text-3xl  font-bold mb-5 mt-5 flex flex-row justify-center items-center text-center ">
                Teachers Study Room
              </h3>
              <figure className="flex  mb-5">
                <span className=" card-description leading-14 text-justify text-base md:text-lg font-medium ">
                  The college has a well-maintained teacher’s study room
                  adjacent to library which is equipped with computer facility
                  and lockers. The study area is Wi-Fi enabled, promoting easy
                  access to research and study material.
                </span>
              </figure>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default Facilities;
