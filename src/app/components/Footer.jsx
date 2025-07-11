import styles from "../style";
import { JLUGLogo } from "../../assets/logos";
import { footerLinks, socialMedia } from "../constants";
import Link from "next/link";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={JLUGLogo.src}
          alt="JLUG"
          className="w-[70px] h-[70px] rounded-full ml-[70px]"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          A Great Society For Fun, Explorations, Interactions, Learning And More...
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div
            key={footerlink.title}
            className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
          >
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  <Link href={link.link}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex flex-col items-center justify-between">
      <div className=" flex justify-between items-center md:flex-row flex-col pt-10 border-t-[1px] border-t-[#3F3E45] pb-10">
        

        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          Copyright Ⓒ 2023 JLUG. All Rights Reserved.
        </p>
      <p className="font-poppins font-normal text-center text-[15px] leading-[27px] text-gray-400 pt-6">
        Designed and developed By <a href="https://github.com/AnushkJain2201">Anushk</a>, <a href="https://github.com/Aryan-219">Aryan</a> & <a href="https://github.com/Ghat0tkach">Vikramaditya</a> & converted to Next.js by <a href="https://github.com/siddhant385">Siddhant</a>
      </p>
    </div>
  </section>
);

export default Footer;
