import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const NewspaperList = ({newspapers}) => {
    const [selectedNewspaper, setSelectedNewspaper] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
  
    const handleNewspaperClick = (newspaper) => {
      setSelectedNewspaper(newspaper.id);
      setCurrentPage(0);
    };
  
    const handleNextPage = () => {
      if (currentPage < newspapers[selectedNewspaper - 1].content.length - 1) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    const handlePrevPage = () => {
      if (currentPage > 0) {
        setCurrentPage(currentPage - 1);
      }
    };
  
    return (
      //newsLetter Layout
  
    <>
<div className="flex items-center justify-center">
  <div className="relative group w-80 mt-10">
    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
    <div className="relative px-10 py-4  h-16 bg-black rounded-lg leading-none flex items-center justify-center divide-x divide-gray-600">
      <h1 className="text-gray-100 font-poppins font-bold text-3xl">The JecX Times</h1>
    </div>
  </div>
</div>
  
      <div className="flex flex-wrap justify-center p-4  overflow-x-auto ">
    
     
      {newspapers.map((newspaper) => (
      <SingleNewsletter
      key={newspaper.id}
      newspaper={newspaper}
     handleNewspaperClick={handleNewspaperClick}
  />
))}
      {/* Extender Newsletter Pop-up box */}
      <AnimatePresence>
          {selectedNewspaper !== null && (
            <div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{  type: 'spring', stiffness: 300, damping: 25 , ease:'linear'}}
                className="bg-gray-300 w-11/12 md:w-3/4 lg:w-1/2 h-11/12 md:h-3/4 lg:h-full p-4 rounded-lg shadow-lg relative"
                style={{
                  '@media (min-width: 1200px)': {
                    width: '41%',
                    height: '90%',
                  },
                  '@media (min-width: 800px)': {
                    width: '45%',
                  },
                }}
              >
                <button
                className="absolute top-2 right-2 w-6 h-6 md:w-8 md:h-8 text-black transition-all duration-150 cursor-pointer rounded-full border border-black flex items-center justify-center hover:text-white hover:bg-gray-600 transform hover:scale-150"
                  onClick={() => setSelectedNewspaper(null)}
                >
                  X
  
                </button>
                <div className="h-90 w-full flex justify-center items-center">
                  <img
                    src={newspapers[selectedNewspaper - 1].content[currentPage]}
                    alt={`Page ${currentPage + 1}`}
                    className="max-h-full max-w-full "
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 flex justify-between p-4 bg-gray-900 bg-opacity-75">
                  {currentPage !== 0 && (
                    <button
                      className="text-white font-poppins  transform hover:scale-100 hover:-translate-x-2 hover:text-secondary"
                      onClick={handlePrevPage}
                      disabled={currentPage === 0}
                    >
                      Previous
                    </button>
                  )}
                  {currentPage < newspapers[selectedNewspaper - 1].content.length - 1 && (
                    <button
                      className="text-white font-poppins transform hover:scale-100 hover:translate-x-2 hover:text-secondary "
                      onClick={handleNextPage}
                      
                    >
                      Next
                    </button>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
      </>
    );
  };
  
//Single NewsPaper Layout
 const SingleNewsletter=({newspaper,handleNewspaperClick })=> {
  return (
   <>
    <div
          key={newspaper.id}
          className="relative cursor-pointer w-64 h-96 bg-white p-4 m-5 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
          style={{
          background: 'linear-gradient(45deg, antiquewhite, white)',  
          boxShadow: '2px 0px 6px 3px #214d76',
          transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow =
            '2px 2px 6px 3px #214d76, -2px -2px 6px 3px #214d76',
          e.currentTarget.style.background='linear-gradient(45deg,white,antiquewhite)' ; // Box shadow on hover
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 0 6px 3px #214d76',
          e.currentTarget.style.background='linear-gradient(45deg, antiquewhite, white)'; // Reset box shadow
        }}
         
        >
       
          <div className="flex items-center justify-center h-56">
            <img
              src={newspaper.thumbnail}
              alt="Newspaper Thumbnail"
              className="w-full h-full object-cover rounded hover:scale-105 transition-transform"
            />
          </div>
          <div className="border-l-4 border-gray-500 pl-2">
            <h3 className=" font-poppins text-lg font-semibold mt-4">{newspaper.title}</h3>
            <p className=" font-poppins text-xs text-gray-600">{newspaper.date}</p>
          </div>
          <div className="absolute bottom-6 left-4 flex justify-between">
            <p className=" font-poppins text-xs text-gray-600">{newspaper.edition}</p>
           
            <div className="space-x-2">
              <button className="bg-gray-700 font-poppins text-white px-2 py-1 rounded hover:bg-gray-700 hover:text-blue-500"  onClick={() => handleNewspaperClick(newspaper)}>
                View
              </button>
              <button className="bg-gray-700 font-poppins  text-white px-2 py-1 rounded  hover:bg-gray-700 hover:text-blue-500">
              <a href="src/assets/newsletter/2nd-edition text-white"  download="2nd-edition.jpg">Download</a>

               
              </button>
            </div>
          </div>
       
  
        </div>
   </>
  )
}

// Pop-up Newsletter



export default NewspaperList;