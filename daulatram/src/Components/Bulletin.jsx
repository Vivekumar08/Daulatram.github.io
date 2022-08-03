import React, { useEffect, useState } from "react";

const Bulletin = () => {
  const [StudentInfo, setStaffinfo] = useState();
  const fetchdata = async () => {
    const response = await fetch("/Bulletins_notice");
    setStaffinfo(await response.json());
  };
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <>
      <div className=" flex">
        <div className="name1 z-10  flex flex-row justify-center items-center  px-2">
          Bulletin
        </div>
        <div className="triangle z-10 bg-transparent "></div>
        <div className="bg-blue-200 h-8 absolute overflow-hidden w-full">
          <div className=" bg-blue-200 pt-1 w-full marquee ">
            <span className="">
              {StudentInfo &&
                StudentInfo.map((curElem) => {
                  const {
                    _id,
                    title,
                    file_mimetype,
                    file_path,
                    new_,
                    date_exp,
                  } = curElem;
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
                            <a
                              href={path}
                              target="_blank"
                              className="  ml-8 hover:font-normal hover:text-[#F80CA7]"
                              key={_id}
                              rel="noopener noreferrer"
                            >
                              <span className=" text-md font-semibold  ml-2 mr-2 ">
                                {title}
                                {diffDays > 0 && new_ && (
                                  <sup className="font-extrabold text-transparent  bg-clip-text text-lg bg-gradient-to-r from-red-600 to-fuchsia-600 animate-text">
                                    new
                                  </sup>
                                )}
                              </span>
                            </a>
                          </>
                        ) : (
                          <>
                            <a
                              href={file_path}
                              target="_blank"
                              className="  ml-8 hover:font-normal hover:text-[#F80CA7]"
                              rel="noopener noreferrer"
                              key={_id}
                            >
                              <span className=" text-md font-semibold  ml-2 mr-2 ">
                                {title}
                                {new_ && (
                                  <sup className="font-extrabold ml-1 text-transparent  bg-clip-text text-lg bg-gradient-to-r from-red-600 to-fuchsia-600 animate-text">
                                    new
                                  </sup>
                                )}
                              </span>
                            </a>
                          </>
                        )}
                    </>
                  );
                })}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bulletin;
