import React from "react";

import "./App.css";
import Chat from "./Chat";
import Sidebrar from "./Sidebrar";
function App() {
  return (
    // BEM namning convention

    <div className="app">
      <div className="app_body">


        {/* sidebaer */}
        < Sidebrar />
        {/* chat */}
        <Chat />
      </div>


    </div>
  );
}

export default App;
