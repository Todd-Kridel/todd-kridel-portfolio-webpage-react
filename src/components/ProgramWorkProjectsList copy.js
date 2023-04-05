

import React from "react";


function ProgramWorkProjectsList() {
return (
<div>
  <Project__ToBeCompletedProjects />
  <h2 className="portfolioSection">Completed Projects</h2>
  <Project__ReactPersonalWorkPortfolio />
  <Project__SocialNetworkAPI />
  <Project__BlogCMSApplication />
  <Project__OnlineBakeryStore />
  <Project__ECommerceServer />
  <Project__EmployeeDatabaseManager />
  <Project__NoteTakerApplication />
  <Project__EmployeeRecordDisplaySystem />
  <Project__READMEFileGenerator />
  <Project__WeatherForecastApplication />
  <Project__CampsiteFinder />
  <Project__WorkdayTimeScheduler />
  <Project__QuizGame />
  <Project__PasswordGenerator />
  <Project__HTMLCSSPersonalWorkPortfolioWebsite />
  <Project__CompanyWebsite />
</div>
)
}


///////////////// BEGIN: Additional Project Information /////////////////


function Project__ToBeCompletedProjects() {
  return (
  <div>
    <h2 className="portfolioSection">To-Be-Completed Projects</h2>
    <br/>
    <p class="pCenter">
      In-Progress Current Projects, Planned Upcoming Projects, and Hoped-For Future Projects
    </p>
    <p className="pCenter">
      <a href={require("../Projects--In-Progress_Current.txt")} 
        target="_blank" rel="noreferrer"><img id="work_image_In-Progress" width="25%" 
        src={require("../images/additional_project_detail--In-Progress.png")} class="portfolioImg"
        title="a picture representation of current in-progress work projects" /></a>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <a href={require("../Projects--Planned_Upcoming.txt")} 
        target="_blank" rel="noreferrer"><img id="work_image_Planned" width="25%" 
        src={require("../images/additional_project_detail--Planned.jpg")} class="portfolioImg"
        title="a picture representation of upcoming planned work projects" /></a>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a href={require("../Projects--Hoped-For_Future.txt")} 
        target="_blank" rel="noreferrer"><img id="work_image_Hoped-For" width="25%" 
        src={require("../images/additional_project_detail--Hoped-For.jpg")} class="portfolioImg"
        title="a picture representation of future hoped-for work projects" /></a>
    </p>
    <p className="pCenter">(Click on an image for more information.)</p>
  </div>
  );
  }


///////////////// END: Additional Project Information /////////////////


///////////////// BEGIN: Project List Item Description Sections /////////////////


function Project__ReactPersonalWorkPortfolio() {
return (
<div>  
  <h3 className="portfolioHeading">React JSX Personal Work Portfolio Website</h3>
  <p className="pCenter">React Components, JSX-Java, HTML/CSS, Bootstrap CSS style effects, GH-Pages, Validation</p>
  <p className="pCenter"><a href={require("../images/Challenge_20_Mockup.jpg")} 
    target="_blank" rel="noreferrer"><img id="work_image_ReactPersonalWorkPortfolio" width="50%" 
    src={require("../images/Challenge_20_Mockup.jpg")} class="portfolioImg"
    title="a picture and a link of the HTML/CSS (Non-React) Personal Work Portfolio Website work project" /></a></p>
  <p className="pCenter">
    <a href="https://todd-kridel.github.io/todd-kridel-portfolio-webpage-react" target="_blank" 
      rel="noreferrer">[ More Information: GitHub Pages internet deployment ]</a>
  </p>
  <p className="pCenter">
    <a href="https://github.com/Todd-Kridel/todd-kridel-portfolio-webpage-react" target="_blank" 
      rel="noreferrer">[ More Information: GitHub repository README description file ]</a>
  </p>
</div>
);
}


