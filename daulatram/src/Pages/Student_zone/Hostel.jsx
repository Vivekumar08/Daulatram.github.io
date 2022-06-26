import React from 'react'
import "./Hostel.css"
// import Internalbanner from '../../Components/Banners/Internalbanner'
import Hostelbanner from '../../Components/Banners/Hostelbanner'
import Student_side from '../../Components/Sidebar/Student_side'
const Hostel = () => {
  return (
<>
<div className="">
        <Hostelbanner />
      </div>

      <div className="flex ">
        <div className="w-[350px] flex flex-row">
          <Student_side />
        </div>
<div className='main_txt'>
<blink>* Closed for Academic Session 2022-23</blink>
</div>
</div>
</>

    )
}

export default Hostel