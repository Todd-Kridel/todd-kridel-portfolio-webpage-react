

import React from "react";
import {useState, useEffect} from "react";


// Import the involved components.
import NavigationBar from "./NavigationBar.js";
import AboutMe from "./AboutMe.js";
import ProgramWorkPortfolio from "./ProgramWorkPortfolio.js";
import ContactMe from "./ContactMe.js";
import Resume from "./Resume.js";


// WHEN I view the navigation titles...
// THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding 
// to the current section is highlighted.


// WHEN I click on a navigation title...
// THEN I am presented with the corresponding section below the navigation without the page reloading and 
// that title is highlighted.


// WHEN I load the portfolio the first time...
// THEN the About Me title and section are selected by default


// {scrollPageToTop()}  // an alternate approach attempt
//const scrollPageToTop = () => {
//  document.getElementById("BodyContentContainer").scroll(0, 0);
//}


function BodyPageContentContainer() {

const [currentPage, setCurrentPage] = useState("About Me");

// When a new page content section is rendered at after being selected by tab click...then scroll 
// that container view of that new content to the top...for in case that a previous tab has already 
// been viewed/scrolled to a lower section of the contain view space.
useEffect(() => {
document.getElementById("BodyContentContainer").scroll(0, 0);
});

// Determine about what the current page is; with the "About Me" page by default upon initial page 
// load;
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


const handlePageChange = (page) => {
setCurrentPage(page);
//document.getElementById("BodyContentContainer").scroll(0, 0);
};
// Pass the current page value from the state memory and pass the function that is used to update 
// the page state. Call to the "renderPage" function to refresh the image of the navigation bar 
// button selection and to display the selected page content component.
return (
<div>

  <NavigationBar currentPage={currentPage} handlePageChange={handlePageChange} />
  {renderPage()}
  {/* {scrollPageToTop()} */}
</div>
);
}


export default BodyPageContentContainer;

