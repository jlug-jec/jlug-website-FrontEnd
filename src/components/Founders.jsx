import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MemberCard from "./MemberCard";
import Heading from "./Heading";
import { feedback } from '../constants';

import {AnshumannSir, PranshuSir, UsaidSir} from '../assets/members_Landing'

import React from "react";

const PresentTeamCarousel = () => {
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

      <Heading  heading="Founder's Section" info="Thank you for your constant advice and recommendation. We are a better society because of your vision."/>

      <Carousel responsive={responsive} className="mb-11">
      
        <div className="ml-6">
          <MemberCard name = "Er. Ayushman Parchoria" profile = {AnshumannSir} designation = "Founder" info = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, debitis dolores? Provident sit tempora nobis accusamus dolores error molestiae repellat?" branch = "Information Technology JEC'20"/>
        </div>
        <div className="ml-6">
          <MemberCard name = "Er. Pranshu Mishra" profile = {PranshuSir} designation = "Founder" info = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, debitis dolores? Provident sit tempora nobis accusamus dolores error molestiae repellat?" branch = "Computer Science JEC'21"/>
        </div>
        <div className="ml-6">
          <MemberCard name = "Er. Mohammad Usaid" profile = {UsaidSir} designation = "Co-Founder" info = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, debitis dolores? Provident sit tempora nobis accusamus dolores error molestiae repellat?" branch = "Electronics And Communication JEC'22"/>
        </div>
      </Carousel>
      </>
  );
};

export default PresentTeamCarousel;
