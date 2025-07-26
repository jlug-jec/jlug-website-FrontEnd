"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PreviousEventCard from "./PreviousEventCard";

import {AlmaMatters2 , JecX , HenryHarwin , AlumniMeets , WingCommander , RohitNema , PanelDiscussion , HarshLalwani , SushilKumar , AWS , Mashaal} from '../../assets/previous_events'

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
        <div className="ml-6">
          <PreviousEventCard eventName = "The JecX Times" profile = {JecX.src} eventInfo = "JEC’s very own Virtual newsletter. Launched on 31st July 2023. Aimed at updating all with the upcoming events, current news and nourishing the history of JEC . "/>
        </div>
        <div className="ml-6">
          <PreviousEventCard eventName = "Henry Harvin" profile = {HenryHarwin.src} eventInfo = "A Live Zoom Data science workshop. With specialization in Python programming, data exploration, statistical analysis & machine learning techniques. Organized on 29th July 2023."/>
        </div>
        <div className="ml-6">
          <PreviousEventCard eventName = "Alumni Meet" profile = {AlumniMeets.src} eventInfo = "Organized on 14th July 2023. The program witnessed the words of wisdom from our distinguished alumni of our esteemed 1971 batch, Cofounder HCL and Padma Bhushan recipient, Mr. Ajai Chowdhry and the esteemed veteran actor, Mr. Sharat Saxena."/>
        </div>
        <div className="ml-6">
          <PreviousEventCard eventName = "Alma Matters" profile = {AlmaMatters2.src} eventInfo = "The event witnessed the presence of many of our esteemed alumni, sharing their life experiences, their stories of success, and various other aspects of their college life."/>
        </div>
        
        <div className="ml-6">
          <PreviousEventCard eventName = "Session On Career" profile = {WingCommander.src} eventInfo = "A Live youtube session on  Career opportunities in Defence Services was organized on 1st october 2021. The session was honored with the presence of Wing Commander Reginald Rodgers Singh Retd Wing Commander in the Indian Air Force and an admirable alumni of Jabalpur Engineering College."/>
        </div>
        <div className="ml-6">
          <PreviousEventCard eventName = "Mr. Rohit Nema" profile = {RohitNema.src} eventInfo = "Organized on 8th October 2021.The meet witnessed a session on Decipher the art of cracking competitive exams with Mr Rohit Nema, JEC batch of 2010, Civil Servant."/>
        </div>
        <div className="ml-6">
          <PreviousEventCard eventName = "Panel Discussion" profile = {PanelDiscussion.src} eventInfo = "An online zoom session was held on 25th September 2021, where our esteemed alumni held a 'Panel Discussion on Careers & Employment, an Alternative Vision & Perspective for  Engineers.'"/>
        </div>
        <div className="ml-6">
          <PreviousEventCard eventName = "Mr. Harsh Lalwani" profile = {HarshLalwani.src} eventInfo = "A podcast held on 8th August 2021 featuring Mr. Harsh Lalwani, of alumni batch 2012-2016, on “How to pursue MS abroad”. The podcast aimed at guiding students for future studies and the various options available for higher studies."/>
        </div>
        <div className="ml-6">
          <PreviousEventCard eventName = "Mr. Sushil Sharma" profile = {SushilKumar.src} eventInfo = "A session on “Ecosystem Restoration” was held on 19th July 2021 with the keynote speaker as one of our alumni Mr. Sushil Kumar Sharma."/>
        </div >
        <div className="ml-6">
          <PreviousEventCard eventName = "AWS Workshop" profile = {AWS.src} eventInfo = "JLUG along with JECCA, in association with AWS Academy and Industry Partner, brought together a 2 month free online training on the World’s No. 1 Cloud Technology Platform “Amazon Web Services (AWS)”."/>
        </div>
        <div className="ml-6">
          <PreviousEventCard eventName = "Mashaal" profile = {Mashaal.src} eventInfo = "It was a 2-Day virtual mega event held on 10th-11th July 2021. The event had about 200+ delegates involved with speaker Mr. Mohammad Adil Siddiqui."/>
        </div>
      </Carousel>
      </>
      
   
  );
};

export default PreviousEventCarousel;
