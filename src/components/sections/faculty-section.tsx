'use client';
import React from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MemberCard from '../ui/member-card';
import { facultyMembers } from '../../constants/faculty';
const FacultySectionComponent = () => {
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
      <section className="py-16 md:py-20 lg:py-24 px-8 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          {/* Heading and Description */}
          <div className="w-full flex justify-between items-start md:flex-row flex-col gap-6 md:gap-12 lg:gap-16 mb-16 md:mb-20">
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-white leading-tight">
                Mentors
              </h1>
            </div>
            <div className="flex-1 md:mt-0 mt-6">
              <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] text-left max-w-[450px]">
                Our faculty members are the backbone of our community. They are
                the ones who inspire us to be the best we can be.
              </p>
            </div>
          </div>

          {/* Faculty Cards */}
          <div className="flex justify-center items-center">
            <Carousel responsive={responsive} className="w-full">
              {facultyMembers.map((member, index) => (
                <div className="px-4 md:px-6" key={index}>
                  <MemberCard
                    name={member.name}
                    profile={member.profile}
                    designation={member.designation}
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default FacultySectionComponent;
