

import React from "react";


// WHEN I am presented with the Resume section
// THEN I see a link to a downloadable resume and a list of the developer’s proficiencies


function Resume() {
return (
<div>

  <h1>Resume Page</h1>
  <p className="pCenter">
  ++ RESUME PAGE INFORMATION ++<br/>

  <p className="pCenter">
    <React.Fragment>
      <a href="../images/Todd Kridel's resume distribution file.txt" target="_blank" rel="noreferrer">
        [ Download the Resume Distribution File ]</a>
    </React.Fragment>
  </p>

  <br/>
  * information item<br/>
  * information item<br/>
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

</div>
);
}


export default Resume;

