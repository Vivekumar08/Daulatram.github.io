import React from 'react'
import "./Events.css"
const Events = () => {
  return (
    <>
    <div className='main_div1'>
     <div className='small_box'>
    <img  className= "event_img z=-10" src="images/IQAC.png" alt="IQAC Events" />
    <a href=""><button className='read_btn'>Read More </button></a>

    </div>
 
    
      <div className='small_box'>
      <img  className= "event_img z=-10" src="images/Vidya.png" alt="IQAC Events" />
    <a href=""><button className='read_btn'>Read More </button></a>
    </div>
     <div className='small_box'>
     <img  className= "event_img z=-10" src="images/add_on.png" alt="IQAC Events" />
    <a href=""><button className='read_btn'>Read More </button></a>
    </div>
     <div className='small_box'>
     <img  className= "event_img z=-10" src="images/student.png" alt="IQAC Events" />
    <a href=""><button className='read_btn'>Read More </button></a>
    </div> 
    </div>
    </>
  )
}

export default Events