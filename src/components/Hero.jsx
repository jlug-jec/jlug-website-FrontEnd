import React from 'react'
import styles from "../style"
import {home} from '../assets/extra';
import GetStarted from "./GetStarted"

import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[px] px-0 bg-discount gradient rounded-[10px] mb-2">
          <p className={`${styles.paragraph} `} >
            The{" "}
            <span className="text-white">Technical{" "}</span>
            Society of{" "}
            <span className="text-white">JEC</span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            {/* Presenting You <br className="sm:block hidden"/>{" "} */}
            <span className="text-gradient">JLUG</span>{" "}  </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <Link to="/pagenotfound/"><GetStarted /></Link>
          </div>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
            JEC Linux User Group
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        JLUG commenced on 7th  September 2019, is titled as the one the most renowned and only official society of Jabalpur Engineering College. The society was brought together with the aim of providing a platform to all the Linux enthusiasts and aspirants in search for an opportunity for growth through peer learning and to help students gain knowledge of LINUX and FOSS through various workshops conducted throughout the year. The founders of the society being Mr. Ayushman Parchhoria and Mr. Pranshu Mishra, while the society is currently being headed by Mr. Mustkeem Arsh, President and Ms. Ishita Modi, Vice President. It is responsible for organizing and managing various workshops, fest, programs, etc.
.
        </p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={home} alt="billing" className='w-[100%] h-[100%px] relative z-[5] hidden sm:block' />
        {/* gradient start */}
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'/>
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
      <div className={`ss:hidden ${styles.flexCenter} mb-7`}>
      <Link to="/pagenotfound/"><GetStarted /></Link>
      </div>
    </section>
    
  )
}

export default Hero
