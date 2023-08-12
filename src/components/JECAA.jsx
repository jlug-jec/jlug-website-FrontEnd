import { JECAA } from "../assets/logos";
import styles, { layout } from "../style";
import JeccaButton from "./JecaaButton";

const Billing = () => (
  <section id="jecaa" className={layout.sectionReverse} >
    <div className={layout.sectionImgReverse}>
      <img src={JECAA} alt="JECAA" className="w-[300px] h-[300px] relative z-[5] " />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        JECAA - <br className="sm:block hidden " /> JEC Alumni 
        Association
      </h2>
      <p className={`${styles.paragraph} max-w-[500px] mt-5`}>
      Welcome to JEC Alumni Association. <br/> Wherever you are and whatever commitments you have made in life, we hope that you will ensure and facilitate continual bonding of your Alumni and your Alma mater.<br/>
      The efforts and aim of JECAA is to encourage fellow graduates to connect with the Alma mater and with one another to network, inspire, mentor and assist in professional development opportunities for young graduates. <br/>
      <a href="https://www.jecalumni.org/user/login.dz"><JeccaButton styles={`mt-10`}/></a>
      </p>
    </div>
  </section>
);

export default Billing;
