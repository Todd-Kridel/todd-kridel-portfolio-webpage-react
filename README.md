




# TK Blog CMS Application


## Table of Contents
* [Description](#description)
* [Installation Instructions](#installation-instructions)
* [Usage and Features](#usage-and-features) 
* [Credits](#credits)
* [License](#license) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
* [Questions](#questions)


## Description

This current Module 20 Challenge assignment -- a "React-Based Personal Work Portfolio" -- is a full-stack responsive user-interactive application that allows for a group of application users to be able to view and add and update and respond to blog messages and comments about various topics. The application has a limited set of functionality that is available for/to anonymous users that are only browsing and do not have an official user account; and the application has a larger set of functionality that is available for/to official registered users that have established user accounts and passwords and log-on to the application.

The objectives -- user story and acceptance criteria items -- of the assignment were as follows:

[ User Story ]

Acceptance Criteria
GIVEN a single-page application portfolio for a web developer

WHEN I load the portfolio...
THEN I am presented with a page containing a header, a section for content, and a footer.

WHEN I view the header...
THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio.

WHEN I view the navigation titles...
THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
WHEN I click on a navigation title
THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted
WHEN I load the portfolio the first time
THEN the About Me title and section are selected by default
WHEN I am presented with the About Me section
THEN I see a recent photo or avatar of the developer and a short bio about them
WHEN I am presented with the Portfolio section
THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository
WHEN I am presented with the Contact section
THEN I see a contact form with fields for a name, an email address, and a message
WHEN I move my cursor out of one of the form fields without entering text
THEN I receive a notification that this field is required
WHEN I enter text into the email address field
THEN I receive a notification if I have entered an invalid email address
WHEN I am presented with the Resume section
THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
WHEN I view the footer
THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter) 

* A single Header component that appears on multiple pages

* A single Navigation component within the header that will be used to conditionally render the different sections of your portfolio

* A single Project component that will be used multiple times in the Portfolio section

* A single Footer component that appears on multiple pages


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`




## Installation Instructions

0. (PREPARATION PREREQUISITE PROCESS) Install the Node.js system software. Make sure that you have a GitHub membership and account to be able to view the repository of the assignment webpage system. The published GitHub Pages view of the website should be accessible on the public internet access URL without a need to have a GitHub membership/account.
1. Install the required involved sub-module application software that is necessary for the running of the repository application...by entering the command "npm i" at a console command prompt of the repository clone directory. One of the module programs that is installed/required is the "MySQL2" database program...which is used to contain the data that the "Blog CMS" application uses. After the installation of the "MySQL2" database program...there is an additional requirement of some manual installation steps that will require the database user name and authentication information items that are contained within the main application server file.
2. Add your database user name and password and the "blog_db" database name to an ".env" database user authentication file that is saved in the cloned repository directory: DB_NAME='blog_db'; DB_USER='user_ID'; DB_PASSWORD='user_password'; and replace the "user_ID" and "user_password" components with the appropriate user-specific information.
3. Run the MySQL application with the "mysql" command from the clone directory console and enter the "source db/schema.sql" command to create the necessary application database; and then quit/exit the MySQL application to return to the console command line.
4. Seed/Define the application database with the necessary tables and data by entering the command "node seeds/index".
5. Run the application server by entering the command "npm start" or "node server". The system console should respond with the message "!!!! The Blog CMS application server is now listening. !!!!".

Note: For steps 4 and 5: Alternatively the "npm run seed" and "npm start" commands can be used to both seed the database and then start the server process.


## Usage and Features

The application is a server-based interactive full-stack system that cannot run in a full-usage mode in the GitHub Pages platform. The usage of the application required that it be deployed to the Heroku hosting system at the URL "https://tk-blog-cms-application.herokuapp.com". The following GitHut Pages deployment webpage shows some pictures that are a non-interactive preview of many of the application screens: "https://todd-kridel.github.io/TK-Blog-CMS-Application".

To use this application/webpage...at after when installing the application and its database and then using the "node server" command or the "npm start" command to start the application...

1. View the various items of read-only blog information that are available without a user logon.

2. Create a new user account (if applicable) and then log-on to the system.

3. View the existing records and functional options that are available with a logged-on user account.

4. Add a new blog message.

5. Update the new blog message record.

6. Attempt to update a blog message that is not yours...to experience the related record protection functionality.

7. Add a new comment to an existing blog message of another user.

8. Update the new comment record.

9. Attempt to update a message comment that is not yours...to experience the related record protection functionality.

10. Delete a blog message of yours.

11. Attempt to delete a message that is not yours...to experience the related record protection functionality.

12. Delete a message comment of yours.

13. Attempt to delete a message comment that is not yours...to experience the related record protection functionality.


## Credits 

* Continued informational and cognitive struggle and persistence were required.


## Questions

* If you have any questions you can reach me at GitHub account "Todd-Kridel".


## License

*  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT) 
* Copyright 2023 Todd Kridel

MIT License

Copyright (c) 2022 DU Full-Stack Web Development Coding Boot Camp

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

