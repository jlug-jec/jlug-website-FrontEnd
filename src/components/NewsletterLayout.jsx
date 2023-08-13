import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import styles from '../style';

const NewsletterLayout = ({ children }) => {
  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
      </div>
      <div className={`bg-primary your-paddingX your-flexStart`}>
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