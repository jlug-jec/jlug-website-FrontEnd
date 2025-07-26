"use client";
import React from 'react'
import styles from "../style";
import { NavBarNewsletter, Footer, RegisCompSuccess
} from ".";

const RegisterSuccess = () => {
    return (
        <div className="bg-primary w-full overflow-hidden">
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <NavBarNewsletter/> 
            </div>
          </div>
          <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                {/* <Hero/> */}
              <RegisCompSuccess/>
            </div>
            
          </div>
    
          <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} `}>
            <div className={`${styles.boxWidth}`}>
              <Footer/>
            </div>
          </div>
        </div>
      );
};

export default RegisterSuccess;
