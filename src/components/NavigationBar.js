

import React from "react";
//import {useState, useEffect} from "react";


// WHEN I view the navigation titles
// THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted


// WHEN I click on a navigation title
// THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted


// WHEN I load the portfolio the first time
// THEN the About Me title and section are selected by default


// WHEN I am presented with the About Me section
// THEN I see a recent photo or avatar of the developer and a short bio about them


// WHEN I am presented with the Portfolio section
// THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository


// WHEN I am presented with the Contact section
// THEN I see a contact form with fields for a name, an email address, and a message


// WHEN I move my cursor out of one of the form fields without entering text
// THEN I receive a notification that this field is required


// WHEN I enter text into the email address field
// THEN I receive a notification if I have entered an invalid email address


// WHEN I am presented with the Resume section
// THEN I see a link to a downloadable resume and a list of the developer’s proficiencies


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
      className={currentPage === "About Me" ? "nav-link active" : "nav-link"}
      >About Me
      </a>
    </li>
    <li className="nav-item">
      <a href="#programWorkPortfolio"
      onClick={() => handlePageChange("Program Work Portfolio")}
      className={currentPage === 'Program Work Portfolio' ? 'nav-link active' : 'nav-link'}
      >Program Work Portfolio
      </a>
    </li>
    <li className="nav-item">
      <a href="#contactMe"
      onClick={() => handlePageChange("Contact Me")}
      className={currentPage === "Contact Me" ? "nav-link active" : "nav-link"}
      >Contact Me
      </a>
    </li>
    <li className="nav-item">
      <a href="#resume"
      onClick={() => handlePageChange("Resume")}
      // Check about if the currentPage is "Resume", and if so we use the active link class from bootstrap. 
      // Otherwise set it to a normal nav-link.
      className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
      >Resume
      </a>
    </li>
  </ul>

</div>
);
}


export default NavigationBar;

