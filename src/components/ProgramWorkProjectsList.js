

import React from "react";
import Project from "./Project";


function ProgramWorkProjectsList() {
return (
<div>

  <Project__ToBeCompletedProjects />

  <h2 className="portfolioSection">Completed Projects</h2>
  {thePortfolioProjectListInformation.map((project) => (
    <Project project={project} />
  ))}
</div>
)
}


///////////////// BEGIN: Additional Project Information /////////////////


function Project__ToBeCompletedProjects() {
return (
<div>
  <h2 className="portfolioSection">To-Be-Completed Projects</h2>
  <br/>
  <p className="pCenter">
    In-Progress Current Projects, Planned Upcoming Projects, and Hoped-For Future Projects
  </p>
  <p className="pCenter">
    <a href={require("../Projects--In-Progress_Current.txt")} 
      target="_blank" rel="noreferrer"><img id="work_image_In-Progress" width="25%" 
      src={require("../images/additional_project_detail--In-Progress.png")} className="portfolioImg"
      title="a picture representation of current in-progress work projects" /></a>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a href={require("../Projects--Planned_Upcoming.txt")} 
      target="_blank" rel="noreferrer"><img id="work_image_Planned" width="25%" 
      src={require("../images/additional_project_detail--Planned.jpg")} className="portfolioImg"
      title="a picture representation of upcoming planned work projects" /></a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href={require("../Projects--Hoped-For_Future.txt")} 
      target="_blank" rel="noreferrer"><img id="work_image_Hoped-For" width="25%" 
      src={require("../images/additional_project_detail--Hoped-For.jpg")} className="portfolioImg"
      title="a picture representation of future hoped-for work projects" /></a>
  </p>
  <p className="pCenter">(Click on an image for more information.)</p>
</div>
);
}


///////////////// END: Additional Project Information /////////////////


///////////////// BEGIN: Project List Item Description Sections /////////////////


