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
      <Router>
        <NavbarApp />
        <Container className="d-flex justify-content-center">
          {routes}
        </Container>
      </Router>
    </div>
  );
}

export default App;
