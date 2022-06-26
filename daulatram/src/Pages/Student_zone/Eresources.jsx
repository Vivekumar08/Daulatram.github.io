import React from 'react'
import Student_side from '../../Components/Sidebar/Student_side'
import "./Eresources.css"
import Eresourcesbanner from '../../Components/Banners/Eresourcesbanner'

const Eresources = () => {
  return (
<>
<div className="">
        {/* <Studentfacbanner/> */}
        <Eresourcesbanner/>
      </div>

      <div className="flex ">
        <div className="w-[350px] flex flex-row">
          <Student_side />
        </div>
        <h2 className='heading'>E-Resources</h2>

<div className=' content flex p-40'>
        <ol>

            <li className='res'>
                <a href=" https://swayam.gov.in/">* Swayam Portal</a>
            </li>
            <li className='res'>
                <a href="https://www.inflibnet.ac.in/">* Inflibnet</a>
            </li >

            <li className='res'>
                <a href=" http://crl.du.ac.in/subjectportal/">
                * DUCC Library
                </a>
            </li>

            <li className='res'>
                <a href="https://epgp.inflibnet.ac.in/">
               * E-Pathshala 
                </a>
            </li>
        </ol>

        </div>


        </div>

</>
    )
}

export default Eresources