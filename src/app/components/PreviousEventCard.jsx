import React from 'react'

const PreviousEventCard = (props) => {
  return (
    <div className="my-5 mx-10 text-white">
            <div className="basis-64 group lg:flex lg:flex-col lg:items-center">
                <img src={props.profile} className='h-56 w-60 cursor-pointer rounded-md' />
                <h3 className="mt-7 text-4xl">{props.eventName}</h3>
                <p className='text-base mt-5 text-justify lg:text-center lg:mt-5 lg:mr-14 lg:mb-20 lg:ml-14 lg:text-xl md:mt-5 md:mr-2 md:mb-20 md:ml-2'>{props.eventInfo}</p>
            </div>
    </div>
  )
}

export default PreviousEventCard