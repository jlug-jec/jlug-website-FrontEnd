import React from "react";

import {Home, PageNotFound, Form, RegisterSuccess} from "./components";

import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import Newsletter from "./components/Newsletter";



const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newsletter" element={<Newsletter/>} />
        <Route path="/pagenotfound" element={<PageNotFound />} />
        <Route path="/registrationform" element={<Form />} />
        <Route path="/registeredsuccessfully" element={<RegisterSuccess/>}/>
      </Routes>
    </HashRouter>
  );
};

export default App;
