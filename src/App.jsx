import React from "react";

import {Footer, Home, PageNotFound} from "./components";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Newsletter from "./components/Newsletter";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newsletter/*" element={<Newsletter/>} />
        <Route path="/pagenotfound/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
