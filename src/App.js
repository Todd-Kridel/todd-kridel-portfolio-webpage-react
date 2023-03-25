

import React from 'react';


//import HelloReact from "./components/ReactComponentGroup.js";
//import Welcome from "./components/ReactComponentGroup.js";
//import WelcomeDiv from "./components/ReactComponentGroup.js";
//import JSXVariables from "./components/ReactComponentGroup.js";
import ReactComponentGroup from "./components/ReactComponentGroup.js";


// This function is a functional component that helps us split the UI into distinct parts.
// In this case, we are returning another component, <HelloReact/> from it.
function App() {
  return <ReactComponentGroup />;
}


export default App;

