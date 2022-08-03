import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./infor.css";

function Information() {
  const [Studentinfo, setStudentinfo] = useState();
  const [Staffinfo, setStaffinfo] = useState();
  const [Publicinfo, setPublicinfo] = useState();
  
  const fetchdata = async () => {
    const response_staff = await fetch("http://localhost:5000/Staff_notice");
    const response_Student = await fetch(
      "http://localhost:5000/Student_notice"
    );
    const response_public = await fetch("http://localhost:5000/Public_notice");
    setStudentinfo(await response_Student.json());
    setStaffinfo(await response_staff.json());
    setPublicinfo(await response_public.json());
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <div className="bg-white pb-4 ">
        <div className="quick_links flex flex-row items-center justify-center text-center text-white font-bold  ">
          <span className="quick_content uppercase w-full">
            <strong>Information Section</strong>
          </span>
        </div>
        {/* content/body/messages */}
        <div className="flex xl:flex-row flex-col items-center   mb-5 mt-8 lg:justify-between   ml-12 mr-12 ">
          <div className=" bg-[#d3d3d3] w-[20em] rounded-lg h-[500px]  text-lg font-semibold mb-5  ml-5 mr-10 ">
            <span className="bg-[#000080] rounded-t-lg flex flex-row justify-center z-10 text-white pb-4  px-4 ">
              <span className="mt-3">Notice for Students</span>
            </span>
            <div className=" ">
              {Studentinfo &&
                Studentinfo.map((curElem) => {
                  const {
                    _id,
                    title,
                    file_mimetype,
                    file_path,
                    new_,
                    date_exp,
                    date,
                  } = curElem;
                  // const date_split = date.split("/");
                  const cur_date = new Date();
                  const exp_date = new Date(date_exp);
                  const diffTime = Math.abs(exp_date - cur_date);
                  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                  var path2 = file_path.replace(/\\/g, "/");
                  var path = path2.slice(19);
                  return (
                    <>
                      {file_mimetype !== "text/link" ? (
                        <>
                          <a href={path} target="_blank" key={_id}>
                            <div className="flex items-center   ">
                              <span className="information flex flex-col hover:font-semibold hover:text-blue-600 text-justify w-[15em]  ml-4 text-sm mb-4 mt-4">
                                {title}
                                {diffDays > 0 && new_ && (
                                  <sup className="font-extrabold text-transparent  bg-clip-text text-lg bg-gradient-to-r from-red-600 to-fuchsia-600 animate-text">
                                    new
                                  </sup>
                                )}
                                <span className=" mr-5 ml-auto text-sm">
                                  {date}
                                </span>
                              </span>
                            </div>
                          </a>
                        </>
                      ) : (
                        <>
                          <a href={file_path} key={_id} target="_blank">
                            <div className="flex items-center ">
                              <span className="information flex flex-col  hover:font-semibold hover:text-blue-600 text-justify w-[15em]  ml-4 text-sm mb-4 mt-4">
                                {title}
                                {new_ && diffDays > 0 && (
                                  <sup className="font-extrabold ml-1 text-transparent  bg-clip-text text-lg bg-gradient-to-r from-red-600 to-fuchsia-600 animate-text">
                                    new
                                  </sup>
                                )}
                              </span>
                              <span className="ml-auto mr-5 text-sm">
                                {date}
                              </span>
                            </div>
                          </a>
                        </>
                      )}
                    </>
                  );
                })}
                <a href="/Student_Zone/Student_Notice"className="text-sm text-[#000080] absolute mt-2 ml-64 " >...read more</a>
            </div>
          </div>
          <div className=" bg-[#d9d9d9] w-[20em] rounded-lg text-lg mb-5 h-[500px] font-semibold ml-5 mr-10">
            <span className="bg-[#000080] rounded-t-lg flex flex-row  justify-center text-white pb-4  px-4 ">
              <span className="mt-3">Notice for Staff</span>
            </span>
            {Staffinfo &&
              Staffinfo.map((curElem) => {
                const {
                  _id,
                  title,
                  file_mimetype,
                  file_path,
                  new_,
                  date_exp,
                  date,
                } = curElem;
                // const date_split = date.split("/");
                const cur_date = new Date();
                const exp_date = new Date(date_exp);
                const diffTime = Math.abs(exp_date - cur_date);
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                var path2 = file_path.replace(/\\/g, "/");
                var path = path2.slice(19);
                return (
                  <>
                    {file_mimetype !== "text/link" ? (
                      <>
                        <a href={path} target="_blank" key={_id}>
                          <div className="flex items-center   ">
                            <span className="information flex flex-col hover:font-semibold hover:text-blue-600 text-justify w-[15em]  ml-4 text-sm mb-4 mt-4">
                              {title}
                              {diffDays > 0 && new_ && (
                                <sup className="font-extrabold text-transparent  bg-clip-text text-lg bg-gradient-to-r from-red-600 to-fuchsia-600 animate-text">
                                  new
                                </sup>
                              )}
                              <span className=" mr-5 ml-auto text-sm">
                                {date}
                              </span>
                            </span>
                          </div>
                        </a>
                      </>
                    ) : (
                      <>
                        <a href={file_path} key={_id} target="_blank">
                          <div className="flex items-center ">
                            <span className="information flex flex-col  hover:font-semibold hover:text-blue-600 text-justify w-[15em] ml-4   text-sm mb-4 mt-4">
                              {title}
                              {new_ && diffDays > 0 && (
                                <sup className="font-extrabold ml-1 text-transparent  bg-clip-text text-lg bg-gradient-to-r from-red-600 to-fuchsia-600 animate-text">
                                  new
                                </sup>
                              )}
                            </span>
                            <span className="ml-auto mr-5 text-sm">{date}</span>
                          </div>
                        </a>
                      </>
                    )}
                  </>
                );
              })}
             <a href="/StaffZone/Notices"className="text-sm text-[#000080] absolute mt-2 ml-64 " >...read more</a>
          </div>
          <div className=" bg-[#d9d9d9] w-[20em] rounded-lg mb-5 text-lg h-[500px] font-semibold ml-5 mr-10">
            <span className="bg-[#000080] rounded-t-lg flex flex-row justify-center text-white pb-4  px-4 ">
              <span className="mt-3">Notice for Public</span>
            </span>
            {Publicinfo &&
              Publicinfo.map((curElem) => {
                const {
                  _id,
                  title,
                  file_mimetype,
                  file_path,
                  new_,
                  date_exp,
                  date,
                } = curElem;
                // const date_split = date.split("/");
                const cur_date = new Date();
                const exp_date = new Date(date_exp);
                const diffTime = Math.abs(exp_date - cur_date);
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                var path2 = file_path.replace(/\\/g, "/");
                var path = path2.slice(19);
                return (
                  <>
                    {file_mimetype !== "text/link" ? (
                      <>
                        <a href={path} target="_blank" key={_id}>
                          <div className="flex items-center   ">
                            <span className="information flex flex-col hover:font-semibold hover:text-blue-600 text-justify w-[15em]  ml-4 text-sm mb-4 mt-4">
                              {title}
                              {diffDays > 0 && new_ && (
                                <sup className="font-extrabold text-transparent  bg-clip-text text-lg bg-gradient-to-r from-red-600 to-fuchsia-600 animate-text">
                                  new
                                </sup>
                              )}
                              <span className=" mr-5 ml-auto text-sm">
                                {date}
                              </span>
                            </span>
                          </div>
                        </a>
                      </>
                    ) : (
                      <>
                        <a href={file_path} key={_id} target="_blank">
                          <div className="flex items-center ">
                            <span className="information flex flex-col  hover:font-semibold hover:text-blue-600 text-justify w-[15em]  ml-4 text-sm mb-4 mt-4">
                              {title}
                              {new_ && diffDays > 0 && (
                                <sup className="font-extrabold ml-1 text-transparent  bg-clip-text text-lg bg-gradient-to-r from-red-600 to-fuchsia-600 animate-text">
                                  new
                                </sup>
                              )}
                            </span>
                            <span className="ml-auto mr-5 text-sm">{date}</span>
                          </div>
                        </a>
                      </>
                    )}
                  </>
                );
              })}
 <a href="/Public_Notice"className="text-sm text-[#000080] absolute mt-2 ml-64 " >...read more</a>

          </div>
        </div>
      </div>
    </>
  );
}

export default Information;
