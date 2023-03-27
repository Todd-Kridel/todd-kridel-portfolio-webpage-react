

// THIS FILE/APPROACH WAS NOT USED. INSTEAD..THE FUNCTIONALITY OF THIS CODE WAS EMBEDDED IN THE 
// "CONTACT ME" PAGE.


import React from "react";
import useState from "react";
import { validateNonEmpty, validateEmail } from "../utilities/helperFunctions";


function ContactForm() {


// a helper function that checks about if the format of an entered email address is valid


// WHEN I am presented with the Contact section
// THEN I see a contact form with fields for a name, an email address, and a message


// WHEN I move my cursor out of one of the form fields without entering text
// THEN I receive a notification that this field is required


// WHEN I enter text into the email address field
// THEN I receive a notification if I have entered an invalid email address


// Create state variables for the fields in the form; setting initial values to an empty string.

const [email, setEmail] = useState("");
const [userName, setUserName] = useState("");
const [comment, setComment] = useState("");
const [statusMessage, setStatusMessage] = useState("NONE/IDLE");
let the1stUsageAttemptIsOccurring = true;
let submitProcessingIsOccurring = false;  // to skip extra non-necessary on-update validation processing


// default per-render processing that is necessary
useEffect(() => {
if (the1stUsageAttemptIsOccurring)
  {
  alert("Use the Contact form to send a question or a comment to me.");
  document.getElementById("theContactFormUserName").value = "...DEFAULT VALUE...";
  document.getElementById("theContactFormEmailAddress").value = "...DEFAULT VALUE...";
  document.getElementById("theContactFormComment").value = "...DEFAULT VALUE...";
  the1stUsageAttemptIsOccurring = false;
  }
});


const handleInputUpdate = (e) => {
// to get the value and name of the input that triggered the update event
const {target} = e;
const inputType = target.name;
const inputValue = target.value;
//
// Validate the updated/changed input value of the update event.
if ((!submitProcessingIsOccurring) && 
  (!validateNonEmpty(userName) || !validateNonEmpty(email) || !validateNonEmpty(comment)))
  {
  setStatusMessage("The entered Contact information is not valid " + 
    "(such as an empty field or a non-valid email address format).");
  // Exit out of this function if the entered data is not valid (in whole); exit to allow for the 
  // user to correct the information.
  return;
  }
else if (!validateEmail(email))
  {
  setStatusMessage("The entered Contact information is not valid " + 
    "(such as an empty field or a non-valid email address format).");
  // Exit out of this function if the entered data is not valid (in whole); exit to allow for the 
  // user to correct the information.
  return;
  }
else 
  {
  // Based on the input type...set the validated state value of the user name, email address, or 
  // comment.
  if (inputType === "userName") 
    {
    setUserName(inputValue);
    } 
  else if (inputType === "email") 
    {
    setEmail(inputValue);
    } 
  else if (inputType == "comment")
    {
    setComment(inputValue);
    }
  setStatusMessage("The entered Contact information is valid. " + 
    "Thanks about contacting me about your question or/and comment. " + 
    "I will return a response message to you at as soon as possible.");
  }
}


const handleFormSubmit = (e) => {
// to prevent the default behavior of the form submit (which is to refresh the page)
e.preventDefault();
// Check about if the format of the entered user name or email address or comment is value...
// i.e,. non-empty and of the correct format (if applicable; such as for email address). If the 
// entered information is valid...then submit the information for Contact process; otherwise 
// display an error message.
if (!validateNonEmpty(userName) || !validateNonEmpty(email) || !validateNonEmpty(comment)) 
  {
  setStatusMessage("The entered Contact information is not valid " + 
    "(such as an empty field or a non-valid email address format).");
  // Exit out of this function if the entered data is not valid (in whole); exit to allow for the 
  // user to correct the information.
  return;
  }
else 
  {
  submitProcessingIsOccurring = true;  // to skip extra non-necessary on-update validation processing
  let submissionMessageToTodd = {"from": {userName}, "emailAddress": {email}, "comment": {comment}};
  alert(JSON.stringify(submissionMessageToTodd));
  // If the form input information is valid...then clear the input fields and the state variable 
  // values.
  document.getElementById("userName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("comment").value = "";
  setUserName("");
  setEmail("");
  setComment("");
  setStatusMessage("GOOD");
  the1stUsageAttemptIsOccurring = true;
  };
  return;
}


return (
<div>
  <form className = "theContactForm">
  <p className = "pCenter">From:</p>
  <br/>
  <p className = "pCenter">Name:&nbsp;&nbsp;
    <input
      id = "theContactFormUserName" 
      //value = {userName}
      name = "userName"
      onUpdate={handleInputUpdate}
      type = "text"
      placeholder = "Name"
    />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email Address:&nbsp;&nbsp;
    <input
      id = "theContactFormEmailAddress" 
      //value = {email}
      name = "email"
      onUpdate={handleInputUpdate}
      type = "email"
      placeholder = "Email Address"
    />
  </p>
  <p className="pCenter">
    <input className = "contactComment"
      id = "theContactFormComment" 
      //value = {comment}
      name = "comment"
      onUpdate={handleInputUpdate}
      type = "textarea"
      placeholder = "Comment"
    />
  </p>
  <p className = "pCenter">
    <button type = "button" onClick={handleFormSubmit}>Submit</button>  {/*  */}
  </p>
  </form>
  <p className = "pCenter">Status: 
    {statusMessage && (
      <p className = "error-text">{statusMessage}</p>
    )}
  </p>
</div>
);
}


export default ContactForm;