function Project__SocialNetworkAPI() {
return (
<div>
  <h3 className="portfolioHeading">Social Network API</h3>
  <p className="pCenter">MongoDB/Mongoose Database, Node, API backend functionality, Schema/Model, Routes, No-SQL</p>
  <p className="pCenter"><a href={require("../images/Challenge 18 Mockup.jpg")} target="_blank" 
    rel="noreferrer"><img id="work_image_SocialNetworkAPI" width="50%" 
    src={require("../images/Challenge 18 Mockup.jpg")} class="portfolioImg"
    title="a picture and a link of the Social Network API Application work project" target="_blank" 
    rel="noreferrer"/></a></p>
  <p className="pCenter">
    <a href="https://todd-kridel.github.io/TK-Social-Network-API" target="_blank" rel="noreferrer">
      [ More Information: GitHub Pages demo pictures/videos and extra description file ]</a>
  </p>
  <p className="pCenter">
    <a href="https://github.com/Todd-Kridel/TK-Social-Network-API" target="_blank" rel="noreferrer">
      [ More Information: GitHub repository README description file ]</a>
  </p>
</div>
);
}


function Project__BlogCMSApplication() {
return (
<div>
  <h3 className="portfolioHeading">Blog CMS Application</h3>
  <p className="pCenter">full-stack server-and-GUI database application, Sequelize, Node, Express</p>
  <p className="pCenter"><a href={require("../images/Challenge_14_mockup_0.jpg")} target="_blank" 
    rel="noreferrer"><img id="work_image_BlogCMSApplication" width="50%" 
    src={require("../images/Challenge_14_mockup_0.jpg")} class="portfolioImg"
    title="a picture and a link of the Blog CMS Database Application work project" /></a></p>
  <p className="pCenter">
    <a href="https://todd-kridel.github.io/TK-Blog-CMS-Application" target="_blank" rel="noreferrer">
      [ More Information: GitHub Pages demo pictures and Heroku internet deployment ]</a>
  </p>
  <p className="pCenter">
    <a href="https://github.com/Todd-Kridel/TK-Blog-CMS-Application" target="_blank" rel="noreferrer">
      [ More Information: GitHub repository README description file ]</a>
  </p>
</div>
);
}


function Project__OnlineBakeryStore() {
    return (
    <div>
      <h3 className="portfolioHeading">Online Bakery Store</h3>
      <p className="pCenter">team project, GitHub, databases, Sequelize, Node, Handlebars, authentication, previous topics</p>
      <p className="pCenter"><a href={require("../images/Project 2 Sweet Solution Demo.jpg")} target="_blank" 
        rel="noreferrer"><img id="work_image_OnlineBakeryStore" width="50%" 
        src={require("../images/Project 2 Sweet Solution Demo.jpg")} class="portfolioImg"
        title="a picture of the 'Sweet Solution' 2nd team project" /></a></p>
      <p className="pCenter">++ EXCELLENT DESCRIPTION TEXT THAT IS TO BE CREATED AND INSERTED AT HERE ++</p>
      <p className="pCenter">
        <a href="https://sweet-solution.herokuapp.com" target="_blank" rel="noreferrer">
          [ More Information: Heroku internet deployment ]</a>
      </p>
      <p className="pCenter">
        <a href="https://github.com/EarlofSmith/sweet-solution" target="_blank" rel="noreferrer">
          [ More Information: GitHub repository README description file ]</a>
      </p>
    </div>
    );
    }
    
    
function Project__ECommerceServer() {
return (
<div>
  <h3 className="portfolioHeading">E-Commerce Server</h3>
  <p className="pCenter">database, Sequelize, MySQL2, Node, Express, Routes, Insomnia, backend design</p>
  <p className="pCenter"><a href={require("../images/Challenge_13_Mockup.jpg")} target="_blank" 
    rel="noreferrer"><img id="work_image_ECommerceServer" width="50%" 
    src={require("../images/Challenge_13_Mockup.jpg")} class="portfolioImg"
    title="a picture and a link of the E-Commerce Server work project" /></a></p>
  <p className="pCenter">
    <a href="https://todd-kridel.github.io/TK-E-Commerce-Server" target="_blank" rel="noreferrer">
      [ More Information: GitHub Pages demo pictures/videos and extra description file ]</a>
  </p>
  <p className="pCenter">
    <a href="https://github.com/Todd-Kridel/TK-E-Commerce-Server" target="_blank" rel="noreferrer">
      [ More Information: GitHub repository README description file ]</a>
  </p>
</div>
);
}


