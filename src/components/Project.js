

import React from "react";
import imagesIndex from "../images/index.js";
//const project_picture_gears = require("../images/project_picture_gears+.png");
import project_picture_gears from "../images/project_picture_gears+.png";

// Project data fields:
// "projectTitle": "", 
// "projectDescription": "", 
// "projectPictureHTMLLinks": ``, 
// "projectAdditionalInformationHTMLLinks": //


function Project({project}) {
return (
<div>
  <br/>
  <p className="pCenter"><img src={project_picture_gears} width="25%"></img></p>
  <h3 className="portfolioHeading">{project.projectTitle}</h3>
  <p className="pCenter">{project.projectDescription}</p>
  <p className="pCenter" dangerouslySetInnerHTML={{__html: project.projectPictureHTMLLinks}}></p>
  <p className="pCenter" dangerouslySetInnerHTML={{__html: project.projectAdditionalInformationHTMLLinks}}></p>  
</div>
);
}


export default Project;


// other futzing:

// {imagesIndex.map(({id, src, title}) => <img src={`${src}`}/>)}
// console.log("img: " + id)); // <img key={id} src={src} title={title} />

// <p className="pCenter">{project.projectPictureHTMLLinks}</p>
// <p className="pCenter">{project.projectAdditionalInformationHTMLLinks}</p>

// let pictureURL = project.projectPicture;
// <p className="pCenter"><img src={require("../images/project_picture_gears+.png")} width="25%"></img></p>
// <p className="pCenter"><img src={project_picture_gears} width="25%"></img></p>
// <p className="pCenter"><img src={require("../project_picture_gears+.png")} width="25%"></img></p>
// <p className="pCenter">{project.pictureURL}</p>
// <p className="pCenter" dangerouslySetInnerHTML={{__html: project.pictureURL}}></p>

