

import React from "react";
//import {useState, useEffect} from "react";
import ProgramWorkProjectsList from "./ProgramWorkProjectsList.js";


// WHEN I am presented with the Portfolio section...
// THEN I see titled images of six of the developer’s applications with links to both the deployed 
// applications and the corresponding GitHub repository.


function ProgramWorkPortfolio() {
return (
<div>

  <h1>Program Work Portfolio Page</h1>

  <br/>
  <p className="pCenter">
    ++ PROGRAM WORK PORTFOLIO PAGE INFORMATION ++
  </p>

  <ProgramWorkProjectsList />
  <BackToTopButton />

  <br/>
  <br/>

</div>
);
}


function BackToTopButton() {

  function scrollWindowToTop() {
    document.getElementById("BodyContentContainer").scroll(0, 0);
  }

return (
<div style={{position: "absolute", top: "65%", zIndex: "100"}}>
  <button onClick={scrollWindowToTop}>Back to Top</button>
</div>
)
}


export default ProgramWorkPortfolio;

