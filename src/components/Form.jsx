import React, { useState } from 'react';
import styles from "../style";
import { NavBarNewsletter, Footer } from '.';

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    homeTown: '',
    email: '',
    branch: '',
    teamsInterested: '',
    pastExp: '',
		whyJoin: '',
  });

  const [errors, setErrors] = useState({
    fullName: '',
    phoneNumber: '',
    homeTown: '',
    email: '',
  });
  const branchOptions = [
    'CS',
    'AIADS',
    'CE',
    'IT',
    'ME',
    'IP',
    'MT',
    'EE',
    'EC',
  ];

  const teamsInterested = [
    'Management',
    'Graphic',
    'Content',
    'Technical'
  ];
  
  const validateEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    
    let updatedErrors = { ...errors };
    let updatedFormData = { ...formData };
  // Input Validation
    if (name === 'fullName') {
      const alphabeticalValue = value.replace(/[^A-Za-z ]/g, '');
      updatedFormData[name] = alphabeticalValue;
      updatedErrors.fullName = alphabeticalValue.trim() === '' ? 'Please write your real name' : '';
    }
    else if (name === 'phoneNumber') {
      const numericValue = value.replace(/\D/g, '');
      updatedFormData[name] = numericValue;
      updatedErrors.phoneNumber = numericValue.length === 0 ? 'Phone number is required' : numericValue.length != 10 ? 'Please write valid phone number' : '';
    } else if (name === 'homeTown') {
      const alphabeticalValue = value.replace(/[^A-Za-z ]/g, '');
      updatedFormData[name] = alphabeticalValue;
      updatedErrors.homeTown = alphabeticalValue.trim() === '' ? 'Home town is required' : '';
    } else if (name === 'email') {
      updatedFormData[name] = value;
      updatedErrors.email = value !== '' && !validateEmail(value) ? 'Invalid email format' : '';
    } else {
      updatedFormData[name] = value;
      updatedErrors[name] = value.trim() === '' ? `${name} is required` : '';
    }
  
    setFormData(updatedFormData);
    setErrors(updatedErrors);
  };

  
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzkOO1-1UJzpqeKSVwiJmvPKldeSh4WkQFoD0UqR4n8zRJm3uz5TjTBGjA3vlYrrag/exec';
  const form = document.forms['registrationForm']
  // let headers = new Headers();

  const handleSubmit = (event) => {
    event.preventDefault();

    // headers.append('Content-Type', 'application/json');
    // headers.append('Accept', 'application/json');

    // headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    // headers.append('Access-Control-Allow-Credentials', 'true');

    // headers.append('GET', 'POST', 'OPTIONS');
    
    fetch(scriptURL, {method: "POST", body: new FormData(form)})
    .catch(error => 
      console.log("Error!", error.message)
    )
    
    window.open("/registeredsuccessfully", "_self");
  };

  return (
    // sm:m-[109px] my-[164px]
    <div className='bg-primary h-full'>
      <NavBarNewsletter />
      <div className='mt-10'>
    <div className={`flex justify-center align-middle ${styles.paddingX}`}>
      
      <div className=" max-w-md sm:w-full p-6 bg-white rounded-lg shadow-md bg-black-gradient-2">
      <h2 className="font-poppins  font-semibold text-[40px] text-white leading-[66.8px] w-full mb-5">Join The Club</h2>
      <form className="space-y-6" method='POST' name='registrationForm' onSubmit={handleSubmit}>
      <input
          required
          className={`w-full p-3 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:animate-pulse transition-all`}
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleInputChange}
        />
     
         {errors.fullName && <p className="text-red-500 text-center bg-yellow-50 p-2 border rounded-md animate-bounce ">{errors.fullName}</p>}

      <input
          required
          className={`w-full p-3 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:animate-pulse transition-all`}
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleInputChange}
        />
     
          {errors.phoneNumber && <p className="text-red-500 text-center bg-yellow-50 p-2 border rounded-md animate-bounce">{errors.phoneNumber}</p>}

      
        <input
          required
          className={`w-full p-3 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:animate-pulse transition-all`}
          type="text"
          name="homeTown"
          placeholder="Home Town"
          value={formData.homeTown}
          onChange={handleInputChange}
        />

          {errors.homeTown && <p className="text-red-500 text-center bg-yellow-50 p-2 border rounded-md animate-bounce">{errors.homeTown}</p>}


        <input
          required
          className={`w-full p-3 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:animate-pulse transition-all`}
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />

          {errors.email && <p className="text-red-500 text-center bg-yellow-50 p-2 border rounded-md animate-bounce">{errors.email}</p>}


        <select
          required
          className={`w-full mb-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:animate-pulse transition-all`}
          type="text"
          name="branch"
          placeholder="Branch"
          value={formData.branch}
          onChange={handleInputChange}
        >  
              <option value="" disabled >Select Your Branch</option>
                  {branchOptions.sort().map((branch) => (
                    
                    <option key={branch} value={branch} >
                      {branch}
                    </option>
    
                  ))}
        </select>
         {errors.branch && <p className="text-red-500 text-center bg-yellow-50 p-2 border rounded-md animate-bounce">{errors.branch}</p>}

         <select
          required
          className={`w-full mb-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:animate-pulse transition-all`}
          type="text"
          name="teamsInterested"
          placeholder="Team Interested"
          value={formData.teamsInterested}
          onChange={handleInputChange}
        >  
              <option value="" disabled >Team Interested In</option>
                  {teamsInterested.sort().map((teamsInterested) => (
                    
                    <option key={teamsInterested} value={teamsInterested}>
                      {teamsInterested}
                    </option>
    
                  ))}
        </select>
         {errors.teamsInterested && <p className="text-red-500 text-center bg-yellow-50 p-2 border rounded-md animate-bounce">{errors.teamsInterested}</p>}

        <textarea
          required
          className={`w-full p-3 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:animate-pulse transition-all`}
          type="textarea"
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


          <button onClick={handleSubmit}
            type="button"
            className="py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </div>
    <div className={`${styles.paddingX}`}>
    <Footer />
    </div>
    </div>
  );
  // const scriptURL = 'https://script.google.com/macros/s/AKfycbxnD5yrebtrZhCyp8mAZAKcJWbPLQLwCaWoLxp1NShX/dev';
  // const form = document.forms['registrationForm']

  // form.addEventListner('submit', e=>{
  //   e.preventDefault();
  //   fetch(scriptURL, {method: "POST", body: new FormData(form)})
  //   .then(response => alert("Thank You!! Your Form Is Submitted Successfully."))
  //   .then(() => {
  //     window.location.reload();
  //   })
  //   .catch(error => 
  //     console.log("Error!", error.message)
  //     )
  // })
};



export default Form;
