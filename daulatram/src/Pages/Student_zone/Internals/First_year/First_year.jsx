import React from 'react'
import "./Internal.css"
// import Attendencebanner from '../../../../Components/Banners/Attendencebanner'
import First_banner from '../../../../Components/Banners/First_banner'
import comH from "../First_year/Commerce/commerce.pdf"
import comP from "../First_year/Commerce/Com (P).pdf"
import BA from "../First_year/Arts/BA1.pdf"
const First_year = () => {
  return (
<>
<div className="">
          <First_banner/>
        </div>
<div className=' main_com flex flex-row'>
<div className='com flex flex-col  '><span className='field'>Commerce</span>
<a className='int' href={comH} target="_blank" rel="noreferrer">B.Com(H)</a>
<a className='int' href={comP} target="_blank" rel="noreferrer">B.Com(P)</a>
</div>
<div className='com flex flex-col '><span className='field'>Arts</span>
<a className='int' href={BA} target="_blank" rel="noreferrer">B.A.(P)</a>
<a className='int' href="" target="_blank" rel="noreferrer">Economics</a>
<a className='int' href="" target="_blank" rel="noreferrer">English</a>
<a className='int' href="" target="_blank" rel="noreferrer">Hindi</a>
<a className='int' href="" target="_blank" rel="noreferrer">History</a>
<a className='int' href="" target="_blank" rel="noreferrer">Music</a>
<a className='int' href="" target="_blank" rel="noreferrer">Political Science</a>
<a className='int' href="" target="_blank" rel="noreferrer">Philosophy</a>
<a className='int' href=""target="_blank" rel="noreferrer">Psychology</a>
<a className='int' href=""target="_blank" rel="noreferrer">Sanskrit
</a>
</div>
<div className='com flex flex-col '><span className='field'>Science</span>
<a className='int' href="" target="_blank" rel="noreferrer">Botany</a>
<a className='int' href="" target="_blank" rel="noreferrer">Chemistry</a>
<a className='int' href="" target="_blank" rel="noreferrer">Bio-Chemistry</a>
<a className='int' href="" target="_blank" rel="noreferrer">Maths</a>
<a className='int' href="" target="_blank" rel="noreferrer">Zoology</a>
<a className='int' href="" target="_blank" rel="noreferrer">Life Science</a>
<a className='int' href="" target="_blank" rel="noreferrer">Physics</a>
</div>
</div>
</>  )
}

export default First_year