"use client";
import React from 'react'
import styles from "../style";
import { Navbar, Hero, JECAA, WhyJoin,  HowToJoin, Stats, Footer, Testimonials, PresentTeamCarousel, PreviousEventCarousel, Mentors, Founders, Faculty, Form
} from ".";
const Home = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/> 
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} `}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <WhyJoin/>
          <PreviousEventCarousel/>
          <Faculty/>
          <Founders/>
          <Testimonials/>
          <Mentors/>
          <PresentTeamCarousel/>
          <JECAA/>
          <HowToJoin/>
          <Footer/>
          {/* <Form/> */}
          {/* <PageNotFound/> */}
        </div>
      </div>
    </div>
  )
}

export default Home