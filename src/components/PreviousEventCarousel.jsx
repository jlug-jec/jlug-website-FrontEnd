import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PreviousEventCard from "./PreviousEventCard";

import {AlmaMatters , EngineeringDay , LinkedInSession} from '../assets/previous_events'

import React from "react";
import Heading from "./Heading";

const PreviousEventCarousel = () => {
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
        <Heading heading="Previous Events" info="This Society Has Organized Many Successful Events"/>
        
      <Carousel responsive={responsive}>
      {/* <h1 className="heading text-6xl text-white md:text-4xl md:text-white md:text-center"><span className="italic text-3xl md:text-sm">meet</span>Our Team</h1> */}
        <div>
          <PreviousEventCard eventName = "Alma Matters" profile = {AlmaMatters} eventInfo = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, debitis dolores? Provident sit tempora nobis accusamus dolores error molestiae repellat?"/>
        </div>
        <div>
          <PreviousEventCard eventName = "Engineering Day" profile = {EngineeringDay} eventInfo = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, debitis dolores? Provident sit tempora nobis accusamus dolores error molestiae repellat?"/>
        </div>
        <div>
          <PreviousEventCard eventName = "LinkedIn Session" profile = {LinkedInSession} eventInfo = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, debitis dolores? Provident sit tempora nobis accusamus dolores error molestiae repellat?"/>
        </div>
        <div>
          <PreviousEventCard eventName = "Alma Matters" profile = {AlmaMatters} eventInfo = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, debitis dolores? Provident sit tempora nobis accusamus dolores error molestiae repellat?"/>
        </div>
      </Carousel>
      </>
      
   
  );
};

export default PreviousEventCarousel;
