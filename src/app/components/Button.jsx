import React from "react";
import Link from "next/link";

const Button = ({ styles }) => (
  <Link href="/registrationform"><button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    1<sup>st</sup> Year Recruitment Form
  </button></Link>
);

export default Button;


