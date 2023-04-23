import React from 'react'
import {AiOutlineWifi} from 'react-icons/ai';

const Aminity = ({icon, name}) => {
  return (
    <>
    
    <div className="flex flex-col text-center items-center w-1/4 p-2 " data-aos="fade-up">
        <div className={'text-primary'}>
          {icon}
        </div>
        <p>{name}</p>
    </div>
    
    
    </>
  )
}

export default Aminity