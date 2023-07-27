import React from "react";
import styles from "./style";
import { Navbar, Hero, Billing, CardDeal, Business, Clients, CTA, Stats, Footer, Testimonials,
} from "./components";
const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
          hello 
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} `}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Business/>
          <Billing/>
          <CardDeal/>
          <Testimonials/>
          <CTA/>
          <Clients/>
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default App;
