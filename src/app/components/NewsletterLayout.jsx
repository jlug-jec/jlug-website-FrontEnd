'use client';
import React from 'react';
import { NavBarNewsletter } from '.';
import Footer from './Footer';
import styles from '../style';

const NewsletterLayout = ({ children }) => {
  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <NavBarNewsletter />
          </div>
        </div>
      </div>
      <div className={`bg-primary your-paddingX your-flexStart`}>
      <div className="absolute z-[0] w-[50%] h-[50%] top-0 right-0 left-0 bottom-0 blue__gradient" />
        <div className={`your-boxWidth`}>{children}</div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} `}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
          {/* <PageNotFound/> */}
        </div>
      </div>
    </>
  );
};

export default NewsletterLayout;