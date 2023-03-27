

import React from "react";
import useState from "react";


// a helper function that checks about if the format of an entered email address is valid
//import { checkPassword, validateEmail } from '../utils/helpers';


// function validateEmail(email) {
// const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// //return re.test(String(email).toLowerCase());
// return;
// }


// function checkPassword(input) {
// const passwordProcessing = /^[A-Za-z]\w{7,14}$/;
// if (input.match(passwordProcessing)) 
//   {
//   return true;
//   }
// else
//   {
//   return false;
//   }
// }


function ContactForm() {
// Create state variables for the fields in the form
// We are also setting their initial values to an empty string
const [email, setEmail] = useState("");
const [userName, setUserName] = useState("");
const [password, setPassword] = useState("");
const [errorMessage, setErrorMessage] = useState("");


const handleInputChange = (e) => {
// Getting the value and name of the input which triggered the change
const { target } = e;
const inputType = target.name;
const inputValue = target.value;
// Based on the input type...set the state of email, username, of password
if (inputType === "email") {
setEmail(inputValue);
} else if (inputType === "userName") {
setUserName(inputValue);
} else {
setPassword(inputValue);
}
};

const handleFormSubmit = (e) => {
// Preventing the default behavior of the form submit (which is to refresh the page)
e.preventDefault();

// First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
if (!validateEmail(email) || !userName) {
setErrorMessage('Email or username is invalid');
// We want to exit out of this code block if something is wrong so that the user can correct it
return;
// Then we check to see if the password is not valid. If so, we set an error message regarding the password.
}
if (!checkPassword(password)) {
setErrorMessage(
    `Choose a more secure password for the account: ${userName}`
);
return;
}
alert(`Hello ${userName}`);

// If everything goes according to plan, we want to clear out the input after a successful registration.
setUserName("");
setPassword("");
setEmail("");
};
  
return (
<div>

  <p>Hello {userName}</p>
  <form className="form">
  <input
  value={email}
  name="email"
  onChange={handleInputChange}
  type="email"
  placeholder="email"
  />
  <input
  value={userName}
  name="userName"
  onChange={handleInputChange}
  type="text"
  placeholder="username"
  />
  <input
  value={password}
  name="password"
  onChange={handleInputChange}
  type="password"
  placeholder="Password"
  />
  <button type="button" onClick={handleFormSubmit}>Submit</button>
  </form>
  {errorMessage && (
  <div>
  <p className="error-text">{errorMessage}</p>
  </div>
  )}

</div>
);
}


export default ContactForm;

