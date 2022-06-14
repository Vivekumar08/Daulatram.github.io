import React,{useState} from 'react';
import { StudentInfo } from './Info';

const Bulletin = () => {
  const [Studentinfo,setInfo] = useState(StudentInfo)
  return (
    <>
    <div className='mt-6 flex' >
        <div className='name1 flex flex-row justify-center items-center  px-2'>Bulletin</div>
        <div className='triangle '></div>
        <div className='w-full '>
          <span >
          {Studentinfo.map((curElem) => {
              const { id, info, link } = curElem;
              return (
                <>
                  <a href={link} target="_blank" rel="norefferer">
                    <span className="inline flex-row ml-4 text-sm mb-4 mt-4">
                      {info}
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