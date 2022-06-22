import React from 'react'
import Princi_banner from '../../Components/Banners/Princi_banner'
import "./Time_table.css"
import Sidebar from "../../Components/Sidebar/Sidebar";

const data = [
  { TT: "Semesters 2021-22", one: "B.Sc(H) Mathematics", two: "B.A(H) History", three: "B.A.(H) Sanskrit", four: "	Commerce",five: " B.A.(H)Psychology" },
  { TT: "Semesters 2021-22", one: "B.A.(H)Economics", two: "B.A.(H)English", three: "Physical Education", four: "B.A.(H) Pol.Sci",five: " 	B.A.(H) Hindi" },
  { TT: "Semesters 2021-22", one: "B.Sc Life Science", two: "B.Sc(H) Botany", three: "B.Sc(H) Chemistry", four: "B.Sc(H) Physics",five: "	B.Sc(H) Bio-Chemistry " },
  { TT: "Semesters 2021-22", one: "B.A(H) Philosophy", two: "B.A.(P)", three: "	NHE", four: "	B.Sc(H)Zoology",five: " Music" },
]
const Time_table = () => {
  return (

       <>
        <div className="">
          <Princi_banner />
        </div>
        <div className="Table_App flex">
        <div className="w-[350px]">
            <Sidebar />
          </div>
      <table>
        <tr>
          <th>TT for Sem-I</th>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
          <th>5</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.TT}</td>
              <td><a href="">{val.one}</a></td>
              <td><a href="">{val.two}</a></td>
              <td><a href="">{val.three}</a></td>
              <td><a href="">{val.four}</a></td>
              <td><a href="">{val.five}</a></td>
              </tr>
          )
        })}
      </table>
    </div>
       </> 
    )
}

export default Time_table