import React from "react";
// import "./style.css"

function Upperfooter() {
  return (
    <>
      <footer className="footer  pt-0 bg-[#24262c] text-white">
        <div className="container flex flex-col">
          <div className=" h-96 ml-12 mt-10 ">
            <div className="flex justify-evenly">
              <ul>
                <h4 className="mb-5 relative">
                  INFORMATION
                </h4>
                <li className="pb-2">
                  <a href="#" className="hover:text-red-400 hover:text-lg">
                    - Gallery
                  </a>
                </li>
                <li className="pb-2">
                  <a href="#" className="hover:text-red-400 hover:text-lg">
                    - Contact Us
                  </a>
                </li>
                <li className="pb-2">
                  <a href="#" className="hover:text-red-400 hover:text-lg">
                    -RTI
                  </a>
                </li>
                <li className="pb-2">
                  <a href="#" className="hover:text-red-400 hover:text-lg">
                    -Feedback
                  </a>
                </li>

                <li className="pb-2">
                  <a href="#" className="hover:text-red-400 hover:text-lg">
                    -Tender
                  </a>
                </li>
                <li className="pb-2">
                  <a href="#" className="hover:text-red-400 hover:text-lg">
                    -Grievances
                  </a>
                </li>
                <li className="pb-2">
                  <a href="#" className="hover:text-red-400 hover:text-lg">
                    -Job Opportunities
                  </a>
                </li>
                <li className="pb-2">
                  <a href="#" className="hover:text-red-400 hover:text-lg">
                    -Anti-Sexual Harrasement
                  </a>
                </li>
                <li className="pb-2">
                  <a href="#" className="hover:text-red-400 hover:text-lg">
                    -ST-SC-OBC Complaints
                  </a>
                </li>
                <li className="pb-2">
                  <a href="#" className="hover:text-red-400 hover:text-lg">
                    -Sitemap
                  </a>
                </li>
              </ul>
              <ul className="mb-4 ml-4 ">
                <h4 className="mb-4">ALUMNAE CONNECT</h4>
                <li className="pb-2">
                  <a href="https://drcaa.org/">-https://drcaa.org/ </a>
                </li>
                <br />
                <br />
                <h4 className="mb-4">ADDRESS</h4>
                <p>4, Patel Marg, Maurice Nagar, Delhi PIN-110007</p>
                <br />
                <div className="email-id"><p> Email : <span>daulatramcollegedu@gmail.com</span></p></div>
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
              © All Rights Reserved DAULAT RAM COLLEGE
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Upperfooter;
