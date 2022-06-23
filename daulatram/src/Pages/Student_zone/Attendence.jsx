import React from 'react'
import Princi_banner from '../../Components/Banners/Princi_banner'
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Attendence.css"


const Attendence = () => {
  return (
<>
<div className="">
          <Princi_banner />
        </div>
        <div className='flex '>
        <div className="w-[350px] flex flex-row">
            <Sidebar />
          </div>
<div className='main flex-col '>
    <div className='w-[200px] small  mt-20 p-3'>First Year Attendance</div>
    <table>
        <tr>
          <th>Arts</th>
          <th>Science</th>
          <th>Commerce</th>
          <th>AECC/ESB/SEC</th>
          <th>EVS</th>
          <th>GE</th>
        </tr>
        <tr>
          <td><a href="">BA_P</a></td>
          <td><a href="">B.Sc(H)</a></td>
          <td><a href="">Commerce</a></td>
          <td><a href="">AECC</a></td>
          <td><a href="">EVS</a></td>
          <td><a href="">GE</a></td>
        </tr>
        <tr>
          <td><a href="">B.A.(H)</a></td>
          <td><a href="">Chemistry</a></td>
          <td> <a href=""></a></td>
          <td><a href=""></a></td>
          <td><a href="">SEC</a></td>
          <td></td>
        </tr>
        <tr>
          <td><a href="">Economics</a></td>
          <td><a href="">B.Sc Life</a></td>
          <td> <a href=""></a></td>
          <td><a href=""></a></td>
          <td><a href="">ESB</a></td>
          <td></td>
        </tr>
        <tr>
          <td><a href="">B.A.(H)</a></td>
          <td><a href="">Sciences</a></td>
          <td> <a href=""></a></td>
          <td><a href=""></a></td>
          <td><a href=""></a></td>
          <td></td>
        </tr>
        <tr>
          <td><a href="">English</a></td>
          <td><a href="">B.Sc(H)</a></td>
          <td> <a href=""></a></td>
          <td><a href=""></a></td>
          <td><a href=""></a></td>
          <td></td>
        </tr>
        <tr>
          <td><a href="">B.A.(H)</a></td>
          <td><a href="">Zoology</a></td>
          <td> <a href=""></a></td>
          <td><a href=""></a></td>
          <td><a href=""></a></td>
          <td></td>
        </tr>
        <tr>
          <td><a href="">Hindi</a></td>
          <td><a href="">B.Sc(H) Physics</a></td>
          <td> <a href=""></a></td>
          <td><a href=""></a></td>
          <td><a href=""></a></td>
          <td></td>
        </tr>
        <tr>
          <td><a href=""></a></td>
          <td><a href="">B.Sc(H)</a></td>
          <td> <a href=""></a></td>
          <td><a href=""></a></td>
          <td><a href=""></a></td>
          <td></td>
        </tr>
        <tr>
          <td><a href=""></a></td>
          <td><a href="">B.Sc(H)</a></td>
          <td> <a href=""></a></td>
          <td><a href=""></a></td>
          <td><a href=""></a></td>
          <td></td>
        </tr>
        <tr>
          <td><a href=""></a></td>
          <td><a href="">Mathematics</a></td>
          <td> <a href=""></a></td>
          <td><a href=""></a></td>
          <td><a href=""></a></td>
          <td></td>
        </tr>
      </table>
      <div className='w-[200px] small  mt-20 p-3'>Second Year Attendance</div>
      <table>
        <tr>
          <th>Arts</th>
          <th>Science</th>
          <th>Commerce</th>
          {/* <th>AECC/ESB/SEC</th> */}
          <th>EVS</th>
          <th>GE</th>
        </tr>
        <tr>
          <td><a href="">BA_P</a></td>
          <td><a href="">B.Sc(H) Chemistry</a></td>
          <td><a href="">Commerce</a></td>
          {/* <td><a href="">AECC</a></td> */}
          <td><a href=""></a></td>
          <td><a href="">GE</a></td>
        </tr>
        <tr>
          <td><a href="">B.A.(H) Economics</a></td>
          <td><a href="">B.Sc Life Sciences</a></td>
          <td> <a href=""></a></td>
          {/* <td><a href=""></a></td> */}
          <td><a href=""></a></td>
          <td></td>
        </tr>
        <tr>
          <td><a href="">B.A.(H) English</a></td>
          <td><a href="">B.Sc(H) Physics</a></td>
          <td> <a href=""></a></td>
          {/* <td><a href=""></a></td> */}
          <td><a href=""></a></td>
          <td></td>
        </tr>
        <tr>
          <td><a href="">B.A.(H) Hindi</a></td>
          <td><a href="">B.Sc(H) Mathematics</a></td>
          <td> <a href=""></a></td>
          {/* <td><a href=""></a></td> */}
          <td><a href=""></a></td>
          <td></td>
        </tr>
      
       
      </table>

      <div className='w-[200px] small  mt-20 p-3'>Third Year Attendance</div>
      <table>
        <tr>
          <th>Arts</th>
          <th>Science</th>
          <th>Commerce</th>
          {/* <th>AECC/ESB/SEC</th> */}
          <th>EVS</th>
          <th>GE</th>
        </tr>
        <tr>
          <td><a href="">BA_P</a></td>
          <td><a href="">B.Sc(H) Chemistry</a></td>
          <td><a href="">Commerce</a></td>
          {/* <td><a href="">AECC</a></td> */}
          <td><a href=""></a></td>
          <td><a href="">GE</a></td>
        </tr>
        <tr>
          <td><a href="">B.A.(H) Economics</a></td>
          <td><a href="">B.Sc(H) Mathematics</a></td>
          <td> <a href=""></a></td>
          {/* <td><a href=""></a></td> */}
          <td><a href=""></a></td>
          <td><a href="">SECC</a></td>
        </tr>
        <tr>
          <td><a href="">B.A.(H) English</a></td>
          <td><a href="">B.Sc(H) Zoology</a></td>
          <td> <a href=""></a></td>
          {/* <td><a href=""></a></td> */}
          <td><a href=""></a></td>
          <td><a href=""></a></td>
        </tr>
        <tr>
          <td><a href="">B.A.(H) Hindi</a></td>
          <td><a href="">B.Sc Life Sciences</a></td>
          <td> <a href=""></a></td>
          {/* <td><a href=""></a></td> */}
          <td><a href=""></a></td>
          <td><a href=""></a></td>
        </tr>
       
        <tr>
          <td><a href="">B.A.(H)Political Science</a></td>
          <td><a href=""></a></td>
          <td> <a href=""></a></td>
          {/* <td><a href=""></a></td> */}
          <td><a href=""></a></td>
          <td><a href=""></a></td>
        </tr>
      
       
      </table>
</div>


</div>



</>

)
}

export default Attendence