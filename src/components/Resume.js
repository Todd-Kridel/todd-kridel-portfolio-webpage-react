

import React from "react";

import resumeFile from "../Todd_Kridel_resume_distribution_file.pdf";


// WHEN I am presented with the Resume section...
// THEN I see a link to a downloadable resume and a list of the developer’s proficiencies.


function Resume() {
return (
<div>

  <h1>Resume Page</h1>

  <br/>
  <p className="pCenter">
  ++ RESUME PAGE INFORMATION ++<br/>
  <br/>

  <p className="pCenter">
    <a href={resumeFile} download>[ Download the Entire Main Resume Distribution File ]</a><br/>
      {/* target="_blank" rel="noreferrer" */}
    (From the GitHub Repository)
  </p>

  {/* <p className="pCenter">
    <React.Fragment>
      <a href="https://github.com/Todd-Kridel/todd-kridel-portfolio-webpage-react/tree/main/src/images/Todd Kridel's resume distribution file.txt" 
        download="Todd Kridel's resume distribution file.txt">
        [ Download/Copy the Entire Main Resume Distribution File ]</a>
    </React.Fragment><br/>
  </p> */}

  <h3><span style={{textDecoration: "underline"}}>Resume Summary</span></h3>
  <br/>
  * information item<br/>
  * information item<br/>
  * information item<br/>
  * information item<br/>
  * information item<br/>
  * information item<br/>
  * information item<br/>
  * information item<br/>
  <br/>
  </p>

  <ul style={{marginLeft: "10%", marginRight: "10%", backgroundColor: "lightgray"}} className="">
    <li>ITEM</li>
    <li>ITEM</li>
    <li>ITEM</li>
    <li>ITEM</li>
  </ul>
  <br/>

</div>
);
}


export default Resume;

