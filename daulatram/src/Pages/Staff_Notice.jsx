import React,{useState} from 'react'
import Sidebar from "../Components/Sidebar/Sidebar"
import Staff_Noticebanner from '../Components/Banners/Staff_Noticebanner';
// import { StaffInfo } from './Info';
import { StaffInfo } from '../Components/Info';
import "./Notice.css"
const Student_Notice = () => {
  const [Staffinfo, setStaffinfo] = useState(StaffInfo);

  return (
    <>
    <div className="">
        <Staff_Noticebanner/>
      </div>

      <div className=" ">
        <div className="w-[350px] flex ">
          <Sidebar />
        </div>
        {Staffinfo.map((curElem) => {
          const { id, info, link,day,mon } = curElem;
            return(
              <div className='main_con '>
              <div class=" date p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25 ">
                   <span class="text-base tracking-wide  font-bold border-b border-white font-sans">{day}</span>
                    <span class="text-xs tracking-wide font-bold uppercase block font-sans">{mon}</span>
                </div>
                <span className='txt'>{info}</span>
                </div>
                );
        })}
       
        </div>
    </>
  )
}

export default Student_Notice