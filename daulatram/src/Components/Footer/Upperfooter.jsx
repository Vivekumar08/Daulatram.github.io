import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


function Upperfooter() {
  return (
    <>
      <footer className="footer mt-5  bg-[#002366] text-white">
        <div className="flex flex-col ">
          <div className=" h-[95%] mt-10 ">
            <div className="flex flex-col md:items-start items-center md:justify-evenly  md:ml-5 md:flex-row ">
              <ul className="w-[50%] md:w-[20%]">
                <h4 className="mb-5   md:relative  font-bold md:text-2xl text-lg">
                  INFORMATION
                </h4>
                
                <li className="pb-2">
                  <span className="mr-3">-</span>
                  <Link
                    to="/about/Gallery"
                    className="hover:text-white hover:font-semibold text-[#d3d3d3] hover:px-2"
                  >
                    Gallery
                  </Link>
                </li>
                <li className="pb-2">
                  <span className="mr-3">-</span>
                  <Link
                    to="/Contact_us"
                    className="hover:text-white hover:font-semibold text-[#d3d3d3] hover:px-2"
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="pb-2">
                  <span className="mr-3">-</span>
                  <Link
                    to="/Public_Notice"
                    className="hover:text-white hover:font-semibold text-[#d3d3d3] hover:px-2"
                  >
                    Public Notice
                  </Link>
                </li>
                <li className="pb-2">
                  <span className="mr-3">-</span>
                  <Link
                    to="/RTI"
                    className="hover:text-white hover:font-semibold text-[#d3d3d3] hover:px-2"
                  >
                    RTI
                  </Link>
                </li>
                <li className="pb-2">
                  <span className="mr-3">-</span>
                  <Link
                    to="/StaffZone/Feedback"
                    className="hover:text-white hover:font-semibold text-[#d3d3d3] hover:px-2"
                  >
                    Feedback
                  </Link>
                </li>

                <li className="pb-2">
                  <span className="mr-3">-</span>
                  <Link
                    to="/Tender"
                    className="hover:text-white hover:font-semibold text-[#d3d3d3] hover:px-2"
                  >
                    Tender
                  </Link>
                </li>
                <li className="pb-2">
                  <span className="mr-3">-</span>
                  <Link
                    to="/Grievances"
                    className="hover:text-white hover:font-semibold text-[#d3d3d3] hover:px-2"
                  >
                    Grievances
                  </Link>
                </li>
                <li className="pb-2">
                  <span className="mr-3">-</span>
                  <Link
                    to="/Job_Opportunities"
                    className="hover:text-white hover:font-semibold text-[#d3d3d3] hover:px-2"
                  >
                    Job Opportunities
                  </Link>
                </li>
                <li className="pb-2">
                  <span className="mr-3">-</span>
                  <Link
                    to="/Anti_Sexual_Harrasement"
                    className="hover:text-white hover:font-semibold text-[#d3d3d3] hover:px-2"
                  >
                    Anti-Sexual Harrasement
                  </Link>
                </li>
                <li className="pb-2">
                  <span className="mr-3">-</span>
                  <Link
                    to="ST_SC_OBC_Complaints"
                    className="hover:text-white hover:font-semibold text-[#d3d3d3] hover:px-2"
                  >
                    ST-SC-OBC Complaints
                  </Link>
                </li>
                <li className="pb-2">
                  <span className="mr-3">-</span>
                  <Link
                    to="/Archives"
                    className="hover:text-white hover:font-semibold  text-[#d3d3d3] hover:px-2"
                  >
                    Archives
                  </Link>
                </li>
                <li className="pb-2">
                  <span className="mr-3">-</span>
                  <Link
                    to="/Sitemap"
                    className="hover:text-white hover:font-semibold  text-[#d3d3d3] hover:px-2"
                  >
                    Sitemap
                  </Link>
                  
                </li>
              </ul>
              <ul className="w-[50%] md:w-[20%] ">
              
                <h4 className=" mt-10 md:mt-0  mb-5   md:relative font-bold md:text-2xl text-lg">
                  ALUMNAE CONNECT
                </h4>
                <li className="pb-2">
                  <span className="mr-3">-</span>
                  <a
                    to="https://drcaa.org/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white hover:font-semibold text-[#d3d3d3] hover:px-2"
                  >
                    https://drcaa.org/{" "}
                  </a>
                </li>
                <br />
                <br />
                <h4 className="mb-5 relative font-bold md:text-2xl text-lg">ADDRESS</h4>
                <p className="text-[#d3d3d3]">
                  4, Patel Marg, Maurice Nagar, <br /> Delhi PIN-110007
                </p>
                <br />
                <div className="email-id">
                  <p className="">
                    <a
                      to="mailto: daulatramcollegedu@gmail.com ? Subject: Query Regarding to Daulat Ram Collge"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-white hover:font-semibold text-[#d3d3d3]"
                    >
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="mr-1   "
                      />
                      <span className="ml-2">
                        daulatramcollegedu@gmail.com
                      </span>
                    </a>
                  </p>
                </div>
              </ul>
              <div className="footer-map">
                {/* <iframe
                src="https://www.google.com/maps/place/Daulat+Ram+College/@28.6882296,77.2016899,17.29z/data=!4m5!3m4!1s0x390cfd8d7f3807ab:0x3ba1a4f4de152e0!8m2!3d28.6880178!4d77.2054617?hl=en"
                style="border:0; "
                allowfullscreen
                loading="lazy"
              /> */}
              </div>
            </div>

          </div>
          <div className="mt-1 ">
            <p className="text-gray-200 bg-[#1E1F29] text-center h-12 pt-3">
              © All Rights Reserved
              <Link to="/" className="ml-3">
                DAULAT RAM COLLEGE, <span className="ml-2  mr-2">|</span>
              </Link>
              {/* Created by: DarkWeb Dreamers (CICians) */}
              Created by: CIC (Ishika Rai, Priyanshu Sisodiya, Riya Kumari, Vivek Kumar)
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Upperfooter;
