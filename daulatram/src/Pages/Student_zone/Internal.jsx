import React from 'react'
import Attendencebanner from '../../Components/Banners/Attendencebanner';
import Internalbanner from '../../Components/Banners/Internalbanner';
import Sidebar from "../../Components/Sidebar/Sidebar";
// import "./Attendence.css"
import "./Att.css"



const Internal = () => {
  return (
<>
<div className="">
          <Internalbanner/>
        </div>

        <div className='flex '>
        <div className="w-[350px] flex flex-row">
            <Sidebar />
          </div>
<div className='main flex-col '>
    {/* <div className='w-[200px] small  mt-20 p-3'>Internal Assesments</div> */}
    <table>
        <tr>
          <th>S.no</th>
          <th>About</th>
          <th>PDF</th>
         </tr>
        <tr>
          <td>1</td>
          <td>Internal Assessment For The First Year(May-Jun 2022)</td>
          <td> <a href="../Student_Zone/Internal_Assesments/First_year"> <button className='btn'>Click Here</button></a> </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Internal Assessment For The Second Year</td>
          <td> <a href="../Student_Zone/Internal_Assesments/Second_year"><button className='btn'>Click Here</button></a> </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Internal Assessment For The Third Year</td>
          <td> <a href="../Student_Zone/Internal_Assesments/Third_year"><button className='btn'>Click Here</button></a> </td>
        </tr>
      </table>
</div>

</div>

</>
  )
}

export default Internal