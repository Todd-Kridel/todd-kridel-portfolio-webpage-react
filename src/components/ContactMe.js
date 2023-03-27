

import React from "react";
import useState from "react";
//import ContactForm from "./ContactForm.js";

// a helper function that checks about if the format of an entered email address is valid
//import { checkPassword, validateEmail } from '../utils/helpers';


// WHEN I am presented with the Contact section
// THEN I see a contact form with fields for a name, an email address, and a message


// WHEN I move my cursor out of one of the form fields without entering text
// THEN I receive a notification that this field is required


// WHEN I enter text into the email address field
// THEN I receive a notification if I have entered an invalid email address

 
function ContactMe() {

// Create state variables for the fields in the form; setting initial values to an empty string.

const email = "";
const userName = "";
const comment = "";
const errorMessage = "";

//const [email, setEmail] = useState("");
//const [userName, setUserName] = useState("");
//const [comment, setPassword] = useState("");
//const [errorMessage, setErrorMessage] = useState("");


// const handleInputChange = (e) => {
// // Getting the value and name of the input which triggered the change
// const { target } = e;
// const inputType = target.name;
// const inputValue = target.value;
// //
// // Based on the input type, we set the state of either email, username, and password
// if (inputType === "email") {
//     setEmail(inputValue);
// } else if (inputType === "userName") {
//     setUserName(inputValue);
// } else {
//     setPassword(inputValue);
// }
// };


// const handleFormSubmit = (e) => {
// // Preventing the default behavior of the form submit (which is to refresh the page)
// e.preventDefault();

// // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
// if (!validateEmail(email) || !userName) {
//   setErrorMessage("The entered email address or user name is not value");
//   // We want to exit out of this code block if something is wrong so that the user can correct it
//   return;
//   // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
// }
// if (!checkPassword(password)) {
//   setErrorMessage(
//   `Choose a more secure password for the account: ${userName}`
//   );
//   return;
// }

// // If the form input information is valid...then clear the input fields.
// setUserName("");
// setPassword("");
// setEmail("");
// };


// function validateEmail(email) {
// const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// return re.test(String(email).toLowerCase());
// }


// function checkPassword(input) {
// const passwordProcessing = /^[A-Za-z]\w{7,14}$/;
// if (input.match(passwordProcessing)) {
// return true;
// }
// return false;
// }


return (
<div>

  <h1>Contact Me Page</h1>
  <p className="pCenter">
    ++ CONTACT ME PAGE INFORMATION ++
  </p>

  <br/>
  {/* <ContactForm /> */}

  <form className="form">
  <input
    value={email}
    name="email"
    //onChange={handleInputChange}
    type="email"
    placeholder="Email Address"
  />
  <input
    value={userName}
    name="userName"
    //onChange={handleInputChange}
    type="text"
    placeholder="Name"
  />
  <input className="contactComment"
    value={comment}
    name="comment"
    //onChange={handleInputChange}
    type="textarea"
    placeholder="Comment"
  />
  <button type="button">Submit</button>  {/* onClick={handleFormSubmit} */}
  </form>
  {errorMessage && (
    <p className="error-text">{errorMessage}</p>
  )}


</div>
);
}
 

export default ContactMe;

