import React from "react";
import styles from "../style";
import { insta, gmail, linkedIn } from "../assets/logos";
const RegisCompSuccess = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };
  return (
    <>
    {/* <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}> */}
      <div responsive={responsive} className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
     
        <h1 className={styles.heading2}>Congratulations!!!<br className='sm:block hidden'/>You Have Registered Successfully</h1>
        <div className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            
        <a href="http://instagram.com"><img src={insta} alt="instagram" className="w-[100px] h-[100px] rounded-full m-6" /></a>
        <a href="http://gmail.com"><img src={gmail} alt="gmail" className="w-[100px] h-[100px] rounded-full m-6" /></a>
        <a href="http://linkedIn.com"><img src={linkedIn} alt="linkedIn" className="w-[100px] h-[100px] rounded-full m-6" /></a>  
        </div> 
      </div>
    {/* </section> */}
    </>
  );
};
export default RegisCompSuccess;
