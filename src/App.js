

import React from 'react';


import ReactComponentGroup from "./components/ReactComponentGroup.js";


// a functional system that allows for the user interface application to be divided into (composed by) 
// multiple distinct parts/components that are defined with JavaScript functions; and the 
// parts/components can be (and usually are) composed of multiple other functional parts/components.
function App() {
  return <ReactComponentGroup />;
}


export default App;

