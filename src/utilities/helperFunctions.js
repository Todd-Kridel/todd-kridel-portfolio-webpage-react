

// function checkForValidInput(inputType, inputValue) {
//   switch(inputType) {
//     case "contact comment": 
//       if (inputValue.trim() != "") {
//         return 1;
//       }
//       else return 0;
//   }
// }


function checkPassword(inputValue) {
const passwordProcessing = /^[A-Za-z]\w{7,14}$/;
if (inputValue.match(passwordProcessing)) 
  {
  return true;
  }
else 
  {
  return false;
  }
}


function validateNonEmpty(inputValue) {
alert("validateNonEmpty processing");
if ((inputValue.trim() != "") && (inputValue.trim() != "...DEFAULT VALUE..."))
  {
  return 1;
  }
else 
  {
  return 0;
  }
}


function validateEmail(email) {
alert("validateEmail processing");
const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return re.test(String(email).toLowerCase());
}
    

module.exports = {validateNonEmpty, validateEmail};

