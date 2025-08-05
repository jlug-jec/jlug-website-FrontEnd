import { useState, useEffect, useRef } from "react";
import styles from "../style";
import { NavBarNewsletter, Footer } from ".";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const formRef = useRef(null); // Ref for the form element
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    homeTown: "",
    email: "",
    branch: "",
    teamsInterested: "",
    pastExp: "",
    whyJoin: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    phoneNumber: "",
    homeTown: "",
    email: "",
  });
  
  const branchOptions = ["CS", "AIADS", "CE", "IT", "ME", "IP", "MT", "EE", "EC"];
  const teamsInterested = ["Management", "Graphic", "Content", "Technical", "Video Editing"];

  useEffect(() => {
    // Load Pageclip script
    const script = document.createElement("script");
    script.src = "https://s.pageclip.co/v1/pageclip.js";
    script.charset = "utf-8";
    document.body.appendChild(script);

    // Load Pageclip stylesheet
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://s.pageclip.co/v1/pageclip.css";
    link.media = "screen";
    document.head.appendChild(link);

    return () => {
      document.body.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  const validateEmail = (email) => {
    // Basic email pattern for validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    let updatedErrors = { ...errors };
    let updatedFormData = { ...formData };

    // Input Validation
    if (name === "fullName") {
      const alphabeticalValue = value.replace(/[^A-Za-z ]/g, "");
      updatedFormData[name] = alphabeticalValue;
      updatedErrors.fullName = alphabeticalValue.trim() === "" ? "Please write your real name" : "";
    } else if (name === "phoneNumber") {
      const numericValue = value.replace(/\D/g, "");
      updatedFormData[name] = numericValue;
      updatedErrors.phoneNumber = numericValue.length === 0 ? "Phone number is required" : numericValue.length !== 10 ? "Please write valid phone number" : "";
    } else if (name === "homeTown") {
      const alphabeticalValue = value.replace(/[^A-Za-z ]/g, "");
      updatedFormData[name] = alphabeticalValue;
      updatedErrors.homeTown = alphabeticalValue.trim() === "" ? "Home town is required" : "";
    } else if (name === "email") {
      updatedFormData[name] = value;
      updatedErrors.email = value !== "" && !validateEmail(value) ? "Invalid email format" : "";
    } else {
      updatedFormData[name] = value;
      updatedErrors[name] = value.trim() === "" ? `${name} is required` : "";
    }

    setFormData(updatedFormData);
    setErrors(updatedErrors);
  };

  const scriptURL = "https://script.google.com/macros/s/AKfycbzsaMgooMez4JUzTNz1-2bOni3L5twewRtXuW0b-Zp43xd-Bk5vh6XmUCsCJmTjUUM/exec";
  const form = document.forms["registrationForm"];

  const handleSubmit = (event) => {
    event.preventDefault();
  
    fetch(scriptURL, {
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        window.open("/registeredsuccessfully", "_self");
      })
      .catch((error) => console.log("Error!", error.message));

  };

  return (
    <div className="bg-primary h-full">
      <NavBarNewsletter />
      <div className="mt-10">
        <div className={`flex justify-center align-middle ${styles.paddingX}`}>
          <div className=" max-w-md sm:w-full p-6 bg-white rounded-lg shadow-md bg-black-gradient-2">
            <h2 className="font-poppins font-semibold text-[40px] text-white leading-[66.8px] w-full mb-5">
              Join The Club
            </h2>
            <form 
              ref={formRef} // Attach the ref to the form element
              action="https://send.pageclip.co/eTIuyz9EMgwGpP7QOp6gyTMhnaXKEjhd/registration_form"
              className="pageclip-form space-y-6" 
              method="POST"
              onSubmit={handleSubmit} // Handle form submission
            >
              <input
                required
                className={`w-full p-3 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:animate-pulse transition-all`}
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
              />
              {errors.fullName && (
                <p className="text-red-500 text-center bg-yellow-50 p-2 border rounded-md animate-bounce">
                  {errors.fullName}
                </p>
              )}

              <input
                required
                className={`w-full p-3 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:animate-pulse transition-all`}
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-center bg-yellow-50 p-2 border rounded-md animate-bounce">
                  {errors.phoneNumber}
                </p>
              )}

              <input
                required
                className={`w-full p-3 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:animate-pulse transition-all`}
                type="text"
                name="homeTown"
                placeholder="Home Town"
                value={formData.homeTown}
                onChange={handleInputChange}
              />
              {errors.homeTown && (
                <p className="text-red-500 text-center bg-yellow-50 p-2 border rounded-md animate-bounce">
                  {errors.homeTown}
                </p>
              )}

              <input
                required
                className={`w-full p-3 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:animate-pulse transition-all`}
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && (
                <p className="text-red-500 text-center bg-yellow-50 p-2 border rounded-md animate-bounce">
                  {errors.email}
                </p>
              )}

              <select
                required
                className={`w-full mb-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:animate-pulse transition-all`}
                name="branch"
                value={formData.branch}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Select Your Branch
                </option>
                {branchOptions.sort().map((branch) => (
                  <option key={branch} value={branch}>
                    {branch}
                  </option>
                ))}
              </select>
              {errors.branch && (
                <p className="text-red-500 text-center bg-yellow-50 p-2 border rounded-md animate-bounce">
                  {errors.branch}
                </p>
              )}

              <select
                required
                className={`w-full mb-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:animate-pulse transition-all`}
                name="teamsInterested"
                value={formData.teamsInterested}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Team Interested In
                </option>
                {teamsInterested.sort().map((teamsInterested) => (
                  <option key={teamsInterested} value={teamsInterested}>
                    {teamsInterested}
                  </option>
                ))}
              </select>
              {errors.teamsInterested && (
                <p className="text-red-500 text-center bg-yellow-50 p-2 border rounded-md animate-bounce">
                  {errors.teamsInterested}
                </p>
              )}

              <textarea
                required
                className={`w-full p-3 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:animate-pulse transition-all`}
                name="pastExp"
                placeholder="Past Experience In The Chosen Field"
                value={formData.pastExp}
                onChange={handleInputChange}
              />

              <textarea
                required
                className={`w-full p-3 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:animate-pulse transition-all`}
                name="whyJoin"
                placeholder="Why Do You Want To Join JLUG"
                value={formData.whyJoin}
                onChange={handleInputChange}
              />

              <button
                type="submit"
                className="pageclip-form__submit py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:animate-pulse hover:scale-105 transition-all w-full"
              >
                <span>Register Now</span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Form;
