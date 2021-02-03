import React from "react";
import Card from "react-bootstrap/Card";

export const InfoPage = () => {
  return (
    <Card className="mt-3">
      <Card.Header>Test task for CADEX</Card.Header>
      <Card.Body>
        <Card.Title>
          Create a simple client-server web application (including front-end and
          back-end) which can display a simple 3D box in a 3D view.
        </Card.Title>
          <Card.Text>The application should provide the following functionality:</Card.Text>
          <Card.Text>1. This should be a single page application (SPA).</Card.Text>
          <Card.Text>
            2. The user should enter parameters (box length, width and height)
            via client.
          </Card.Text>
          <Card.Text>
            3. The client should communicate with the server and transfer the
            data to the server.
          </Card.Text>
          <Card.Text>
            4. Triangulation of the box (i.e. a set of triangles to be used for
            display) must be computed on a server* and passed back to the
            client.
          </Card.Text>
          <Card.Text>
            5. The client should display computed triangulation in a 3D view
            using WebGL (e.g. with the help of three.js library).
          </Card.Text>
          <Card.Text>Author: steeksg</Card.Text>
          <Card.Text>Email: andrei792@mail.ru</Card.Text>
          <Card.Text>
            Github project:
            <a href="https://github.com/steeksg/cadex-test">cadex-test</a>
          </Card.Text>
      </Card.Body>
    </Card>
  );
};
