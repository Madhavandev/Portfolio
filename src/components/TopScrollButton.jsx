// TopScrollButton.js

import React, { useState, useEffect } from 'react';
import "./TopScrollButton.css";

const TopScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add scroll event listener when component mounts
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button
      id="scrollToTopButton"
      onClick={scrollToTop}
      className={isVisible ? "active" : ""}
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
};

export default TopScrollButton;
