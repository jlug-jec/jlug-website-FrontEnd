import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PreviousEventCard from "./PreviousEventCard";

import {AlmaMatters , EngineeringDay , LinkedInSession , JecX , HenryHarwin} from '../assets/previous_events'

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
        <Heading heading="Previous Events" info="The society has conducted several workshops which covered a few concrete and significant areas viz Auto cad, Linux, WordPress, Web Development and Robotics, providing certification from eminent institutions."/>
        
      <Carousel responsive={responsive}>
      {/* <h1 className="heading text-6xl text-white md:text-4xl md:text-white md:text-center"><span className="italic text-3xl md:text-sm">meet</span>Our Team</h1> */}
        <div>
          <PreviousEventCard eventName = "The JECx Times" profile = {JecX} eventInfo = "JEC’s very own Virtual newsletter. Launched on 31st July 2023. Aimed at updating all with the upcoming events, current news and nourishing the history of JEC . "/>
        </div>
        <div>
          <PreviousEventCard eventName = "Henry Harvin" profile = {HenryHarwin} eventInfo = "A Live Zoom Data science workshop. With specialization in Python programming, data exploration, statistical analysis & machine learning techniques. Organized on 29th July 2023."/>
        </div>
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
