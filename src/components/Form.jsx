import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    homeTown: '',
    email: '',
    branch: '',
  });

  const [errors, setErrors] = useState({
    fullName: '',
    phoneNumber: '',
    homeTown: '',
    email: '',
  });
  const branchOptions = [
    'Computer Science Engineering',
    'Artificial Intelligence and Data Science',
    'Civil Engineering',
    'Information Technology',
    'Mechanical Engineering',
    'Industrial and Production Engineering',
    'Mechatronics Engineering',
    'Electrical Engineering',
    'Electronics and Communication Engineering',

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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <section>
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md bg-black-gradient-2">
      <h2 className="font-poppins mb-5 font-semibold text-[40px] text-white leading-[66.8px] w-full">Join The Club</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
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
              <option value="" disabled>Select Your Branch</option>
                  {branchOptions.sort().map((branch) => (
                    <option key={branch} value={branch}>
                      {branch}
                    </option>
                  ))}
        </select>
         {errors.branch && <p className="text-red-500 text-center bg-yellow-50 p-2 border rounded-md animate-bounce">{errors.branch}</p>}
          <button
            type="submit"
            className="py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;
