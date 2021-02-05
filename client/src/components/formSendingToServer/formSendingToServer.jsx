import React, { Component } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";

class FormSendingToServer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      length: 15,
      width: 20,
      height: 25,
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    const port = process.env.PORT || 9000;

    const hostLink =
      process.env.NODE_ENV === "production"
        ? "https://cadex-test.herokuapp.com"
        : `http://localhost:${port}`;

    try {
      fetch(
        `${hostLink}/triangle/cube?length=${this.state.length}&width=${this.state.width}&height=${this.state.height}`
      )
        .then((response) => response.json())
        .then((response) => this.handleReceivedData(response));
    } catch (error) {
      console.log("Error response server!");
    }

    if (!!event) event.preventDefault();
  };

  handleReceivedData = (data) => {
    this.props.handleReceivedData(data);
  };

  componentDidMount() {
    this.handleSubmit();
  }

  render() {
    return (
      <div className="formContainer">
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Form.Group
              as={Col}
              className="col-12 col-sm-4 col-lg-3 d-flex flex-row align-items-center"
            >
              <Col className="col-md-3 col-4 pl-0 mr-1">
                <Form.Label className="mr-3 my-auto">Length:</Form.Label>
              </Col>
              <Col className="col-md-9 col-8 pr-0">
                <Form.Control
                  type="text"
                  name="length"
                  value={this.state.length}
                  onChange={this.handleChange}
                  className="ml-auto"
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Col}
              className="col-12 col-sm-4 col-lg-3 d-flex flex-row justify-content-between align-items-center"
            >
              <Col className="col-md-3 col-4 pl-0 mr-1">
                <Form.Label className="mr-3 my-auto">Width:</Form.Label>
              </Col>
              <Col className="col-md-9 col-8 pr-0">
                <Form.Control
                  type="text"
                  name="width"
                  value={this.state.width}
                  onChange={this.handleChange}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Col}
              className="col-12 col-sm-4 col-lg-3 d-flex flex-row justify-content-between align-items-center"
            >
              <Col className="col-md-3 col-4 pl-0 mr-1">
                <Form.Label className="mr-3 my-auto">Height:</Form.Label>
              </Col>
              <Col className="col-md-9 col-8 pr-0">
                <Form.Control
                  type="text"
                  name="height"
                  value={this.state.height}
                  onChange={this.handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Col}
              className="col-12 col-lg-3 d-flex flex-col align-items-end"
            >
              <Button type="submit" className="w-100">
                Send data to server
              </Button>
            </Form.Group>
          </Row>
        </Form>
      </div>
    );
  }
}
export default FormSendingToServer;
