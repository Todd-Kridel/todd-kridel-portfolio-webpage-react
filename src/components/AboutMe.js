

import React from "react";


// WHEN I am presented with the About Me section...
// THEN I see a recent photo or avatar of the developer and a short bio about them.


function AboutMe() {
return (
<div>

  <h1>About Me Page</h1>

  <br/>
  <p className = "pCenter"><img src={require("../images/Todd_--.jpg")}></img></p>

  <br/>
  <p className = "pCenter">
    ++ ABOUT ME PAGE INFORMATION ++
  </p>
  <p className = "pCenter">
    <br/>
    <br/>
    ++ EXCELLENT DESCRIPTION TEXT THAT IS TO BE CREATED AND INSERTED AT HERE ++ <br/>
    <br/>
    <br/>
    CURRENT AS OF 3/30/2023
    <br/>
  </p>

</div>
);
}
  

export default AboutMe;

