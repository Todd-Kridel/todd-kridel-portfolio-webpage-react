

import React from "react";
//import {useState, useEffect} from "react";


// WHEN I view the navigation titles
// THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted


// WHEN I click on a navigation title
// THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted


function NavigationBar({currentPage, handlePageChange}) {
// For each navigation bar button...
// Check about if the current topic navigation button selection is "About Me, and if so then render/set 
// an active/highlighted button style (from Bootstrap); otherwise set the style to a non-active style.
return (
<div>

  <ul className="nav nav-tabs">
    <li className="nav-item">
      <a href="#aboutMe"
      onClick={() => handlePageChange("About Me")}
      className={currentPage === "About Me" ? "nav-link_active" : "nav-link"}
      >About Me
      </a>
    </li>
    <li className="nav-item">
      <a href="#programWorkPortfolio"
      onClick={() => handlePageChange("Program Work Portfolio")}
      className={currentPage === 'Program Work Portfolio' ? 'nav-link_active' : 'nav-link'}
      >Program Work Portfolio
      </a>
    </li>
    <li className="nav-item">
      <a href="#contactMe"
      onClick={() => handlePageChange("Contact Me")}
      className={currentPage === "Contact Me" ? "nav-link_active" : "nav-link"}
      >Contact Me
      </a>
    </li>
    <li className="nav-item">
      <a href="#resume"
      onClick={() => handlePageChange("Resume")}
      // Check about if the currentPage is "Resume", and if so we use the active link class from bootstrap. 
      // Otherwise set it to a normal nav-link.
      className={currentPage === "Resume" ? "nav-link_active" : "nav-link"}
      >Resume
      </a>
    </li>
  </ul>

</div>
);
}


export default NavigationBar;