function Project__EmployeeDatabaseManager() {
return (
<div>
  <h3 className="portfolioHeading">Employee Database Manager</h3>
  <p className="pCenter">console database application, Sequelize, Inquirer, Node, Express</p>
  <p className="pCenter"><a href={require("../images/TK-EMPLOYEE-MANAGER.jpg")} target="_blank" 
    rel="noreferrer"><img id="work_image_EmployeeDatabaseManager" width="50%" 
    src={require("../images/TK-EMPLOYEE-MANAGER.jpg")} class="portfolioImg"
    title="a picture and a link of the Employee Database Manager work project" /></a></p>
  <p className="pCenter">
    <a href="https://todd-kridel.github.io/TK-Employee-Manager" target="_blank" rel="noreferrer">
      [ More Information: GitHub Pages demo pictures/videos and extra description file ]</a>
  </p>
  <p className="pCenter">
    <a href="https://github.com/Todd-Kridel/TK-Employee-Manager" target="_blank" rel="noreferrer">
      [ More Information: GitHub repository README description file ]</a>
  </p>
</div>
);
}


function Project__NoteTakerApplication() {
return (
<div>
  <h3 className="portfolioHeading">Note Taker Application</h3>
  <p className="pCenter">code refinements/refactor, HTML/CSS screen layouts, CSS style effects and classes</p>
  <p className="pCenter"><a href={require("../images/Module_11_Mockup+.jpg")} target="_blank" 
    rel="noreferrer"><img id="work_image_NoteTakerApplication" width="50%" 
    src={require("../images/Module_11_Mockup+.jpg")} class="portfolioImg"
    title="a picture and a link of the Note Taker application work project" /></a></p>
  <p className="pCenter">
    <a href="https://tk-note-taker.herokuapp.com/index.html" target="_blank" rel="noreferrer">
      [ More Information: Heroku internet deployment ]</a>
  </p>
  <p className="pCenter">
    <a href="https://github.com/Todd-Kridel/TK-Note-Taker" target="_blank" rel="noreferrer">
      [ More Information: GitHub repository README description file ]</a>
  </p>
</div>
);
}


function Project__EmployeeRecordDisplaySystem() {
return (
<div>
  <h3 className="portfolioHeading">Employee Record Display System</h3>
  <p className="pCenter">Inquirer, data file system, dynamic HTML, Node, Express</p>
  <p className="pCenter"><a href={require("../images/Challenge_10_demo.jpg")} target="_blank" 
    rel="noreferrer"><img id="work_image_EmployeeRecordDisplaySystem" width="50%" 
    src={require("../images/Challenge_10_demo.jpg")} class="portfolioImg"
    title="a picture and a link of the Employee Record Display System work project" /></a></p>
  <p className="pCenter">
    <a href="https://todd-kridel.github.io/TK-Team-Employee-Information-Profile-Webpage-Generator" 
      target="_blank" 
      rel="noreferrer">[ More Information: GitHub Pages demo pictures/videos and extra description file ]</a>
  </p>
  <p className="pCenter">
    <a href="https://github.com/Todd-Kridel/TK-Team-Employee-Information-Profile-Webpage-Generator" 
      target="_blank" 
      rel="noreferrer">[ More Information: GitHub repository README description file ]</a>
    </p>
</div>
);
}


function Project__READMEFileGenerator() {
return (
<div>
  <h3 className="portfolioHeading">README File Generator</h3>
  <p className="pCenter">Inquirer, data templates, dynamic HTML, Node, Express</p>
  <p className="pCenter"><a href={require("../images/Successful_Test_of_Challenge_9_App.jpg")} 
      target="_blank" rel="noreferrer"><img id="work_image_READMEFileGenerator" width="50%" 
      src={require("../images/Successful_Test_of_Challenge_9_App.jpg")} class="portfolioImg"
      title="a picture and a link of the README File Generator work project" /></a></p>
  <p className="pCenter">
    <a href="https://todd-kridel.github.io/TK-README-File-Generator" target="_blank" 
      rel="noreferrer">[ More Information: GitHub Pages demo pictures/videos and extra description file ]</a>
    </p>
    <p className="pCenter">
      <a href="https://github.com/Todd-Kridel/TK-README-File-Generator" target="_blank" 
        rel="noreferrer">[ More Information: GitHub repository README description file ]</a>
    </p>
</div>
);
}


