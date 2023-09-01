import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MemberCard from "./MemberCard";
import Heading from "./Heading";

import {KlevinSir, MustkeemSir, SaketSir, AasithSir, HarshitSir, AkshatSir, LuckySir , IshitaMaam,  ShreyaMaam, UrvijaMaam,
ShristiMaam, LavinaMaam} from '../assets/members_Landing'

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

      <Heading  heading="Current Lead" info="Thank you for always inspiring us to put our best foot forward, even we don't feel like we belong. Your constant reassurance has helped us navigate tough times."/>

      <Carousel responsive={responsive} className="mb-11">
        <div className="ml-6">
          <MemberCard name = "Mr. MustKeem Arsh" profile = {MustkeemSir} designation = "President" info = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, debitis dolores? Provident sit tempora nobis accusamus dolores error molestiae repellat?"  branch = "Electronics and Communication"/>
        </div>
        <div className="ml-6">
          <MemberCard name = "Ms. Ishita Modi" profile = {IshitaMaam} designation = "Vice President" info = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, debitis dolores? Provident sit tempora nobis accusamus dolores error molestiae repellat?"  branch = "Computer Science"/>
        </div>
        <div className="ml-6">
          <MemberCard name = "Mr. Lucky Parihar" profile = {LuckySir} designation = "General Secretary" info = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, debitis dolores? Provident sit tempora nobis accusamus dolores error molestiae repellat?"  branch = "Electronics and Communication"/>
        </div>
        <div className="ml-6">
          <MemberCard name = "Mr. Saket Gupta" profile = {SaketSir} designation = "Joint Secretary" info = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, debitis dolores? Provident sit tempora nobis accusamus dolores error molestiae repellat?"  branch = "Industrial Production"/>
        </div>
        <div className="ml-6"> 
          <MemberCard name = "Ms. Shristi Vishwakarma" profile = {ShristiMaam} designation = "Operation Head" info = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, debitis dolores? Provident sit tempora nobis accusamus dolores error molestiae repellat?"  branch = "Computer Science"/>
        </div>
        <div className="ml-6">
          <MemberCard name = "Mr. Akshat Bansal" profile = {AkshatSir} designation = "Operation Head" info = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, debitis dolores? Provident sit tempora nobis accusamus dolores error molestiae repellat?"  branch = "Computer Science"/>
        </div>
        <div className="ml-6">
          <MemberCard name = "Mr. Aasit Babele" profile = {AasithSir} designation = "PR Head" info = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, debitis dolores? Provident sit tempora nobis accusamus dolores error molestiae repellat?"  branch = "Electronics and Communication"/>
        </div>
        <div className="ml-6">
          <MemberCard name = "Ms. Shreya Gupta" profile = {ShreyaMaam} designation = "PR Head" info = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, debitis dolores? Provident sit tempora nobis accusamus dolores error molestiae repellat?"  branch = "Electronics and Communication"/>
        </div>
        <div className="ml-6">
          <MemberCard name = "Mr. Klevin S Pascal" profile = {KlevinSir} designation = "Cultural Head" info = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, debitis dolores? Provident sit tempora nobis accusamus dolores error molestiae repellat?"  branch = "Computer Science"/>
        </div>
        <div className="ml-6">
          <MemberCard name = "Ms. Lavina Singh" profile = {LavinaMaam} designation = "Cultural Head" info = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, debitis dolores? Provident sit tempora nobis accusamus dolores error molestiae repellat?"  branch = "Civil Engineering"/>
        </div>
        <div className="ml-6"> 
          <MemberCard name = "Mr. Harshit Mehra" profile = {HarshitSir} designation = "Technical Head" info = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, debitis dolores? Provident sit tempora nobis accusamus dolores error molestiae repellat?"  branch = "Computer Science"/>
        </div>
        <div className="ml-6">
          <MemberCard name = "Ms. Urvija Jha" profile = {UrvijaMaam} designation = "Technical Head" info = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, debitis dolores? Provident sit tempora nobis accusamus dolores error molestiae repellat?"  branch = "Electronics and Communication"/>
        </div>
      </Carousel>
      </>
  );
};

export default PresentTeamCarousel;
