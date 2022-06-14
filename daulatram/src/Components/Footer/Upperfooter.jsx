import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

// import "./style.css"

function Upperfooter() {
  return (
    <>
      <footer className="footer   bg-[#000080] text-white">
        <div className="container flex flex-col">
          <div className=" h-96 mt-10 ">
            <div className="flex  justify-evenly">
              <ul className="w-[15%]">
                <h4 className="mb-5 relative font-bold text-2xl">INFORMATION</h4>
                <li className="pb-2">
                  <span className="mr-3">-</span>
                  <a href="#" className="hover:text-white hover:font-semibold text-[#d3d3d3] hover:px-2">
                    Gallery
                  </a>
                </li>
                <li className="pb-2">
                  <span className="mr-3">-</span>
                  <a href="#" className="hover:text-white hover:font-semibold text-[#d3d3d3] hover:px-2">
                    Contact Us
                  </a>
                </li>
                <li className="pb-2">
                  <span className="mr-3">-</span>
                  <a href="#" className="hover:text-white hover:font-semibold text-[#d3d3d3] hover:px-2">
                    RTI
                  </a>
                </li>
                <li className="pb-2">
                  <span className="mr-3">-</span>
                  <a href="#" className="hover:text-white hover:font-semibold text-[#d3d3d3] hover:px-2">
                    Feedback
                  </a>
                </li>

                <li className="pb-2">
                  <span className="mr-3">-</span>
                  <a href="#" className="hover:text-white hover:font-semibold text-[#d3d3d3] hover:px-2">
                    Tender
                  </a>
                </li>
                <li className="pb-2">
                  <span className="mr-3">-</span>
                  <a href="#" className="hover:text-white hover:font-semibold text-[#d3d3d3] hover:px-2">
                    Grievances
                  </a>
                </li>
                <li className="pb-2">
                  <span className="mr-3">-</span>
                  <a href="#" className="hover:text-white hover:font-semibold text-[#d3d3d3] hover:px-2">
                    Job Opportunities
                  </a>
                </li>
                <li className="pb-2">
                  <span className="mr-3">-</span>
                  <a href="#" className="hover:text-white hover:font-semibold text-[#d3d3d3] hover:px-2">
                    Anti-Sexual Harrasement
                  </a>
                </li>
                <li className="pb-2">
                  <span className="mr-3">-</span>
                  <a href="#" className="hover:text-white hover:font-semibold text-[#d3d3d3] hover:px-2">
                    ST-SC-OBC Complaints
                  </a>
                </li>
                <li className="pb-2">
                  <span className="mr-3">-</span>
                  <a href="#" className="hover:text-white hover:font-semibold  text-[#d3d3d3] hover:px-2">
                    Sitemap
                  </a>
                </li>
              </ul>
              <ul className="mb-4 ml-4 ">
                <h4 className=" mb-5 relative font-bold text-2xl">ALUMNAE CONNECT</h4>
                <li className="pb-2">
                  <span className="mr-3">-</span>
                  <a
                    href="https://drcaa.org/"
                    className="hover:text-white hover:font-semibold text-[#d3d3d3] hover:px-2"
                  >
                    https://drcaa.org/{" "}
                  </a>
                </li>
                <br />
                <br />
                <h4 className="mb-5 relative font-bold text-2xl">ADDRESS</h4>
                <p className="text-[#d3d3d3]">4, Patel Marg, Maurice Nagar, <br /> Delhi PIN-110007</p>
                <br />
                <div className="email-id">
                  <p className="">
                    <a
                      href="mailto: daulatramcollegedu@gmail.com ? Subject: Query Regarding to Daulat Ram Collge"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-white hover:font-semibold text-[#d3d3d3]"
                    >
                      <FontAwesomeIcon icon={faEnvelope} className="mr-1   " />
                      <span className="ml-2">daulatramcollegedu@gmail.com</span>
                    </a>
                  </p>
                </div>
              </ul>
            </div>

            <div className="footer-map">
              {/* <iframe
                src="https://www.google.com/maps/place/Daulat+Ram+College/@28.6882296,77.2016899,17.29z/data=!4m5!3m4!1s0x390cfd8d7f3807ab:0x3ba1a4f4de152e0!8m2!3d28.6880178!4d77.2054617?hl=en"
                style="border:0; "
                allowfullscreen
                loading="lazy"
              /> */}
            </div>
          </div>
          <div className="mt-1">
            <p className="text-gray-200 bg-[#1E1F29] text-center h-12 pt-3">
              © All Rights Reserved
              <Link to="/" className="ml-3">
                DAULAT RAM COLLEGE
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Upperfooter;
