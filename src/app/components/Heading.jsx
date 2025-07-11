import React from 'react';
import styles from '../style';

const Heading = (props) => {
  return (
    // <div className='flex align-middle justify-center mb-10 '>
    //     <h1 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] ">{props.heading}</h1>
    // </div>
    <section id = "clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative ml-3`}>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient"></div>

      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-1 mb-6 relative z-[1]'>
        <h1 className={styles.heading2}>{props.heading}</h1>
        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>{props.info}</p>
        </div>
      </div>
      </section>
  )
}

export default Heading