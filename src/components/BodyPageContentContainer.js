

import React from "react";
import {useState, useEffect} from "react";


// Import the involved components.
import NavigationBar from "./NavigationBar.js";
import AboutMe from "./AboutMe.js";
import ProgramWorkPortfolio from "./ProgramWorkPortfolio.js";
import ContactMe from "./ContactMe.js";
import Resume from "./Resume.js";


function BodyPageContentContainer() {

const [currentPage, setCurrentPage] = useState("About Me");

// Determine about what the current page is; with the "About Me" page by default upon initial page load;
const renderPage = () => {
if (currentPage === "About Me") {
return (
<div className="bodySectionContainer">
  <AboutMe />
</div>
);
}
if (currentPage === "Program Work Portfolio") {
return (
<div className="bodySectionContainer">
  <ProgramWorkPortfolio />
</div>
);
}
if (currentPage === "Contact Me") {
return (
<div className="bodySectionContainer">
  <ContactMe />
</div>
);
}
if (currentPage === "Resume") {
return (
<div className="bodySectionContainer">
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

</div>
);
}


export default BodyPageContentContainer;

