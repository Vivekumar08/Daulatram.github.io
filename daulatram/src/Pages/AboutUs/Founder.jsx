import React from 'react'
import Sidebar from "../../Components/Sidebar/Sidebar";
import Founder_banner from '../../Components/Banners/Founder_banner';
import founder from "../../Dummy_data/ImgPages/About/founder.png";


const Founder = () => {
  return (
<>
<div className=" flex flex-col">
        <div className="">
          <Founder_banner />
        </div>
        <div className="flex flex-row">
          <div className="w-[350px]">
            <Sidebar />
          </div>
          <div className="w-[1100px]">
            <h2 className=" text-3xl md:text-4xl font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
                    FOUNDER
                    </h2>

            <figure className="flex flex-col p-4 ">
              <img 
                src={founder}
                alt="founder"
                className="rounded-3xl border-black border-2 h-[250px] w-[300px] md:h-[300px] md:w-[380px] ml-2 md:ml-80"
                
              />

              <span className="card-description leading-14 font- medium text-justify text-base md:text-lg m-50 p-9">
              The college was founded by Late Shri Daulat Ram Gupta in 1960 and served as the first Chairman of the college.
              </span>
            </figure>
            
           
          </div>
        </div>
      </div>

</>  

)
}

export default Founder