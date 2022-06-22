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
            <h2 className="text-4xl font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
                    Founder
                    </h2>

            <figure className="flex flex-col p-4 ">
              <img 
                src={founder}
                alt="founder"
                className="rounded-3xl border-black border-2 h-[280px] w-[380px] ml-80"
                 height={450}
                width={380}
              />

              <span className=" card-description text-lg text-justify font-medium m-50 p-9">
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