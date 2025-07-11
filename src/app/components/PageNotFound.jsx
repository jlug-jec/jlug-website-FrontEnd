'use client';

import React, { useEffect } from "react";
import Link from "next/link";

const PageNotFound = () => {
  useEffect(() => {
    const container = document.getElementById("containerPage");
    const handleMouseMove = (e) => {
      const x = -e.clientX / 5;
      const y = -e.clientY / 5;
      if (container) {
        container.style.backgroundPositionX = `${x}px`;
        container.style.backgroundPositionY = `${y}px`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="bodyPage">
      <div id="containerPage">
        <div className="content font-poppins">
          <h2>404</h2>
          <h4>Oops! Page Not Found</h4>
          <p>Registration Not Started Yet</p>
          <Link href="/">Back To Home</Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
