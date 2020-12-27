import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import NavbarApp from "./components/navbar/navbar";

import { useRouts } from "./routes";

function App() {
  const routes = useRouts();

  return (
    <div className="App">
      <NavbarApp />
      <div className="container">
        <Router>{routes}</Router>
      </div>
    </div>
  );
}

export default App;
