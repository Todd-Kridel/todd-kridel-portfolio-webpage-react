

// a JavaScript library that is for building user interfaces; per a module that is an entry point to 
// the React library
import React from "react";

// Import the custom programmer-defined CSS style definitions that are for this application.
import "./style.css";

// Import the Bootstrap system style definitions that are used in parts of this application.
import "bootstrap/dist/css/bootstrap.min.css";

// The React DOM (virtual/VDOM) provides access to DOM-specific methods.
import ReactDOM from "react-dom";

// Import the overall code component collection that is programmed for this application.
import App from "./App";

// ReactDOM.render takes a React component, or tree of React components and (eventually) renders them 
// to the DOM; with the 1st called argument being the component that is to be rendered, and 2nd argument 
// is the target element that is to be rendered/replaced to (#root)
ReactDOM.render(<App />, document.getElementById("root"));

