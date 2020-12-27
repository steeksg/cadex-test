import React from "react";
import Card from "react-bootstrap/Card";

export const InfoPage = () => {
  return (
    <Card>
      <Card.Header>Test task for CADEX</Card.Header>
      <Card.Body>
        <Card.Title>
          Create a simple client-server web application (including front-end and
          back-end) which can display a simple 3D box in a 3D view.
        </Card.Title>
        <Card.Text>
          <p>The application should provide the following functionality:</p>{" "}
          <p>1. This should be a single page application (SPA).</p>{" "}
          <p>
            2. The user should enter parameters (box length, width and height)
            via client.
          </p>{" "}
          <p>
            3. The client should communicate with the server and transfer the
            data to the server.
          </p>{" "}
          <p>
            4. Triangulation of the box (i.e. a set of triangles to be used for
            display) must be computed on a server* and passed back to the
            client.
          </p>{" "}
          <p>
            5. The client should display computed triangulation in a 3D view
            using WebGL (e.g. with the help of three.js library).
          </p>
          <p>Autor: steeksg</p>
          <p>Email: andrei792@mail.ru</p>
          <p>Github project: <a href="https://github.com/">cadex-test</a></p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
