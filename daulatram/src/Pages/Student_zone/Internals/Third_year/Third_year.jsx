import React from 'react'
import "./Internal.css"
import Third_banner from '../../../../Components/Banners/Third_banner'
import bcomh from "../Third_year/Commerce/bcomh.pdf"
import bcomp from "../Third_year/Commerce/bcomp.pdf"
import ba from "../Third_year/Arts/ba.pdf"
import eco from "../Third_year/Arts/eco.pdf"
import eng from "../Third_year/Arts/eng.pdf"
import hin from "../Third_year/Arts/hin.pdf"
import his from "../Third_year/Arts/his.pdf"
import philo from "../Third_year/Arts/philo.pdf"
import pol from "../Third_year/Arts/pol.pdf"
import psy from "../Third_year/Arts/psy.pdf"
import sans from "../Third_year/Arts/sans.pdf"
import biochem from "../Third_year/Science/biochem.pdf"
import botany from "../Third_year/Science/botany.pdf"
import chem from "../Third_year/Science/chem.pdf"
import life from "../Third_year/Science/life.pdf"
import math from "../Third_year/Science/math.pdf"
import phy from "../Third_year/Science/phy.pdf"
import zoo from "../Third_year/Science/zoo.pdf" 

const Third_year = () => {
  return (
<>
<div className="">
          <Third_banner/>
        </div>
<div className=' main_com flex flex-row'>
<div className='com flex flex-col  '><span className='field'>Commerce</span>
<a className='int'  href={bcomh} target="_blank" rel="noreferrer">B.Com(H)</a>
<a className='int'  href={bcomp} target="_blank" rel="noreferrer">B.Com(P)</a>
</div>
<div className='com flex flex-col '><span className='field'>Arts</span>
<a className='int'  href={ba} target="_blank" rel="noreferrer">B.A.(P)</a>
<a className='int'  href={eco} target="_blank" rel="noreferrer">Economics</a>
<a className='int'  href={eng} target="_blank" rel="noreferrer">English</a>
<a className='int'  href={hin} target="_blank" rel="noreferrer">Hindi</a>
<a className='int'  href={his} target="_blank" rel="noreferrer">History</a>
<a className='int'  href="" target="_blank" rel="noreferrer">Music</a>
<a className='int'  href={pol} target="_blank" rel="noreferrer">Political Science</a>
<a className='int'  href={philo} target="_blank" rel="noreferrer">Philosophy</a>
<a className='int'  href={psy} target="_blank" rel="noreferrer">Psychology</a>
<a className='int'  href={sans} target="_blank" rel="noreferrer">Sanskrit
</a>
</div>
<div className='com flex flex-col '><span className='field'>Science</span>
<a className='int'  href={botany} target="_blank" rel="noreferrer">Botany</a>
<a className='int'  href={chem} target="_blank" rel="noreferrer">Chemistry</a>
<a className='int'  href={biochem} target="_blank" rel="noreferrer">Bio-Chemistry</a>
<a className='int'  href={math} target="_blank" rel="noreferrer">Maths</a>
<a className='int'  href={zoo} target="_blank" rel="noreferrer">Zoology</a>
<a className='int'  href={life} target="_blank" rel="noreferrer">Life Science</a>
<a className='int'  href={phy} target="_blank" rel="noreferrer">Physics</a>
</div>
</div>
</>  )
}

export default Third_year