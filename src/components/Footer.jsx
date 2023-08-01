import styles from "../style";
import { JLUGLogo } from "../assets/logos";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img
            src={JLUGLogo}
            alt="JLUG"
            className="w-[266px] h-[100px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px] ml-3 mb-8`}>
            A society for growth, exploration, knowledge and many more...
          </p>
          <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
            {footerLinks.map((footerLink) => (
              <div
                key={footerLink.key}
                className="flex flex-col ss:my-0 my-4 min-w-[150px]"
              >
                <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white ml-3">
                  {footerLink.title}
                </h4>
                <ul className="list-none mt-4">
                  {footerLink.links.map((Link, index) => (
                    <li
                      key={Link.name}
                      className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ml-3 ${
                        index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                      }`}
                    >
                      <a href={Link.link}>{Link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45] ml-3">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white ">
          Copyright @ 2023 JLUG. All Rights Reserved.
        </p>

        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img key={social.id} src={social.icon} alt={social.id} className= {`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
