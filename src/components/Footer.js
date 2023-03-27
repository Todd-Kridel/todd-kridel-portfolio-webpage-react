

import React from "react";


// WHEN I view the footer
// THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter) 


function Footer() {
return (
<footer className="footer">

  <h4 className="pCenter">
    <span title="(Note: This item is not a link.)"> [&nbsp;Phone:&nbsp;720&#8209;939&#8209;8917&nbsp;]</span>
    &nbsp; &nbsp; <a href="mailto:todd.kridel@gmail.com" 
      title="(Note: This link requires an installed mail application; If necessary, just copy and paste.)">
      [&nbsp;todd.kridel@gmail.com&nbsp;]</a>
    &nbsp; &nbsp; <a href="https://github.com/Todd-Kridel" target="_blank" rel="noreferrer">
      [&nbsp;GitHub&nbsp;]</a>
    &nbsp; &nbsp; <a href="https://www.linkedin.com/in/todd-kridel" target="_blank" rel="noreferrer">
      [&nbsp;LinkedIn&nbsp;]</a>
    &nbsp; &nbsp; <a href="https://www.facebook.com/todd.kridel" target="_blank" rel="noreferrer">
      [&nbsp;Facebook&nbsp;]</a>
  </h4>

</footer>
);
}


export default Footer;

