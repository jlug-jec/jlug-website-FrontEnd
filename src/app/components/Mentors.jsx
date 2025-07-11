"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MemberCard from "./MemberCard";
import Heading from "./Heading";

import {SamvegSir, PreetiMaam, UsaidSir, AasthaMaam} from '../../assets/members_Landing'

import React from "react";

const Mentors = () => {
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

      <Heading  heading="Former Lead" info="Your guidance and shared experiences have been invaluable. Thank you for being great leaders."/>

      <Carousel responsive={responsive} className="mb-11">
      <div className="ml-6">
          <MemberCard name = "Er. Mohammad Usaid" profile = {UsaidSir.src} designation = "Co-Founder/Former-President" info = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, debitis dolores? Provident sit tempora nobis accusamus dolores error molestiae repellat?" branch = "Electronics And Communication"/>
        </div>
        <div className="ml-6">
          <MemberCard name = "Er. Aastha Gautam" profile = {AasthaMaam.src} designation = "Former-Vice President" info = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, debitis dolores? Provident sit tempora nobis accusamus dolores error molestiae repellat?" branch = "Mechanical Engineering"/>
        </div>
        <div className="ml-6">
          <MemberCard name = "Er. Samveg Shandilya" profile = {SamvegSir.src} designation = "Former-President" info = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, debitis dolores? Provident sit tempora nobis accusamus dolores error molestiae repellat?" branch = "Industrial Production"/>
        </div>
        <div className="ml-6">
          <MemberCard name = "Er. Preeti Patel" profile = {PreetiMaam.src} designation = "Former-Vice President" info = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, debitis dolores? Provident sit tempora nobis accusamus dolores error molestiae repellat?" branch = "Industrial Production"/>
        </div>
      </Carousel>
      </>
  );
};

export default Mentors;
