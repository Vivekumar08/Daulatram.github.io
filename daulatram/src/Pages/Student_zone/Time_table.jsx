import React, { useState } from "react";
import "./Time_table.css";
import Timebanner from "../../Components/Banners/Timebanner";
import Student_side from "../../Components/Sidebar/Student_side";

class DownloadLink extends React.Component {
  render() {
    return (
      <a href={this.props.src} download>
        {this.props.children}
      </a>
    );
  }
}
const data = [
  {
    TT: "Semesters 2021-22",
    one: "B.Sc (H) Mathematics",
    onesrc: "/Student_zone/Time_tables/Maths.xlsx",
    two: "B.A. (H) History",
    twosrc: "/Student_zone/Time_tables/History.docx",
    three: "B.A. (H) Sanskrit",
    threesrc: " ",
    four: "	Commerce",
    foursrc: "/Student_zone/Time_tables/Commerce.xlsx",
    five: " B.A. (H) Psychology",
    fivesrc: "/Student_zone/Time_tables/Psychology.xlsx",
  },
  {
    TT: "Semesters 2021-22",
    one: "B.A. (H) Economics",
    onesrc: "",
    two: "B.A. (H) English",
    twosrc: " /Student_zone/Time_tables/English.docx",
    three: "Physical Education",
    threesrc: "",
    four: "B.A. (H) Pol. Sci",
    foursrc: "",
    five: " B.A. (H) Hindi",
    fivesrc: " /Student_zone/Time_tables/HINDI.xlsx",
  },
  {
    TT: "Semesters 2021-22",
    one: "B.Sc Life Sciences",
    onesrc: "/Student_zone/Time_tables/Life-science.xlsx",
    two: "B.Sc (H) Botany",
    twosrc: "/Student_zone/Time_tables/Botany.xlsx",
    three: "B.Sc (H) Chemistry",
    threesrc: "/Student_zone/Time_tables/Chemistry.xlsx",
    four: "B.Sc (H) Physics",
    five: "	B.Sc (H) Bio-Chemistry ",
    fivesrc: "/Student_zone/Time_tables/Biochemistry.xlsx",
  },
  {
    TT: "Semesters 2021-22",
    one: "B.A. (H) Philosophy",
    onesrc: "/Student_zone/Time_tables/Philosophy.docx",
    two: "B.A. (Prog)",
    twosrc: "/Student_zone/Time_tables/BAProgram.xlsx",
    three: "	NHE",
    threesrc: "/Student_zone/Time_tables/NHE.docx",
    four: "	B.Sc (H) Zoology",
    foursrc: "/Student_zone/Time_tables/Zoology.xlsx",
    five: " Music",
  },
];
const Time_table = () => {
  return (
    <>
      <div className="">
        <Timebanner />
      </div>
      <div className="Table_App flex">
        <div className="w-[350px]">
          <Student_side />
        </div>
        <div className="w-[1100px]">
          <h2 className=" md:ml-20 lg:ml-0 lg:mr-20 text-2xl md:text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center  ">
            Time Table 
          </h2>
          <table className=" leading-5 w-48 h-40 ml-auto mr-auto md:ml-24 md:table-fixed  md:w-[620px] lg:w-[800px] md:h-[180px] mt-5">
            <tr>
              <th>TT for Sem-I</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
            </tr>
            {data.map((val, key) => {
              //  const { TT, one, onesrc, two,twosrc,three,threesrc,four,foursrc,five,fivesrc } = curElem;

              return (
                <tr key={key}>
                  <td>{val.TT}</td>
                  <td>
                    {" "}
                    <span className="hover:text-red-600  ">
                      <DownloadLink src={val.onesrc}>{val.one}</DownloadLink>
                    </span>
                  </td>
                  <td>
                    <span className="hover:text-red-600  ">
                      {" "}
                      <DownloadLink src={val.twosrc}>{val.two}</DownloadLink>
                    </span>
                  </td>
                  <td>
                    <span className="hover:text-red-600  ">
                      {" "}
                      <DownloadLink src={val.threesrc}>
                        {val.three}
                      </DownloadLink>
                    </span>
                  </td>
                  <td>
                    <span className="hover:text-red-600  ">
                      {" "}
                      <DownloadLink src={val.foursrc}>{val.four}</DownloadLink>
                    </span>
                  </td>
                  <td>
                    <span className="hover:text-red-600  ">
                      {" "}
                      <DownloadLink src={val.fivesrc}>{val.five}</DownloadLink>
                    </span>
                  </td>
                </tr>
              );
            })}
          </table>
          <table className=" leading-5 w-48 h-40 ml-auto mr-auto md:ml-24 md:table-fixed  md:w-[620px] lg:w-[800px] md:h-[180px] mt-5">
            <tr>
              <th>TT for Sem-III</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
            </tr>
            {data.map((val, key) => {
              //  const { TT, one, onesrc, two,twosrc,three,threesrc,four,foursrc,five,fivesrc } = curElem;

              return (
                <tr key={key}>
                  <td>{val.TT}</td>
                  <td>
                    {" "}
                    <span className="hover:text-red-600  ">
                      <DownloadLink src={val.onesrc}>{val.one}</DownloadLink>
                    </span>
                  </td>
                  <td>
                    <span className="hover:text-red-600  ">
                      {" "}
                      <DownloadLink src={val.twosrc}>{val.two}</DownloadLink>
                    </span>
                  </td>
                  <td>
                    <span className="hover:text-red-600  ">
                      {" "}
                      <DownloadLink src={val.threesrc}>
                        {val.three}
                      </DownloadLink>
                    </span>
                  </td>
                  <td>
                    <span className="hover:text-red-600  ">
                      {" "}
                      <DownloadLink src={val.foursrc}>{val.four}</DownloadLink>
                    </span>
                  </td>
                  <td>
                    <span className="hover:text-red-600  ">
                      {" "}
                      <DownloadLink src={val.fivesrc}>{val.five}</DownloadLink>
                    </span>
                  </td>
                </tr>
              );
            })}
          </table>
          <table className=" leading-5 w-48 h-40 ml-auto mr-auto md:ml-24 md:table-fixed  md:w-[620px] lg:w-[800px] md:h-[180px] mt-5">
            <tr>
              <th>TT for Sem-V</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
            </tr>
            {data.map((val, key) => {
              //  const { TT, one, onesrc, two,twosrc,three,threesrc,four,foursrc,five,fivesrc } = curElem;

              return (
                <tr key={key}>
                  <td>{val.TT}</td>
                  <td>
                    {" "}
                    <span className="hover:text-red-600  ">
                      <DownloadLink src={val.onesrc}>{val.one}</DownloadLink>
                    </span>
                  </td>
                  <td>
                    <span className="hover:text-red-600  ">
                      {" "}
                      <DownloadLink src={val.twosrc}>{val.two}</DownloadLink>
                    </span>
                  </td>
                  <td>
                    <span className="hover:text-red-600  ">
                      {" "}
                      <DownloadLink src={val.threesrc}>
                        {val.three}
                      </DownloadLink>
                    </span>
                  </td>
                  <td>
                    <span className="hover:text-red-600  ">
                      {" "}
                      <DownloadLink src={val.foursrc}>{val.four}</DownloadLink>
                    </span>
                  </td>
                  <td>
                    <span className="hover:text-red-600  ">
                      {" "}
                      <DownloadLink src={val.fivesrc}>{val.five}</DownloadLink>
                    </span>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
};

export default Time_table;
