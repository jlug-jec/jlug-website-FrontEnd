import React from "react";

import {Footer, Home, PageNotFound} from "./components";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/jlug-website-FrontEnd" element={<Home />} />
        <Route path="/jlug-website-FrontEnd/pagenotfound/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
