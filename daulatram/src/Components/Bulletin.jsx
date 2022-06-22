import React,{useState} from 'react';
import { StudentInfo } from './Info';

const Bulletin = () => {
  // const [Studentinfo,setInfo] = useState(StudentInfo)
  return (
    <>
    <div className=' flex' >
        <div className='name1 flex flex-row justify-center items-center  px-2'>Bulletin</div>
        <div className='triangle bg-blue-200 '></div>
        <div className='w-full bg-blue-200 pt-1'>
          <span >
          {StudentInfo.map((curElem) => {
              // const { id, info, link } = curElem;
              return (
                <>
                  <a href={curElem.link} target="_blank" rel="norefferer" className='ml-8 hover:font-semibold hover:text-green-600'>
                    <span className="  text-sm ml-2 mr-2  transition duration-75">
                      {curElem.info}
                    </span>
                  </a>
                </>
              );
            })}
          </span>
        </div>
    </div>
    </>
  )
}

export default Bulletin