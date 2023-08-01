import React from 'react'
import { airbnb } from '../assets'
const MemberCard = (props) => {
  return (
    <div className="my-5 mx-10 text-white">
            <div className="basis-64 group lg:flex lg:flex-col lg:items-center">
                <img src={props.profile} className='h-64 w-64 rounded-full grayscale cursor-pointer transition-all group-hover:grayscale-0' />
                <h3 className="mt-7 text-4xl">{props.name}</h3>
                <h5 className='text-lg font-thin tracking-widest text-gray-200'>{props.designation}</h5>
                <h5 className='text-lg font-thin tracking-widest text-gray-200'>{props.branch}</h5>
                {/* <p className='text-base mt-5 text-justify lg:text-center lg:mt-5 lg:mr-14 lg:mb-20 lg:ml-14 lg:text-xl md:mt-5 md:mr-2 md:mb-20 md:ml-2'>{props.branch}</p> */}
            </div>
    </div>
  )
}

export default MemberCard