function Project__WeatherForecastApplication() {
return (
<div>
  <h3 className="portfolioHeading">Weather Forecast Application</h3>
  <p className="pCenter">weather API data, dynamic data parsing, HTML/CSS customization</p>
  <p className="pCenter"><a href={require("../images/TK-Weather-Forecast-Tracker+.jpg")} 
    target="_blank" rel="noreferrer"><img id="work_image_WeatherForecastApplication" width="50%" 
    src={require("../images/TK-Weather-Forecast-Tracker+.jpg")} class="portfolioImg"
    title="a picture and a link of the Weather Forecast Application work project" /></a></p>
  <p className="pCenter">
    <a href="https://todd-kridel.github.io/TK-Weather-Forecast-Tracker" target="_blank" 
      rel="noreferrer">[ More Information: GitHub Pages internet deployment ]</a>
    </p>
  <p className="pCenter">
    <a href="https://github.com/Todd-Kridel/TK-Weather-Forecast-Tracker" target="_blank" 
      rel="noreferrer">[ More Information: GitHub repository README description file ]</a>
  </p>
</div>
);
}


function Project__CampsiteFinder() {
return (
<div>
  <h3 className="portfolioHeading">Campsite Finder</h3>
  <p className="pCenter">team project (teamwork), project plans, remote work, APIs, GitHub, storage, previous topics</p>
  <p className="pCenter"><a href={require("../images/Project 1 -- Project Camp.jpg")} 
    target="_blank" rel="noreferrer"><img id="work_image_CampsiteFinder" width="50%" 
    src={require("../images/Project 1 -- Project Camp.jpg")} class="portfolioImg"
    title="a picture of the 'Project Camp' 1st team project" /></a></p>
  <p className="pCenter">++ EXCELLENT DESCRIPTION TEXT THAT IS TO BE CREATED AND INSERTED AT HERE ++</p>
  <p className="pCenter">
    <a href="https://alester77.github.io/Project-Camp" target="_blank" rel="noreferrer">
      [ More Information: GitHub Pages internet deployment ]</a>
  </p>
  <p className="pCenter">
    <a href="https://github.com/alester77/Project-Camp" target="_blank" 
      rel="noreferrer">[ More Information: GitHub repository README description file ]</a>
  </p>
</div>
);
}


function Project__WorkdayTimeScheduler() {
return (
<div>
  <h3 className="portfolioHeading">Workday Time Scheduler</h3>
  <p className="pCenter">jQuery, Bootstrap, APIs, timers, events, local storage and loading, HTML element tracking</p>
  <p className="pCenter"><a href={require("../images/Module 5 Mockup.jpg")} target="_blank" 
    rel="noreferrer"><img id="work_image_WorkdayTimeScheduler" width="50%" 
    src={require("../images/Module 5 Mockup.jpg")} class="portfolioImg"
    title="a picture of the Time Scheduler work project" /></a></p>
  <p className="pCenter">
    <a href="https://todd-kridel.github.io/TK-Work-Day-Scheduler" target="_blank" rel="noreferrer">
      [ More Information: GitHub Pages internet deployment ]</a>
  </p>
  <p className="pCenter">
    <a href="https://github.com/Todd-Kridel/TK-Work-Day-Scheduler" target="_blank" 
      rel="noreferrer">[ More Information: GitHub repository README description file ]</a>
  </p>
</div>
);
}


