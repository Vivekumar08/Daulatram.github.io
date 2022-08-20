import React, { useContext } from "react";
import AuthContext from "../../Context/AuthProvider";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Icons from "../Icons";

function Upperfooter() {
  const { auth, setAuth } = useContext(AuthContext);

  return (
    <>
      <footer className="footer mt-5  bg-[#002366] text-white">
        <div className="flex flex-col ">
          <div className=" h-[95%] mt-10 ">
            <div className="flex flex-col lg:items-start items-center lg:justify-evenly  lg:ml-5 lg:flex-row ">
              <ul className="w-[50%] lg:w-[20%]">
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
                    to="/Student_Zone/Student_Feedback"
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
                    to="/Student_Zone/Grievance_Redressal"
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
                    Anti-Sexual Harassment
                  </Link>
                </li>
                <li className="pb-2">
                  <span className="mr-3">-</span>
                  <Link
                    to="/Student_Zone/Complainst_&_Suggetions"
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
                {auth && (
                  <li className="pb-2">
                    <span className="mr-3">-</span>
                    <Link
                      to="/Bulletin"
                      className="hover:text-white hover:font-semibold  text-[#d3d3d3] hover:px-2"
                    >
                      Bulletin
                    </Link>
                  </li>
                )}
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
              <ul className="w-[50%] lg:w-[20%] ">
                <h4 className=" mt-10 lg:mt-0  mb-5   md:relative font-bold md:text-2xl text-lg">
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
                <h4 className="mb-5 relative font-bold md:text-2xl text-lg">
                  ADDRESS
                </h4>
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
                      <FontAwesomeIcon icon={faEnvelope} className="mr-0 md:mr-1   " />
                      <span className="ml-2">daulatramcollegedu@gmail.com</span>
                    </a>
                  </p>
                </div>
              </ul>
              <div className="footer-map">
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.0416241843877!2d77.20486695!3d28.68840145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd8d74105ee5%3A0xb06f76b10853f864!2sDaulat%20Ram%20College%2C%20Maurice%20Nagar%2C%20Roop%20Nagar%2C%20Delhi%2C%20110007!5e0!3m2!1sen!2sin!4v1659536675984!5m2!1sen!2sin"
                  // width="600"
                  // height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-[400px] lg:h-[400px] md:w-[350x] md:ml-12 md:h-[400px] xl-[600px] h-[300px] mb-5 mt-5"
                ></iframe>
                <Icons />
              </div>
            </div>
          </div>
          <div className="mt-1 bg-[#1E1F29]">
            <p className="text-gray-200 m-2  text-center md:text-base text-sm h-12 pt-3">
              © All Rights Reserved
              <Link to="/" className="ml-3">
                DAULAT RAM COLLEGE, <span className="ml-2  mr-2">|</span>
              </Link>
              {/* Created by: DarkWeb Dreamers (CICians) */}
              Created by: CIC (Ishika Rai, Priyanshu Sisodiya, Riya Kumari,
              Vivek Kumar)
              <br />
              icon by{" "}
              <Link target="_blank" to="https://icons8.com">
                Icons8
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Upperfooter;
