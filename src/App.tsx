import React, { useState } from "react";
import Greet from "./components/Greet";
import Counter from "./components/Counter";

import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <h2>Hello React with Ts</h2>
        <Counter />
        <Greet name="Rohit" surname="sharma">
          {/* <p>this is a children</p> */}
        </Greet>
        {/* <Greet name="Karan" surname="verma">
          <button>Action</button>
        </Greet> */}
        {/* <Greet name="arjun" surname="rai" />
        <Greet name="rahul" surname="raj" /> */}
      </div>
    </>
  );
}

export default App;
