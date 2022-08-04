import React from "react";
import Contact_side from "../../Components/Banners/Footer/Contact_side";

const Contact = () => {
  return (
    <div>
      <Contact_side />
      <div className="flex flex-col lg:flex-row justify-center w-full mt-10 mb-10">
        <h2 className="text-2xl md:text-3xl lg:4xl uppercase font-bold mb-5 mt-5 flex flex-row justify-center items-center ml-10 ">
          Contact Information
        </h2>
        <div className="w-full flex justify-center flex-col lg:flex-row ">
          <div className="lg:mr-4">
            <div className="  w-full gap-4 flex flex-col ">
              <div className="text-[#000] flex flex-row items-start  justify-center">
                <div className="mb-5 mr-5 font-bold text-base lg:text-lg w-32">Address:</div>
                <span className="text-base lg:text-lg w-2/3">
                  4, Patel Marg, Maurice Nagar, <br /> Delhi PIN-110007
                </span>
              </div>
              <div className="text-[#000] flex flex-row items-end justify-center">
                <div className="mb-5 mr-5 font-bold text-base lg:text-lg w-32">Phone:</div>
                <span className="text-base lg:text-lg w-2/3">011 - 2766 7863, 27667650</span>
              </div>
              <div className="text-[#000] flex flex-row items-start justify-center">
                <div className="mb-5 mr-5 font-bold text-base lg:text-lg w-32">Email:</div>
                <span className="text-base lg:text-lg w-2/3">
                  <a
                    href="mailto: daulatramcollegedu@gmail.com ? Subject: Query Regarding to Daulat Ram Collge"
                    target="_blank"
                    rel="noreferrer"
                    className=" hover:underline hover:decoration-[#000080] text-[#000] "
                  >
                    <span className="">daulatramcollegedu@gmail.com</span>
                  </a>
                </span>
              </div>
              <div className="text-[#000] flex flex-row items-start justify-center">
                <div className="mb-5 mr-5 font-bold text-base lg:text-lg w-32">
                  Follow us on:
                </div>
                <span className="text-base lg:text-lg w-2/3">
                  <a
                    href="https://www.facebook.com/DRC1972"
                    target="_blank"
                    rel="noreferrer"
                    className=" hover:underline hover:decoration-[#000080] text-[#000] mr-3 "
                  >
                    <span className="">Facebook ,</span>
                  </a>
                  <a
                    href="https://twitter.com/drc_du"
                    target="_blank"
                    rel="noreferrer"
                    className=" hover:underline hover:decoration-[#000080] text-[#000] ml-2"
                  >
                    <span className=""> Twitter</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className=" ml-2 md:ml-24 lg:ml-4 ">
            <div className="text-[#000] flex flex-row items-start justify-center">
              <div className="mb-5 mr-5 font-bold text-base lg:text-md w-72">Principal:</div>
              <span className="text-base lg:text-md w-2/3">Prof. Savita Roy</span>
            </div>
            <div className="text-[#000] flex flex-row items-start justify-center">
              <div className="mb-5 mr-5 font-bold text-base lg:text-md w-72">Bursar:</div>
              <span className="text-base lg:text-md w-2/3">Dr. Pooja Jain</span>
            </div>
            <div className="text-[#000] flex flex-row items-start justify-center">
              <div className="mb-5 mr-5 font-bold text-base lg:text-md w-72">
                Administrative Officer:
              </div>
              <span className="text-base lg:text-md w-2/3"></span>
            </div>
            <div className="text-[#000] flex flex-row items-start justify-center">
              <div className="mb-5 mr-5 font-bold text-base lg:text-md w-72">PIO:</div>
              <span className="text-base lg:text-md w-2/3">Dr. Jyoti Tyagi</span>
            </div>
            <div className="text-[#000] flex flex-row items-start justify-center">
              <div className="mb-5 mr-5 font-bold text-base lg:text-md w-72">
                Section Officer(Offg.):
              </div>
              <span className="text-base lg:text-md w-2/3">Mr. B.S. Negi</span>
            </div>
            <div className="text-[#000] flex flex-row items-start justify-center">
              <div className="mb-5 mr-5 font-bold text-base lg:text-md w-72">
                Section Officer(Accounts):
              </div>
              <span className="text-base lg:text-md w-2/3">Mr. Rakesh</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
