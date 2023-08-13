import React from "react";
import { Link } from "react-router-dom";

var container = document.getElementById("containerPage");
window.onmousemove = function (e) {
  var x = - e.clientX/5,
    y = - e.clientY/5;
  container.style.backgroundPositionX = x + "px";
  container.style.backgroundPositionY = y + "px";
};


const PageNotFound = () => {
  return (
    <div className="bodyPage">
      <div id="containerPage">
        <div className="content font-poppins">
          <h2>404</h2>
          <h4>Oops! Page Not Found</h4>
          <p>Registration Not Started Yet</p>
          <Link to="/">Back To Home</Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
