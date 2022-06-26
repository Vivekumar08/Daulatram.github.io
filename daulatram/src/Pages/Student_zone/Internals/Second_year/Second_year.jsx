import React from 'react'
import "./Internal.css"
import Second_banner from '../../../../Components/Banners/Second_banner'
import comh from "../Second_year/Commerce/Bcom.pdf"
import comp from "../Second_year/Commerce/BcomP.pdf"
import BA1 from "../Second_year/Arts/baP.pdf"
import eco from "../Second_year/Arts/eco.pdf"
import eng from "../Second_year/Arts/Eng.pdf"
import hin from "../Second_year/Arts/hin.pdf"
import his from "../Second_year/Arts/his.pdf"
import music from "../Second_year/Arts/Music.pdf"
import philo from "../Second_year/Arts/philo.pdf"
import pol from "../Second_year/Arts/pol.pdf"
import psy from "../Second_year/Arts/psy.pdf"
import sans from "../Second_year/Arts/sans.pdf"
import biochem from "../Second_year/Science/biochem.pdf"
import botany from "../Second_year/Science/botany.pdf"
import chem from "../Second_year/Science/chem.pdf"
import life from "../Second_year/Science/life.pdf"
import math from "../Second_year/Science/math.pdf"
import phy from "../Second_year/Science/phy.pdf"
import zoo from "../Second_year/Science/zoo.pdf"


const Second_year = () => {
  return (
<>
<div className="">
          <Second_banner/>
        </div>
<div className=' main_com flex flex-row'>
<div className='com flex flex-col  '><span className='field'>Commerce</span>
<a className='int' href={comh} target="_blank" rel="noreferrer">B.Com(H)</a>
<a className='int' href={comp} target="_blank" rel="noreferrer">B.Com(P)</a>
</div>
<div className='com flex flex-col '><span className='field'>Arts</span>
<a className='int' href={BA1} target="_blank" rel="noreferrer">B.A.(P)</a>
<a className='int' href={eco} target="_blank" rel="noreferrer">Economics</a>
<a className='int' href={eng} target="_blank" rel="noreferrer">English</a>
<a className='int' href={hin} target="_blank" rel="noreferrer">Hindi</a>
<a className='int' href={his} target="_blank" rel="noreferrer">History</a>
<a className='int' href={music} target="_blank" rel="noreferrer">Music</a>
<a className='int' href={philo} target="_blank" rel="noreferrer">Political Science</a>
<a className='int' href={pol} target="_blank" rel="noreferrer">Philosophy</a>
<a className='int' href={psy} target="_blank" rel="noreferrer">Psychology</a>
<a className='int' href={sans} target="_blank" rel="noreferrer">Sanskrit
</a>
</div>
<div className='com flex flex-col '><span className='field'>Science</span>
<a className='int' href={botany} target="_blank" rel="noreferrer">Botany</a>
<a className='int' href={chem} target="_blank" rel="noreferrer">Chemistry</a>
<a className='int' href={biochem} target="_blank" rel="noreferrer">Bio-Chemistry</a>
<a className='int' href={math} target="_blank" rel="noreferrer">Maths</a>
<a className='int' href={zoo} target="_blank" rel="noreferrer">Zoology</a>
<a className='int' href={life} target="_blank" rel="noreferrer">Life Science</a>
<a className='int' href={phy} target="_blank" rel="noreferrer">Physics</a>
</div>
</div>
</>  )
}

export default Second_year