

import React from "react";
import {useState, useEffect} from "react";


// Import the involved components.
import NavigationBar from "./NavigationBar.js";
import AboutMe from "./AboutMe.js";
import ProgramWorkPortfolio from "./ProgramWorkPortfolio.js";
import ContactMe from "./ContactMe.js";
import Resume from "./Resume.js";


// WHEN I view the navigation titles
// THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted


// WHEN I click on a navigation title
// THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted


// WHEN I load the portfolio the first time
// THEN the About Me title and section are selected by default


function BodyPageContentContainer() {

const [currentPage, setCurrentPage] = useState("About Me");

// Determine about what the current page is; with the "About Me" page by default upon initial page load;
const renderPage = () => {
if (currentPage === "About Me") {
return (
<div id="BodyContentContainer" className="bodySectionContainer">
  <AboutMe />
</div>
);
}
if (currentPage === "Program Work Portfolio") {
return (
<div id="BodyContentContainer" className="bodySectionContainer">
  <ProgramWorkPortfolio />
</div>
);
}
if (currentPage === "Contact Me") {
return (
<div id="BodyContentContainer" className="bodySectionContainer">
  <ContactMe />
</div>
);
}
if (currentPage === "Resume") {
return (
<div id="BodyContentContainer" className="bodySectionContainer">
  <Resume />
</div>
);
}
};

const handlePageChange = (page) => setCurrentPage(page);
// Pass the current page value from the state memory and pass the function that is used to update the page state.
// Call to the renderPage function to refresh the image of the navigation bar button selection and to display
// the selected page content component.
return (
<div>

  <NavigationBar currentPage={currentPage} handlePageChange={handlePageChange} />
  {renderPage()}
  {scrollPageToTop()}

</div>
);
}


const scrollPageToTop = () => {
  //document.getElementById("BodyContentContainer").scroll(0, 0);
  //document.querySelector("BodyContentContainer").scroll(0, 0);
}


export default BodyPageContentContainer;