function Project__QuizGame() {
return (
<div>
  <h3 className="portfolioHeading">Quiz Game</h3>
  <p className="pCenter">multi-screen GUI and program flow, arrays, events, local storage and loading, dynamic HTML</p>
  <p className="pCenter"><a href={require("../images/Module 4 Mockup.jpg")} target="_blank" 
    rel="noreferrer"><img id="work_image_QuizGame" width="50%" 
    src={require("../images/Module 4 Mockup.jpg")} class="portfolioImg"
    title="a picture of the Quiz Game work project" /></a></p>
  <p className="pCenter">
    <a href="https://todd-kridel.github.io/TK-Coding-Quiz" target="_blank" rel="noreferrer">
      [ More Information: GitHub Pages internet deployment ]</a>
  </p>
  <p className="pCenter">
    <a href="https://github.com/Todd-Kridel/TK-Coding-Quiz" target="_blank" 
      rel="noreferrer">[ More Information: GitHub repository README description file ]</a>
  </p>
</div>
);
}


function Project__PasswordGenerator() {
return (
<div>
  <h3 className="portfolioHeading">Password Generator</h3>
  <p className="pCenter">data validation, responsiveness, JavaScript, looping, arrays, HTML-Javascript connections</p>
  <p className="pCenter"><a href={require("../images/Module 3 Mockup.jpg")} target="_blank" 
    rel="noreferrer"><img id="work_image_PasswordGenerator" width="50%" 
    src={require("../images/Module 3 Mockup.jpg")} class="portfolioImg"
    title="a picture of the Password Generator work project" /></a></p>
  <p className="pCenter">
    <a href="https://todd-kridel.github.io/TK-Password-Generator" target="_blank" rel="noreferrer">
      [ More Information: GitHub Pages internet deployment ]</a>
  </p>
  <p className="pCenter">
    <a href="https://github.com/Todd-Kridel/TK-Password-Generator" target="_blank" 
      rel="noreferrer">[ More Information: GitHub repository README description file ]</a>
  </p>
</div>
);
}


function Project__HTMLCSSPersonalWorkPortfolioWebsite() {
return (
<div>
  <h3 className="portfolioHeading">HTML/CSS Personal Work Portfolio Website</h3>
  <p className="pCenter">HTML/CSS screen layouts, CSS style effects and classes</p>
  <p className="pCenter"><a href={require("../images/Personal_Portfolio_appearance.jpg")} 
    target="_blank" rel="noreferrer"><img id="work_image_HTMLCSSPersonalWorkPortfolioWebsite" width="50%" 
    src={require("../images/Personal_Portfolio_appearance.jpg")} class="portfolioImg"
    title="a picture and a link of the HTML/CSS (Non-React) Personal Work Portfolio Website work project" /></a></p>
  <p className="pCenter">
    <a href="https://todd-kridel.github.io/Todd-Kridel-Portfolio-Webpage" target="_blank" 
      rel="noreferrer">[ More Information: GitHub Pages internet deployment ]</a>
  </p>
  <p className="pCenter">
    <a href="https://github.com/Todd-Kridel/Todd-Kridel-Portfolio-Webpage" target="_blank" 
      rel="noreferrer">[ More Information: GitHub repository README description file ]</a>
  </p>
</div>
);
}


function Project__CompanyWebsite() {
return (
<div>
  <h3 className="portfolioHeading">Company Website</h3>
  <p className="pCenter">code refinements/refactor, HTML/CSS screen layouts, CSS style effects and classes</p>
  <p className="pCenter"><a href={require("../images/Horiseon-Company-Website-Refactory.jpg")} 
    target="_blank" rel="noreferrer"><img id="work_image_CompanyWebsite" width="50%" 
    src={require("../images/Horiseon-Company-Website-Refactory.jpg")} class="portfolioImg"
    title="a picture and a link of the Horiseon Company Website work project" /></a></p>
  <p className="pCenter">
    <a href="https://todd-kridel.github.io/Bootcamp_Module_1_Challenge" target="_blank" 
      rel="noreferrer">[ More Information: GitHub Pages internet deployment ]</a>
  </p>
  <p className="pCenter">
    <a href="https://github.com/Todd-Kridel/Bootcamp_Module_1_Challenge" target="_blank" 
      rel="noreferrer">[ More Information: GitHub repository README description file ]</a>
  </p>
</div>
);
}


///////////////// END: Project List Item Description Sections /////////////////


export default ProgramWorkProjectsList;

