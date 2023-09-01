import React from 'react'
import styles from "../style";
import { Navbar, Hero, JECAA, WhyJoin,  HowToJoin, Stats, Footer, Testimonials, PresentTeamCarousel, PreviousEventCarousel, Mentors, Founders, Faculty, Form, RegisCompSuccess
} from "./";

const RegisterSuccess = () => {
    return (
        <div className="bg-primary w-full overflow-hidden">
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar/> 
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
