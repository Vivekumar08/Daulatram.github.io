import React,{useState} from 'react';
import { StudentInfo } from './Info';

const Bulletin = () => {
  const [Studentinfo,setInfo] = useState(StudentInfo)
  return (
    <>
    <div className='mt-6 flex' >
        <div className='name1 flex flex-row justify-center items-center  px-2'>Bulletin</div>
        <div className='triangle bg-blue-200 '></div>
        <div className='w-full bg-blue-200 pt-1'>
          <span >
          {Studentinfo.map((curElem) => {
              const { id, info, link } = curElem;
              return (
                <>
                  <a href={link} target="_blank" rel="norefferer" className='ml-8 hover:font-semibold hover:text-green-600'>
                    <span className="inline flex-row  text-sm ml-2 mr-2  transition duration-75">
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