const thePortfolioProjectListInformation =   //  {=&#123 (%7B) }=&#125 (%7D)
[
{
"projectTitle": "React JSX Personal Work Portfolio Website", 
"projectDescription": "React Components, JSX-Java, HTML/CSS, Bootstrap CSS style effects, GH-Pages, Validation", 
"projectPictureHTMLLinks": `<a href="./images/Challenge_20_Mockup.jpg" target="_blank" rel="noreferrer">
  <img id="work_image_ReactPersonalWorkPortfolio" width="50%" src="./images/Challenge_20_Mockup.jpg" 
  class="portfolioImg" 
  title="a picture and a link of the React JSX Personal Work Portfolio Website work project" /></a>`,
"projectAdditionalInformationHTMLLinks": 
  `<a href="https://todd-kridel.github.io/todd-kridel-portfolio-webpage-react" target="_blank" rel="noreferrer">
  [ More Information: GitHub Pages internet deployment ]</a><br/>
  <a href="https://github.com/Todd-Kridel/todd-kridel-portfolio-webpage-react" target="_blank" rel="noreferrer">
  [ More Information: GitHub repository README description file ]</a>`
}, 
{ 
"projectTitle": "Social Network API", 
"projectDescription": "MongoDB/Mongoose Database, Node, API backend functionality, Schema/Model, Routes, No-SQL", 
"projectPictureHTMLLinks": `<a href="./images/Challenge 18 Mockup.jpg" target="_blank" rel="noreferrer">
  <img id="work_image_SocialNetworkAPI" width="50%" src="./images/Challenge 18 Mockup.jpg" class="portfolioImg"
  title="a picture and a link of the Social Network API Application work project" target="_blank" 
  rel="noreferrer"/></a>`, 
"projectAdditionalInformationHTMLLinks": `<a href="https://todd-kridel.github.io/TK-Social-Network-API" 
  target="_blank" rel="noreferrer">
  [ More Information: GitHub Pages demo pictures/videos and extra description file ]</a><br/>
  <a href="https://github.com/Todd-Kridel/TK-Social-Network-API" target="_blank" rel="noreferrer">
  [ More Information: GitHub repository README description file ]</a>`
}, 
{
"projectTitle": "Blog CMS Application", 
"projectDescription": "full-stack server-and-GUI database application, Sequelize, Node, Express", 
"projectPictureHTMLLinks": `<a href="./images/Challenge_14_mockup_0.jpg")} target="_blank" rel="noreferrer">
  <img id="work_image_BlogCMSApplication" width="50%" src="./images/Challenge_14_mockup_0.jpg" 
  class="portfolioImg" title="a picture and a link of the Blog CMS Database Application work project" /></a>`, 
"projectAdditionalInformationHTMLLinks": `<a href="https://todd-kridel.github.io/TK-Blog-CMS-Application" 
  target="_blank" rel="noreferrer">
  [ More Information: GitHub Pages demo pictures and Heroku internet deployment ]</a><br/>
  <a href="https://github.com/Todd-Kridel/TK-Blog-CMS-Application" target="_blank" rel="noreferrer">
  [ More Information: GitHub repository README description file ]</a>`
}, 
{
"projectTitle": "Online Bakery Store", 
"projectDescription": 
  `<span>team project, GitHub, databases, Sequelize, Node, Handlebars, authentication, previous topics <br/>
  <br/>
  ++ EXCELLENT DESCRIPTION TEXT THAT IS TO BE CREATED AND INSERTED AT HERE ++</span>`, 
"projectPictureHTMLLinks": `<a href="./images/Project 2 Sweet Solution Demo.jpg" target="_blank" rel="noreferrer">
  <img id="work_image_OnlineBakeryStore" width="50%" src="./images/Project 2 Sweet Solution Demo.jpg" 
  class="portfolioImg" title="a picture of the 'Sweet Solution' 2nd team project" /></a>`, 
"projectAdditionalInformationHTMLLinks": `<a href="https://sweet-solution.herokuapp.com" target="_blank" 
  rel="noreferrer">
  [ More Information: Heroku internet deployment ]</a><br/>
  <a href="https://github.com/EarlofSmith/sweet-solution" target="_blank" rel="noreferrer">
  [ More Information: GitHub repository README description file ]</a>`
}, 
{
"projectTitle": "E-Commerce Server", 
"projectDescription": "database, Sequelize, MySQL2, Node, Express, Routes, Insomnia, backend design", 
"projectPictureHTMLLinks": `<a href="./images/Challenge_13_Mockup.jpg" target="_blank" rel="noreferrer">
  <img id="work_image_ECommerceServer" width="50%" src="./images/Challenge_13_Mockup.jpg" 
  class="portfolioImg" title="a picture and a link of the E-Commerce Server work project" /></a>`, 
"projectAdditionalInformationHTMLLinks": `<a href="https://todd-kridel.github.io/TK-E-Commerce-Server" 
  target="_blank" rel="noreferrer">
  [ More Information: GitHub Pages demo pictures/videos and extra description file ]</a><br/>
  <a href="https://github.com/Todd-Kridel/TK-E-Commerce-Server" target="_blank" rel="noreferrer">
  [ More Information: GitHub repository README description file ]</a>`
}, 
{
"projectTitle": "Employee Database Manager", 
"projectDescription": "console database application, Sequelize, Inquirer, Node, Express", 
"projectPictureHTMLLinks": `<a href="./images/TK-EMPLOYEE-MANAGER.jpg" target="_blank" rel="noreferrer">
  <img id="work_image_EmployeeDatabaseManager" width="50%" src="./images/TK-EMPLOYEE-MANAGER.jpg" 
  class="portfolioImg" title="a picture and a link of the Employee Database Manager work project" /></a>`, 
"projectAdditionalInformationHTMLLinks": `<a href="https://todd-kridel.github.io/TK-Employee-Manager" 
  target="_blank" rel="noreferrer">
  [ More Information: GitHub Pages demo pictures/videos and extra description file ]</a><br/>
  <a href="https://github.com/Todd-Kridel/TK-Employee-Manager" target="_blank" rel="noreferrer">
  [ More Information: GitHub repository README description file ]</a>`
}, 
{
"projectTitle": "Note Taker Application", 
"projectDescription": "code refinements/refactor, HTML/CSS screen layouts, CSS style effects and classes", 
"projectPictureHTMLLinks": `<a href="./images/Module_11_Mockup+.jpg" target="_blank" rel="noreferrer">
  <img id="work_image_NoteTakerApplication" width="50%" src="./images/Module_11_Mockup+.jpg" 
  class="portfolioImg"  title="a picture and a link of the Note Taker application work project" /></a>`, 
"projectAdditionalInformationHTMLLinks": `<a href="https://tk-note-taker.herokuapp.com/index.html" target="_blank" 
  rel="noreferrer">
  [ More Information: Heroku internet deployment ]</a><br/>
  <a href="https://github.com/Todd-Kridel/TK-Note-Taker" target="_blank" rel="noreferrer">
  [ More Information: GitHub repository README description file ]</a>`
}, 
{
"projectTitle": "Employee Record Display System", 
"projectDescription": "Inquirer, data file system, dynamic HTML, Node, Express", 
"projectPictureHTMLLinks": `<a href="./images/Challenge_10_demo.jpg" target="_blank" rel="noreferrer">
  <img id="work_image_EmployeeRecordDisplaySystem" width="50%" src="./images/Challenge_10_demo.jpg" 
  class="portfolioImg" title="a picture and a link of the Employee Record Display System work project" /></a>`, 
"projectAdditionalInformationHTMLLinks": 
  `<a href="https://todd-kridel.github.io/TK-Team-Employee-Information-Profile-Webpage-Generator" target="_blank" 
  rel="noreferrer">
  [ More Information: GitHub Pages demo pictures/videos and extra description file ]</a><br/>
  <a href="https://github.com/Todd-Kridel/TK-Team-Employee-Information-Profile-Webpage-Generator"  target="_blank" 
  rel="noreferrer">
  [ More Information: GitHub repository README description file ]</a>`
}, 
{
"projectTitle": "README File Generator", 
"projectDescription": "Inquirer, data templates, dynamic HTML, Node, Express", 
"projectPictureHTMLLinks": `<a href="./images/Successful_Test_of_Challenge_9_App.jpg" target="_blank" 
  rel="noreferrer"><img id="work_image_READMEFileGenerator" width="50%" 
  src="./images/Successful_Test_of_Challenge_9_App.jpg" class="portfolioImg"
  title="a picture and a link of the README File Generator work project" /></a>`, 
"projectAdditionalInformationHTMLLinks": `<a href="https://todd-kridel.github.io/TK-README-File-Generator" 
  target="_blank" rel="noreferrer">
  [ More Information: GitHub Pages demo pictures/videos and extra description file ]</a><br/>
  <a href="https://github.com/Todd-Kridel/TK-README-File-Generator" target="_blank" rel="noreferrer">
  [ More Information: GitHub repository README description file ]</a>`
}, 
{
"projectTitle": "Weather Forecast Application", 
"projectDescription": "weather API data, dynamic data parsing, HTML/CSS customization", 
"projectPictureHTMLLinks": `<a href="./images/TK-Weather-Forecast-Tracker+.jpg" target="_blank" rel="noreferrer">
  <img id="work_image_WeatherForecastApplication" width="50%" src="./images/TK-Weather-Forecast-Tracker+.jpg" 
  class="portfolioImg" title="a picture and a link of the Weather Forecast Application work project" /></a>`, 
"projectAdditionalInformationHTMLLinks": `<a href="https://todd-kridel.github.io/TK-Weather-Forecast-Tracker" 
  target="_blank" rel="noreferrer">
  [ More Information: GitHub Pages internet deployment ]</a><br/>
  <a href="https://github.com/Todd-Kridel/TK-Weather-Forecast-Tracker" target="_blank" rel="noreferrer">
  [ More Information: GitHub repository README description file ]</a>`
}, 
{
"projectTitle": "Campsite Finder", 
"projectDescription": 
  `<span>team project (teamwork), project plans, remote work, APIs, GitHub, storage, previous topics <br/>
  <br/>
  ++ EXCELLENT DESCRIPTION TEXT THAT IS TO BE CREATED AND INSERTED AT HERE ++</span>`, 
"projectPictureHTMLLinks": `<a href="./images/Project 1 -- Project Camp.jpg" target="_blank" rel="noreferrer">
  <img id="work_image_CampsiteFinder" width="50%" src="./images/Project 1 -- Project Camp.jpg" 
  class="portfolioImg" title="a picture of the 'Project Camp' 1st team project" /></a>`, 
"projectAdditionalInformationHTMLLinks": `<a href="https://alester77.github.io/Project-Camp" target="_blank" 
  rel="noreferrer">
  [ More Information: GitHub Pages internet deployment ]</a><br/>
  <a href="https://github.com/alester77/Project-Camp" target="_blank" rel="noreferrer">
  [ More Information: GitHub repository README description file ]</a>`
}, 
{
"projectTitle": "Workday Time Scheduler", 
"projectDescription": "jQuery, Bootstrap, APIs, timers, events, local storage and loading, HTML element tracking", 
"projectPictureHTMLLinks": `<a href="./images/Module 5 Mockup.jpg" target="_blank" rel="noreferrer">
  <img id="work_image_WorkdayTimeScheduler" width="50%" src="./images/Module 5 Mockup.jpg" class="portfolioImg"
  title="a picture of the Time Scheduler work project" /></a>`, 
"projectAdditionalInformationHTMLLinks": `<a href="https://todd-kridel.github.io/TK-Work-Day-Scheduler" 
  target="_blank" rel="noreferrer">
  [ More Information: GitHub Pages internet deployment ]</a><br/>
  <a href="https://github.com/Todd-Kridel/TK-Work-Day-Scheduler" target="_blank" rel="noreferrer">
  [ More Information: GitHub repository README description file ]</a>`
}, 
{
"projectTitle": "Quiz Game", 
"projectDescription": "multi-screen GUI and program flow, arrays, events, local storage and loading, dynamic HTML", 
"projectPictureHTMLLinks": `<a href="./images/Module 4 Mockup.jpg" target="_blank" rel="noreferrer">
  <img id="work_image_QuizGame" width="50%" src="./images/Module 4 Mockup.jpg" class="portfolioImg" 
  title="a picture of the Quiz Game work project" /></a>`, 
"projectAdditionalInformationHTMLLinks": `<a href="https://todd-kridel.github.io/TK-Coding-Quiz" target="_blank" 
  rel="noreferrer">
  [ More Information: GitHub Pages internet deployment ]</a><br/>
  <a href="https://github.com/Todd-Kridel/TK-Coding-Quiz" target="_blank" rel="noreferrer">
  [ More Information: GitHub repository README description file ]</a>`
}, 
{
"projectTitle": "Password Generator", 
"projectDescription": "data validation, responsiveness, JavaScript, looping, arrays, HTML-Javascript connections", 
"projectPictureHTMLLinks": `<a href="./images/Module 3 Mockup.jpg" target="_blank" rel="noreferrer">
  <img id="work_image_PasswordGenerator" width="50%" src="./images/Module 3 Mockup.jpg" class="portfolioImg" 
  title="a picture of the Password Generator work project" /></a>`, 
"projectAdditionalInformationHTMLLinks": `<a href="https://todd-kridel.github.io/TK-Password-Generator" 
  target="_blank" rel="noreferrer">
  [ More Information: GitHub Pages internet deployment ]</a><br/>
  <a href="https://github.com/Todd-Kridel/TK-Password-Generator" target="_blank" rel="noreferrer">
  [ More Information: GitHub repository README description file ]</a>`
}, 
{ 
"projectTitle": "HTML/CSS Personal Work Portfolio Website", 
"projectDescription": "HTML/CSS screen layouts, CSS style effects and classes", 
"projectPictureHTMLLinks": `<a href="./images/Personal_Portfolio_appearance.jpg" target="_blank" rel="noreferrer">
  <img id="work_image_HTMLCSSPersonalWorkPortfolioWebsite" width="50%" 
  src="./images/Personal_Portfolio_appearance.jpg")} class="portfolioImg"
  title="a picture and a link of the HTML/CSS (Non-React) Personal Work Portfolio Website work project" /></a>`, 
"projectAdditionalInformationHTMLLinks": `<a href="https://todd-kridel.github.io/Todd-Kridel-Portfolio-Webpage" 
  target="_blank" rel="noreferrer">
  [ More Information: GitHub Pages internet deployment ]</a><br/>
  <a href="https://github.com/Todd-Kridel/Todd-Kridel-Portfolio-Webpage" target="_blank" rel="noreferrer">
  [ More Information: GitHub repository README description file ]</a>`
}, 
{
"projectTitle": "Company Website", 
"projectDescription": "code refinements/refactor, HTML/CSS screen layouts, CSS style effects and classes", 
"projectPictureHTMLLinks": `<a href="./images/Horiseon-Company-Website-Refactory.jpg" target="_blank" 
  rel="noreferrer"><img id="work_image_CompanyWebsite" width="50%" 
  src="./images/Horiseon-Company-Website-Refactory.jpg" class="portfolioImg"
  title="a picture and a link of the Horiseon Company Website work project" /></a>`, 
"projectAdditionalInformationHTMLLinks": `<a href="https://todd-kridel.github.io/Bootcamp_Module_1_Challenge" 
  target="_blank" rel="noreferrer">
  [ More Information: GitHub Pages internet deployment ]</a><br/>
  <a href="https://github.com/Todd-Kridel/Bootcamp_Module_1_Challenge" target="_blank" rel="noreferrer">
  [ More Information: GitHub repository README description file ]</a>`
}
];


///////////////// END: Project List Item Description Sections /////////////////


export default ProgramWorkProjectsList;

