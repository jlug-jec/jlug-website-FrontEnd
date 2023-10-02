import React from "react";
import styles from "../style";
import { insta, gmail, linkedIn } from "../assets/logos";
import { instagram2, facebook2, whatsapp, linkedin2 } from "../assets";
const RegisCompSuccess = () => {
  return (
    <>
      {/* <div responsive={responsive} className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
     
        <h1 className={styles.heading2}>Congratulations!!!<br className='sm:block hidden'/>You Have Registered Successfully</h1>
        <div className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            
        <a href="http://instagram.com"><img src={insta} alt="instagram" className="w-[100px] h-[100px] rounded-full m-6" /></a>
        <a href="http://gmail.com"><img src={gmail} alt="gmail" className="w-[100px] h-[100px] rounded-full m-6" /></a>
        <a href="http://linkedIn.com"><img src={linkedIn} alt="linkedIn" className="w-[100px] h-[100px] rounded-full m-6" /></a>  
        </div> 
      </div> */}

      <section  className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} ${styles.marginX} sm:flex-col flex-col bg-black-gradient-2 rounded-[20px] box-shadow` }>
        <div className={`flex text-center justify-center ${styles.padding}`}>
          <h3 className="text-gradient sm:text-[40px] text-[20px]">Success!! <br className="sm:hidden text-center" /> Your Form Has Been Submitted Successfully.</h3>
        </div>
        <div className={`flex text-center justify-center} ${styles.padding}`}>
          <h3 className="text-dimWhite sm:text-[30px] text-[15px]">You Will Recieve An Email, Regarding The Joining Procedure.</h3>
        </div>
        <div className={`flex text-center justify-center flex-col`}>
          <h3 className="text-dimWhite sm:text-[30px] text-[15px]">Meanwhile You Can Join Our WhatsApp Group, To recieve Further Information.</h3>
          <a href="https://chat.whatsapp.com/FLKZyndkSbTCbS9YCTwHfq"><img src={whatsapp} alt="whatsapp" className={`sm:h-28 h-24 ${styles.marginY}`}/></a>
        </div>
        <div className={`flex items-center-center justify-center flex-col`}>
          <h3 className="text-dimWhite sm:text-[30px] text-[15px]">Also, You Can Follow Us On Our Social Accounts For Further Information</h3>
          <div className="flex justify-around items-center sm:flex-row flex-col">
            <a href="https://www.facebook.com/JEC.JLUG"><img src={facebook2} alt="facebook" className={`sm:h-28 h-24 ${styles.marginY}`}/></a>
            <a href="https://www.instagram.com/jlug_jec/"><img src={instagram2} alt="instagram" className={`sm:h-28 h-24 ${styles.marginY}`}/></a>
            <a href="https://www.linkedin.com/company/jlug-jec/"><img src={linkedin2} alt="linkedin" className={`sm:h-28 h-24 ${styles.marginY}`}/></a>
          </div>
        </div>
      </section>
    </>
  );
};
export default RegisCompSuccess;
