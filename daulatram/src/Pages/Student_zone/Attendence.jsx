import React from "react";
import Attendencebanner from "../../Components/Banners/Attendencebanner";
import Student_side from "../../Components/Sidebar/Student_side";
import "./Attendence.css";

const Attendence = () => {
  return (
    <>
      <div className="">
        <Attendencebanner />
      </div>
      <div className="flex ">
        <div className=" flex flex-row">
          <Student_side />
        </div>
        <div className="w-[1100px]">
          <h2 className="text-2xl md:text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
            Attendance
          </h2>
          <div className="flex-col ">
            <div className="small ml-auto md:ml-28 lg:ml-auto mr-auto bg-[#000080] text-white p-3">
              <span className="flex flex-row justify-center  text-lg">First Year Attendance</span>
            </div>
          
            <table className="text-xs md:text-base leading-5 w-80 h-40 ml-auto mr-auto md:table-fixed  md:ml-24 lg:ml-auto md:w-[580px] lg:w-[800px] md:h-[180px] mt-1">
              <tr className="">
                <th>Arts</th>
                <th>Science</th>
                <th>Commerce</th>
                <th>AECC/ESB/SEC</th>
                <th>EVS</th>
                <th>GE</th>
              </tr>
              <tr>
                <td className="">
                  <a href="" className="hover:text-red-600  " >B.A. (Prog)</a>
                </td>
                <td>
                  <a href="" className="hover:text-red-600  ">B.Sc (H) </a>
                </td>
                <td>
                  <a href="" className="hover:text-red-600  ">Commerce</a>
                </td>
                <td>
                  <a href="" className="hover:text-red-600  ">AECC</a>
                </td>
                <td>
                  <a href="" className="hover:text-red-600  ">EVS</a>
                </td>
                <td>
                  <a href="" className="hover:text-red-600  ">GE</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="" className="hover:text-red-600  ">B.A. (H) </a>
                </td>
                <td>
                  <a href="" className="hover:text-red-600  ">Chemistry</a>
                </td>
                <td>
                  {" "}
                  <a href="" className="hover:text-red-600  "></a>
                </td>
                <td>
                  <a href="" className="hover:text-red-600  "></a>
                </td>
                <td>
                  <a href="" className="hover:text-red-600  ">SEC</a>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <a href="" className="hover:text-red-600  ">Economics</a>
                </td>
                <td>
                  <a href="" className="hover:text-red-600  ">B.Sc Life</a>
                </td>
                <td>
                  {" "}
                  <a href="" className="hover:text-red-600  "></a>
                </td>
                <td>
                  <a href="" className="hover:text-red-600  "></a>
                </td>
                <td>
                  <a href="" className="hover:text-red-600  ">ESB</a>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <a href="" className="hover:text-red-600  ">B.A. (H) </a>
                </td>
                <td>
                  <a href="" className="hover:text-red-600  ">Sciences</a>
                </td>
                <td>
                  {" "}
                  <a href="" className="hover:text-red-600  "></a>
                </td>
                <td>
                  <a href="" className="hover:text-red-600  "></a>
                </td>
                <td>
                  <a href="" className="hover:text-red-600  "></a>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <a href="" className="hover:text-red-600  ">English</a>
                </td>
                <td>
                  <a href="" className="hover:text-red-600  ">B.Sc (H) </a>
                </td>
                <td>
                  {" "}
                  <a href="" className="hover:text-red-600  "></a>
                </td>
                <td>
                  <a href="" className="hover:text-red-600  "></a>
                </td>
                <td>
                  <a href="" className="hover:text-red-600  "></a>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <a href="" className="hover:text-red-600  ">B.A. (H) </a>
                </td>
                <td>
                  <a href="" className="hover:text-red-600  ">Zoology</a>
                </td>
                <td>
                  {" "}
                  <a href="" className="hover:text-red-600  "></a>
                </td>
                <td>
                  <a href="" className="hover:text-red-600  "></a>
                </td>
                <td>
                  <a href="" className="hover:text-red-600  "></a>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <a href="" className="hover:text-red-600  ">Hindi</a>
                </td>
                <td>
                  <a href="" className="hover:text-red-600  ">B.Sc (H)  Physics</a>
                </td>
                <td>
                  {" "}
                  <a href="" className="hover:text-red-600  "></a>
                </td>
                <td>
                  <a href="" className="hover:text-red-600  "></a>
                </td>
                <td>
                  <a href="" className="hover:text-red-600  "></a>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <a href="" className="hover:text-red-600  "></a>
                </td>
                <td>
                  <a href="" className="hover:text-red-600  ">B.Sc (H) </a>
                </td>
                <td>
                  {" "}
                  <a href="" className="hover:text-red-600  "></a>
                </td>
                <td>
                  <a href="" className="hover:text-red-600  "></a>
                </td>
                <td>
                  <a href="" className="hover:text-red-600  "></a>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <a href="" className="hover:text-red-600  "></a>
                </td>
                <td>
                  <a href="" className="hover:text-red-600  ">B.Sc (H) </a>
                </td>
                <td>
                  {" "}
                  <a href="" className="hover:text-red-600  "></a>
                </td>
                <td>
                  <a href="" className="hover:text-red-600  "></a>
                </td>
                <td>
                  <a href="" className="hover:text-red-600  "></a>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <a href="" className="hover:text-red-600  "></a>
                </td>
                <td>
                  <a href="" className="hover:text-red-600  ">Mathematics</a>
                </td>
                <td>
                  {" "}
                  <a href="" className="hover:text-red-600  "></a>
                </td>
                <td>
                  <a href="" className="hover:text-red-600  "></a>
                </td>
                <td>
                  <a href="" className="hover:text-red-600  "></a>
                </td>
                <td></td>
              </tr>
            </table>
            <div className="small  ml-auto mr-auto bg-[#000080] text-white p-3">
              <span className="flex flex-row justify-center  text-lg">Second Year Attendance</span>
            </div>
          
            <table className="text-xs md:text-base leading-5 w-80 h-40 ml-auto mr-auto md:table-fixed md:w-[500px] lg:w-[800px] md:h-[180px] mt-1">
              <tr>
                <th>Arts</th>
                <th>Science</th>
                <th>Commerce</th>
                {/* <th>AECC/ESB/SEC</th> */}
                <th>EVS</th>
                <th>GE</th>
              </tr>
              <tr>
                <td>
                  <a href="" className="hover:text-red-600  ">B.A. (Prog)</a>
                </td>
                <td>
                  <a href="" className="hover:text-red-600  ">B.Sc (H)  Chemistry</a>
                </td>
                <td>
                  <a href="" className="hover:text-red-600  ">Commerce</a>
                </td>
                {/* <td><a href="" className="hover:text-red-600  ">AECC</a></td> */}
                <td>
                  <a href="" className="hover:text-red-600  "></a>
                </td>
                <td>
                  <a href="" className="hover:text-red-600  ">GE</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="" className="hover:text-red-600  ">B.A. (H)  Economics</a>
                </td>
                <td>
                  <a href="" className="hover:text-red-600  ">B.Sc Life Sciences</a>
                </td>
                <td>
                  {" "}
                  <a href="" className="hover:text-red-600  "></a>
                </td>
                {/* <td><a href="" className="hover:text-red-600  "></a></td> */}
                <td>
                  <a href="" className="hover:text-red-600  "></a>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <a href="" className="hover:text-red-600  ">B.A. (H)  English</a>
                </td>
                <td>
                  <a href="" className="hover:text-red-600  ">B.Sc (H)  Physics</a>
                </td>
                <td>
                  {" "}
                  <a href="" className="hover:text-red-600  "></a>
                </td>
                {/* <td><a href="" className="hover:text-red-600  "></a></td> */}
                <td>
                  <a href="" className="hover:text-red-600  "></a>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <a href="" className="hover:text-red-600  ">B.A. (H)  Hindi</a>
                </td>
                <td>
                  <a href="" className="hover:text-red-600  ">B.Sc (H)  Mathematics</a>
                </td>
                <td>
                  {" "}
                  <a href="" className="hover:text-red-600  "></a>
                </td>
                {/* <td><a href="" className="hover:text-red-600  "></a></td> */}
                <td>
                  <a href="" className="hover:text-red-600  "></a>
                </td>
                <td></td>
              </tr>
            </table>

            <div className="small ml-auto mr-auto bg-[#000080] text-white p-3">
              <span className="flex flex-row justify-center  text-lg">Third Year Attendance</span>
            </div>
          
            <table className="text-xs md:text-base leading-5 w-80 h-40 ml-auto mr-auto md:table-fixed  md:w-[500px] lg:w-[800px] md:h-[180px] mt-1">
              <tr>
                <th>Arts</th>
                <th>Science</th>
                <th>Commerce</th>
                {/* <th>AECC/ESB/SEC</th> */}
                <th>EVS</th>
                <th>GE</th>
              </tr>
              <tr>
                <td>
                  <a href="" className="hover:text-red-600  ">B.A. (Prog)</a>
                </td>
                <td>
                  <a href="" className="hover:text-red-600  ">B.Sc (H)  Chemistry</a>
                </td>
                <td>
                  <a href="" className="hover:text-red-600  ">Commerce</a>
                </td>
                {/* <td><a href="" className="hover:text-red-600  ">AECC</a></td> */}
                <td>
                  <a href="" className="hover:text-red-600  "></a>
                </td>
                <td>
                  <a href="" className="hover:text-red-600  ">GE</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="" className="hover:text-red-600  ">B.A. (H)  Economics</a>
                </td>
                <td>
                  <a href="" className="hover:text-red-600  ">B.Sc (H)  Mathematics</a>
                </td>
                <td>
                  {" "}
                  <a href="" className="hover:text-red-600  "></a>
                </td>
                {/* <td><a href="" className="hover:text-red-600  "></a></td> */}
                <td>
                  <a href="" className="hover:text-red-600  "></a>
                </td>
                <td>
                  <a href="" className="hover:text-red-600  ">SEC</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="" className="hover:text-red-600  ">B.A. (H)  English</a>
                </td>
                <td>
                  <a href="" className="hover:text-red-600  ">B.Sc (H)  Zoology</a>
                </td>
                <td>
                  {" "}
                  <a href="" className="hover:text-red-600  "></a>
                </td>
                {/* <td><a href="" className="hover:text-red-600  "></a></td> */}
                <td>
                  <a href="" className="hover:text-red-600  "></a>
                </td>
                <td>
                  <a href="" className="hover:text-red-600  "></a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="" className="hover:text-red-600  ">B.A. (H)  Hindi</a>
                </td>
                <td>
                  <a href="" className="hover:text-red-600  ">B.Sc Life Sciences</a>
                </td>
                <td>
                  {" "}
                  <a href="" className="hover:text-red-600  "></a>
                </td>
                {/* <td><a href="" className="hover:text-red-600  "></a></td> */}
                <td>
                  <a href="" className="hover:text-red-600  "></a>
                </td>
                <td>
                  <a href="" className="hover:text-red-600  "></a>
                </td>
              </tr>

              <tr>
                <td>
                  <a href="" className="hover:text-red-600  ">B.A. (H) Political Science</a>
                </td>
                <td>
                  <a href="" className="hover:text-red-600  "></a>
                </td>
                <td>
                  {" "}
                  <a href="" className="hover:text-red-600  "></a>
                </td>
                {/* <td><a href="" className="hover:text-red-600  "></a></td> */}
                <td>
                  <a href="" className="hover:text-red-600  "></a>
                </td>
                <td>
                  <a href="" className="hover:text-red-600  "></a>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Attendence;
