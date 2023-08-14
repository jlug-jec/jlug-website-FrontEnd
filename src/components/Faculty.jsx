import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MemberCard from "./MemberCard";
import Heading from "./Heading";

import {PreetiMam, ChandakSir,  AKSharmaSir} from '../assets/Faculty';

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

      <Heading  heading="Mentors" info="Your encouragement has been a driving force behind our accomplishments. We are truly grateful."/>

      <Carousel responsive={responsive} className="mb-11">
        <div className="ml-6">
          <MemberCard name = "Mrs. Preeti Jain Ma'am" profile = {PreetiMam} designation = "Faculty Coordinator" info = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, debitis dolores? Provident sit tempora nobis accusamus dolores error molestiae repellat?"  branch = ""/>
        </div>
        <div className="ml-6">
          <MemberCard name = "Mr. R. Chandak Sir" profile = {ChandakSir} designation = "Faculty Coordinator" info = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, debitis dolores? Provident sit tempora nobis accusamus dolores error molestiae repellat?"  branch = ""/>
        </div>
        <div className="ml-6">
          <MemberCard name = "Mr. A.K. Sharma Sir" profile = {AKSharmaSir} designation = "Faculty Member" info = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, debitis dolores? Provident sit tempora nobis accusamus dolores error molestiae repellat?"  branch = ""/>
        </div>
      </Carousel>
      </>
  );
};

export default PresentTeamCarousel;
