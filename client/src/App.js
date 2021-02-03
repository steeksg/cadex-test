import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import NavbarApp from "./components/navbar/navbar";

import { Container } from "react-bootstrap";

import { useRouts } from "./routes";

function App() {
  const routes = useRouts();

  return (
    <div className="App">
      <NavbarApp />
      <Container>
        <Router>{routes}</Router>
      </Container>
    </div>
  );
}

export default App;
