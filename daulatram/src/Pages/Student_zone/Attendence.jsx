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
          <h2 className="text-4xl font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
            Attendance
          </h2>
          <div className="flex-col ">
            <div className="small w-[10px] bg-[#000080] text-white p-3">
              <span className="flex flex-row justify-center  text-lg">First Year Attendance</span>
            </div>
          
            <table className="mt-0 mb-14">
              <tr>
                <th>Arts</th>
                <th>Science</th>
                <th>Commerce</th>
                <th>AECC/ESB/SEC</th>
                <th>EVS</th>
                <th>GE</th>
              </tr>
              <tr>
                <td>
                  <a href="">BA_P</a>
                </td>
                <td>
                  <a href="">B.Sc(H)</a>
                </td>
                <td>
                  <a href="">Commerce</a>
                </td>
                <td>
                  <a href="">AECC</a>
                </td>
                <td>
                  <a href="">EVS</a>
                </td>
                <td>
                  <a href="">GE</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="">B.A.(H)</a>
                </td>
                <td>
                  <a href="">Chemistry</a>
                </td>
                <td>
                  {" "}
                  <a href=""></a>
                </td>
                <td>
                  <a href=""></a>
                </td>
                <td>
                  <a href="">SEC</a>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <a href="">Economics</a>
                </td>
                <td>
                  <a href="">B.Sc Life</a>
                </td>
                <td>
                  {" "}
                  <a href=""></a>
                </td>
                <td>
                  <a href=""></a>
                </td>
                <td>
                  <a href="">ESB</a>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <a href="">B.A.(H)</a>
                </td>
                <td>
                  <a href="">Sciences</a>
                </td>
                <td>
                  {" "}
                  <a href=""></a>
                </td>
                <td>
                  <a href=""></a>
                </td>
                <td>
                  <a href=""></a>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <a href="">English</a>
                </td>
                <td>
                  <a href="">B.Sc(H)</a>
                </td>
                <td>
                  {" "}
                  <a href=""></a>
                </td>
                <td>
                  <a href=""></a>
                </td>
                <td>
                  <a href=""></a>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <a href="">B.A.(H)</a>
                </td>
                <td>
                  <a href="">Zoology</a>
                </td>
                <td>
                  {" "}
                  <a href=""></a>
                </td>
                <td>
                  <a href=""></a>
                </td>
                <td>
                  <a href=""></a>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <a href="">Hindi</a>
                </td>
                <td>
                  <a href="">B.Sc(H) Physics</a>
                </td>
                <td>
                  {" "}
                  <a href=""></a>
                </td>
                <td>
                  <a href=""></a>
                </td>
                <td>
                  <a href=""></a>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <a href=""></a>
                </td>
                <td>
                  <a href="">B.Sc(H)</a>
                </td>
                <td>
                  {" "}
                  <a href=""></a>
                </td>
                <td>
                  <a href=""></a>
                </td>
                <td>
                  <a href=""></a>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <a href=""></a>
                </td>
                <td>
                  <a href="">B.Sc(H)</a>
                </td>
                <td>
                  {" "}
                  <a href=""></a>
                </td>
                <td>
                  <a href=""></a>
                </td>
                <td>
                  <a href=""></a>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <a href=""></a>
                </td>
                <td>
                  <a href="">Mathematics</a>
                </td>
                <td>
                  {" "}
                  <a href=""></a>
                </td>
                <td>
                  <a href=""></a>
                </td>
                <td>
                  <a href=""></a>
                </td>
                <td></td>
              </tr>
            </table>
            <div className="small w-[10px] bg-[#000080] text-white p-3">
              <span className="flex flex-row justify-center  text-lg">Second Year Attendance</span>
            </div>
          
            <table className="mt-0 mb-14">
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
                  <a href="">BA_P</a>
                </td>
                <td>
                  <a href="">B.Sc(H) Chemistry</a>
                </td>
                <td>
                  <a href="">Commerce</a>
                </td>
                {/* <td><a href="">AECC</a></td> */}
                <td>
                  <a href=""></a>
                </td>
                <td>
                  <a href="">GE</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="">B.A.(H) Economics</a>
                </td>
                <td>
                  <a href="">B.Sc Life Sciences</a>
                </td>
                <td>
                  {" "}
                  <a href=""></a>
                </td>
                {/* <td><a href=""></a></td> */}
                <td>
                  <a href=""></a>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <a href="">B.A.(H) English</a>
                </td>
                <td>
                  <a href="">B.Sc(H) Physics</a>
                </td>
                <td>
                  {" "}
                  <a href=""></a>
                </td>
                {/* <td><a href=""></a></td> */}
                <td>
                  <a href=""></a>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <a href="">B.A.(H) Hindi</a>
                </td>
                <td>
                  <a href="">B.Sc(H) Mathematics</a>
                </td>
                <td>
                  {" "}
                  <a href=""></a>
                </td>
                {/* <td><a href=""></a></td> */}
                <td>
                  <a href=""></a>
                </td>
                <td></td>
              </tr>
            </table>

            <div className="small w-[10px] bg-[#000080] text-white p-3">
              <span className="flex flex-row justify-center  text-lg">Third Year Attendance</span>
            </div>
          
            <table className="mt-0">
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
                  <a href="">BA_P</a>
                </td>
                <td>
                  <a href="">B.Sc(H) Chemistry</a>
                </td>
                <td>
                  <a href="">Commerce</a>
                </td>
                {/* <td><a href="">AECC</a></td> */}
                <td>
                  <a href=""></a>
                </td>
                <td>
                  <a href="">GE</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="">B.A.(H) Economics</a>
                </td>
                <td>
                  <a href="">B.Sc(H) Mathematics</a>
                </td>
                <td>
                  {" "}
                  <a href=""></a>
                </td>
                {/* <td><a href=""></a></td> */}
                <td>
                  <a href=""></a>
                </td>
                <td>
                  <a href="">SECC</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="">B.A.(H) English</a>
                </td>
                <td>
                  <a href="">B.Sc(H) Zoology</a>
                </td>
                <td>
                  {" "}
                  <a href=""></a>
                </td>
                {/* <td><a href=""></a></td> */}
                <td>
                  <a href=""></a>
                </td>
                <td>
                  <a href=""></a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="">B.A.(H) Hindi</a>
                </td>
                <td>
                  <a href="">B.Sc Life Sciences</a>
                </td>
                <td>
                  {" "}
                  <a href=""></a>
                </td>
                {/* <td><a href=""></a></td> */}
                <td>
                  <a href=""></a>
                </td>
                <td>
                  <a href=""></a>
                </td>
              </tr>

              <tr>
                <td>
                  <a href="">B.A.(H)Political Science</a>
                </td>
                <td>
                  <a href=""></a>
                </td>
                <td>
                  {" "}
                  <a href=""></a>
                </td>
                {/* <td><a href=""></a></td> */}
                <td>
                  <a href=""></a>
                </td>
                <td>
                  <a href=""></a>
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
